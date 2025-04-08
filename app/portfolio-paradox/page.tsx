"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Network, FileText, ChevronUp } from "lucide-react"

export default function PortfolioParadoxPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link href="/" className="flex items-center">
            <Image src="/images/hatch-logo.png" alt="Hatch" width={120} height={50} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-white/80 hover:text-[#efff82] transition-colors">
              Features
            </Link>
            <Link
              href="/portfolio-paradox"
              className="text-[#efff82] transition-colors"
            >
              Portfolio Paradox
            </Link>
            <Link href="/#pricing" className="text-white/80 hover:text-[#efff82] transition-colors">
              Pricing
            </Link>
          </nav>
          <div>
            <Link
              href="/#waitlist"
              className="rounded-md bg-[#786eff] px-4 py-2 font-medium text-white transition-all hover:bg-[#6a5ee0]"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-[#0c1a29] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 junicode">
              The <span className="text-[#efff82]">Founder's Fundraising</span> Paradox
            </h