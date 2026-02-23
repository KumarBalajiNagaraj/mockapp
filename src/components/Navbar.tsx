"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Logo from "./Logo"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Platform", href: "/platform" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_0_#e5e5e5]" : ""
        }`}
      >
        {/* Announcement Bar — parallel.ai style */}
        {showBanner && (
          <div className="bg-[#5b9ead]">
            <div className="mx-auto max-w-container px-6 md:px-12 flex items-center justify-center h-10 relative">
              <p className="text-[13px] font-medium text-white text-center leading-tight">
                Introducing our Agentic AI Platform — built for enterprise
                scale.{" "}
                <Link
                  href="/platform"
                  className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  Read more
                </Link>
                .
              </p>
              <button
                onClick={() => setShowBanner(false)}
                className="absolute right-3 md:right-12 p-1 text-white/80 hover:text-white transition-colors"
                aria-label="Close announcement"
              >
                <X size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <div className="bg-cream/95 backdrop-blur-md border-b border-border">
          <div className="mx-auto max-w-container px-6 md:px-12">
            <nav className="flex items-center justify-between h-16">
              {/* Logo */}
              <Logo />

              {/* Desktop Nav Links + CTAs — right-aligned group */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[14px] text-dark/60 hover:text-dark transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* CTA Buttons */}
                <div className="flex items-center gap-2.5 ml-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.08em] uppercase text-white bg-dark-gray hover:bg-dark transition-colors duration-200 px-4 py-2 rounded-md"
                  >
                    Contact
                    <span className="w-[18px] h-[18px] rounded-[3px] bg-white/20 flex items-center justify-center text-[9px] font-bold tracking-normal">
                      C
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.08em] uppercase text-white bg-primary hover:bg-primary-hover transition-colors duration-200 px-4 py-2 rounded-md"
                  >
                    Book Demo
                    <span className="w-[18px] h-[18px] rounded-[3px] bg-white/20 flex items-center justify-center text-[9px] font-bold tracking-normal">
                      D
                    </span>
                  </Link>
                </div>
              </div>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden p-2 text-dark"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-32 px-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-dark hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 text-[12px] font-semibold tracking-wider uppercase text-white bg-dark-gray hover:bg-dark transition-colors px-6 py-3.5 rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 text-[12px] font-semibold tracking-wider uppercase text-white bg-primary hover:bg-primary-hover transition-colors px-6 py-3.5 rounded-md"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
