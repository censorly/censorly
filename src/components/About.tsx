
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 glass-effect rounded-full mb-6 shiny-border">
            <span className="w-2 h-2 bg-white rounded-full mr-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span className="text-white text-sm font-medium glow-text">About us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Building the Future of{" "}
            <span className="text-gray-400">Secure AI Development</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            VibeSec is an AI-native platform that scans your code for real vulnerabilities, not false alarms. 
            We help developers catch critical issues before they ship so you can move fast without breaking things.
          </p>
        </div>

        {/* Logo Conveyor System */}
        <div className="relative mb-16 overflow-hidden max-w-xl mx-auto">
          <div className="flex animate-[scroll_240s_linear_infinite] gap-12 items-center">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300"
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

        {/* Three Info Boxes Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Real Vulnerability Scanning */}
          <div 
            className="rounded-xl w-full border border-gray-700"
            style={{
              background: "linear-gradient(rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)"
            }}
          >
            <div 
              className="rounded-xl p-8"
              style={{
                background: "radial-gradient(50% 50% at 20.2% 14.9%, rgb(21, 23, 30) 0%, rgb(0, 0, 0) 100%)"
              }}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white">
                    <path d="M24 4L32 8V20C32 30 24 42 24 42S16 30 16 20V8L24 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M20 22L22 24L28 18" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Real Vulnerability Scanning</h3>
                  <p className="text-gray-300">
                    We don't just lint your code we audit it. VibeSec runs smart scans tailored to your stack, 
                    uncovering high-risk vulnerabilities with surgical precision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI-Powered Security Reports */}
          <div 
            className="rounded-xl w-full border border-gray-700"
            style={{
              background: "linear-gradient(rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)"
            }}
          >
            <div 
              className="rounded-xl p-8"
              style={{
                background: "radial-gradient(50% 50% at 20.2% 14.9%, rgb(21, 23, 30) 0%, rgb(0, 0, 0) 100%)"
              }}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white">
                    <rect x="8" y="12" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="12" y="8" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="28" y="8" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="16" cy="24" r="2" fill="currentColor"/>
                    <circle cx="32" cy="24" r="2" fill="currentColor"/>
                    <path d="M20 32C20 30 22 28 24 28C26 28 28 30 28 32" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">AI-Powered Security Reports</h3>
                  <p className="text-gray-300">
                    Each scan is followed by a human-readable AI-generated report no security team needed. 
                    Learn what's wrong, why it matters, and how to fix it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Private & Public Repo Support */}
          <div 
            className="rounded-xl w-full border border-gray-700"
            style={{
              background: "linear-gradient(rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)"
            }}
          >
            <div 
              className="rounded-xl p-8"
              style={{
                background: "radial-gradient(50% 50% at 20.2% 14.9%, rgb(21, 23, 30) 0%, rgb(0, 0, 0) 100%)"
              }}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white">
                    <path d="M24 4C12.95 4 4 12.95 4 24C4 33.15 9.85 41.05 18.05 43.2C19.05 43.4 19.4 42.8 19.4 42.25V38.85C13.35 40.05 12.2 36.05 12.2 36.05C11.3 33.7 10 33.1 10 33.1C8.25 31.85 10.15 31.9 10.15 31.9C12.1 32.05 13.1 33.95 13.1 33.95C14.8 37.05 17.65 36.2 19.5 35.45C19.7 34.15 20.25 33.3 20.85 32.6C16.2 31.85 11.3 30.05 11.3 22.45C11.3 20.25 12.05 18.45 13.15 17.05C12.95 16.35 12.2 14.2 13.35 11.4C13.35 11.4 14.95 10.85 19.4 13.8C20.85 13.4 22.45 13.2 24 13.2C25.55 13.2 27.15 13.4 28.6 13.8C33.05 10.85 34.65 11.4 34.65 11.4C35.8 14.2 35.05 16.35 34.85 17.05C35.95 18.45 36.7 20.25 36.7 22.45C36.7 30.05 31.8 31.85 27.15 32.6C27.9 33.25 28.6 34.55 28.6 36.55V42.25C28.6 42.8 28.95 43.4 29.95 43.2C38.15 41.05 44 33.15 44 24C44 12.95 35.05 4 24 4Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Private & Public Repo Support</h3>
                  <p className="text-gray-300">
                    Scan both public and private GitHub repos using your token. No setup, no agents. 
                    Just connect and scan securely in seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
