
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
      
      {/* Clean background effects without any blur */}
      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-gradient-radial from-white/3 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.03),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-30 relative">
        {/* AI Badge - clean without blur */}
        <div className="inline-flex items-center px-4 py-2 bg-black/20 border border-white/30 rounded-full mb-8 shiny-border animate-fade-in">
          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          <span className="text-sm text-white glow-text">🛡️ Powered by AI Security Intelligence</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in glow-text">
          Find and Fix Code{" "}
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent shine-effect font-bold">
            Vulnerabilities
          </span>{" "}
          Instantly!
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
          VibeSec scans your codebase{" "}
          <span className="text-white glow-text">using AI and Semgrep</span>{" "}
          to uncover real security issues before they ship. Public or private repo? You're covered.
        </p>

        <Button 
          size="lg" 
          className="shine-effect text-white hover:bg-white/10 px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-fade-in shiny-border glow-text"
        >
          🔥 Scan My Code
        </Button>
      </div>

      {/* Floating shiny elements */}
      <div className="absolute top-20 left-10 w-20 h-20 shine-effect rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.2)]"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 shine-effect rounded-full animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.2)]"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 shine-effect rounded-full animate-pulse shadow-[0_0_25px_rgba(255,255,255,0.2)]"></div>
    </section>
  );
};

export default Hero;
