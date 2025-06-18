
const About = () => {
  const logos = [
    { name: "GitHub", src: "/lovable-uploads/e2aee412-68cf-4f14-a910-f5a28455a7ed.png" },
    { name: "GitLab", src: "/lovable-uploads/95189eba-4851-4685-87d5-d02f36c6b3e2.png" },
    { name: "Google", src: "/lovable-uploads/6dbd2742-409d-4838-9ecf-8a6357f96caa.png" },
    { name: "InVision", src: "/lovable-uploads/31f7d1c8-270b-475d-bf66-43ae0c957233.png" },
    { name: "Apple", src: "/lovable-uploads/60ee3ac3-7840-4f56-96a2-22c6e2aa0371.png" },
    { name: "Polygon", src: "/lovable-uploads/a2e80c6d-ed43-4302-8d87-6bab587fcf79.png" },
    { name: "X", src: "/lovable-uploads/0b6363cf-db7f-44d0-a674-68adcd572d85.png" },
  ];

  return (
    <section className="py-20 relative bg-black" id="why-vibesec">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 glass-effect rounded-full mb-6 shiny-border">
            <span className="w-2 h-2 bg-white rounded-full mr-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span className="text-white text-sm font-medium glow-text">About us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Building the Future of{" "}
            <span className="text-gray-400">Secure AI Development</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            VibeSec is an AI-native platform that scans your code for real vulnerabilities, not false alarms. 
            We help developers catch critical issues before they ship so you can move fast without breaking things.
          </p>
        </div>

        {/* Logo Conveyor System */}
        <div className="relative mb-16 overflow-hidden max-w-2xl mx-auto">
          <div className="flex animate-[scroll_120s_linear_infinite] gap-16 items-center">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass-effect p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group shiny-border">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">🛡️</div>
            <h3 className="text-xl font-semibold mb-4 glow-text">Real Vulnerability Scanning</h3>
            <p className="text-gray-400">
              We don't just list your code; we audit it. VibeSec runs smart scans tailored to your stack, 
              uncovering high-risk vulnerabilities.
            </p>
          </div>

          <div className="glass-effect p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group shiny-border">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">🤖</div>
            <h3 className="text-xl font-semibold mb-4 glow-text">AI-Powered Security Reports</h3>
            <p className="text-gray-400">
              Each scan is followed by a human-readable AI-generated report no security team needed. 
              Learn what's wrong, why it's wrong.
            </p>
          </div>

          <div className="glass-effect p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group shiny-border">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">🔒</div>
            <h3 className="text-xl font-semibold mb-4 glow-text">Private & Public Repo Support</h3>
            <p className="text-gray-400">
              Scan both public and private GitHub repos using your token. No setup, no agents. 
              Just connect and scan securely in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
