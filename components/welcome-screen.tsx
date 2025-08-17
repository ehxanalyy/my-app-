"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"
import { Sidebar } from "./sidebar"

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void
}

export function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/luxury-escalade-background.jpeg')`,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-3">
          <img
            src="/images/wander-lux-logo.png"
            alt="Wander Lux Transportation LLC"
            className="h-14 w-14 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg">WANDER LUX</span>
            <span className="text-yellow-400 text-xs font-medium">TRANSPORTATION LLC</span>
            <span className="text-gray-400 text-xs">Since 2021</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("contact")}
            className="text-white hover:text-yellow-400"
          >
            <Phone className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="text-white hover:text-yellow-400"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">
          WANDER LUX
          <span className="block text-yellow-400">TRANSPORTATION</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-md">
          Premium luxury transportation services across Washington DC, Baltimore, and Maryland since 2021
        </p>

        <div className="space-y-4 w-full max-w-sm">
          <Button
            onClick={() => onNavigate("car-selection")}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Button>

          <Button
            variant="outline"
            onClick={() => onNavigate("contact")}
            className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black py-4 text-lg rounded-lg transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>

        {/* Service Areas */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-2">Serving</p>
          <div className="flex flex-wrap justify-center gap-4 text-white text-sm">
            <span>Washington DC</span>
            <span>•</span>
            <span>Baltimore</span>
            <span>•</span>
            <span>Maryland</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Hint */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={onNavigate} />
    </div>
  )
}
