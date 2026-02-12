import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

const connectors = [
  {
    connects: "payments",
    label: "Zavo Payments",
    title: "Fintech & Payments",
    text: "4+ years at 10x Banking shipping credit cards, fees, rewards for Chase UK, Citi, and Nationwide — serving 2.5M+ customers under PCI and FCA compliance.",
  },
  {
    connects: "pos",
    label: "Zavo POS",
    title: "Restaurant Tech",
    text: "Led delivery of a white-label ordering platform at Zonal serving 800+ UK restaurants with integrated payments, menu management, and real-time order tracking.",
  },
  {
    connects: "ai",
    label: "Zavo AI Agents",
    title: "AI & Product",
    text: "Built saelind, an LLM-powered coding assistant. Created the IF Method, an open-source product framework used for structured decision-making.",
  },
];

const timeline = [
  {
    date: "2021 – 2025",
    title: "Senior Software Engineer",
    company: "10x Banking · London",
    desc: "Built and shipped credit card platforms for Chase UK, Citi, and Nationwide. Delivered fees, rewards, and real-time transaction processing for 2.5M+ customers.",
  },
  {
    date: "2018 – 2019",
    title: "Senior Software Engineer",
    company: "Zonal · Stafford",
    desc: "Led delivery of a white-label web ordering platform serving 800+ restaurants. Achieved 50% faster page loads and 70% smaller JavaScript bundles.",
  },
  {
    date: "Ongoing",
    title: "Founder",
    company: "Independent Projects",
    desc: "Created the IF Method, saelind (LLM coding assistant), and multiple published iOS/Android apps.",
  },
];

export function WhyMe() {
  const [active, setActive] = useState<string | null>(null);

  const handleConnectorClick = (connects: string) => {
    const wasActive = active === connects;
    setActive(wasActive ? null : connects);

    if (!wasActive) {
      const pillar = document.querySelector(`#pillar-grid`);
      if (pillar) {
        const cards = pillar.querySelectorAll("[class*='Card']");
        cards.forEach((c) => {
          (c as HTMLElement).style.outline = "";
        });
      }
    }
  };

  return (
    <section id="why-me" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-14">
            I've been building this exact stack for 7 years.
          </h2>
        </FadeIn>

        {/* Photo + name */}
        <FadeIn>
          <div className="flex items-center gap-6 mb-12">
            <img
              src="/photo.jpg"
              alt="Danil Chernyshev"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-top"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Danil Chernyshev</h3>
              <p className="text-base text-muted-foreground">Product Engineer</p>
            </div>
          </div>
        </FadeIn>

        {/* Connector cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {connectors.map((c) => (
            <FadeIn key={c.connects}>
              <Card
                className={`p-8 md:p-10 cursor-pointer hover:-translate-y-1 transition-all border-border ${
                  active === c.connects ? "border-primary" : ""
                }`}
                onClick={() => handleConnectorClick(c.connects)}
              >
                <span className="text-xs font-medium text-primary uppercase tracking-widest block mb-4">
                  {c.label}
                </span>
                <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Timeline */}
        <FadeIn>
          <div className="relative pl-10">
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-border" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.date}
                className="relative pb-8 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div
                  className={`absolute -left-10 top-2 w-4 h-4 rounded-full border-[3px] ${
                    i === 0
                      ? "bg-primary border-primary"
                      : "bg-foreground border-border"
                  }`}
                />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  {item.date}
                </span>
                <h3 className="text-xl font-semibold mt-1 mb-0.5">{item.title}</h3>
                <p className="text-base text-muted-foreground mb-2">{item.company}</p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-[600px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
