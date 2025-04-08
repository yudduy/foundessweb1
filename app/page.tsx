"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ChevronDown, Clock, FileText, Network, Zap, Menu, X, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [founderPricingToggle, setFounderPricingToggle] = useState(false)
  const [investorPricingToggle, setInvestorPricingToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollToTop(window.scrollY > 500)

      // Determine active section for nav highlighting
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
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

  const toggleFAQ = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.classList.toggle("hidden")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link href="/" className="flex items-center">
            <Image src="/images/hatch-logo.png" alt="Hatch" width={120} height={50} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="#features"
                  className={`flex items-center hover:text-[#efff82] transition-colors ${activeSection === "features" ? "text-[#efff82]" : "text-white/80"}`}
                >
                  Features <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className={`hover:text-[#efff82] transition-colors ${activeSection === "how-it-works" ? "text-[#efff82]" : "text-white/80"}`}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className={`hover:text-[#efff82] transition-colors ${activeSection === "pricing" ? "text-[#efff82]" : "text-white/80"}`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className={`hover:text-[#efff82] transition-colors ${activeSection === "faq" ? "text-[#efff82]" : "text-white/80"}`}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="#waitlist"
              className="rounded-md bg-gradient-to-r from-[#786eff] to-[#efff82] px-4 py-2 font-medium text-black transition-all hover:opacity-90"
            >
              $99/month
            </Link>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 py-4">
            <nav className="container mx-auto px-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#features"
                    className="block py-2 text-white/80 hover:text-[#efff82]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="block py-2 text-white/80 hover:text-[#efff82]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="block py-2 text-white/80 hover:text-[#efff82]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="block py-2 text-white/80 hover:text-[#efff82]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 md:py-40 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 junicode">
              <span className="text-[#efff82]">Fundraising</span> on <span className="text-[#786eff]">autopilot</span>.
            </h1>
          </div>
          <div
          className="animate-fade-in-up flex justify-center space-x-4 opacity-0"
          style={{ animationDelay: "0.6s" }}
          >
          <Link
          href="#waitlist"
          className="rounded-md bg-gradient-to-r from-[#786eff] to-[#efff82] px-8 py-4 font-medium text-black transition-all hover:opacity-90 text-lg"
          >
          Start for $99/month
          </Link>
          <Link
          href="#how-it-works"
          className="flex items-center rounded-md border border-white/20 px-8 py-4 font-medium text-white transition-all hover:bg-white/10 text-lg"
          >
          See How It Works <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl junicode">The Early-Stage Founder's Challenge</h2>
            </div>
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
              <p className="mb-12 text-xl text-white/80">
              Pre-seed and seed founders spend 40% of their time on fundraising instead of product. We fix that.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div
              className="animate-fade-in-up rounded-lg bg-[#fffae8] p-6 border border-[#fffae8]/10 opacity-0 text-black"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#efff82] text-black">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Time Drain</h3>
              <p className="text-black/70">200+ hours lost on fundraising activities for a typical seed round.</p>
            </div>

            <div
              className="animate-fade-in-up rounded-lg bg-[#fffae8] p-6 border border-[#fffae8]/10 opacity-0 text-black"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#efff82] text-black">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Limited Network</h3>
              <p className="text-black/70">Early-stage founders lack connections to the right investors for their specific vision.</p>
            </div>

            <div
              className="animate-fade-in-up rounded-lg bg-[#fffae8] p-6 border border-[#fffae8]/10 opacity-0 text-black"
              style={{ animationDelay: "1s" }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#efff82] text-black">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Paperwork Overload</h3>
              <p className="text-black/70">SAFEs, cap tables, and legal docs create costly errors and wasted time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl junicode">How We Solve Your Fundraising Problems</h2>
          </div>
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <p className="mb-12 text-xl text-white/80">
              AI-powered investor matching and outreach that expands your network instantly.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div
            className="animate-fade-in-up rounded-lg border border-white/10 p-6 opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#786eff]/20 text-[#786eff]">
              <Network className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">AI-Powered Investor Matching</h3>
            <p className="text-white/70">
              Perfect investor matches based on your industry, stage, and goals. Warm intros at scale.
            </p>
          </div>

          <div
            className="animate-fade-in-up rounded-lg border border-white/10 p-6 opacity-0"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#786eff]/20 text-[#786eff]">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Funnel Optimization</h3>
            <p className="text-white/70">
              Automated follow-ups and meeting scheduling that converts interest into investment.
            </p>
          </div>

          <div
            className="animate-fade-in-up rounded-lg border border-white/10 p-6 opacity-0"
            style={{ animationDelay: "1s" }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#efff82]/20 text-[#efff82]">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Document Automation</h3>
            <p className="text-white/70">One-click SAFE generation and customization. Paperwork handled for you.</p>
          </div>

          <div
            className="animate-fade-in-up rounded-lg border border-white/10 p-6 opacity-0"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#efff82]/20 text-[#efff82]">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Transaction Management</h3>
            <p className="text-white/70">
              Automated wire instructions, signatures, and cap table updates. Close faster.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-[#0c1a29] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl junicode">How It Works</h2>
            </div>
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
              <p className="mb-12 text-xl text-white/80">Four simple steps to transform your fundraising experience.</p>
            </div>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[#786eff]/30 md:left-1/2 md:-ml-0.5"></div>

            {/* Step 1 */}
            <div className="animate-fade-in-up relative mb-12 opacity-0" style={{ animationDelay: "0.6s" }}>
              <div className="flex md:flex-row-reverse">
                <div className="ml-12 md:ml-0 md:mr-auto md:w-1/2 md:pl-8">
                  <div className="rounded-lg bg-black/50 p-6 border border-white/10">
                    <h3 className="mb-2 text-xl font-bold">1. Connect Your Profile</h3>
                    <p className="text-white/70">
                      Link your pitch deck and company data to create your startup profile.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#786eff] text-white md:left-1/2 md:-ml-4">
                  1
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="animate-fade-in-up relative mb-12 opacity-0" style={{ animationDelay: "0.8s" }}>
              <div className="flex">
                <div className="ml-12 md:ml-auto md:mr-0 md:w-1/2 md:pr-8">
                  <div className="rounded-lg bg-black/50 p-6 border border-white/10">
                    <h3 className="mb-2 text-xl font-bold">2. Set Fundraising Goals</h3>
                    <p className="text-white/70">Define your target raise, valuation, and investor preferences.</p>
                  </div>
                </div>
                <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#efff82] text-black md:left-1/2 md:-ml-4">
                  2
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="animate-fade-in-up relative mb-12 opacity-0" style={{ animationDelay: "1s" }}>
              <div className="flex md:flex-row-reverse">
                <div className="ml-12 md:ml-0 md:mr-auto md:w-1/2 md:pl-8">
                  <div className="rounded-lg bg-black/50 p-6 border border-white/10">
                    <h3 className="mb-2 text-xl font-bold">3. AI Matches & Introductions</h3>
                    <p className="text-white/70">
                      Our AI finds your perfect investors and facilitates warm introductions.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#786eff] text-white md:left-1/2 md:-ml-4">
                  3
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="animate-fade-in-up relative opacity-0" style={{ animationDelay: "1.2s" }}>
              <div className="flex">
                <div className="ml-12 md:ml-auto md:mr-0 md:w-1/2 md:pr-8">
                  <div className="rounded-lg bg-black/50 p-6 border border-white/10">
                    <h3 className="mb-2 text-xl font-bold">4. Close Funding</h3>
                    <p className="text-white/70">
                      Track interest, generate documents, and close deals with automated management.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#efff82] text-black md:left-1/2 md:-ml-4">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl junicode">What Founders Are Saying</h2>
          </div>
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <p className="mb-12 text-xl text-white/80">
              Pre-seed and seed founders are saving time and closing rounds faster with our Starter Plan.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div
            className="animate-fade-in-up rounded-lg bg-black/50 p-6 border border-white/10 opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="mb-4 text-[#786eff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              </svg>
            </div>
            <p className="mb-4 text-white/80">
            "As a first-time founder with no investor connections, Hatch expanded my network overnight. Closed our pre-seed round in just 6 weeks."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#786eff]/20 flex items-center justify-center text-[#786eff] font-bold">JL</div>
              <div className="ml-3">
                <p className="font-medium">Jamie Liu</p>
                <p className="text-sm text-white/60">Founder, Pre-seed SaaS</p>
              </div>
            </div>
          </div>

          <div
            className="animate-fade-in-up rounded-lg bg-black/50 p-6 border border-white/10 opacity-0"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="mb-4 text-[#efff82]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              </svg>
            </div>
            <p className="mb-4 text-white/80">
              "As a first-time founder, fundraising was intimidating. Hatch made it approachable. We focused on product
              while still closing our round."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#efff82]/20 flex items-center justify-center text-[#efff82] font-bold">AR</div>
              <div className="ml-3">
                <p className="font-medium">Alex Robinson</p>
                <p className="text-sm text-white/60">Technical Founder, Seed Stage</p>
              </div>
            </div>
          </div>

          <div
            className="animate-fade-in-up rounded-lg bg-black/50 p-6 border border-white/10 opacity-0"
            style={{ animationDelay: "1s" }}
          >
            <div className="mb-4 text-[#786eff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              </svg>
            </div>
            <p className="mb-4 text-white/80">
            "With no connections in the VC world, I thought fundraising would take 6+ months. With Hatch's Starter Plan, I closed my pre-seed in 8 weeks."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#786eff]/20 flex items-center justify-center text-[#786eff] font-bold">SM</div>
              <div className="ml-3">
                <p className="font-medium">Sasha Miller</p>
                <p className="text-sm text-white/60">Solo Founder, Pre-seed Fintech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#0c1a29] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl junicode">Pricing Made for Founders</h2>
            </div>
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
              <p className="mb-12 text-xl text-white/80">
                Affordable pricing that grows with you, designed for early-stage startups.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="animate-fade-in-up rounded-lg border-2 border-[#efff82] bg-gradient-to-br from-black to-black/80 p-8 opacity-0 shadow-lg shadow-[#efff82]/10 relative overflow-hidden"
              style={{ animationDelay: "0.6s" }}
            >
              {/* Abstract graphic element */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#786eff]/10 to-[#efff82]/10 blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="mb-8 text-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[#efff82]/20 text-[#efff82] rounded-full mb-2">STARTER PLAN</span>
                  <h3 className="text-2xl font-bold mb-4">For Early-Stage Founders</h3>
                  
                  <div className="flex justify-center items-baseline gap-2 my-6">
                    <span className="text-5xl font-bold">$99</span>
                    <span className="text-white/60">/month</span>
                  </div>
                  
                  <p className="text-sm text-white/70 mt-2">or $990/year (save 2 months)</p>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-[#786eff] to-[#efff82] mx-auto my-6"></div>
                  
                  <p className="text-white/80 max-w-md mx-auto">Perfect for pre-seed and seed-stage founders beginning their fundraising journey</p>
                </div>
                
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="mr-3 h-5 w-5 text-[#efff82] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>
                      <strong className="block text-white">AI-Powered Investor Matching</strong>
                      <span className="text-white/70 text-sm">Connect with investors perfectly aligned with your vision</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-3 h-5 w-5 text-[#efff82] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>
                      <strong className="block text-white">Automated Outreach</strong>
                      <span className="text-white/70 text-sm">Personalized introductions that maximize response rates</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-3 h-5 w-5 text-[#efff82] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>
                      <strong className="block text-white">Funnel Management</strong>
                      <span className="text-white/70 text-sm">Track and optimize your fundraising pipeline effortlessly</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-3 h-5 w-5 text-[#efff82] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>
                      <strong className="block text-white">SAFE Document Generation</strong>
                      <span className="text-white/70 text-sm">One-click creation of legally vetted investment documents</span>
                    </span>
                  </li>
                </ul>
                
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="#waitlist"
                    id="waitlist"
                    className="block w-full rounded-md bg-gradient-to-r from-[#786eff] to-[#efff82] py-4 text-center font-medium text-black transition-all hover:opacity-90"
                  >
                    Get Early Access
                  </Link>
                  
                  <p className="mt-4 text-center text-sm text-white/60">
                    No credit card required. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl junicode">Frequently Asked Questions</h2>
          </div>
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <p className="mb-12 text-xl text-white/80">Everything you need to know about Hatch.</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="animate-fade-in-up space-y-6 opacity-0" style={{ animationDelay: "0.6s" }}>
            <div className="rounded-lg border border-white/10 p-6">
              <button className="flex w-full items-center justify-between text-left" onClick={() => toggleFAQ("faq-1")}>
                <h3 className="text-xl font-medium">How does Hatch find the right investors?</h3>
                <ChevronDown className="h-5 w-5 text-[#efff82]" />
              </button>
              <div id="faq-1" className="mt-3 text-white/70">
                Our AI analyzes thousands of investors based on past investments, industry focus, check size, and stage
                preferences to find your perfect matches and facilitate warm introductions.
              </div>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <button className="flex w-full items-center justify-between text-left" onClick={() => toggleFAQ("faq-2")}>
                <h3 className="text-xl font-medium">Is my data secure with Hatch?</h3>
                <ChevronDown className="h-5 w-5 text-[#786eff]" />
              </button>
              <div id="faq-2" className="mt-3 hidden text-white/70">
                Absolutely. We implement bank-level encryption for all your data with enterprise-grade security
                protocols. We never share your data with third parties without your explicit permission.
              </div>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <button className="flex w-full items-center justify-between text-left" onClick={() => toggleFAQ("faq-3")}>
                <h3 className="text-xl font-medium">How does Hatch handle investor introductions?</h3>
                <ChevronDown className="h-5 w-5 text-[#efff82]" />
              </button>
              <div id="faq-3" className="mt-3 hidden text-white/70">
                We facilitate warm introductions through your existing network when possible. For cold outreach, we use
                data-driven insights to create compelling, personalized messages that resonate with each investor's
                interests.
              </div>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <button className="flex w-full items-center justify-between text-left" onClick={() => toggleFAQ("faq-4")}>
                <h3 className="text-xl font-medium">What types of companies is Hatch best for?</h3>
                <ChevronDown className="h-5 w-5 text-[#786eff]" />
              </button>
              <div id="faq-4" className="mt-3 hidden text-white/70">
                Hatch is designed for early-stage startups raising pre-seed, seed, and Series A rounds across various
                tech sectors including SaaS, fintech, healthtech, AI, and consumer tech.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#786eff] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl junicode">
                Ready to focus on building instead of fundraising?
              </h2>
            </div>
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
              <p className="mb-8 text-xl text-white/90">
                Start for just $99/month and transform your fundraising process today.
              </p>
            </div>
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
              <form className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-[#efff82] sm:flex-1"
                  required
                />
                <button
                  type="submit"
                  className="rounded-md bg-[#efff82] px-6 py-3 font-medium text-gray-900 shadow-sm transition-all hover:bg-[#e5f570]"
                >
                  Start for $99/month
                </button>
              </form>
              <p className="mt-4 text-sm text-white/70">
                By joining, you agree to our{" "}
                <Link href="#" className="underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center">
                <Image src="/images/hatch-logo.png" alt="Hatch" width={120} height={50} className="h-10 w-auto" />
              </Link>
              <p className="mt-4 text-white/70">
                AI-powered fundraising for founders who want to focus on building great products.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-white/70 hover:text-[#efff82]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-white/70 hover:text-[#efff82]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-[#efff82]">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-[#efff82]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-[#efff82]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-[#efff82]">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-[#efff82]">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-[#efff82]">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-[#efff82]">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-white/60">&copy; {new Date().getFullYear()} Hatch. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#786eff] text-white shadow-lg transition-all hover:bg-[#6a5ee0]"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      {/* Persistent CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md py-4 border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-white/80 mb-4 sm:mb-0"><span className="text-[#efff82]">$99/month</span> · Perfect for pre-seed & seed founders</p>
          <Link
            href="#waitlist"
            className="rounded-md bg-gradient-to-r from-[#786eff] to-[#efff82] px-6 py-2 font-medium text-black transition-all hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

