
const About = () => {
  return (
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
  );
};

export default About;
