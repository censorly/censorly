import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Github, ArrowLeft, AlertTriangle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import JSZip from "jszip";

interface Vulnerability {
  id: string;
  summary: string;
}

interface Finding {
  package: string;
  version: string;
  vulns: Vulnerability[];
}

const Scan = () => {
  const [githubUrl, setGithubUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<Finding[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const scanRepoForVulns = async (repoUrl: string) => {
    setIsScanning(true);
    setError(null);
    setScanResults(null);

    try {
      // 1. Parse GitHub repo path
      const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
      if (!match) throw new Error("Invalid GitHub URL");

      const [_, owner, repo] = match;

      // 2. Get package.json contents
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/package.json`);
      if (!res.ok) throw new Error("package.json not found or repository is private");
      const data = await res.json();

      const decoded = atob(data.content);
      const pkg = JSON.parse(decoded);
      const dependencies = pkg.dependencies || {};

      if (Object.keys(dependencies).length === 0) {
        setError("No dependencies found to scan.");
        setIsScanning(false);
        return;
      }

      // 3. Scan each dependency using OSV.dev
      let findings: Finding[] = [];
      for (const [name, version] of Object.entries(dependencies)) {
        const osvRes = await fetch("https://api.osv.dev/v1/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            version: (version as string).replace(/[^0-9.]/g, ""),
            package: {
              name: name,
              ecosystem: "npm"
            }
          })
        });

        const osvData = await osvRes.json();
        if (osvData.vulns && osvData.vulns.length > 0) {
          findings.push({
            package: name,
            version: version as string,
            vulns: osvData.vulns.map((v: any) => ({
              id: v.id,
              summary: v.summary
            }))
          });
        }
      }

      setScanResults(findings);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during scanning");
    } finally {
      setIsScanning(false);
    }
  };

  const scanZipFileForVulns = async (zipFile: File) => {
    setIsScanning(true);
    setError(null);
    setScanResults(null);

    try {
      const zip = new JSZip();
      const zipContents = await zip.loadAsync(zipFile);
      
      // Look for package.json in the zip file
      const packageJsonFile = zipContents.file("package.json") || 
                             zipContents.file(/.*\/package\.json$/)[0];
      
      if (!packageJsonFile) {
        throw new Error("No package.json found in the uploaded zip file");
      }

      const packageJsonContent = await packageJsonFile.async("text");
      const pkg = JSON.parse(packageJsonContent);
      const dependencies = pkg.dependencies || {};

      if (Object.keys(dependencies).length === 0) {
        setError("No dependencies found to scan.");
        setIsScanning(false);
        return;
      }

      // Scan each dependency using OSV.dev (same logic as GitHub scanning)
      let findings: Finding[] = [];
      for (const [name, version] of Object.entries(dependencies)) {
        const osvRes = await fetch("https://api.osv.dev/v1/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            version: (version as string).replace(/[^0-9.]/g, ""),
            package: {
              name: name,
              ecosystem: "npm"
            }
          })
        });

        const osvData = await osvRes.json();
        if (osvData.vulns && osvData.vulns.length > 0) {
          findings.push({
            package: name,
            version: version as string,
            vulns: osvData.vulns.map((v: any) => ({
              id: v.id,
              summary: v.summary
            }))
          });
        }
      }

      setScanResults(findings);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during scanning");
    } finally {
      setIsScanning(false);
    }
  };

  const handleGithubScan = async () => {
    if (!githubUrl) return;
    await scanRepoForVulns(githubUrl);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.name.endsWith('.zip')) {
        setError("Please upload a .zip file");
        return;
      }
      
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        setError("File size must be less than 50MB");
        return;
      }

      await scanZipFileForVulns(file);
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
            className="text-gray-300 hover:text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold glow-text">Scan Your Code</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* AI Badge similar to Hero */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full animate-fade-in">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <span className="text-sm text-white glow-text">🛡️ AI-Powered Security Analysis</span>
            </div>
          </div>

          <Tabs defaultValue="github" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 glass-effect border border-white/20">
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

            <TabsContent value="github" className="animate-fade-in transition-all duration-500 ease-out">
              <Card className="glass-effect border border-white/20 backdrop-blur-sm">
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
                    className="w-full glass-effect border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] glow-text"
                  >
                    {isScanning ? "🔍 Scanning..." : "🔍 Scan Repository"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upload" className="animate-fade-in transition-all duration-500 ease-out">
              <Card className="glass-effect border border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white glow-text">Upload Zip File</CardTitle>
                  <CardDescription className="text-gray-300">
                    Upload a zip file containing your source code for security analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center hover:border-white/50 transition-all duration-300 glass-effect">
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
                    <div className="text-center glass-effect border border-white/20 rounded-lg p-4">
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

          {/* Results Section */}
          {(scanResults !== null || error) && (
            <div className="mt-8">
              <Card className="glass-effect border border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white glow-text flex items-center">
                    {error ? (
                      <>
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                        Scan Error
                      </>
                    ) : scanResults && scanResults.length > 0 ? (
                      <>
                        <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                        Vulnerabilities Found
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                        Scan Complete
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {error ? (
                    <div className="text-red-400 glow-text">{error}</div>
                  ) : scanResults && scanResults.length > 0 ? (
                    <div className="space-y-4">
                      {scanResults.map((finding, index) => (
                        <div key={index} className="border border-yellow-400/30 rounded-lg p-4 glass-effect">
                          <h4 className="text-yellow-400 font-bold mb-2 glow-text">
                            {finding.package}@{finding.version}
                          </h4>
                          <ul className="space-y-2">
                            {finding.vulns.map((vuln, vIndex) => (
                              <li key={vIndex} className="text-gray-300">
                                <span className="text-red-400 font-mono">{vuln.id}</span>: {vuln.summary}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-green-400 glow-text">✅ No known vulnerabilities found!</div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full border border-white/20">
              <span className="text-gray-300 glow-text">🔒 Your code is processed securely and never stored permanently</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
