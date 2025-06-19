
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CodeScan = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRepoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoUrl.trim()) {
      toast({
        title: "Repository URL required",
        description: "Please enter a valid repository URL.",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Scanning repository:", repoUrl);
    toast({
      title: "Scan initiated",
      description: "Your repository is being analyzed for security vulnerabilities.",
    });
  };

  const handleFileUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      toast({
        title: "File required",
        description: "Please select a zip file to upload.",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Uploading file:", selectedFile.name);
    toast({
      title: "Upload initiated",
      description: "Your project files are being analyzed for security vulnerabilities.",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/zip") {
      setSelectedFile(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please select a valid ZIP file.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-gray-300 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl font-bold mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.6)' }}>
            Scan Your Code
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Upload your project or connect your repository to get started with VibeSec's security analysis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="repository" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-900 border border-gray-700">
              <TabsTrigger 
                value="repository" 
                className="data-[state=active]:bg-white data-[state=active]:text-black"
              >
                <Github className="w-4 h-4 mr-2" />
                Repository URL
              </TabsTrigger>
              <TabsTrigger 
                value="upload"
                className="data-[state=active]:bg-white data-[state=active]:text-black"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload ZIP
              </TabsTrigger>
            </TabsList>

            <TabsContent value="repository" className="mt-6">
              <Card className="bg-black border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Connect Repository</CardTitle>
                  <CardDescription className="text-gray-300">
                    Enter your GitHub, GitLab, or Bitbucket repository URL to scan your code.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRepoSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="repo-url" className="text-white">Repository URL</Label>
                      <Input
                        id="repo-url"
                        type="url"
                        placeholder="https://github.com/username/repository"
                        value={repoUrl}
                        onChange={(e) => setRepoUrl(e.target.value)}
                        className="bg-transparent border-white/30 text-white placeholder-gray-500 focus:border-white"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="bg-white text-black hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Scan Repository
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upload" className="mt-6">
              <Card className="bg-black border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Upload Project</CardTitle>
                  <CardDescription className="text-gray-300">
                    Upload a ZIP file containing your project source code for security analysis.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFileUpload} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="file-upload" className="text-white">Project ZIP File</Label>
                      <div className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center hover:border-white/50 transition-colors">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <div className="space-y-2">
                          <p className="text-gray-300">
                            {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                          </p>
                          <p className="text-sm text-gray-500">ZIP files only (max 100MB)</p>
                        </div>
                        <Input
                          id="file-upload"
                          type="file"
                          accept=".zip"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-2 border-white/30 text-white hover:bg-white/10"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          Choose File
                        </Button>
                      </div>
                    </div>
                    <Button 
                      type="submit"
                      disabled={!selectedFile}
                      className="bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-50"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload & Scan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CodeScan;
