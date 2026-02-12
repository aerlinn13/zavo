import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

const pillars = [
  {
    title: "Payments",
    items: [
      "Integrated card-present and card-not-present processing",
      "Real-time transaction monitoring and reporting",
      "Automated reconciliation and settlement",
      "Multi-location payment management",
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="4" stroke="white" strokeWidth="2" />
        <path d="M4 16h32" stroke="white" strokeWidth="2" />
        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="1.5" opacity="0.3" className="animate-[pillarRipple_2s_ease-in-out_infinite]" />
        <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1" opacity="0.15" className="animate-[pillarRipple_2s_ease-in-out_infinite_0.5s]" />
      </svg>
    ),
  },
  {
    title: "POS",
    items: [
      "Intuitive touchscreen ordering interface",
      "Menu management with real-time updates",
      "Table management and floor plans",
      "Kitchen display system integration",
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="4" stroke="white" strokeWidth="2" />
        <rect x="10" y="12" width="8" height="4" rx="1" fill="white" opacity="0.6" className="animate-[menuShuffle_3s_ease-in-out_infinite]" />
        <rect x="10" y="19" width="12" height="4" rx="1" fill="white" opacity="0.4" className="animate-[menuShuffle_3s_ease-in-out_infinite_0.3s]" />
        <rect x="10" y="26" width="6" height="4" rx="1" fill="white" opacity="0.2" className="animate-[menuShuffle_3s_ease-in-out_infinite_0.6s]" />
      </svg>
    ),
  },
  {
    title: "AI Agents",
    items: [
      "Automated inventory forecasting and reordering",
      "Smart upsell and combo recommendations",
      "Revenue optimization insights in real-time",
      "Autonomous scheduling and labor cost management",
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="3" fill="white" className="animate-[aiPulse_2s_ease-in-out_infinite]" />
        <circle cx="12" cy="12" r="2" fill="white" opacity="0.5" className="animate-[aiNodePulse_2s_ease-in-out_infinite]" />
        <circle cx="28" cy="12" r="2" fill="white" opacity="0.5" className="animate-[aiNodePulse_2s_ease-in-out_infinite_0.5s]" />
        <circle cx="12" cy="28" r="2" fill="white" opacity="0.5" className="animate-[aiNodePulse_2s_ease-in-out_infinite_1s]" />
        <circle cx="28" cy="28" r="2" fill="white" opacity="0.5" className="animate-[aiNodePulse_2s_ease-in-out_infinite_1.5s]" />
        <line x1="20" y1="20" x2="12" y2="12" stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="20" x2="28" y2="12" stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="20" x2="12" y2="28" stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="20" x2="28" y2="28" stroke="white" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
];

export function Solution() {
  return (
    <section id="solution" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-14">
            One platform. Payments. POS. AI agents.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" id="pillar-grid">
          {pillars.map((pillar) => (
            <FadeIn key={pillar.title}>
              <Card className="overflow-hidden hover:-translate-y-1 transition-transform border-border">
                <div className="p-8 md:p-10 flex flex-col gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                </div>
                <div className="px-8 md:px-10 pb-8 md:pb-10">
                  <ul className="space-y-1">
                    {pillar.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-4 relative">
                        <span className="absolute left-0 text-primary">&rarr;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
