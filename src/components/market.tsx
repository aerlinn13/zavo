import { useState } from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { FadeIn } from "@/components/fade-in";

const columns = ["toast", "square", "clover", "lightspeed", "zavo"] as const;
const columnLabels: Record<string, string> = {
  toast: "Toast",
  square: "Square",
  clover: "Clover",
  lightspeed: "Lightspeed",
  zavo: "Zavo",
};

const rows = [
  { feature: "Payments", toast: "✓", square: "✓", clover: "✓", lightspeed: "Add-on", zavo: "✓" },
  { feature: "POS System", toast: "✓", square: "✓", clover: "✓", lightspeed: "✓", zavo: "✓" },
  { feature: "AI Agents", toast: "✗", square: "✗", clover: "✗", lightspeed: "✗", zavo: "✓" },
  { feature: "Price", toast: "$$$", square: "$$", clover: "$$", lightspeed: "$$$", zavo: "$" },
  { feature: "Target", toast: "Mid-market", square: "General", clover: "SMB", lightspeed: "Enterprise", zavo: "Independent" },
];

export function Market() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="market" className="py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-tight tracking-tight mb-14">
            The POS market is massive — and ripe for disruption
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mb-10 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-left">Feature</TableHead>
                  {columns.map((col) => (
                    <TableHead
                      key={col}
                      className={`text-center transition-opacity duration-200 ${
                        col === "zavo" ? "text-primary font-bold" : ""
                      } ${hovered && hovered !== col && col !== "zavo" ? "opacity-30" : ""}`}
                      onMouseEnter={() => setHovered(col)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {columnLabels[col]}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    className="border-b border-border transition-colors hover:bg-muted/50"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                  >
                    <TableCell className="font-medium text-foreground">{row.feature}</TableCell>
                    {columns.map((col) => (
                      <TableCell
                        key={col}
                        className={`text-center transition-opacity duration-200 ${
                          col === "zavo" ? "text-primary font-semibold" : ""
                        } ${hovered && hovered !== col && col !== "zavo" ? "opacity-30" : ""}`}
                        onMouseEnter={() => setHovered(col)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        {row[col]}
                      </TableCell>
                    ))}
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="text-center text-lg font-medium text-muted-foreground italic">
            None of them have made AI the core operating system.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
