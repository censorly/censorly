
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect border-b border-white/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 shine-effect rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm glow-text">V</span>
            </div>
            <span className="text-xl font-semibold glow-text">VibeSec</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-3 py-1 rounded cursor-pointer"
            >
              HOW IT WORKS
            </button>
            <button 
              onClick={() => scrollToSection('why-vibesec')}
              className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-3 py-1 rounded cursor-pointer"
            >
              WHY VIBESEC
            </button>
            <button 
              onClick={() => scrollToSection('developers')}
              className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-3 py-1 rounded cursor-pointer"
            >
              FOR DEVELOPERS
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-3 py-1 rounded cursor-pointer"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-3 py-1 rounded cursor-pointer"
            >
              CONTACT
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
