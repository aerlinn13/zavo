import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto text-center">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight max-w-[600px] mx-auto mb-12"
            style={{
              background: "linear-gradient(90deg, hsl(var(--foreground)), #6366f1, #2563EB, hsl(var(--foreground)))",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 6s ease infinite",
            }}
          >
            Let's build the future of restaurant tech together.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="secondary" className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="https://github.com/aerlinn13" target="_blank" rel="noopener">
                GitHub
              </a>
            </Button>
            <Button variant="secondary" className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="https://linkedin.com/in/danilchernyshev" target="_blank" rel="noopener">
                LinkedIn
              </a>
            </Button>
            <Button variant="secondary" className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="mailto:danil@chernyshev.dev">
                Email
              </a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="text-center text-lg font-medium text-muted-foreground italic mt-12">
            Zavo. The future runs itself.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
