"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, MessageCircle, MapPin, Clock, Car, Menu } from "lucide-react"
import { useState } from "react"
import { Sidebar } from "./sidebar"

interface ContactPageProps {
  onNavigate: (screen: string) => void
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
        <h1 className="text-xl font-semibold">Contact Us</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate("welcome")}
          className="text-white hover:text-yellow-400"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={onNavigate} />

      {/* Contact Header */}
      <div className="text-center p-8">
        <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="h-8 w-8 text-black" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">We're Here to Help</h2>
        <p className="text-gray-400">24/7 premium customer support from Wander Lux Transportation LLC</p>
      </div>

      {/* Contact Methods */}
      <div className="p-6 space-y-4">
        {/* Emergency/Urgent */}
        <Card className="bg-red-900/20 border-red-500/30">
          <CardHeader>
            <CardTitle className="text-red-400 text-lg">Emergency Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              Emergency: (555) 911-LUXE
            </Button>
            <p className="text-gray-400 text-sm">For urgent ride assistance or emergencies</p>
          </CardContent>
        </Card>

        {/* Primary Contact Methods */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-yellow-400">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full border-gray-600 text-white hover:bg-gray-700 justify-start h-12 bg-transparent"
            >
              <Phone className="h-5 w-5 mr-3 text-yellow-400" />
              <div className="text-left">
                <p className="font-semibold">Call Us</p>
                <p className="text-sm text-gray-400">(555) WANDER-1</p>
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-full border-gray-600 text-white hover:bg-gray-700 justify-start h-12 bg-transparent"
            >
              <Mail className="h-5 w-5 mr-3 text-yellow-400" />
              <div className="text-left">
                <p className="font-semibold">Email Support</p>
                <p className="text-sm text-gray-400">support@wanderlux.com</p>
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-full border-gray-600 text-white hover:bg-gray-700 justify-start h-12 bg-transparent"
            >
              <MessageCircle className="h-5 w-5 mr-3 text-yellow-400" />
              <div className="text-left">
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-gray-400">Quick response guaranteed</p>
              </div>
            </Button>
          </CardContent>
        </Card>

        {/* Business Hours */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-yellow-400 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Business Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Monday - Friday:</span>
              <span className="text-white">24/7 Available</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Saturday - Sunday:</span>
              <span className="text-white">24/7 Available</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Holidays:</span>
              <span className="text-white">24/7 Available</span>
            </div>
          </CardContent>
        </Card>

        {/* Service Areas */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-yellow-400 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Service Areas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-white">Washington DC Metro Area</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-white">Baltimore & Surrounding Areas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-white">Maryland Statewide</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-white">BWI, DCA, IAD Airports</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-yellow-400">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={() => onNavigate("car-selection")}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
            >
              <Car className="h-4 w-4 mr-2" />
              Book a Ride Now
            </Button>
            <Button
              variant="outline"
              onClick={() => onNavigate("admin")}
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Check Existing Booking
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
