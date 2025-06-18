
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/legendarywaves-CJXL3X56ODDzD7rkaRRqiPht/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0 w-full h-full"
          style={{ 
            minHeight: '100vh',
            border: 'none',
            outline: 'none'
          }}
          allow="autoplay; fullscreen"
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* AI Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-black/50 border border-white/30 rounded-full mb-8">
          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm text-white">🛡️ Powered by AI Security Intelligence</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Find and Fix Code{" "}
          <span className="text-white font-bold">
            Vulnerabilities
          </span>{" "}
          Instantly!
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          VibeSec scans your codebase{" "}
          <span className="text-white">using AI and Semgrep</span>{" "}
          to uncover real security issues before they ship. Public or private repo? You're covered.
        </p>

        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          🔥 Scan My Code
        </Button>
      </div>
    </section>
  );
};

export default Hero;
