"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Phone, Mail, Menu } from "lucide-react"
import { Sidebar } from "./sidebar"

interface UserInfoFormProps {
  onNavigate: (screen: string, data?: any) => void
  bookingData: any
}

export function UserInfoForm({ onNavigate, bookingData }: UserInfoFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const bookingId = "LR" + Date.now().toString().slice(-6)
    onNavigate("confirmation", {
      userInfo: formData,
      bookingId,
      estimatedFare: calculateFare(),
    })
  }

  const calculateFare = () => {
    // Simple fare calculation based on selected vehicle
    const baseRate = bookingData.selectedVehicle?.hourlyRate?.replace("$", "") || "85"
    return `$${(Number.parseInt(baseRate) * 2).toString()}` // Assuming 2-hour minimum
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(true)}
          className="text-white hover:text-yellow-400"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">Contact Information</h1>
        <div className="w-10"></div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={onNavigate} />

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="text-center mb-8">
          <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="h-8 w-8 text-black" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">Almost Done!</h2>
          <p className="text-gray-400">Please provide your contact details to complete the booking</p>
        </div>

        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white">
            First Name
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            placeholder="Enter your first name"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white">
            Last Name
          </Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            placeholder="Enter your last name"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white flex items-center">
            <Phone className="h-4 w-4 mr-2 text-yellow-400" />
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="(555) 123-4567"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white flex items-center">
            <Mail className="h-4 w-4 mr-2 text-yellow-400" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="your.email@example.com"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Privacy Notice */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">
            Your information is secure and will only be used for booking purposes. We respect your privacy and will
            never share your details with third parties.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 text-lg rounded-lg transition-all duration-300"
        >
          Complete Booking
        </Button>
      </form>
    </div>
  )
}
