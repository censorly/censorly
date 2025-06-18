
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section className="py-20 relative" id="how-it-works">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Video Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <div className="text-6xl text-white/80 z-10">🤖</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                    <span className="text-2xl">▶️</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 text-white font-bold text-4xl">AI</div>
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

        {/* How It Works Steps */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            <span className="text-yellow-400 text-sm font-medium">HOW IT WORKS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How VibeSec Works</h2>
          <p className="text-xl text-gray-300">
            From repo to report, VibeSec secures your code with AI-powered scanning, detailed reports, 
            and clear next steps. Here's how we help you build safer software fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
