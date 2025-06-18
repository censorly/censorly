
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
      </div>
    </section>
  );
};

export default About;
