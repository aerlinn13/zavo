import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";

interface OrderItem {
  price: number;
  qty: number;
}

type Phase = "ordering" | "paying" | "approved" | "insight";

const menuItems = [
  { name: "Espresso", price: 3.2, emoji: "☕" },
  { name: "Latte", price: 4.5, emoji: "🥛" },
  { name: "Pasta", price: 12.5, emoji: "🍝" },
  { name: "Burger", price: 11.0, emoji: "🍔" },
  { name: "Salad", price: 9.5, emoji: "🥗" },
  { name: "Cake", price: 6.0, emoji: "🍰" },
];

interface PosInsight {
  agent: string;
  emoji: string;
  gradient: string;
  text: string;
}

const insights: PosInsight[] = [
  {
    agent: "Greg",
    emoji: "\u{1F4CA}",
    gradient: "from-emerald-500 to-teal-600",
    text: "Burger margins dropped 4% this week \u2014 bun supplier invoice is 18% above contract. Flagging for renegotiation.",
  },
  {
    agent: "Greg",
    emoji: "\u{1F4CA}",
    gradient: "from-emerald-500 to-teal-600",
    text: "Revenue is up 12% vs last Tuesday. Coffee + Cake combo driving \u00A33.20 higher AOV \u2014 consider extending the promo.",
  },
  {
    agent: "Theo",
    emoji: "\u{1F4E6}",
    gradient: "from-amber-500 to-orange-600",
    text: "Burger orders peak 12\u20132pm. Pre-prep 20% more patties by 11:30 to cut average wait time 40 seconds.",
  },
  {
    agent: "Theo",
    emoji: "\u{1F4E6}",
    gradient: "from-amber-500 to-orange-600",
    text: "Salad stock will run out by Thursday at current velocity. Auto-PO sent to supplier \u2014 delivery confirmed for Wednesday AM.",
  },
  {
    agent: "Maria",
    emoji: "\u{1F49C}",
    gradient: "from-violet-500 to-purple-600",
    text: "This customer orders a Latte every visit. Suggest \u201CAdd a pastry for \u00A32?\u201D \u2014 upsell converts 28% of the time.",
  },
  {
    agent: "Maria",
    emoji: "\u{1F49C}",
    gradient: "from-violet-500 to-purple-600",
    text: "15 regulars haven\u2019t visited in 10+ days. Auto-campaign queued \u2014 \u201CYour usual is on us this Friday\u201D with 34% predicted redemption.",
  },
];

