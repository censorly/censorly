
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/legendarywaves-CJXL3X56ODDzD7rkaRRqiPht/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0 pointer-events-none"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        {/* AI Badge */}
        <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full mb-8 shiny-border animate-fade-in">
          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          <span className="text-sm text-white glow-text">🛡️ Powered by AI Security Intelligence</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in glow-text">
          Find and Fix Code{" "}
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Vulnerabilities
          </span>{" "}
          Instantly!
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          Censorly scans your codebase{" "}
          <span className="text-white glow-text">using AI and Semgrep</span>{" "}
          to uncover real security issues before they ship. Public or private repo? You're covered.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => navigate("/scan")}
            className="shine-effect bg-black border border-gray-600 text-white hover:bg-white/10 hover:border-gray-500 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-fade-in shiny-border glow-text"
          >
            🔥 Scan My Code
          </Button>
          
          <Button 
            size="lg" 
            onClick={() => navigate("/scan")}
            className="shine-effect bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-fade-in font-semibold"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
