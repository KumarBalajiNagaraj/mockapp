"use client"

import { useReveal } from "@/lib/useReveal"
import { Users, Wrench, Layers, Target, type LucideIcon } from "lucide-react"

interface Practice {
  icon: LucideIcon
  title: string
  description: string
}

const practices: Practice[] = [
  {
    icon: Users,
    title: "Forward-Deployed Engineering",
    description:
      "Every Moring engineer is forward-deployable, embedding directly with your team to make AI work in partnership with your people.",
  },
  {
    icon: Wrench,
    title: "SME Workbench",
    description:
      "Business experts stay in control. Our tools let SMEs configure, evaluate, and improve AI systems directly without engineering dependency.",
  },
  {
    icon: Layers,
    title: "Production Grade Software",
    description:
      "Production-grade technology components that accelerate time-to-value by months, not years. Built for enterprise reliability.",
  },
  {
    icon: Target,
    title: "Outcome Ownership",
    description:
      "We measure success by impact, not deliverables. Every system compounds value, making transformation continuous and measurable.",
  },
]

function PracticeCard({ practice, index }: { practice: Practice; index: number }) {
  const Icon = practice.icon
  return (
    <div
      className={[
        "group p-6 md:p-8 border-b border-border transition-colors duration-300 hover:bg-primary/[0.02]",
        index % 2 === 0 ? "sm:border-r" : "",
      ].join(" ")}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
        <Icon size={20} strokeWidth={1.5} className="text-primary" />
      </div>
      <h3 className="text-[16px] font-medium text-dark mb-2">
        {practice.title}
      </h3>
      <p className="text-[14px] leading-relaxed text-muted">
        {practice.description}
      </p>
    </div>
  )
}

export default function Practices() {
  const ref = useReveal()

  return (
    <section id="services" className="py-20 md:py-28 border-t border-border">
      <div className="relative mx-auto max-w-container px-6 md:px-12">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div ref={ref} className="reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 md:pl-10">
            <div className="lg:col-span-5 lg:sticky lg:top-[120px] lg:self-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-primary" />
                <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                  Our Practices
                </span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-medium leading-tight tracking-tight mb-6">
                Forward-Deployed
                <br />
                Engineering Meets
                <br />
                <span className="text-primary">SME Intelligence</span>
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We embed forward-deployed engineers and proprietary AI
                infrastructure to deliver real, operational results.
              </p>
              <p className="text-base text-muted/70 leading-relaxed mt-4">
                Our SME-driven model captures the knowledge that makes your
                business unique and converts it into reusable intelligence —
                the foundation of every AI system we build.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {practices.map((practice, i) => (
                  <PracticeCard key={practice.title} practice={practice} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
