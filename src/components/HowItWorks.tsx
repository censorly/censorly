
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section className="py-20 relative" id="how-it-works">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* GitHub Integration Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="aspect-video bg-gray-800 rounded-lg flex flex-col items-center justify-center relative overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                
                {/* First GitHub icon */}
                <div className="relative z-10 mb-6">
                  <img 
                    src="/lovable-uploads/346f46e2-19cc-4f97-8b12-e017c99198a7.png" 
                    alt="GitHub Logo"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                
                {/* Second GitHub integration image */}
                <div className="relative z-10">
                  <img 
                    src="/lovable-uploads/cde97e5e-c1d5-4c12-9e46-f2e2ea4ff588.png" 
                    alt="Connect Your Repo"
                    className="w-64 h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              <span className="text-yellow-400 text-sm font-medium">WHY VIBESEC</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We're not just finding bugs. We're securing the future of code one repo at a time.
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Our mission is to democratize access to real application security. In a world where AI speeds up development, 
              VibeSec ensures that security isn't left behind.
            </p>

            <Button 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              WHY VIBESEC
            </Button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-black border border-gray-600 rounded-full mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
            <span className="text-yellow-400 text-sm font-medium tracking-wide">HOW IT WORKS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span 
              data-text-fill="true" 
              style={{backgroundImage: "linear-gradient(0deg, rgb(41, 41, 41) 0%, rgb(255, 255, 255) 83.7838%)"}}
              className="bg-clip-text text-transparent"
            >
              How VibeSec Works
            </span>
          </h2>
          <p 
            className="framer-text framer-styles-preset-1nsqjgg text-xl leading-relaxed font-medium" 
            data-styles-preset="q4wPL8vyB" 
            style={{textAlign: "center"} as React.CSSProperties}
          >
            From repo to report, VibeSec secures your code with AI-powered scanning, detailed reports, 
            and clear next steps. Here's how we help you build safer software fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
