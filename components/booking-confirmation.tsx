"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MapPin, Car, Phone, Mail, MessageCircle, Menu, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Sidebar } from "./sidebar"

interface BookingConfirmationProps {
  onNavigate: (screen: string) => void
  bookingData: any
}

export function BookingConfirmation({ onNavigate, bookingData }: BookingConfirmationProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Success Header */}
      <div className="text-center p-8 bg-gradient-to-b from-green-900/20 to-gray-900">
        <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h1>
        <p className="text-gray-300">Your luxury ride has been successfully booked</p>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate("welcome")}
          className="text-white hover:text-yellow-400"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">Booking Confirmed</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(true)}
          className="text-white hover:text-yellow-400"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Booking Details */}
      <div className="p-6 space-y-6">
        {/* Booking ID */}
        <Card className="bg-yellow-400 text-black">
          <CardContent className="p-4 text-center">
            <p className="font-semibold">Booking ID</p>
            <p className="text-2xl font-bold">{bookingData.bookingId}</p>
          </CardContent>
        </Card>

        {/* Trip Summary */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-yellow-400 flex items-center">
              <Car className="h-5 w-5 mr-2" />
              Trip Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Vehicle:</span>
              <span className="text-white">{bookingData.selectedVehicle?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Date & Time:</span>
              <span className="text-white">
                {bookingData.bookingDetails?.date} at {bookingData.bookingDetails?.time}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Passengers:</span>
              <span className="text-white">{bookingData.bookingDetails?.passengers}</span>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-yellow-400">Estimated Fare:</span>
                <span className="text-yellow-400">{bookingData.estimatedFare}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pickup & Dropoff */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-yellow-400 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Route Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm">Pickup Location</p>
              <p className="text-white">{bookingData.bookingDetails?.pickupLocation}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Drop-off Location</p>
              <p className="text-white">{bookingData.bookingDetails?.dropoffLocation}</p>
            </div>
            {bookingData.bookingDetails?.flightNumber && (
              <div>
                <p className="text-gray-400 text-sm">Flight Number</p>
                <p className="text-white">{bookingData.bookingDetails.flightNumber}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-yellow-400">Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700 justify-start bg-transparent"
                onClick={() => onNavigate("contact")}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Support: (555) WANDER-1
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700 justify-start bg-transparent"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email: support@wanderlux.com
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700 justify-start bg-transparent"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Support
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <h3 className="text-yellow-400 font-semibold mb-2">Important Notes:</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Your chauffeur will arrive 5 minutes early</li>
              <li>• You'll receive SMS updates about your ride</li>
              <li>• Cancellation allowed up to 2 hours before pickup</li>
              <li>• All vehicles are sanitized and fully insured</li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => onNavigate("welcome")}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg"
          >
            Book Another Ride
          </Button>
          <Button
            variant="outline"
            onClick={() => onNavigate("contact")}
            className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Contact Support
          </Button>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={onNavigate} />
    </div>
  )
}
