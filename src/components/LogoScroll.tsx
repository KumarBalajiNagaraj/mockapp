"use client"

import Image from "next/image"
import { useReveal } from "@/lib/useReveal"

interface Logo {
  name: string
  src: string
  width: number
  height: number
}

const logos: Logo[] = [
  { name: "Conductiv",    src: "/logos/conductiv.svg",    width: 160, height: 40 },
  { name: "Deloitte",     src: "/logos/deloitte.svg",     width: 150, height: 40 },
  { name: "Brex",         src: "/logos/brex.svg",         width: 100, height: 40 },
  { name: "Cozy Systems", src: "/logos/cozy-systems.svg", width: 170, height: 40 },
  { name: "Embraer",      src: "/logos/embraer.svg",      width: 160, height: 40 },
  { name: "Scale AI",     src: "/logos/scale-ai.svg",     width: 130, height: 40 },
  { name: "Palantir",     src: "/logos/palantir.svg",     width: 170, height: 40 },
  { name: "Accenture",    src: "/logos/accenture.svg",    width: 170, height: 40 },
  { name: "Enovate",      src: "/logos/enovate.svg",      width: 150, height: 40 },
]

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div className="flex items-center justify-center px-8 md:px-10 py-4 shrink-0">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="h-8 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 select-none"
        draggable={false}
      />
    </div>
  )
}

export default function LogoScroll() {
  const ref = useReveal()

  /* Split logos across two rows for visual variety */
  const row1 = logos.slice(0, 5)
  const row2 = logos.slice(5).concat(logos.slice(0, 1))

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
            {[...row1, ...row1, ...row1, ...row1].map((logo, i) => (
              <LogoItem key={`r1-${i}`} logo={logo} />
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
            {[...row2, ...row2, ...row2, ...row2].map((logo, i) => (
              <LogoItem key={`r2-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
