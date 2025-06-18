
const About = () => {
  const logos = [
    { name: "GitHub", icon: "🐙" },
    { name: "GitLab", icon: "🦊" },
    { name: "Node.js", icon: "📗" },
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
  ];

  return (
    <section className="py-20 relative bg-black" id="why-vibesec">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 glass-effect rounded-full mb-6 shiny-border">
            <span className="w-2 h-2 bg-white rounded-full mr-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span className="text-white text-sm font-medium glow-text">About us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Building the Future of{" "}
            <span className="text-gray-400">Secure AI Development</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            VibeSec is an AI-native platform that scans your code for real vulnerabilities, not false alarms. 
            We help developers catch critical issues before they ship so you can move fast without breaking things.
          </p>

          {/* Product Hunt Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect rounded-lg mb-12 shiny-border">
            <span className="text-white font-medium mr-2 glow-text">FEATURED ON</span>
            <span className="text-white font-bold glow-text">Product Hunt</span>
            <span className="ml-2 text-gray-400">263</span>
          </div>
        </div>

        {/* Tech Logos */}
        <div className="flex justify-center items-center space-x-12 mb-16">
          {logos.map((logo, index) => (
            <div 
              key={logo.name}
              className="text-4xl hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {logo.icon}
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-effect p-8 rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group shiny-border">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">🛡️</div>
            <h3 className="text-xl font-semibold mb-4 glow-text">Real Vulnerability Scanning</h3>
            <p className="text-gray-400">
              We don't just list your code; we audit it. VibeSec runs smart scans tailored to your stack, 
              uncovering high-risk vulnerabilities.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group shiny-border">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">🤖</div>
            <h3 className="text-xl font-semibold mb-4 glow-text">AI-Powered Security Reports</h3>
            <p className="text-gray-400">
              Each scan is followed by a human-readable AI-generated report no security team needed. 
              Learn what's wrong, why it's wrong.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group shiny-border">
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
