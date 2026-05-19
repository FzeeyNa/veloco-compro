import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VisiMisi from "@/components/sections/VisiMisi";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Ecosystem from "@/components/sections/Ecosystem";
import WhyUs from "@/components/sections/WhyUs";
import MarketplaceTeaser from "@/components/sections/MarketplaceTeaser";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <VisiMisi />
        <Services />
        <Portfolio />
        <Ecosystem />
        <WhyUs />
        <MarketplaceTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
