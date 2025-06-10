"use client"

import { useState } from "react"
import { Menu, X, Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <Zap className="w-4 h-4 text-black" />
              </div>
              <span className="text-xl font-semibold">StudyFlow</span>
            </a>

            <nav className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                  <span>Features</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Docs
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </a>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
              Sign In
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100">Sign Up</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <div className="px-6 py-4 space-y-4">
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">
              Docs
            </a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">
              Blog
            </a>
            <div className="pt-4 border-t border-gray-800 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
                Sign In
              </Button>
              <Button className="w-full bg-white text-black hover:bg-gray-100">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
