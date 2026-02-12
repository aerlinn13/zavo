import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

const cards = [
  {
    title: "Vendor Lock-In",
    stat: "2.99% + $0.15",
    statLabel: "per transaction, non-negotiable",
    items: [
      "Proprietary hardware you can't take with you",
      "Forced payment processing at inflated rates",
      "Add-ons that double your monthly bill",
      "Early termination fees in the thousands",
    ],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="14" y="8" width="20" height="28" rx="4" stroke="#ef4444" strokeWidth="2" />
        <path d="M24 28v4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" stroke="#ef4444" strokeWidth="2" />
        <path d="M20 8V6a4 4 0 0 1 8 0v2" stroke="#ef4444" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Fragile Infrastructure",
    stat: "$5,000",
    statLabel: "lost per minute of downtime",
    items: [
      "On-premise systems with single points of failure",
      "Outdated code that freezes during peak hours",
      "No offline fallback when cloud goes down",
      "32% of operators cite reliability as top challenge",
    ],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 6L4 42h40L24 6z" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M24 20v10" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="35" r="1.5" fill="#ef4444" />
      </svg>
    ),
  },
  {
    title: "Data Silos",
    stat: "50%",
    statLabel: "of execs lack real-time cross-location data",
    items: [
      "Menus, loyalty, inventory on separate platforms",
      "Manual reconciliation across payment sources",
      "No unified view of operations",
      "Limited APIs block third-party innovation",
    ],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="12" cy="24" r="4" stroke="#ef4444" strokeWidth="2" />
        <circle cx="36" cy="24" r="4" stroke="#ef4444" strokeWidth="2" />
        <circle cx="24" cy="12" r="4" stroke="#ef4444" strokeWidth="2" />
        <circle cx="24" cy="36" r="4" stroke="#ef4444" strokeWidth="2" />
        <path d="M16 24h4M28 24h4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
        <path d="M24 16v4M24 28v4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
      </svg>
    ),
  },
];

export function Bottlenecks() {
  return (
    <section id="bottlenecks" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-4">
            Under the hood, it's worse than you think
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-muted-foreground mb-12">
            The technical debt every legacy POS provider is hiding.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <FadeIn key={card.title}>
              <Card className="p-8 md:p-10 border-t-2 border-t-destructive hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 flex items-center justify-center mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <div className="text-4xl font-bold text-destructive leading-tight tracking-tight">
                  {card.stat}
                </div>
                <div className="text-sm text-muted-foreground mb-6">{card.statLabel}</div>
                <ul className="space-y-1">
                  {card.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-4 relative">
                      <span className="absolute left-0 text-destructive">&rarr;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="text-center text-lg font-medium text-muted-foreground italic">
            These aren't growing pains. They're architectural failures.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
