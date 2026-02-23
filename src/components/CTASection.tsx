"use client"

import { useReveal } from "@/lib/useReveal"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const ref = useReveal()

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="relative mx-auto max-w-container px-6 md:px-12">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div ref={ref} className="reveal">
          <div className="md:pl-10 text-center md:text-left max-w-2xl">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Get Started
              </span>
            </div>
            <h2 className="text-3xl md:text-[44px] font-medium leading-tight tracking-tight mb-6">
              Applied AI is in{" "}
              <span className="text-primary">Our DNA</span>
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              We don&apos;t just build AI — we deploy it where it matters, with
              engineers who stay until it works. Let&apos;s build something
              that lasts.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-primary hover:bg-primary-hover transition-all duration-200 px-8 py-4 rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
              >
                Talk to Us
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-dark bg-transparent hover:bg-dark/5 border border-border transition-all duration-200 px-8 py-4 rounded-[6px]"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
