"use client"

import Image from "next/image"
import { useReveal } from "@/lib/useReveal"

type LogoItem = { type: "logo"; name: string; src: string; width: number; height: number }
type TextItem = { type: "text"; label: string }
type ScrollItem = LogoItem | TextItem

const items: ScrollItem[] = [
  { type: "text", label: "Fortune 500 Company" },
  { type: "logo", name: "Eideacs",      src: "/logos/eideacs-full.png",  width: 200, height: 77 },
  { type: "text", label: "Airline Manufacturer from LATAM" },
  { type: "logo", name: "Cozy Systems", src: "/logos/cozy-systems.svg", width: 170, height: 40 },
  { type: "text", label: "YC Company" },
]

function ScrollEntry({ item }: { item: ScrollItem }) {
  if (item.type === "logo") {
    return (
      <div className="flex items-center justify-center px-8 md:px-12 py-4 shrink-0">
        <Image
          src={item.src}
          alt={item.name}
          width={item.width}
          height={item.height}
          className="h-5 md:h-7 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300 select-none grayscale"
          draggable={false}
        />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center px-8 md:px-12 py-4 shrink-0">
      <span className="text-[13px] md:text-[15px] font-medium tracking-tight text-muted/50 whitespace-nowrap select-none">
        {item.label}
      </span>
    </div>
  )
}

export default function LogoScroll() {
  const ref = useReveal()

  return (
    <section className="py-12 md:py-20 border-b border-border bg-white">
      <div ref={ref} className="reveal">
        {/* Label */}
        <p className="text-center text-[12px] md:text-[13px] font-medium tracking-wider uppercase text-muted mb-8 md:mb-10">
          Trusted by
        </p>

        {/* Single row marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[20%] z-10" style={{ background: 'linear-gradient(to right, #ffffff 0%, #ffffff 30%, transparent 100%)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-[20%] z-10" style={{ background: 'linear-gradient(to left, #ffffff 0%, #ffffff 30%, transparent 100%)' }} />
          <div className="marquee-track">
            {[...items, ...items, ...items, ...items, ...items, ...items].map((item, i) => (
              <ScrollEntry key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
