
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does VibeSec scan my code?",
      answer: "VibeSec uses a combination of static analysis tools like Semgrep and AI-powered vulnerability detection to scan your codebase for security issues, exposed secrets, and known vulnerabilities."
    },
    {
      question: "Do you support private repositories?",
      answer: "Yes! VibeSec supports both public and private GitHub repositories. Simply connect using your GitHub token and we'll securely scan your private repos."
    },
    {
      question: "What do I get in the Basic plan?",
      answer: "The Basic plan includes AI-powered vulnerability scanning, detailed security reports, support for both public and private repos, and access to our developer community."
    },
    {
      question: "What does the AI report include?",
      answer: "Our AI-generated reports include detailed vulnerability descriptions, risk levels, potential impact analysis, and step-by-step fix instructions written for developers, not compliance officers."
    },
    {
      question: "Can VibeSec automatically fix code?",
      answer: "Currently, VibeSec provides detailed reports with fix instructions. Our Pro tier (coming soon) will include one-click automatic fixes for common vulnerabilities."
    },
    {
      question: "How secure is my data?",
      answer: "We take security seriously. Your code is scanned using secure tokens, we don't store your source code, and all data transmission is encrypted. We only retain scan results and reports."
    },
  ];

  return (
    <section className="py-20 relative" id="faq">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 glass-effect rounded-full mb-6 shiny-border">
            <span className="w-2 h-2 bg-white rounded-full mr-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span className="text-white text-sm font-medium glow-text">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions{" "}
            <span className="text-gray-400">Developers Ask</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here's what developers ask us before their first scan.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-gray-700 rounded-lg px-6 bg-black/40 data-[state=open]:border-gray-600"
                >
                  <AccordionTrigger className="text-left text-white hover:text-gray-300 py-6 [&>svg]:hidden">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-lg font-medium">{faq.question}</span>
                      <Plus className="h-6 w-6 shrink-0 transition-transform duration-200 group-data-[state=open]/trigger:rotate-45" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 pt-0">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-12 border border-gray-800">
            <p className="text-xl text-gray-300 mb-8">
              Built for devs. Backed by security. VibeSec helps you ship secure code without slowing down.
            </p>
            <div className="w-full h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
              <div className="text-8xl opacity-50">🌐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
