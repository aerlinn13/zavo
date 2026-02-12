import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Market } from "@/components/market";
import { Bottlenecks } from "@/components/bottlenecks";
import { Traction } from "@/components/traction";
import { PosDemo } from "@/components/pos-demo";
import { Agents } from "@/components/agents";
import { Theo } from "@/components/theo";
import { Maria } from "@/components/maria";
import { WhyMe } from "@/components/why-me";
import { Contact } from "@/components/contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Market />
        <Bottlenecks />
        <Traction />
        <PosDemo />
        <Agents />
        <Theo />
        <Maria />
        <WhyMe />
        <Contact />
      </main>
    </>
  );
}
