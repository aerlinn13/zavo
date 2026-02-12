import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";

const fragments = [
  { icon: "💳", label: "Card Reader" },
  { icon: "🖥️", label: "POS" },
  { icon: "📦", label: "Inventory" },
  { icon: "⭐", label: "Loyalty" },
  { icon: "📅", label: "Scheduling" },
  { icon: "📊", label: "Reporting" },
  { icon: "🚗", label: "Delivery" },
  { icon: "📱", label: "Social" },
];

export function Problem() {
  const [unified, setUnified] = useState(false);

  return (
    <section id="problem" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-14">
            Restaurants are drowning in fragmented tools
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Fragment grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-10 transition-all duration-500 ${
              unified ? "opacity-0 scale-[0.8] absolute pointer-events-none" : ""
            }`}
          >
            {fragments.map((f) => (
              <FadeIn key={f.label}>
                <Card className="p-5 md:p-7 text-center cursor-default hover:-translate-y-1 hover:shadow-lg transition-all group relative border-border">
                  <span className="text-3xl block mb-2">{f.icon}</span>
                  <span className="text-sm font-medium text-muted-foreground">{f.label}</span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-secondary text-foreground text-xs py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Different vendor. Different login. Different data.
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Unify button */}
          {!unified && (
            <FadeIn className="text-center mb-10">
              <Button
                variant="secondary"
                className="bg-foreground text-background hover:bg-foreground/90"
                onClick={() => setUnified(true)}
              >
                Unify
              </Button>
            </FadeIn>
          )}

          {/* Unified card */}
          {unified && (
            <div className="text-center animate-[unifyAppear_0.6s_ease_forwards]">
              <Card className="inline-block border-2 border-primary p-12 md:px-20 text-center">
                <span className="block text-4xl font-bold tracking-tight mb-2">zavo</span>
                <span className="text-sm text-muted-foreground">One platform. Everything connected.</span>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
