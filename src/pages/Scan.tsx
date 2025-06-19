
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
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-gray-300 hover:text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold glow-text">Scan Your Code</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="github" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-900 border border-gray-700">
              <TabsTrigger 
                value="github" 
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Repository
              </TabsTrigger>
              <TabsTrigger 
                value="upload" 
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Zip File
              </TabsTrigger>
            </TabsList>

            <TabsContent value="github">
              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Scan GitHub Repository</CardTitle>
                  <CardDescription className="text-gray-400">
                    Enter your GitHub repository URL to scan for vulnerabilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Repository URL</label>
                    <Input
                      placeholder="https://github.com/username/repository"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      className="bg-black border-gray-600 text-white placeholder-gray-500 focus:border-gray-500"
                    />
                  </div>
                  <Button 
                    onClick={handleGithubScan}
                    disabled={!githubUrl || isScanning}
                    className="w-full bg-white/10 border border-gray-600 text-white hover:bg-white/20 hover:border-gray-500"
                  >
                    {isScanning ? "Scanning..." : "🔍 Scan Repository"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upload">
              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Upload Zip File</CardTitle>
                  <CardDescription className="text-gray-400">
                    Upload a zip file containing your source code for security analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-gray-500 transition-colors">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <label className="cursor-pointer">
                      <span className="text-lg text-gray-300 hover:text-white">
                        Click to upload or drag and drop
                      </span>
                      <input
                        type="file"
                        accept=".zip"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-2">ZIP files up to 50MB</p>
                  </div>
                  {isScanning && (
                    <div className="text-center">
                      <div className="text-white">Processing your code...</div>
                      <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full animate-pulse w-1/2"></div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center text-gray-400">
            <p>🔒 Your code is processed securely and never stored permanently</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
