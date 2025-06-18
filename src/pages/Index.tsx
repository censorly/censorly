
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <HowItWorks />
        <Features />
        <Developers />
        <Contact />
        <FAQ />
        
        {/* Spline 3D Animation positioned above footer */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-64 z-0 -top-32">
            <iframe 
              src='https://my.spline.design/free3danimatedabstractshapes-U358KNxTJA4ZMF7ngyWBvAnW/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="pointer-events-none"
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;

