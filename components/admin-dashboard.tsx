"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, MapPin, Car, Phone, Menu } from "lucide-react"
import { Sidebar } from "./sidebar"

interface AdminDashboardProps {
  onNavigate: (screen: string) => void
}

// Mock booking data
const mockBookings = [
  {
    id: "LR123456",
    customer: "John Smith",
    phone: "(555) 123-4567",
    vehicle: "Executive Sedan",
    pickup: "1600 Pennsylvania Ave, Washington DC",
    dropoff: "BWI Airport",
    date: "2024-01-15",
    time: "14:30",
    status: "confirmed",
    fare: "$170",
  },
  {
    id: "LR123457",
    customer: "Sarah Johnson",
    phone: "(555) 987-6543",
    vehicle: "Luxury SUV",
    pickup: "Baltimore Inner Harbor",
    dropoff: "Reagan National Airport",
    date: "2024-01-15",
    time: "16:00",
    status: "in-progress",
    fare: "$240",
  },
  {
    id: "LR123458",
    customer: "Michael Brown",
    phone: "(555) 456-7890",
    vehicle: "Limousine",
    pickup: "Four Seasons Hotel, DC",
    dropoff: "Kennedy Center",
    date: "2024-01-15",
    time: "19:00",
    status: "pending",
    fare: "$400",
  },
]

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [vehicleFilter, setVehicleFilter] = useState("all")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-600"
      case "in-progress":
        return "bg-blue-600"
      case "pending":
        return "bg-yellow-600"
      case "completed":
        return "bg-gray-600"
      case "cancelled":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }

  const filteredBookings = mockBookings.filter((booking) => {
    const matchesSearch =
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter
    const matchesVehicle = vehicleFilter === "all" || booking.vehicle === vehicleFilter

    return matchesSearch && matchesStatus && matchesVehicle
  })

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
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        <div className="w-10"></div>
      </div>

      {/* Stats Cards */}
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-400">12</p>
            <p className="text-gray-400 text-sm">Today's Rides</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-400">8</p>
            <p className="text-gray-400 text-sm">Completed</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">3</p>
            <p className="text-gray-400 text-sm">In Progress</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-400">1</p>
            <p className="text-gray-400 text-sm">Pending</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="px-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Search className="h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search by customer name or booking ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
          />
        </div>

        <div className="flex space-x-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all" className="text-white">
                All Status
              </SelectItem>
              <SelectItem value="pending" className="text-white">
                Pending
              </SelectItem>
              <SelectItem value="confirmed" className="text-white">
                Confirmed
              </SelectItem>
              <SelectItem value="in-progress" className="text-white">
                In Progress
              </SelectItem>
              <SelectItem value="completed" className="text-white">
                Completed
              </SelectItem>
              <SelectItem value="cancelled" className="text-white">
                Cancelled
              </SelectItem>
            </SelectContent>
          </Select>

          <Select value={vehicleFilter} onValueChange={setVehicleFilter}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Filter by vehicle" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all" className="text-white">
                All Vehicles
              </SelectItem>
              <SelectItem value="Executive Sedan" className="text-white">
                Executive Sedan
              </SelectItem>
              <SelectItem value="Luxury SUV" className="text-white">
                Luxury SUV
              </SelectItem>
              <SelectItem value="Black Car" className="text-white">
                Black Car
              </SelectItem>
              <SelectItem value="Limousine" className="text-white">
                Limousine
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Bookings List */}
      <div className="p-6 space-y-4">
        <h2 className="text-lg font-semibold text-yellow-400 mb-4">Recent Bookings</h2>

        {filteredBookings.map((booking) => (
          <Card key={booking.id} className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-white font-semibold">{booking.customer}</h3>
                  <p className="text-gray-400 text-sm">ID: {booking.id}</p>
                </div>
                <div className="text-right">
                  <Badge className={`${getStatusColor(booking.status)} text-white`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </Badge>
                  <p className="text-yellow-400 font-semibold mt-1">{booking.fare}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-300">
                  <Car className="h-4 w-4 mr-2 text-yellow-400" />
                  {booking.vehicle}
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-4 w-4 mr-2 text-yellow-400" />
                  {booking.date} at {booking.time}
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-2 text-yellow-400" />
                  {booking.phone}
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="h-4 w-4 mr-2 text-yellow-400 mt-0.5" />
                  <div>
                    <p>
                      <strong>From:</strong> {booking.pickup}
                    </p>
                    <p>
                      <strong>To:</strong> {booking.dropoff}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 mt-4">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  Confirm
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  Contact
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-900/20 bg-transparent"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={onNavigate} />
    </div>
  )
}
