
const About = () => {
  return (
    <section className="py-32 relative bg-black overflow-hidden min-h-screen" id="why-vibesec">
      <div className="max-w-7xl mx-auto px-6 relative z-10 h-full">
        {/* Main content layout - text only now */}
        <div className="flex flex-col items-center justify-center mb-32 min-h-[80vh]">
          {/* Mission text - centered */}
          <div className="space-y-8 flex flex-col justify-center items-center text-center">
            <div className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-lg mb-8 w-fit">
              <span className="text-white text-sm font-medium tracking-wider">WHY VIBESEC</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white leading-tight max-w-4xl">
              We're not just finding bugs. We're securing the future of code one repo at a time.
            </h2>
            
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
              Our mission is to democratize access to real application security. In a world where AI speeds up development, VibeSec ensures that security isn't left behind.
            </p>
          </div>
        </div>

        {/* Spline 3D design - horizontal between sections */}
        <div className="relative h-[40vh] mb-20">
          <iframe 
            src='https://my.spline.design/retrofuturisticcircuitloop-ob9FcX0SVBUGYIkmLMLWHiqu/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full rounded-lg"
            style={{ 
              border: 'none',
              background: 'transparent',
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* Three Info Boxes Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Real Vulnerability Scanning */}
          <div className="relative bg-black border border-gray-800 rounded-xl p-8 overflow-hidden">
            <div className="flex flex-col items-start gap-4 relative z-10">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/fbd2e930-22b2-438f-af18-7f11671da0ae.png" 
                  alt="Shield icon"
                  className="w-10 h-10 object-contain filter brightness-100"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Real Vulnerability Scanning</h3>
                <p className="text-gray-400 leading-relaxed">
                  We don't just lint your code we audit it. VibeSec runs smart scans tailored to your stack, 
                  uncovering high-risk vulnerabilities with surgical precision.
                </p>
              </div>
            </div>
          </div>

          {/* AI-Powered Security Reports */}
          <div className="relative bg-black border border-gray-800 rounded-xl p-8 overflow-hidden">
            <div className="flex flex-col items-start gap-4 relative z-10">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/745e0770-6fc2-4bb5-945c-6b1eb5b248d5.png" 
                  alt="Robot icon"
                  className="w-10 h-10 object-contain filter brightness-100"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">AI-Powered Security Reports</h3>
                <p className="text-gray-400 leading-relaxed">
                  Each scan is followed by a human-readable AI-generated report no security team needed. 
                  Learn what's wrong, why it matters, and how to fix it.
                </p>
              </div>
            </div>
          </div>

          {/* Private & Public Repo Support */}
          <div className="relative bg-black border border-gray-800 rounded-xl p-8 overflow-hidden">
            <div className="flex flex-col items-start gap-4 relative z-10">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e6ac2eaa-9729-4800-a90e-2db574084b08.png" 
                  alt="GitHub icon"
                  className="w-10 h-10 object-contain filter brightness-100"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Private & Public Repo Support</h3>
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
