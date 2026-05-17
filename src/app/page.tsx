import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Modules } from "@/components/Modules";
import { HowItWorks } from "@/components/HowItWorks";
import { Security } from "@/components/Security";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <ProductShowcase />
        <Modules />
        <HowItWorks />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
