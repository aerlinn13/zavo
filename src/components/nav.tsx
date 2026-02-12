import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#market", label: "Market" },
  { href: "#bottlenecks", label: "Bottlenecks" },
  { href: "#solution", label: "Solution" },
  { href: "#traction", label: "Traction" },
  { href: "#pos-demo", label: "Demo" },
  { href: "#agents", label: "Greg" },
  { href: "#theo", label: "Theo" },
  { href: "#maria", label: "Maria" },
  { href: "#ideas", label: "Ideas" },
  { href: "#why-me", label: "Why Me" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight whitespace-nowrap"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Zavo — Product Engineer
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1">
          {links.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                {link.label}
              </a>
            </Button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(true)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-[2px] bg-foreground" />
          <span className="block w-5 h-[2px] bg-foreground" />
          <span className="block w-5 h-[2px] bg-foreground" />
        </button>
      </div>

      {/* Mobile Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-2 mt-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Sheet>
    </nav>
  );
}
