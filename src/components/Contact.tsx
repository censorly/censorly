
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gradient-to-br from-black via-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 shadow-2xl">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white text-lg">Name *</Label>
              <Input 
                id="name"
                type="text" 
                name="Name" 
                placeholder="David Johnson"
                required
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-lg">Email *</Label>
              <Input 
                id="email"
                type="email" 
                name="Email" 
                placeholder="example@mail.com"
                required
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="project" className="text-white text-lg">Project Name</Label>
            <Input 
              id="project"
              type="text" 
              name="Project Name" 
              placeholder="Ex. Promptique"
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="help" className="text-white text-lg">What are you looking to do? *</Label>
              <Select name="Help" required>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-white">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="scan">Scan my repo</SelectItem>
                  <SelectItem value="pricing">Learn about pricing</SelectItem>
                  <SelectItem value="team">Request team plan</SelectItem>
                  <SelectItem value="general">General question</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-white text-lg">What's your role? *</Label>
              <Select name="Role" required>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-white">
                  <SelectValue placeholder="Select Your Role" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="cto">CTO/Founder</SelectItem>
                  <SelectItem value="security">Security Engineer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details" className="text-white text-lg">Project Details</Label>
            <Textarea 
              id="details"
              name="Project Details" 
              placeholder="Let us know what you're working on or how we can help."
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white min-h-[120px]"
            />
          </div>

          <div className="space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-white text-black hover:bg-gray-200 border border-white rounded-lg py-3 text-lg font-medium transition-colors"
            >
              Submit
            </Button>
            <p className="text-gray-300 text-center text-sm">
              We will contact you within 24 business hours.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
