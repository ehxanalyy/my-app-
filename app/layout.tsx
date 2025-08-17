import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wander Lux Transportation LLC - Premium Luxury Transportation",
  description: "Premium luxury transportation services across Washington DC, Baltimore, and Maryland since 2021",
  keywords:
    "luxury transportation, chauffeur service, Washington DC, Baltimore, Maryland, airport transfer, Wander Lux",
  authors: [{ name: "Wander Lux Transportation LLC" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffd700" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
