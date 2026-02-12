import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";

const capabilities = [
  "Real-time P&L tracking across all locations",
  "Automated daily cash flow forecasting",
  "Tax-ready reconciliation and reporting",
  "Cost anomaly detection and margin alerts",
];

const actions = [
  {
    trigger: "[Tuesday 6 AM]",
    action: "Runs weekly margin analysis",
    result: "Flags food cost rose 3.2%, suggests renegotiating supplier",
  },
  {
    trigger: "[End of shift]",
    action: "Auto-reconciles card payments vs POS totals",
    result: "Identifies £12.40 discrepancy",
  },
];

const liveInsight =
  "Revenue is up 12% this week, but labour costs grew 18%. Consider shifting one Tuesday shift to flex staffing.";

export function Agents() {
  return (
    <section id="agents" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 border-0 mb-5">
            Finance AI Agent
          </Badge>
        </FadeIn>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-4">
            Meet Greg. Your CFO that never sleeps.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-muted-foreground mb-12">
            An autonomous finance agent that tracks every pound, flags every
            anomaly, and keeps your margins healthy &mdash; 24/7.
          </p>
        </FadeIn>

        {/* Split layout: image left, content right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <FadeIn>
            <img
              src="/greg.png"
              alt="Greg — Finance AI Agent at a desk with financial dashboards"
              className="w-full rounded-2xl object-cover border-t-4 border-emerald-500 shadow-xl"
            />
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.15}>
            <div>
              {/* Name + badge */}
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold">Greg</h3>
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 border-0 text-[10px]">
                  Finance AI Agent
                </Badge>
              </div>

              {/* Tagline */}
              <p className="text-sm text-muted-foreground italic mb-6">
                &ldquo;Your CFO that never sleeps.&rdquo;
              </p>

              {/* Capabilities */}
              <ul className="space-y-1.5 mb-8">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="text-sm text-muted-foreground leading-relaxed pl-5 relative"
                  >
                    <span className="absolute left-0 text-emerald-500">
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
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-lg">
                📊
              </div>
              <h4 className="text-lg font-semibold">Greg in action</h4>
            </div>

            {/* Action log entries */}
            <div className="space-y-4 font-mono text-sm">
              {actions.map((action, j) => (
                <div key={j}>
                  <div className="flex flex-wrap gap-x-2">
                    <span className="text-emerald-500">$</span>
                    <span className="text-muted-foreground">
                      {action.trigger}
                    </span>
                    <span className="text-foreground">{action.action}</span>
                  </div>
                  <div className="ml-4 mt-1 text-emerald-500">
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
            Always on. Always learning. Always working for your bottom line.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
