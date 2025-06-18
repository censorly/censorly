
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 glass-effect rounded-full mb-6 shiny-border">
            <span className="w-2 h-2 bg-white rounded-full mr-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span className="text-white text-sm font-medium glow-text">Contact</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch With the{" "}
            <span className="text-gray-400">VibeSec Team</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're ready to integrate secure code scanning or just have questions, 
            we're here to help. Expect a response within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Name *</Label>
                  <Input 
                    id="name"
                    placeholder="David Johnson"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email *</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="project" className="text-white mb-2 block">Project Name</Label>
                <Input 
                  id="project"
                  placeholder="Ex: Promptique"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="looking" className="text-white mb-2 block">What are you looking to do?*</Label>
                  <select className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-blue-500 focus:outline-none">
                    <option>General question</option>
                    <option>Security consultation</option>
                    <option>Partnership inquiry</option>
                    <option>Technical support</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="role" className="text-white mb-2 block">What's your role?*</Label>
                  <select className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-blue-500 focus:outline-none">
                    <option>Select Your Range</option>
                    <option>Developer</option>
                    <option>Security Engineer</option>
                    <option>CTO/Tech Lead</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="details" className="text-white mb-2 block">Project Details</Label>
                <textarea 
                  id="details"
                  rows={4}
                  placeholder="Let us know what you're working on or how we can help."
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 text-lg rounded-lg transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
