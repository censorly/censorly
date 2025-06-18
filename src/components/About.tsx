

const About = () => {
  return (
    <section className="py-20 relative bg-black overflow-hidden" id="why-vibesec">
      {/* Spline 3D iframe - embedded directly in background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/lightningbulb-Xv8SlaybSvDoERbwo2QRyfJD/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full pointer-events-none opacity-60 scale-125"
          style={{ 
            border: 'none',
            background: 'transparent',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 glass-effect rounded-full mb-6 shiny-border">
            <span className="w-2 h-2 bg-white rounded-full mr-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span className="text-white text-sm font-medium glow-text">About us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 glow-text">
            Building the Future of{" "}
            <span className="text-white glow-text">Secure AI Development</span>
          </h2>
          
          <p className="text-white text-lg md:text-xl font-bold leading-relaxed max-w-4xl mx-auto mb-16 glow-text">
            VibeSec is an AI-native platform that scans your code for real vulnerabilities, not false alarms. 
            We help developers catch critical issues before they ship so you can move fast without breaking things.
          </p>
        </div>

        {/* Three Info Boxes Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Real Vulnerability Scanning */}
          <div className="relative bg-black border border-gray-800 rounded-xl p-8 shine-effect overflow-hidden">
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
          <div className="relative bg-black border border-gray-800 rounded-xl p-8 shine-effect overflow-hidden">
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
          <div className="relative bg-black border border-gray-800 rounded-xl p-8 shine-effect overflow-hidden">
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
      </div>
    </section>
  );
};

export default About;

