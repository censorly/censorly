
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-semibold">VibeSec</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200">
              HOW IT WORKS
            </a>
            <a href="#why-vibesec" className="text-gray-300 hover:text-white transition-colors duration-200">
              WHY VIBESEC
            </a>
            <a href="#developers" className="text-gray-300 hover:text-white transition-colors duration-200">
              FOR DEVELOPERS
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-200">
              FAQ
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-lg opacity-60 animate-pulse" style={{ animationDuration: '3s' }}></div>
            <Button 
              variant="outline" 
              className="relative border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-200 bg-black"
            >
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
