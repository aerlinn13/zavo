import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { useInView } from "@/hooks/use-in-view";
import { useCounter } from "@/hooks/use-counter";

const stats = [
  { target: 400, suffix: "+", label: "Customers" },
  { target: 8, label: "Team Members" },
  { target: 7, suffix: " months", label: "Since Founding" },
];

const milestones = [
  { label: "May 2025", desc: "Founded", active: true },
  { label: "Sep 2025", desc: "First 100 customers", active: true },
  { label: "YC F25", desc: "Y Combinator", active: true },
  { label: "Today", desc: "400+ businesses", active: true },
];

function StatCard({
  target,
  prefix = "",
  suffix = "",
  label,
  active,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  active: boolean;
}) {
  const value = useCounter(target, active);
  return (
    <Card className="text-center p-8 border-border">
      <span className="block text-5xl md:text-[56px] font-bold tracking-tighter leading-none mb-2">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </span>
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
        {label}
      </span>
    </Card>
  );
}

export function Traction() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section id="traction" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-14">
            From zero to 400+ businesses in months
          </h2>
        </FadeIn>

        <div ref={ref} className="grid grid-cols-3 gap-4 md:gap-6 mb-16">
          {stats.map((s) => (
            <FadeIn key={s.label}>
              <StatCard
                target={s.target}
                prefix={s.prefix}
                suffix={s.suffix}
                label={s.label}
                active={inView}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-0">
            {milestones.map((m, i) => (
              <div key={m.label} className="flex items-center">
                <div className="flex flex-col items-center gap-2 min-w-[100px]">
                  <div
                    className={`w-4 h-4 rounded-full border-[3px] transition-all ${
                      m.active
                        ? "bg-primary border-primary shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                        : "bg-muted border-border"
                    }`}
                  />
                  <span className="text-sm font-semibold">{m.label}</span>
                  <span className="text-xs text-muted-foreground">{m.desc}</span>
                </div>
                {i < milestones.length - 1 && (
                  <div className="hidden sm:block h-[2px] w-10 bg-border -mt-8" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
