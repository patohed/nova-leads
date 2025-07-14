import SimpleHeader from "@/components/layout/SimpleHeader";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SimpleHeader />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollIndicator />
    </div>
  );
}
