import type React from "react"
import type { Metadata } from "next"
import { Chivo } from "next/font/google"
import "./globals.css"

// Note: Junicode needs to be imported via CSS since it's not in Google Fonts
const chivo = Chivo({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-chivo",
})

export const metadata: Metadata = {
  title: "Hatch - AI-Powered Fundraising for Founders",
  description: "We fundraise so founders can build.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${chivo.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/junicode-font@1.0.1/junicode.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'