import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";

const capabilities = [
  "Automated loyalty programs with personalised reward tiers",
  "Smart campaign triggers based on visit frequency and spend patterns",
  "Birthday and anniversary offers that drive return visits",
  "Churn prediction that re-engages lapsed guests before they're lost",
];

const actions = [
  {
    trigger: "[Friday 9 AM]",
    action: "Launches weekend campaign",
    result: "Sends 340 personalised offers, projected 12% redemption rate",
  },
  {
    trigger: "[Guest #1042 — 5th visit]",
    action: "Triggers loyalty milestone",
    result: "Awards Gold tier + complimentary dessert on next visit",
  },
];

const liveInsight =
  "Sarah M. hasn\u2019t visited in 23 days (avg. gap is 10). Sending her a \u2018We miss you\u2019 offer: 15% off her usual \u2014 the grilled salmon bowl.";

export function Maria() {
  return (
    <section id="maria" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <Badge className="bg-gradient-to-r from-rose-500 to-pink-600 border-0 mb-5">
            Customer AI Agent
          </Badge>
        </FadeIn>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-4">
            Meet Maria. Turn every guest into a regular.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-muted-foreground mb-12">
            An autonomous customer agent that builds loyalty, runs personalised
            campaigns, and re-engages lapsed guests &mdash; so your tables stay
            full and your guests keep coming back.
          </p>
        </FadeIn>

        {/* Split layout: image left, content right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <FadeIn>
            <img
              src="/maria.png"
              alt="Maria — Customer AI Agent greeting guests with a loyalty dashboard"
              className="w-full rounded-2xl object-cover border-t-4 border-rose-500 shadow-xl"
            />
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.15}>
            <div>
              {/* Name + badge */}
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold">Maria</h3>
                <Badge className="bg-gradient-to-r from-rose-500 to-pink-600 border-0 text-[10px]">
                  Customer AI Agent
                </Badge>
              </div>

              {/* Tagline */}
              <p className="text-sm text-muted-foreground italic mb-6">
                &ldquo;Turn every guest into a regular.&rdquo;
              </p>

              {/* Capabilities */}
              <ul className="space-y-1.5 mb-8">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="text-sm text-muted-foreground leading-relaxed pl-5 relative"
                  >
                    <span className="absolute left-0 text-rose-500">
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
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose-500">
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-lg">
                💌
              </div>
              <h4 className="text-lg font-semibold">Maria in action</h4>
            </div>

            {/* Action log entries */}
            <div className="space-y-4 font-mono text-sm">
              {actions.map((action, j) => (
                <div key={j}>
                  <div className="flex flex-wrap gap-x-2">
                    <span className="text-rose-500">$</span>
                    <span className="text-muted-foreground">
                      {action.trigger}
                    </span>
                    <span className="text-foreground">{action.action}</span>
                  </div>
                  <div className="ml-4 mt-1 text-rose-500">
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
            Every guest remembered. Every visit personalised. Every regular earned.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
