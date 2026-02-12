import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";

const capabilities = [
  "Predictive inventory forecasting based on sales + weather + events",
  "Automatic purchase order generation to suppliers",
  "Food waste reduction through demand-matched prep",
  "Real-time stock alerts before items run out",
];

const actions = [
  {
    trigger: "[Rain forecast + football match]",
    action: "Adjusts Friday prep",
    result: "Orders 40% more soup, reduces salad prep 25%",
  },
  {
    trigger: "[Stock below threshold]",
    action: "Auto-sends PO",
    result: "Chicken breast reordered 2 days before running out",
  },
];

const liveInsight =
  "Tomato prices up 22% from your supplier. Alternative supplier Grovelands can fulfill at last week\u2019s rate.";

export function Theo() {
  return (
    <section id="theo" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 border-0 mb-5">
            Ops AI Agent
          </Badge>
        </FadeIn>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-4">
            Meet Theo. Never run out. Never over-order.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-muted-foreground mb-12">
            An autonomous ops agent that forecasts demand, orders ahead, and
            adapts to weather and events &mdash; so you never waste and never
            run short.
          </p>
        </FadeIn>

        {/* Split layout: image left, content right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <FadeIn>
            <img
              src="/theo.png"
              alt="Theo — Ops AI Agent in a warehouse with clipboard and barcode scanner"
              className="w-full rounded-2xl object-cover border-t-4 border-amber-500 shadow-xl"
            />
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.15}>
            <div>
              {/* Name + badge */}
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold">Theo</h3>
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 border-0 text-[10px]">
                  Ops AI Agent
                </Badge>
              </div>

              {/* Tagline */}
              <p className="text-sm text-muted-foreground italic mb-6">
                &ldquo;Never run out. Never over-order.&rdquo;
              </p>

              {/* Capabilities */}
              <ul className="space-y-1.5 mb-8">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="text-sm text-muted-foreground leading-relaxed pl-5 relative"
                  >
                    <span className="absolute left-0 text-amber-500">
                      &rarr;
                    </span>
                    {cap}
                  </li>
                ))}
              </ul>

              {/* Live Insight */}
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                    Live Insight
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {liveInsight}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Terminal panel */}
        <FadeIn>
          <div className="bg-[hsl(240_20%_8%)] rounded-2xl border border-border p-8 md:p-10 mt-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-lg">
                📦
              </div>
              <h4 className="text-lg font-semibold">Theo in action</h4>
            </div>

            {/* Action log entries */}
            <div className="space-y-4 font-mono text-sm">
              {actions.map((action, j) => (
                <div key={j}>
                  <div className="flex flex-wrap gap-x-2">
                    <span className="text-amber-500">$</span>
                    <span className="text-muted-foreground">
                      {action.trigger}
                    </span>
                    <span className="text-foreground">{action.action}</span>
                  </div>
                  <div className="ml-4 mt-1 text-amber-500">
                    &rarr; {action.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Closing tagline */}
        <FadeIn>
          <p className="text-center text-lg font-medium text-muted-foreground italic mt-12">
            Always watching. Always adapting. Always keeping your shelves stocked.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
