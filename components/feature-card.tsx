"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  badge?: string
  features?: string[]
  image?: string
}

export function FeatureCard({ icon, title, description, href, badge, features, image }: FeatureCardProps) {
  return (
    <div className="group">
      <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden">
        {image && (
          <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}

        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
              {icon}
            </div>
            {badge && (
              <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-600 text-xs">
                {badge}
              </Badge>
            )}
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>

          {features && (
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 w-full group-hover:border-gray-500 transition-colors"
            asChild
          >
            <a href={href} className="flex items-center justify-center">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
