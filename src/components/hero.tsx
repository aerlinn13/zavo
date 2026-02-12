import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { displayed, done } = useTypingEffect(
    "The future of in-person commerce is autonomous.",
    45,
    600
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#pos-demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[80vh] flex items-center pt-40 pb-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="max-w-[900px]">
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-medium leading-[1.1] tracking-tight mb-6 min-h-[1.1em]">
            <span>{displayed}</span>
            <span
              className={`font-light ${done ? "opacity-0" : "animate-[cursorBlink_0.8s_step-end_infinite]"}`}
            >
              |
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-[600px]"
            initial={{ opacity: 0, y: 10 }}
            animate={done ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            How Zavo is building the first agentic POS for restaurants — and why I want to help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={done ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button asChild>
              <a href="#pos-demo" onClick={handleClick}>
                See it in action
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
