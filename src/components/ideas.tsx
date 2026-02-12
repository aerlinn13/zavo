import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";

const ideas = [
  {
    title: "White-Label Order & Pay",
    summary: "AI-generated branded ordering for every restaurant — no dev team needed.",
    items: [
      "AI auto-builds a branded online ordering page from the restaurant's menu data",
      "Customers scan a QR code, browse, order, and pay — all Zavo-powered",
      "No third-party delivery app fees (Deliveroo, UberEats take 15-30%)",
      "Direct customer relationship stays with the restaurant",
    ],
  },
  {
    title: "Multi-Location Command Center",
    summary: "One dashboard to monitor every location, every agent, every metric — in real time.",
    items: [
      "Unified view of Greg, Theo, and Maria\u2019s outputs across all branches",
      "Compare performance metrics location-by-location",
      "Centralised alerting for anomalies across the chain",
      "Roll out menu changes, pricing, and promotions fleet-wide in one click",
    ],
  },
  {
    title: "Embedded Revenue Financing",
    summary: "Instant working capital powered by your Zavo transaction data — no banks, no paperwork.",
    items: [
      "AI analyses transaction history to pre-approve credit lines",
      "Revenue-based repayment adjusts to daily sales volume",
      "Fund new equipment, renovations, or expansion on demand",
      "Greg monitors repayment health and alerts on cash flow risk",
    ],
  },
];

export function Ideas() {
  return (
    <section id="ideas" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-4">
            Ideas I'd bring to the table
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-muted-foreground mb-12">
            Product directions I'm excited to explore at Zavo.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ideas.map((idea, i) => (
            <motion.div
              key={idea.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="overflow-hidden hover:-translate-y-1 transition-transform border-border border-l-2 border-l-indigo-500 h-full">
                <div className="p-8 md:p-10">
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 border-0 mb-4">
                    Concept
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{idea.summary}</p>
                </div>
                <div className="px-8 md:px-10 pb-8 md:pb-10">
                  <ul className="space-y-1">
                    {idea.items.map((item, j) => (
                      <motion.li
                        key={j}
                        className="text-sm text-muted-foreground leading-relaxed pl-4 relative"
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.15 + 0.6 + j * 0.08 }}
                      >
                        <span className="absolute left-0 text-purple-500">&rarr;</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
