
const Features = () => {
  const steps = [
    {
      icon: "🔗",
      title: "Connect Your Repo",
      description: "Securely connect your public or private GitHub repository in seconds using a token.",
    },
    {
      icon: "⚡",
      title: "Run an AI-Powered Scan",
      description: "We analyze your code using static analysis and AI to detect exposed secrets, insecure patterns, and known vulnerabilities.",
    },
    {
      icon: "📄",
      title: "Get an Instant Report",
      description: "Download a detailed security report with risk levels and fix instructions — built for developers, not compliance officers.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* GitHub Connection Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl">🐙</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect Your Repo</h3>
                  <p className="text-gray-400 text-sm">
                    Securely connect your public or private GitHub repository in seconds using a token.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <span className="text-xl">{step.icon}</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                <span className="text-yellow-400 text-sm font-medium">WHY VIBESEC</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Transformative Solutions{" "}
                <span className="text-gray-400">Across the Spectrum</span>
              </h2>
              
              <p className="text-gray-300 mb-8">
                Our range of solutions tailored to meet the unique needs of diverse industries, 
                driving transformation across the entire spectrum.
              </p>

              <div className="space-y-6">
                <div className="shine-effect rounded-2xl p-6 border border-gray-600">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-gray-700">
                      <img 
                        src="/lovable-uploads/ad6f60c2-388b-4548-b4d4-a34ee2b7d7dd.png" 
                        alt="Connect GitHub Repo" 
                        className="w-6 h-6"
                      />
                    </div>
                    <h4 className="text-lg font-semibold">Connect Your GitHub Repo</h4>
                  </div>
                  <p className="text-gray-400">
                    Securely connect your public or private GitHub repository in seconds.
                  </p>
                </div>

                <div className="shine-effect rounded-2xl p-6 border border-gray-600">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-gray-700">
                      <img 
                        src="/lovable-uploads/11dd4044-3e1b-401a-9726-eb38e139a4b2.png" 
                        alt="AI-Powered Scan" 
                        className="w-6 h-6"
                      />
                    </div>
                    <h4 className="text-lg font-semibold">Run an AI-Powered Scan</h4>
                  </div>
                  <p className="text-gray-400">
                    Our AI scans your codebase for security risks, bad practices, and known vulnerabilities.
                  </p>
                </div>

                <div className="shine-effect rounded-2xl p-6 border border-gray-600">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-gray-700">
                      <img 
                        src="/lovable-uploads/468111a1-3a56-484e-b838-4afe9c9f3646.png" 
                        alt="Security Report" 
                        className="w-6 h-6"
                      />
                    </div>
                    <h4 className="text-lg font-semibold">Get a Downloadable Security Report</h4>
                  </div>
                  <p className="text-gray-400">
                    Receive a detailed, actionable vulnerability report generated by AI.
                  </p>
                </div>

                <div className="shine-effect rounded-2xl p-6 border border-gray-600">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-gray-700">
                      <img 
                        src="/lovable-uploads/37dc48d1-baba-41ac-8403-0bbd17f841d3.png" 
                        alt="One-Click Fix" 
                        className="w-6 h-6"
                      />
                    </div>
                    <h4 className="text-lg font-semibold">FUTURE: One-Click Fix (Pro Tier)</h4>
                  </div>
                  <p className="text-gray-400">
                    Upgrade to VibeSec Pro and automatically patch common vulnerabilities with a single click.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-black rounded-2xl p-8">
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/26ea5041-8925-4176-b641-dba8fa534fa7.png" 
                    alt="Transformative Solutions"
                    className="w-full h-full object-cover rounded-lg grayscale brightness-110 contrast-125 saturate-0 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
