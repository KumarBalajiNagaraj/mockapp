"use client"

import { useReveal } from "@/lib/useReveal"

const logos = [
  "Acme Corp",
  "TechVenture",
  "CloudBase",
  "DataSync",
  "NovaSoft",
  "Quantum AI",
  "FinEdge",
  "Apex Systems",
  "CoreLogic",
  "MetaOps",
  "NeuralPath",
  "ScaleUp",
]

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-8 md:px-10 py-4 shrink-0">
      <div className="flex items-center gap-2 opacity-40 hover:opacity-60 transition-opacity duration-300">
        <div className="w-6 h-6 rounded bg-dark/10" />
        <span className="text-[14px] font-medium text-dark whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  )
}

export default function LogoScroll() {
  const ref = useReveal()

  return (
    <section className="py-16 md:py-20 border-b border-border">
      <div ref={ref} className="reveal">
        {/* Label */}
        <p className="text-center text-[13px] font-medium tracking-wider uppercase text-muted mb-10">
          Companies we work with
        </p>

        {/* Row 1 - scroll left */}
        <div className="relative overflow-hidden mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />
          <div className="marquee-track">
            {[...logos, ...logos].map((name, i) => (
              <LogoPlaceholder key={`r1-${i}`} name={name} />
            ))}
          </div>
        </div>

        {/* Row 2 - scroll left (offset) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />
          <div
            className="marquee-track"
            style={{ animationDelay: "-20s" }}
          >
            {[...logos.slice(6), ...logos.slice(0, 6), ...logos.slice(6), ...logos.slice(0, 6)].map(
              (name, i) => (
                <LogoPlaceholder key={`r2-${i}`} name={name} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
