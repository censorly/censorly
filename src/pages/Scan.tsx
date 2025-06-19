
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const [githubUrl, setGithubUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const handleGithubScan = async () => {
    if (!githubUrl) return;
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      console.log("Scanning GitHub repo:", githubUrl);
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsScanning(true);
      // Simulate file processing
      setTimeout(() => {
        setIsScanning(false);
        console.log("Processing file:", file.name);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effect similar to Hero */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
      </div>
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-gray-300 hover:text-white hover:bg-white/10 mr-4 shine-effect shiny-border"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold glow-text">Scan Your Code</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* AI Badge similar to Hero */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full shiny-border animate-fade-in">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <span className="text-sm text-white glow-text">🛡️ AI-Powered Security Analysis</span>
            </div>
          </div>

          <Tabs defaultValue="github" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 glass-effect border border-white/20 shiny-border">
              <TabsTrigger 
                value="github" 
                className="data-[state=active]:glass-effect data-[state=active]:text-white text-gray-400 glow-text transition-all duration-300"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Repository
              </TabsTrigger>
              <TabsTrigger 
                value="upload" 
                className="data-[state=active]:glass-effect data-[state=active]:text-white text-gray-400 glow-text transition-all duration-300"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Zip File
              </TabsTrigger>
            </TabsList>

            <TabsContent value="github">
              <Card className="glass-effect border border-white/20 backdrop-blur-sm shiny-border">
                <CardHeader>
                  <CardTitle className="text-white glow-text">Scan GitHub Repository</CardTitle>
                  <CardDescription className="text-gray-300">
                    Enter your GitHub repository URL to scan for vulnerabilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300 glow-text">Repository URL</label>
                    <Input
                      placeholder="https://github.com/username/repository"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      className="glass-effect border border-white/20 text-white placeholder-gray-400 focus:border-white/40 transition-all duration-300"
                    />
                  </div>
                  <Button 
                    onClick={handleGithubScan}
                    disabled={!githubUrl || isScanning}
                    className="w-full shine-effect glass-effect border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] shiny-border glow-text"
                  >
                    {isScanning ? "🔍 Scanning..." : "🔍 Scan Repository"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upload">
              <Card className="glass-effect border border-white/20 backdrop-blur-sm shiny-border">
                <CardHeader>
                  <CardTitle className="text-white glow-text">Upload Zip File</CardTitle>
                  <CardDescription className="text-gray-300">
                    Upload a zip file containing your source code for security analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center hover:border-white/50 transition-all duration-300 glass-effect shiny-border">
                    <Upload className="mx-auto h-12 w-12 text-gray-300 mb-4 animate-pulse" />
                    <label className="cursor-pointer">
                      <span className="text-lg text-gray-300 hover:text-white glow-text transition-all duration-200">
                        Click to upload or drag and drop
                      </span>
                      <input
                        type="file"
                        accept=".zip"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-sm text-gray-400 mt-2">ZIP files up to 50MB</p>
                  </div>
                  {isScanning && (
                    <div className="text-center glass-effect border border-white/20 rounded-lg p-4 shiny-border">
                      <div className="text-white glow-text mb-2">🔄 Processing your code...</div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full animate-pulse w-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full border border-white/20 shiny-border">
              <span className="text-gray-300 glow-text">🔒 Your code is processed securely and never stored permanently</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
