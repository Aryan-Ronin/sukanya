import { Upload, FileText, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"

export default function NotesUploaderPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main>
        {/* Header */}
        <section className="py-16 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700">
                Core Feature
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Notes Uploader</h1>
              <p className="text-xl text-gray-400">
                Upload, digitize, and enhance your study notes with AI-powered processing. Transform handwritten notes
                into searchable, organized digital content.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-900 border border-gray-700">
                <TabsTrigger value="upload" className="data-[state=active]:bg-gray-800">
                  Upload
                </TabsTrigger>
                <TabsTrigger value="library" className="data-[state=active]:bg-gray-800">
                  Library
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-gray-800">
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upload">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Upload Area */}
                  <Card className="bg-gray-900 border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <Upload className="w-5 h-5 mr-2" />
                        Upload Files
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Drag and drop your files or click to browse
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 text-center hover:border-gray-500 transition-colors cursor-pointer bg-gray-800/50">
                        <Upload className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                        <p className="text-lg font-medium text-white mb-2">Drop your files here</p>
                        <p className="text-sm text-gray-400 mb-6">Supports PDF, DOCX, TXT, JPG, PNG</p>
                        <Button className="bg-white text-black hover:bg-gray-100">Choose Files</Button>
                      </div>

                      <div className="mt-8 space-y-4">
                        <div>
                          <Label htmlFor="note-title" className="text-white">
                            Note Title
                          </Label>
                          <Input
                            id="note-title"
                            placeholder="Enter a title for your note..."
                            className="mt-2 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                          />
                        </div>

                        <div>
                          <Label htmlFor="note-subject" className="text-white">
                            Subject
                          </Label>
                          <Input
                            id="note-subject"
                            placeholder="E.g., Mathematics, History, Physics..."
                            className="mt-2 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Processing Options */}
                  <div className="space-y-6">
                    <Card className="bg-gray-900 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">AI Processing</CardTitle>
                        <CardDescription className="text-gray-400">
                          Choose how you want your notes to be enhanced
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <input
                            type="checkbox"
                            id="summarize"
                            className="rounded border-gray-600 text-white focus:ring-white h-4 w-4"
                            defaultChecked
                          />
                          <div className="flex-1">
                            <label htmlFor="summarize" className="font-medium text-white">
                              Auto-summarize
                            </label>
                            <p className="text-sm text-gray-400">Generate concise summaries</p>
                          </div>
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            AI
                          </Badge>
                        </div>

                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <input
                            type="checkbox"
                            id="extract-key-points"
                            className="rounded border-gray-600 text-white focus:ring-white h-4 w-4"
                            defaultChecked
                          />
                          <div className="flex-1">
                            <label htmlFor="extract-key-points" className="font-medium text-white">
                              Extract key points
                            </label>
                            <p className="text-sm text-gray-400">Identify important concepts</p>
                          </div>
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                            Smart
                          </Badge>
                        </div>

                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <input
                            type="checkbox"
                            id="generate-quiz"
                            className="rounded border-gray-600 text-white focus:ring-white h-4 w-4"
                          />
                          <div className="flex-1">
                            <label htmlFor="generate-quiz" className="font-medium text-white">
                              Generate quizzes
                            </label>
                            <p className="text-sm text-gray-400">Create practice questions</p>
                          </div>
                          <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                            Pro
                          </Badge>
                        </div>

                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <input
                            type="checkbox"
                            id="grammar-check"
                            className="rounded border-gray-600 text-white focus:ring-white h-4 w-4"
                            defaultChecked
                          />
                          <div className="flex-1">
                            <label htmlFor="grammar-check" className="font-medium text-white">
                              Grammar check
                            </label>
                            <p className="text-sm text-gray-400">Improve clarity and correctness</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">Tags</CardTitle>
                        <CardDescription className="text-gray-400">Organize your notes with tags</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Input
                          placeholder="Add tags separated by commas..."
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 mb-4"
                        />
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-600">
                            midterm
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-600">
                            chapter-3
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-600">
                            important
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-dashed border-gray-600 text-gray-400 hover:bg-gray-800 cursor-pointer"
                          >
                            + Add tag
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Button className="w-full bg-white text-black hover:bg-gray-100 py-6 text-lg">
                      <Zap className="mr-2 h-5 w-5" />
                      Process & Upload
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="library">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Notes Library</CardTitle>
                    <CardDescription className="text-gray-400">
                      Access and manage all your uploaded notes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-16">
                      <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-white mb-2">No notes yet</h3>
                      <p className="text-gray-400 mb-6">Upload your first notes to get started</p>
                      <Button className="bg-white text-black hover:bg-gray-100">Upload Notes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Upload Settings</CardTitle>
                    <CardDescription className="text-gray-400">
                      Configure your preferences for note uploads
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Default Processing</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <div>
                            <label className="font-medium text-white">Auto-summarize notes</label>
                            <p className="text-sm text-gray-400">Automatically generate summaries</p>
                          </div>
                          <input type="checkbox" className="toggle" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <div>
                            <label className="font-medium text-white">Extract key points</label>
                            <p className="text-sm text-gray-400">Identify important concepts</p>
                          </div>
                          <input type="checkbox" className="toggle" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <div>
                            <label className="font-medium text-white">Grammar check</label>
                            <p className="text-sm text-gray-400">Improve clarity and correctness</p>
                          </div>
                          <input type="checkbox" className="toggle" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Storage</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <div>
                            <label className="font-medium text-white">Save original files</label>
                            <p className="text-sm text-gray-400">Keep original uploads</p>
                          </div>
                          <input type="checkbox" className="toggle" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <div>
                            <label className="font-medium text-white">Auto-organize by subject</label>
                            <p className="text-sm text-gray-400">Automatically categorize notes</p>
                          </div>
                          <input type="checkbox" className="toggle" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <Button className="bg-white text-black hover:bg-gray-100">Save Settings</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}
