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
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/lovable-uploads/c568ffda-2a0e-4149-ae5c-1884b91e04de.png" 
                alt="Censorly Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl font-semibold glow-text">Censorly</span>
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
              WHY CENSORLY
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
          </div>

          <Button 
            variant="outline" 
            className="shine-effect text-white hover:bg-white/10 hover:glow-text transition-all duration-200 shiny-border"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
