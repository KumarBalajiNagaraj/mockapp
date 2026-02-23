"use client"

import { useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { ArrowRight } from "lucide-react"

// Dynamic import — Three.js must only run client-side
const RubiksCube = dynamic(() => import("./RubiksCube"), { ssr: false })

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    requestAnimationFrame(() => el.classList.add("visible"))
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-[100px] md:pt-[120px]">
      {/* Animated Background Orbs */}
      <div className="hero-orb hero-orb-primary" />
      <div className="hero-orb hero-orb-secondary" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #181818 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative vertical line */}
      <div className="absolute left-6 md:left-12 top-[120px] bottom-0 w-px bg-border hidden md:block" />

      <div
        ref={containerRef}
        className="reveal mx-auto max-w-container px-6 md:px-12 py-20 md:py-32 relative z-10 w-full"
      >
        <div className="flex items-center gap-4">
          {/* Text Content */}
          <div className="w-full max-w-xl lg:max-w-2xl flex-shrink-0">
            {/* Overline Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Enterprise AI Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-tight text-dark mb-6">
              Applied AI for{" "}
              <span className="text-primary">Enterprise</span>{" "}
              Outcomes
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-4">
              Built Right. Delivered Fast.
            </p>

            {/* Description */}
            <p className="text-[15px] md:text-base text-muted/80 leading-relaxed max-w-lg mb-10">
              We embed forward-deployed engineers and proprietary AI
              infrastructure to deliver real, operational results across
              your enterprise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-primary hover:bg-primary-hover transition-all duration-200 px-7 py-3.5 rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
              >
                Get Started
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-dark bg-transparent hover:bg-dark/5 border border-border transition-all duration-200 px-7 py-3.5 rounded-[6px]"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* 3D Rubik's Cube — WebGL Canvas */}
          <div className="hidden lg:block flex-1 min-w-0">
            <div className="w-full max-w-[560px] ml-auto" style={{ aspectRatio: "1 / 1" }}>
              <RubiksCube />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
