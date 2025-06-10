"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 bg-gray-800 text-gray-300 border-gray-700">
            ✨ Now with AI-powered insights
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            The future of
            <br />
            academic success
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            Upload, analyze, and optimize your learning with AI-powered tools designed for the modern student. Transform
            how you study, track progress, and achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
            <div className="relative bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center space-x-2 p-4 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="StudyFlow Dashboard"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
    </section>
  )
}
