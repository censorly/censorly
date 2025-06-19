import React from 'react';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleScanClick = () => {
    navigate('/scan');
  };

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              Secure Your Code with VibeSec
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Effortlessly scan your code for vulnerabilities and protect your
              applications from potential threats.
            </p>
            <button 
              onClick={handleScanClick}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shine-effect"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔥</span>
                <span className="text-lg">Scan My Code</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img
              src="/hero-image.png"
              alt="Code Scanning Illustration"
              className="rounded-lg shadow-xl hero-image-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
