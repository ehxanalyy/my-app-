"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, User, Phone, MapPin, Car, Settings, LogOut } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (screen: string) => void
}

export function Sidebar({ isOpen, onClose, onNavigate }: SidebarProps) {
  const [activeTab, setActiveTab] = useState<"signin" | "signup" | "menu">("menu")
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSignedIn(true)
    setUserEmail("john.doe@example.com")
    setActiveTab("menu")
  }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSignedIn(true)
    setUserEmail("new.user@example.com")
    setActiveTab("menu")
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
    setUserEmail("")
    setActiveTab("menu")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div
        className="fixed right-0 top-0 h-full w-80 bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <img
              src="/images/wander-lux-logo.png"
              alt="Wander Lux Transportation LLC"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm">WANDER LUX</span>
              <span className="text-yellow-400 text-xs">TRANSPORTATION LLC</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:text-yellow-400">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {!isSignedIn ? (
            <>
              {/* Auth Tabs */}
              <div className="flex space-x-2 mb-6">
                <Button
                  variant={activeTab === "signin" ? "default" : "outline"}
                  onClick={() => setActiveTab("signin")}
                  className={`flex-1 ${
                    activeTab === "signin"
                      ? "bg-yellow-400 text-black"
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  Sign In
                </Button>
                <Button
                  variant={activeTab === "signup" ? "default" : "outline"}
                  onClick={() => setActiveTab("signup")}
                  className={`flex-1 ${
                    activeTab === "signup"
                      ? "bg-yellow-400 text-black"
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  Sign Up
                </Button>
              </div>

              {/* Sign In Form */}
              {activeTab === "signin" && (
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-yellow-400">Welcome Back</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signin-email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="signin-email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signin-password" className="text-white">
                          Password
                        </Label>
                        <Input
                          id="signin-password"
                          type="password"
                          placeholder="Enter your password"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                      >
                        Sign In
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                      >
                        Forgot Password?
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Sign Up Form */}
              {activeTab === "signup" && (
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-yellow-400">Create Account</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="signup-firstname" className="text-white">
                            First Name
                          </Label>
                          <Input
                            id="signup-firstname"
                            placeholder="John"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-lastname" className="text-white">
                            Last Name
                          </Label>
                          <Input
                            id="signup-lastname"
                            placeholder="Doe"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-phone" className="text-white">
                          Phone Number
                        </Label>
                        <Input
                          id="signup-phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password" className="text-white">
                          Password
                        </Label>
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="Create a password"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                      >
                        Create Account
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            <>
              {/* User Profile Section */}
              <Card className="bg-gray-800 border-gray-700 mb-6">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Welcome back!</p>
                      <p className="text-gray-400 text-sm">{userEmail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Menu */}
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  onClick={() => {
                    onNavigate("car-selection")
                    onClose()
                  }}
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-yellow-400"
                >
                  <Car className="h-5 w-5 mr-3" />
                  Book a Ride
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => {
                    onNavigate("admin")
                    onClose()
                  }}
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-yellow-400"
                >
                  <MapPin className="h-5 w-5 mr-3" />
                  My Bookings
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => {
                    onNavigate("contact")
                    onClose()
                  }}
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-yellow-400"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  Contact Support
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-yellow-400"
                >
                  <Settings className="h-5 w-5 mr-3" />
                  Account Settings
                </Button>

                <Button
                  variant="ghost"
                  onClick={handleSignOut}
                  className="w-full justify-start text-red-400 hover:bg-gray-800 hover:text-red-300"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Sign Out
                </Button>
              </div>
            </>
          )}

          {/* Quick Actions */}
          <Card className="bg-gray-800 border-gray-700 mt-6">
            <CardHeader>
              <CardTitle className="text-yellow-400 text-sm">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onNavigate("contact")
                  onClose()
                }}
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Emergency Support
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onNavigate("welcome")
                  onClose()
                }}
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
