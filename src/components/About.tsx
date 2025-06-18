
const About = () => {
  return (
    <>
      {/* Original About Section */}
      <section className="py-20 relative bg-black overflow-hidden" id="about">
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
        </div>
      </section>

      {/* Why VibeSec Section */}
      <section className="py-20 relative bg-black overflow-hidden" id="why-vibesec">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
          <video 
            src="https://cdn.pixabay.com/video/2024/03/12/203987-923133879_large.mp4"
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <div className="inline-block px-4 py-2 border border-gray-600 rounded-lg mb-8">
                <span className="text-white text-sm font-medium">WHY VIBESEC</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                We're not just finding bugs. We're securing the future of code one repo at a time.
              </h2>
            </div>

            {/* Right Side - Mission Text */}
            <div className="text-left">
              <p className="text-gray-300 text-lg leading-relaxed">
                Our mission is to democratize access to real application security. In a 
                world where AI speeds up development, VibeSec ensures that security 
                isn't left behind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
