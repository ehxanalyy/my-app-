"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Car, Users, Briefcase, Crown, Menu } from "lucide-react"
import { Sidebar } from "./sidebar"

interface CarSelectionPageProps {
  onNavigate: (screen: string, data?: any) => void
}

const vehicles = [
  {
    id: "executive-sedan",
    name: "Executive Sedan",
    description: "Perfect for business meetings and airport transfers",
    icon: Car,
    passengers: "1-3",
    hourlyRate: "$85",
    dailyRate: "$650",
    features: ["Leather seats", "WiFi", "Water bottles", "Phone charger"],
  },
  {
    id: "luxury-suv",
    name: "Luxury SUV",
    description: "Spacious comfort for groups and families",
    icon: Users,
    passengers: "1-6",
    hourlyRate: "$120",
    dailyRate: "$950",
    features: ["Premium sound", "Climate control", "Extra luggage space", "Privacy glass"],
  },
  {
    id: "black-car",
    name: "Black Car",
    description: "Professional service for executives",
    icon: Briefcase,
    passengers: "1-3",
    hourlyRate: "$95",
    dailyRate: "$750",
    features: ["Professional chauffeur", "Business amenities", "Newspapers", "Refreshments"],
  },
  {
    id: "limousine",
    name: "Limousine",
    description: "Ultimate luxury for special occasions",
    icon: Crown,
    passengers: "1-8",
    hourlyRate: "$200",
    dailyRate: "$1,500",
    features: ["Bar service", "Entertainment system", "Mood lighting", "Red carpet service"],
  },
]

export function CarSelectionPage({ onNavigate }: CarSelectionPageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleVehicleSelect = (vehicle: any) => {
    onNavigate("booking-form", { selectedVehicle: vehicle })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/images/luxury-escalade-background.jpeg')`,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6 border-b border-gray-800">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate("welcome")}
          className="text-white hover:text-yellow-400"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="text-center">
          <h1 className="text-xl font-semibold">Select Your Vehicle</h1>
          <p className="text-xs text-yellow-400">WANDER LUX TRANSPORTATION LLC</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(true)}
          className="text-white hover:text-yellow-400"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Vehicle Cards */}
      <div className="relative z-10 p-6 space-y-4">
        {vehicles.map((vehicle) => (
          <Card
            key={vehicle.id}
            className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <vehicle.icon className="h-6 w-6 text-black" />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">{vehicle.name}</h3>
                    <div className="text-right">
                      <p className="text-yellow-400 font-bold">{vehicle.hourlyRate}/hr</p>
                      <p className="text-gray-400 text-sm">{vehicle.dailyRate}/day</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-3">{vehicle.description}</p>

                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-gray-400 text-sm">
                      <Users className="h-4 w-4 inline mr-1" />
                      {vehicle.passengers} passengers
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.map((feature, index) => (
                      <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleVehicleSelect(vehicle)}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition-all duration-300"
                  >
                    Select {vehicle.name}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="relative z-10 p-6 bg-gray-800/90 mt-8">
        <p className="text-center text-gray-400 text-sm">
          All vehicles include professional chauffeur service and are fully insured
        </p>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={onNavigate} />
    </div>
  )
}
