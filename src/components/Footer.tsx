const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          decoding="async" 
          width="1234" 
          height="1184" 
          sizes="514px" 
          srcSet="https://framerusercontent.com/images/8m44OJaQZacoxjF34H8lk3UVzUk.png?scale-down-to=512 512w,https://framerusercontent.com/images/8m44OJaQZacoxjF34H8lk3UVzUk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/8m44OJaQZacoxjF34H8lk3UVzUk.png 1234w" 
          src="https://framerusercontent.com/images/8m44OJaQZacoxjF34H8lk3UVzUk.png?scale-down-to=1024" 
          alt="background image" 
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">VibeSec</h3>
            <p className="text-gray-400 text-sm mb-4">
              help@vibesec.app ↗
            </p>
            <p className="text-gray-400 text-xs">
              © 2025 VibeSec. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">HOW IT WORKS</a></li>
              <li><a href="#why-vibesec" className="text-gray-400 hover:text-white transition-colors">WHY VIBESEC</a></li>
              <li><a href="#developers" className="text-gray-400 hover:text-white transition-colors">FOR DEVELOPERS</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Social Media</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">X</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
