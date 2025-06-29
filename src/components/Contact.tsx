import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  project: string;
  looking: string;
  role: string;
  details: string;
}

const Contact = () => {
  const { toast } = useToast();
  const { control, handleSubmit, formState: { errors }, register } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const onError = () => {
    toast({
      title: "Please fill out this field.",
      description: "All required fields must be completed.",
      variant: "destructive",
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 glass-effect rounded-full mb-6 shiny-border">
            <span className="w-2 h-2 bg-white rounded-full mr-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span className="text-white text-sm font-medium glow-text">Contact</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ textShadow: '0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.4)' }}>
            Get in Touch With the{" "}
            <span className="text-gray-400">Censorly Team</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're ready to integrate secure code scanning or just have questions, 
            we're here to help. Expect a response within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-black border border-white/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white text-base">Name *</Label>
                  <Input 
                    id="name"
                    {...register("name", { required: true })}
                    placeholder="David Johnson"
                    className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-3 transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-base">Email *</Label>
                  <Input 
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="example@mail.com"
                    className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-3 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project" className="text-white text-base">Project Name</Label>
                <Input 
                  id="project"
                  {...register("project")}
                  placeholder="Ex: Promptique"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-3 transition-colors duration-200 shadow-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="looking" className="text-white text-base">What are you looking to do?*</Label>
                  <Controller
                    name="looking"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="bg-transparent border-0 border-b border-white/30 rounded-none text-white focus:border-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-3 data-[state=open]:border-white transition-colors duration-200">
                          <SelectValue placeholder="Select an option" className="text-gray-500" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-white/20">
                          <SelectItem value="general" className="text-white hover:bg-white/10 focus:bg-white/10">General question</SelectItem>
                          <SelectItem value="security" className="text-white hover:bg-white/10 focus:bg-white/10">Security consultation</SelectItem>
                          <SelectItem value="partnership" className="text-white hover:bg-white/10 focus:bg-white/10">Partnership inquiry</SelectItem>
                          <SelectItem value="support" className="text-white hover:bg-white/10 focus:bg-white/10">Technical support</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-white text-base">What's your role?*</Label>
                  <Controller
                    name="role"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="bg-transparent border-0 border-b border-white/30 rounded-none text-white focus:border-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-3 data-[state=open]:border-white transition-colors duration-200">
                          <SelectValue placeholder="Select Your Range" className="text-gray-500" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-white/20">
                          <SelectItem value="developer" className="text-white hover:bg-white/10 focus:bg-white/10">Developer</SelectItem>
                          <SelectItem value="security" className="text-white hover:bg-white/10 focus:bg-white/10">Security Engineer</SelectItem>
                          <SelectItem value="cto" className="text-white hover:bg-white/10 focus:bg-white/10">CTO/Tech Lead</SelectItem>
                          <SelectItem value="other" className="text-white hover:bg-white/10 focus:bg-white/10">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details" className="text-white text-base">Project Details</Label>
                <Textarea 
                  id="details"
                  rows={4}
                  {...register("details")}
                  placeholder="Let us know what you're working on or how we can help."
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-3 resize-none transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col items-center space-y-4 pt-6">
                <Button 
                  type="submit"
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-md"
                >
                  Submit
                </Button>
                <p className="text-gray-400 text-center">
                  We will contact you within 24 business hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
