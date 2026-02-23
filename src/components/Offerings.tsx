"use client"

import { useReveal } from "@/lib/useReveal"
import { FileSearch, Radio, Rocket, type LucideIcon } from "lucide-react"

interface Offering {
  icon: LucideIcon
  title: string
  subtitle: string
  challenge: string
  solution: string[]
  value: string
  tag: string
}

const offerings: Offering[] = [
  {
    icon: FileSearch,
    title: "Agentic Document Processing",
    subtitle: "Finance, Claims & Underwriting",
    challenge:
      "Manual document processing is slow, error-prone, and expensive. Information buried inside PDFs, emails, and scans creates bottlenecks.",
    solution: [
      "Agents that classify documents, extract fields, and validate with business rules",
      "Route exceptions, request missing info, and coordinate approvals with humans in the loop",
      "Write back to systems of record, log decisions, and monitor quality",
    ],
    value:
      "Lower processing cost, higher accuracy, faster cycle times, and fewer backlogs.",
    tag: "Document AI",
  },
  {
    icon: Radio,
    title: "AI for Production Ops",
    subtitle: "SRE, IT Ops & Operations",
    challenge:
      "Alert noise overwhelms on-call teams. Diagnosis is slow because context is scattered across tools. Teams rely on scarce SMEs to find root cause.",
    solution: [
      "Agentic AI workflows that investigate every alert and deliver root cause findings with evidence",
      "Pull logs, metrics, traces, recent changes, and runbooks to surface likely root cause",
      "Deliver investigation reports in Slack, recommend next steps",
    ],
    value:
      "Drastically improve MTTD & MTTR metrics with out-of-the-box integration with observability tools.",
    tag: "Production AI",
  },
  {
    icon: Rocket,
    title: "Sales Acceleration with AI",
    subtitle: "Sales & Pre-Sales Teams",
    challenge:
      "Buyers don't trust isolated demos. It's hard to show measurable value quickly inside real customer workflows.",
    solution: [
      "Deploy AI agents in customer cloud — specialized in integration, data access, and connectors",
      "Forward-Deployed Engineers tailor the use case to real workflows with agentic AI",
      "Instrument outcomes and deliver an executive-ready value report with ROI",
    ],
    value:
      "Shorter sales cycles, higher win rate, and faster deal closure.",
    tag: "Sales AI",
  },
]

function OfferingCard({ offering, index }: { offering: Offering; index: number }) {
  const Icon = offering.icon

  return (
    <div
      className="group bg-white rounded-xl border border-border p-8 md:p-10 lg:p-12 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:border-primary/20"
      style={{
        position: "sticky",
        top: `${120 + index * 20}px`,
        zIndex: index + 1,
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Icon size={24} strokeWidth={1.5} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-dark">
              {offering.title}
            </h3>
            <p className="text-[14px] text-muted mt-1">{offering.subtitle}</p>
          </div>
        </div>
        <span className="text-[11px] font-medium tracking-wider uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full">
          {offering.tag}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <h4 className="text-[13px] font-medium tracking-wider uppercase text-muted mb-3">
            Challenge
          </h4>
          <p className="text-[14px] leading-relaxed text-dark/70">
            {offering.challenge}
          </p>
        </div>

        <div>
          <h4 className="text-[13px] font-medium tracking-wider uppercase text-muted mb-3">
            Solution
          </h4>
          <ul className="space-y-2">
            {offering.solution.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-[14px] leading-relaxed text-dark/70"
              >
                <span className="text-primary mt-1 shrink-0">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] font-medium tracking-wider uppercase text-muted mb-3">
            Value
          </h4>
          <p className="text-[14px] leading-relaxed text-dark/70">
            {offering.value}
          </p>
          <div className="mt-4 flex items-center gap-1 text-[13px] font-medium text-primary">
            Human in the Loop
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 ml-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Offerings() {
  const ref = useReveal()

  return (
    <section id="platform" className="py-20 md:py-28 border-t border-border">
      <div className="relative mx-auto max-w-container px-6 md:px-12">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div ref={ref} className="reveal">
          <div className="mb-14 md:mb-20 md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Our Offerings
              </span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-medium leading-tight tracking-tight">
              What We Deliver
            </h2>
            <p className="text-base md:text-lg text-muted mt-4 max-w-xl">
              Three specialized AI solutions, each backed by our composable
              enterprise platform and forward-deployed engineering model.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 md:pl-10">
            {offerings.map((offering, idx) => (
              <OfferingCard key={offering.title} offering={offering} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
