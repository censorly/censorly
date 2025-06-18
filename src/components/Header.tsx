
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
            <a href="#how-it-works" className="text-gray-300 hover:text-white hover:glow-text transition-all duration-200 shiny-border px-3 py-1 rounded">
              HOW IT WORKS
            </a>
            <a href="#why-vibesec" className="text-gray-300 hover:text-white hover:glow-text transition-all duration-200 shiny-border px-3 py-1 rounded">
              WHY VIBESEC
            </a>
            <a href="#developers" className="text-gray-300 hover:text-white hover:glow-text transition-all duration-200 shiny-border px-3 py-1 rounded">
              FOR DEVELOPERS
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white hover:glow-text transition-all duration-200 shiny-border px-3 py-1 rounded">
              FAQ
            </a>
          </div>

          <Button 
            variant="outline" 
            className="shine-effect text-white hover:bg-white/10 hover:glow-text transition-all duration-200 shiny-border"
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
