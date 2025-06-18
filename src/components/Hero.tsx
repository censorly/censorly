
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        {/* AI Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full mb-8 backdrop-blur-sm border border-gray-700 animate-fade-in">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm text-gray-300">🛡️ Powered by AI Security Intelligence</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Find and Fix Code{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Vulnerabilities
          </span>{" "}
          Instantly!
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
          VibeSec scans your codebase{" "}
          <span className="text-yellow-400">using AI and Semgrep</span>{" "}
          to uncover real security issues before they ship. Public or private repo? You're covered.
        </p>

        <Button 
          size="lg" 
          className="bg-black border border-gray-600 text-white hover:bg-gray-900 px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in"
        >
          🔥 Scan My Code
        </Button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-pink-500/10 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;
