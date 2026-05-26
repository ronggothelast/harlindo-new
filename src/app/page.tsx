import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Clients } from "@/components/Clients";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="overflow-x-hidden w-full">
        <Hero />
        <Services />
        <Pricing />
        <Process />
        <Clients />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
