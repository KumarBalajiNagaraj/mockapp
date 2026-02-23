"use client"

import { useReveal } from "@/lib/useReveal"
import {
  FileText,
  Activity,
  ShoppingCart,
  Shield,
  Building2,
  HeartPulse,
  type LucideIcon,
} from "lucide-react"

interface Sector {
  icon: LucideIcon
  title: string
  description: string
}

const sectors: Sector[] = [
  {
    icon: Building2,
    title: "Finance & Insurance",
    description:
      "Automate document processing, claims adjudication, underwriting workflows, and compliance checks with precision AI agents.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Streamline clinical document workflows, prior authorization, and patient data extraction with intelligent automation.",
  },
  {
    icon: Activity,
    title: "Technology & SaaS",
    description:
      "Accelerate production operations with AI-powered incident diagnosis, root cause analysis, and automated remediation.",
  },
  {
    icon: Shield,
    title: "Operations & SRE",
    description:
      "Reduce alert fatigue, accelerate incident resolution, and empower on-call teams with AI-driven investigation workflows.",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Pre-Sales",
    description:
      "Shorten sales cycles with rapid AI pilots deployed in customer environments to prove measurable value fast.",
  },
  {
    icon: FileText,
    title: "Enterprise Services",
    description:
      "Transform back-office operations with intelligent document processing, workflow automation, and knowledge extraction.",
  },
]

function SectorCard({ sector, index }: { sector: Sector; index: number }) {
  const Icon = sector.icon
  const isRightBorderMd = index % 2 === 0
  const isRightBorderLg = index % 3 !== 2

  return (
    <div
      className={[
        "group p-6 md:p-8 border-b border-border transition-colors duration-300 hover:bg-primary/[0.02]",
        isRightBorderMd ? "md:border-r" : "",
        isRightBorderLg ? "lg:border-r" : "lg:border-r-0",
      ].join(" ")}
    >
      <div className="mb-4">
        <Icon size={24} strokeWidth={1.5} className="text-primary" />
      </div>
      <h3 className="text-[16px] font-medium text-dark mb-2">{sector.title}</h3>
      <p className="text-[14px] leading-relaxed text-muted">
        {sector.description}
      </p>
    </div>
  )
}

export default function Sectors() {
  const ref = useReveal()

  return (
    <section id="industries" className="py-20 md:py-28">
      <div className="relative mx-auto max-w-container px-6 md:px-12">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div ref={ref} className="reveal">
          <div className="mb-14 md:mb-16 md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Industries
              </span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-medium leading-tight tracking-tight">
              Sectors We Serve
            </h2>
            <p className="text-base md:text-lg text-muted mt-4 max-w-lg">
              Domain-specific AI solutions built for the industries that need
              them most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pl-10">
            {sectors.map((sector, i) => (
              <SectorCard key={sector.title} sector={sector} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