export function PosDemo() {
  const [order, setOrder] = useState<Record<string, OrderItem>>({});
  const [phase, setPhase] = useState<Phase>("ordering");
  const [insight, setInsight] = useState<PosInsight | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const total = Object.values(order).reduce((sum, item) => sum + item.price * item.qty, 0);
  const hasItems = Object.keys(order).length > 0;

  const addItem = (name: string, price: number) => {
    setOrder((prev) => ({
      ...prev,
      [name]: { price, qty: (prev[name]?.qty || 0) + 1 },
    }));
  };

  const getInsight = useCallback(() => {
    const names = Object.keys(order);
    const relevant = insights.filter((i) =>
      names.some((n) => i.text.toLowerCase().includes(n.toLowerCase()))
    );
    if (relevant.length > 0) return relevant[Math.floor(Math.random() * relevant.length)];
    return insights[Math.floor(Math.random() * insights.length)];
  }, [order]);

  const launchConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    const parent = terminalRef.current;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    const colors = ["#2563EB", "#fff", "#6366f1", "#8b5cf6", "#fbbf24", "#f43f5e"];
    const particles = Array.from({ length: 80 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12 - 4,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
      decay: Math.random() * 0.015 + 0.008,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
    }));

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      let alive = false;
      particles.forEach((p) => {
        if (p.life <= 0) return;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.life -= p.decay;
        p.rotation += p.rotationSpeed;

        ctx!.save();
        ctx!.translate(p.x, p.y);
        ctx!.rotate((p.rotation * Math.PI) / 180);
        ctx!.globalAlpha = Math.max(0, p.life);
        ctx!.fillStyle = p.color;
        ctx!.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx!.restore();
      });
      if (alive) requestAnimationFrame(animate);
      else ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
    }

    animate();
  }, []);

  const handlePay = () => {
    if (!hasItems) return;
    setPhase("paying");

    setTimeout(() => {
      setPhase("approved");
      launchConfetti();

      setTimeout(() => {
        setInsight(getInsight());
        setPhase("insight");
      }, 2000);
    }, 1500);
  };

  const handleNewOrder = () => {
    setOrder({});
    setInsight(null);
    setPhase("ordering");
  };

  return (
    <section id="pos-demo" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-4">
            Interactive POS Demo
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-muted-foreground mb-12">
            Experience what Zavo's agentic POS feels like.
          </p>
        </FadeIn>

        <FadeIn>
          <div ref={terminalRef} className="bg-[hsl(240_20%_8%)] rounded-3xl overflow-hidden relative max-w-[900px] mx-auto border border-border">
            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-border">
              <span className="text-xl font-bold tracking-tight">zavo</span>
              <span className="text-xs text-primary font-medium">Terminal Ready</span>
            </div>

            {/* Body */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] min-h-[420px]">
              {/* Menu */}
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                  Menu
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {menuItems.map((item) => (
                    <button
                      key={item.name}
                      className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center gap-2 text-foreground hover:bg-secondary hover:border-muted-foreground/30 active:scale-95 transition-all cursor-pointer"
                      onClick={() => addItem(item.name, item.price)}
                    >
                      <span className="text-3xl">{item.emoji}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground">
                        £{item.price.toFixed(2)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order panel */}
              <div className="flex flex-col p-6">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                  Current Order
                </h4>
                <div className="flex-1 overflow-y-auto mb-4">
                  {!hasItems ? (
                    <p className="text-sm text-muted-foreground text-center py-10">No items yet</p>
                  ) : (
                    Object.entries(order).map(([name, item]) => (
                      <div
                        key={name}
                        className="flex justify-between items-center py-2.5 border-b border-border"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold bg-secondary w-6 h-6 rounded-md flex items-center justify-center">
                            {item.qty}
                          </span>
                          <span className="text-sm font-medium">{name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          £{(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    ))
                  )}
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center mb-4 text-lg font-semibold">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                  <Button
                    className="w-full bg-foreground text-background hover:bg-foreground/90"
                    disabled={!hasItems}
                    onClick={handlePay}
                  >
                    Pay Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Payment overlay */}
            {(phase === "paying" || phase === "approved") && (
              <div className="absolute inset-0 bg-black/95 flex items-center justify-center z-10 animate-in fade-in">
                {phase === "paying" && (
                  <div className="text-center animate-[pulse_1.5s_ease-in-out_infinite]">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto">
                      <rect x="8" y="4" width="32" height="40" rx="4" stroke="white" strokeWidth="2" />
                      <path d="M20 20c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="white" strokeWidth="2" fill="none" />
                      <path d="M16 18c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
                      <path d="M12 16c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
                    </svg>
                    <p className="text-base text-muted-foreground mt-4">Tap to pay</p>
                  </div>
                )}
                {phase === "approved" && (
                  <div className="text-center animate-[fadeScale_0.4s_ease_forwards]">
                    <svg viewBox="0 0 52 52" className="w-16 h-16 mx-auto">
                      <circle
                        cx="26" cy="26" r="25"
                        fill="none" stroke="#2563EB" strokeWidth="2"
                        style={{ strokeDasharray: 166, strokeDashoffset: 166, animation: "drawCircle 0.6s ease forwards" }}
                      />
                      <path
                        fill="none" stroke="#2563EB" strokeWidth="3" d="M14 27l8 8 16-16"
                        style={{ strokeDasharray: 48, strokeDashoffset: 48, animation: "drawCheck 0.3s ease forwards 0.4s" }}
                      />
                    </svg>
                    <p className="text-xl font-semibold mt-4">Payment Approved</p>
                    <p className="text-sm text-muted-foreground mt-1">£{total.toFixed(2)}</p>
                  </div>
                )}
              </div>
            )}

            {/* AI Insight overlay */}
            {phase === "insight" && insight && (
              <div className="absolute inset-0 bg-black/95 flex items-center justify-center z-20 animate-in fade-in">
                <div className="text-center max-w-[400px] p-10">
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <div
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${insight.gradient} flex items-center justify-center text-base`}
                    >
                      {insight.emoji}
                    </div>
                    <Badge className={`bg-gradient-to-r ${insight.gradient} border-0`}>
                      {insight.agent}
                    </Badge>
                  </div>
                  <p className="text-lg leading-relaxed mb-8">{insight.text}</p>
                  <Button
                    className="bg-foreground text-background hover:bg-foreground/90"
                    onClick={handleNewOrder}
                  >
                    New Order
                  </Button>
                </div>
              </div>
            )}

            {/* Confetti canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-30" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
