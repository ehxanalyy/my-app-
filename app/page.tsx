"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { CarSelectionPage } from "@/components/car-selection-page"
import { BookingForm } from "@/components/booking-form"
import { UserInfoForm } from "@/components/user-info-form"
import { BookingConfirmation } from "@/components/booking-confirmation"
import { ContactPage } from "@/components/contact-page"
import { AdminDashboard } from "@/components/admin-dashboard"

export default function LuxuryCarBookingApp() {
  const [currentScreen, setCurrentScreen] = useState("welcome")
  const [bookingData, setBookingData] = useState({})

  const navigateToScreen = (screen: string, data?: any) => {
    if (data) {
      setBookingData((prev) => ({ ...prev, ...data }))
    }
    setCurrentScreen(screen)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onNavigate={navigateToScreen} />
      case "car-selection":
        return <CarSelectionPage onNavigate={navigateToScreen} />
      case "booking-form":
        return <BookingForm onNavigate={navigateToScreen} bookingData={bookingData} />
      case "user-info":
        return <UserInfoForm onNavigate={navigateToScreen} bookingData={bookingData} />
      case "confirmation":
        return <BookingConfirmation onNavigate={navigateToScreen} bookingData={bookingData} />
      case "contact":
        return <ContactPage onNavigate={navigateToScreen} />
      case "admin":
        return <AdminDashboard onNavigate={navigateToScreen} />
      default:
        return <WelcomeScreen onNavigate={navigateToScreen} />
    }
  }

  return <div className="min-h-screen bg-gray-900">{renderScreen()}</div>
}
