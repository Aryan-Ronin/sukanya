import { FileText, BookOpen, MessageCircle, CheckSquare, FileQuestion, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />

      {/* Features Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700">
              Platform Features
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Everything you need to excel</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful tools designed for modern students. Upload, analyze, and optimize your learning workflow.
            </p>
          </div>

          {/* Notes Uploader Feature */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
                Core Feature
              </Badge>
              <h3 className="text-3xl font-bold mb-4">Notes Uploader</h3>
              <p className="text-lg text-gray-400 mb-6">
                Transform handwritten notes into searchable, organized digital content. Our AI-powered processing
                extracts key information, improves clarity, and generates summaries automatically.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  OCR technology for handwritten notes
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  AI-powered content enhancement
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Automatic organization and tagging
                </li>
              </ul>
              <Button className="bg-white text-black hover:bg-gray-100">
                Try Notes Uploader
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
              <div className="relative bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center space-x-2 p-3 border-b border-gray-700">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="p-6">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Notes Uploader Interface"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Goal Setter Feature */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="lg:order-2">
              <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
                Productivity
              </Badge>
              <h3 className="text-3xl font-bold mb-4">Smart Goal Setting</h3>
              <p className="text-lg text-gray-400 mb-6">
                Set SMART goals and track your academic progress with intelligent insights. Get personalized
                recommendations and milestone tracking to stay on course.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  SMART goal framework integration
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  Progress tracking and analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  Personalized milestone recommendations
                </li>
              </ul>
              <Button className="bg-white text-black hover:bg-gray-100">
                Set Your Goals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl" />
              <div className="relative bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center space-x-2 p-3 border-b border-gray-700">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="p-6">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Goal Setter Dashboard"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* AI Features Grid */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
                AI-Powered
              </Badge>
              <h3 className="text-3xl font-bold mb-4">Intelligent Study Tools</h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Leverage cutting-edge AI to enhance your learning experience with automated content generation and
                analysis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-700 p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">AI Summarizer</h4>
                <p className="text-gray-400 mb-4">
                  Transform lengthy content into concise, actionable summaries with advanced natural language
                  processing.
                </p>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 w-full">
                  Learn More
                </Button>
              </Card>

              <Card className="bg-gray-900 border-gray-700 p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">Quiz Generator</h4>
                <p className="text-gray-400 mb-4">
                  Generate custom quizzes from your notes automatically. Test knowledge retention with intelligent
                  question creation.
                </p>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 w-full">
                  Learn More
                </Button>
              </Card>

              <Card className="bg-gray-900 border-gray-700 p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">AI Companion</h4>
                <p className="text-gray-400 mb-4">
                  Your 24/7 study assistant powered by advanced language models. Get instant help and explanations.
                </p>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 w-full">
                  Learn More
                </Button>
              </Card>
            </div>
          </div>

          {/* Analytics Feature */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
                Analytics
              </Badge>
              <h3 className="text-3xl font-bold mb-4">Progress Analytics</h3>
              <p className="text-lg text-gray-400 mb-6">
                Get detailed insights into your learning patterns with comprehensive analytics. Track performance,
                identify strengths, and optimize your study strategy.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                  Weekly performance reports
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                  Learning pattern analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                  Personalized recommendations
                </li>
              </ul>
              <Button className="bg-white text-black hover:bg-gray-100">
                View Analytics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl" />
              <div className="relative bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center space-x-2 p-3 border-b border-gray-700">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="p-6">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Analytics Dashboard"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Enhancement Tools */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                Enhancement
              </Badge>
              <h3 className="text-3xl font-bold mb-4">Content Enhancement</h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Improve and optimize your study materials with intelligent correction and problem-solving tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900 border-gray-700 p-8">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <CheckSquare className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-white">Notes Corrector</h4>
                <p className="text-gray-400 mb-6">
                  Enhance your notes with advanced grammar checking, clarity improvements, and content suggestions.
                  Perfect for refining your study materials.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                    Grammar and spelling correction
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                    Clarity and readability improvements
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                    Content structure optimization
                  </li>
                </ul>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 w-full">
                  Try Corrector
                </Button>
              </Card>

              <Card className="bg-gray-900 border-gray-700 p-8">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <FileQuestion className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-white">Problem Solver</h4>
                <p className="text-gray-400 mb-6">
                  Get step-by-step solutions to complex academic problems. Upload questions and receive detailed
                  explanations and solving methodologies.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                    Step-by-step problem solving
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                    Multiple solution approaches
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                    Detailed explanations
                  </li>
                </ul>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 w-full">
                  Try Solver
                </Button>
              </Card>
            </div>
          </div>

          {/* Wellness Feature */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <Badge variant="secondary" className="mb-4 bg-pink-500/20 text-pink-400 border-pink-500/30">
                Wellness
              </Badge>
              <h3 className="text-3xl font-bold mb-4">Mental Health Tracking</h3>
              <p className="text-lg text-gray-400 mb-6">
                Monitor your emotional well-being and get personalized wellness insights. Balance academic success with
                mental health awareness.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Daily mood tracking
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Stress level monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Wellness recommendations
                </li>
              </ul>
              <Button className="bg-white text-black hover:bg-gray-100">
                Track Wellness
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl" />
              <div className="relative bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center space-x-2 p-3 border-b border-gray-700">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="p-6">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Wellness Dashboard"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-400">Notes Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-400">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-400">Active Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to transform your learning?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of students who are already using our platform to achieve better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <Zap className="w-4 h-4 text-black" />
              </div>
              <span className="font-semibold">StudyFlow</span>
            </div>
            <p className="text-gray-400 mt-4 md:mt-0">© 2025 StudyFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
