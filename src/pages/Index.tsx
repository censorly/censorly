
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Developers from "@/components/Developers";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
      
      {/* Blur reveal effect at bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm z-40 pointer-events-none"></div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <HowItWorks />
        <Features />
        <Developers />
        <Contact />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
