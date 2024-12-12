import { Header } from "@/components/Header";
import { Hero } from "./ui/Hero";
import { Features } from "./ui/Features";
import { About } from "./ui/About";
import { Stats } from "./ui/Stats";
import { CTA } from "./ui/CTA";
import { Footer } from "./ui/Footer";

export default function Home() {
  return (
    <section className="bg-gray-200">
      <Header />
      <Hero />
      <Features />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </section>
  );
}
