

import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      title: "Connect Your Repo",
      description: "Securely connect your public or private GitHub repository in seconds using a token.",
    },
    {
      title: "Run an AI-Powered Scan",
      description: "We analyze your code using static analysis and AI to detect exposed secrets, insecure patterns, and known vulnerabilities.",
    },
    {
      title: "Get an Instant Report",
      description: "Download a detailed security report with risk levels and fix instructions — built for developers, not compliance officers.",
    },
  ];

  return (
    <section className="py-20 relative" id="how-it-works">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* GitHub Integration Section */}
          <div className="relative">
            <div className="aspect-video rounded-lg flex flex-col items-center justify-center relative overflow-hidden p-8 bg-black">
              {/* GitHub icon */}
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/4a14155f-b17a-4c36-b9ea-574374841b43.png" 
                  alt="GitHub Logo"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 glass-effect rounded-full mb-6 shiny-border">
                <span className="w-2 h-2 bg-white rounded-full mr-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                <span className="text-white text-sm font-medium glow-text">HOW IT WORKS</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ textShadow: '0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2)' }}>
                We're not just finding bugs. We're securing the future of code one repo at a time.
              </h2>
              
              <p className="text-xl text-gray-300 mb-8" style={{ textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>
                Our mission is to democratize access to real application security. In a world where AI speeds up development, VibeSec ensures that security isn't left behind.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-full flex items-center justify-center border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] relative overflow-hidden">
                {/* Shiny overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-white" style={{ textShadow: '0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.4)' }}>{step.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

