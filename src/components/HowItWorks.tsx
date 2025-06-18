
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section className="py-20 relative" id="how-it-works">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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
      </div>
    </section>
  );
};

export default HowItWorks;
