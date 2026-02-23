"use client"

import Image from "next/image"
import { useReveal } from "@/lib/useReveal"

type LogoItem = { type: "logo"; name: string; src: string; width: number; height: number }
type TextItem = { type: "text"; label: string }
type ScrollItem = LogoItem | TextItem

const items: ScrollItem[] = [
  { type: "logo", name: "Conductiv",    src: "/logos/conductiv.svg",    width: 160, height: 40 },
  { type: "text", label: "Fortune 500 Company" },
  { type: "logo", name: "Eideacs",      src: "/logos/eideacs.png",      width: 140, height: 40 },
  { type: "text", label: "Airline Manufacturer from LATAM" },
  { type: "logo", name: "Cozy Systems", src: "/logos/cozy-systems.svg", width: 170, height: 40 },
  { type: "text", label: "YC Company" },
]

function ScrollEntry({ item }: { item: ScrollItem }) {
  if (item.type === "logo") {
    return (
      <div className="flex items-center justify-center px-8 md:px-10 py-4 shrink-0">
        <Image
          src={item.src}
          alt={item.name}
          width={item.width}
          height={item.height}
          className="h-8 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 select-none grayscale"
          draggable={false}
        />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center px-8 md:px-10 py-4 shrink-0">
      <span className="text-[15px] md:text-[16px] font-medium tracking-tight text-muted/70 whitespace-nowrap select-none">
        {item.label}
      </span>
    </div>
  )
}

export default function LogoScroll() {
  const ref = useReveal()

  const row1 = items.slice(0, 4)
  const row2 = items.slice(2)

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
            {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
              <ScrollEntry key={`r1-${i}`} item={item} />
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
            {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
              <ScrollEntry key={`r2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
