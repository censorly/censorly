
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Github, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const CodeScan = () => {
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  const handleRepositorySubmit = async () => {
    if (!repositoryUrl.trim()) {
      toast({
        title: "Repository URL Required",
        description: "Please enter a valid repository URL",
        variant: "destructive",
      });
      return;
    }

    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan Started",
        description: "Your repository is being analyzed for security vulnerabilities",
      });
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === "application/zip" || file.name.endsWith(".zip")) {
        setSelectedFile(file);
        toast({
          title: "File Selected",
          description: `${file.name} is ready for upload`,
        });
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please select a ZIP file",
          variant: "destructive",
        });
      }
    }
  };

  const handleFileSubmit = async () => {
    if (!selectedFile) {
      toast({
        title: "No File Selected",
        description: "Please select a ZIP file to upload",
        variant: "destructive",
      });
      return;
    }

    setIsScanning(true);
    // Simulate file processing
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan Started",
        description: "Your project files are being analyzed for security vulnerabilities",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
      
      <div className="relative z-10">
        <Header />
        
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6 glow-text">
                Scan Your Code
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Upload your project or provide a repository URL to analyze your code for security vulnerabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Repository URL Section */}
              <div className="glass-effect p-8 rounded-lg border border-white/20">
                <div className="flex items-center mb-6">
                  <Github className="w-6 h-6 mr-3 text-blue-400" />
                  <h2 className="text-2xl font-semibold">Repository URL</h2>
                </div>
                
                <div className="space-y-4">
                  <Input
                    type="url"
                    placeholder="https://github.com/username/repository"
                    value={repositoryUrl}
                    onChange={(e) => setRepositoryUrl(e.target.value)}
                    className="bg-black/50 border-white/30 text-white placeholder-gray-400"
                  />
                  
                  <Button
                    onClick={handleRepositorySubmit}
                    disabled={isScanning}
                    className="w-full shine-effect bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Link className="w-4 h-4 mr-2" />
                    {isScanning ? "Scanning..." : "Scan Repository"}
                  </Button>
                </div>
              </div>

              {/* File Upload Section */}
              <div className="glass-effect p-8 rounded-lg border border-white/20">
                <div className="flex items-center mb-6">
                  <Upload className="w-6 h-6 mr-3 text-green-400" />
                  <h2 className="text-2xl font-semibold">Upload ZIP File</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".zip"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-300">
                        {selectedFile ? selectedFile.name : "Click to select a ZIP file"}
                      </p>
                    </label>
                  </div>
                  
                  <Button
                    onClick={handleFileSubmit}
                    disabled={isScanning}
                    className="w-full shine-effect bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {isScanning ? "Scanning..." : "Scan ZIP File"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center">
              <div className="glass-effect p-6 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Supported Formats</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <h4 className="font-medium text-white mb-2">Repository URLs</h4>
                    <ul className="text-sm space-y-1">
                      <li>• GitHub repositories</li>
                      <li>• GitLab repositories</li>
                      <li>• Bitbucket repositories</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">File Uploads</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ZIP archives only</li>
                      <li>• Maximum size: 100MB</li>
                      <li>• Source code projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeScan;
