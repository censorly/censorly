
const About = () => {
  return (
    <section className="py-32 relative bg-black overflow-hidden min-h-screen" id="about">
      <div className="max-w-7xl mx-auto px-6 relative z-10 h-full">
        <div className="flex flex-col items-center justify-center mb-32 min-h-[80vh]">
          <div className="space-y-8 flex flex-col justify-center items-center text-center">
            <div className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-lg mb-8 w-fit">
              <span className="text-white text-sm font-medium tracking-wider">ABOUT US</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white leading-tight max-w-4xl">
              Building the Future of Application Security
            </h2>
            
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl">
              VibeSec was born from a simple belief: every developer deserves access to enterprise-grade security tools. 
              We're a team of security engineers and developers who got tired of seeing great code shipped with preventable vulnerabilities. 
              Our platform combines cutting-edge AI with battle-tested security scanning to give you the confidence to ship faster and safer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
