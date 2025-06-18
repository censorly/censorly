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
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter brightness-75"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Three Info Boxes Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Real Vulnerability Scanning */}
          <div className="relative bg-black border border-gray-800 rounded-xl p-8 shine-effect shiny-border overflow-hidden">
            <div className="absolute top-4 left-4 w-20 h-20 opacity-50">
              <img 
                src="/lovable-uploads/fbd2e930-22b2-438f-af18-7f11671da0ae.png" 
                alt="Shield icon"
                className="w-full h-full object-contain filter brightness-100"
              />
            </div>
            <div className="flex flex-col items-start gap-4 relative z-10">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/fbd2e930-22b2-438f-af18-7f11671da0ae.png" 
                  alt="Shield icon"
                  className="w-10 h-10 object-contain filter brightness-100"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white glow-text">Real Vulnerability Scanning</h3>
                <p className="text-gray-400 leading-relaxed">
                  We don't just lint your code we audit it. VibeSec runs smart scans tailored to your stack, 
                  uncovering high-risk vulnerabilities with surgical precision.
                </p>
              </div>
            </div>
          </div>

          {/* AI-Powered Security Reports */}
          <div className="relative bg-black border border-gray-800 rounded-xl p-8 shine-effect shiny-border overflow-hidden">
            <div className="absolute top-4 left-4 w-20 h-20 opacity-50">
              <img 
                src="/lovable-uploads/745e0770-6fc2-4bb5-945c-6b1eb5b248d5.png" 
                alt="Robot icon"
                className="w-full h-full object-contain filter brightness-100"
              />
            </div>
            <div className="flex flex-col items-start gap-4 relative z-10">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/745e0770-6fc2-4bb5-945c-6b1eb5b248d5.png" 
                  alt="Robot icon"
                  className="w-10 h-10 object-contain filter brightness-100"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white glow-text">AI-Powered Security Reports</h3>
                <p className="text-gray-400 leading-relaxed">
                  Each scan is followed by a human-readable AI-generated report no security team needed. 
                  Learn what's wrong, why it matters, and how to fix it.
                </p>
              </div>
            </div>
          </div>

          {/* Private & Public Repo Support */}
          <div className="relative bg-black border border-gray-800 rounded-xl p-8 shine-effect shiny-border overflow-hidden">
            <div className="absolute top-4 left-4 w-20 h-20 opacity-50">
              <img 
                src="/lovable-uploads/e6ac2eaa-9729-4800-a90e-2db574084b08.png" 
                alt="GitHub icon"
                className="w-full h-full object-contain filter brightness-100"
              />
            </div>
            <div className="flex flex-col items-start gap-4 relative z-10">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e6ac2eaa-9729-4800-a90e-2db574084b08.png" 
                  alt="GitHub icon"
                  className="w-10 h-10 object-contain filter brightness-100"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white glow-text">Private & Public Repo Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Scan both public and private GitHub repos using your token. No setup, no agents. 
                  Just connect and scan securely in seconds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spline 3D iframe */}
        <div className="w-full h-96 rounded-xl overflow-hidden">
          <iframe 
            src='https://my.spline.design/lightningbulb-Xv8SlaybSvDoERbwo2QRyfJD/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
