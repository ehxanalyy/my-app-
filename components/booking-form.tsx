"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Calendar, Clock, Plane, Menu } from "lucide-react"
import { Sidebar } from "./sidebar"

interface BookingFormProps {
  onNavigate: (screen: string, data?: any) => void
  bookingData: any
}

export function BookingForm({ onNavigate, bookingData }: BookingFormProps) {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    isAirportTransfer: false,
    date: "",
    time: "",
    notes: "",
    flightNumber: "",
    passengers: "1",
  })

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNavigate("user-info", { bookingDetails: formData })
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/images/luxury-escalade-background.jpeg')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6 border-b border-gray-800">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate("car-selection")}
          className="text-white hover:text-yellow-400"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">Book Your Ride</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(true)}
          className="text-white hover:text-yellow-400"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Selected Vehicle Summary */}
      {bookingData.selectedVehicle && (
        <Card className="relative z-10 m-6 bg-gray-800/90 border-gray-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-yellow-400 text-lg">Selected Vehicle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-white">{bookingData.selectedVehicle.name}</span>
              <span className="text-yellow-400 font-semibold">{bookingData.selectedVehicle.hourlyRate}/hr</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="relative z-10 p-6 space-y-6">
        {/* Airport Transfer Toggle */}
        <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
          <Plane className="h-5 w-5 text-yellow-400" />
          <div className="flex-1">
            <Label className="text-white">Airport Transfer</Label>
            <p className="text-gray-400 text-sm">BWI, DCA, or IAD</p>
          </div>
          <Button
            type="button"
            variant={formData.isAirportTransfer ? "default" : "outline"}
            size="sm"
            onClick={() => handleInputChange("isAirportTransfer", !formData.isAirportTransfer)}
            className={formData.isAirportTransfer ? "bg-yellow-400 text-black" : "border-gray-600 text-gray-300"}
          >
            {formData.isAirportTransfer ? "Yes" : "No"}
          </Button>
        </div>

        {/* Pickup Location */}
        <div className="space-y-2">
          <Label htmlFor="pickup" className="text-white flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-yellow-400" />
            Pickup Location
          </Label>
          <Input
            id="pickup"
            value={formData.pickupLocation}
            onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
            placeholder="Enter pickup address"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Dropoff Location */}
        <div className="space-y-2">
          <Label htmlFor="dropoff" className="text-white flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-yellow-400" />
            Drop-off Location
          </Label>
          <Input
            id="dropoff"
            value={formData.dropoffLocation}
            onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
            placeholder="Enter destination address"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-white flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-yellow-400" />
              Date
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time" className="text-white flex items-center">
              <Clock className="h-4 w-4 mr-2 text-yellow-400" />
              Time
            </Label>
            <Input
              id="time"
              type="time"
              value={formData.time}
              onChange={(e) => handleInputChange("time", e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
              required
            />
          </div>
        </div>

        {/* Passengers */}
        <div className="space-y-2">
          <Label className="text-white">Number of Passengers</Label>
          <Select value={formData.passengers} onValueChange={(value) => handleInputChange("passengers", value)}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <SelectItem key={num} value={num.toString()} className="text-white">
                  {num} {num === 1 ? "Passenger" : "Passengers"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Flight Number (if airport transfer) */}
        {formData.isAirportTransfer && (
          <div className="space-y-2">
            <Label htmlFor="flight" className="text-white">
              Flight Number (Optional)
            </Label>
            <Input
              id="flight"
              value={formData.flightNumber}
              onChange={(e) => handleInputChange("flightNumber", e.target.value)}
              placeholder="e.g., UA1234"
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
        )}

        {/* Special Notes */}
        <div className="space-y-2">
          <Label htmlFor="notes" className="text-white">
            Special Requests
          </Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => handleInputChange("notes", e.target.value)}
            placeholder="Any special requests or notes..."
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[100px]"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 text-lg rounded-lg transition-all duration-300"
        >
          Continue to Contact Info
        </Button>
      </form>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={onNavigate} />
    </div>
  )
}
