"use client"

import { useState } from "react"
import { useReveal } from "@/lib/useReveal"
import Link from "next/link"
import {
  FileSearch,
  Radio,
  Rocket,
  Users,
  Wrench,
  Layers,
  Target,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react"

/* ─── Service Pillar Data ─── */
interface ServicePillar {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  color: string
  challenge: string
  solution: string[]
  capabilities: string[]
  value: string
  metric: string
  metricLabel: string
}

const pillars: ServicePillar[] = [
  {
    id: "document-ai",
    icon: FileSearch,
    title: "Agentic Document Processing",
    subtitle: "Finance, Claims & Underwriting",
    color: "bg-orange-50 border-orange-200",
    challenge:
      "Manual document processing is slow, error-prone, and expensive. Critical information is buried inside PDFs, emails, and scanned images — creating bottlenecks across finance and insurance operations.",
    solution: [
      "AI agents that classify documents, extract fields, and validate against business rules automatically",
      "Human-in-the-loop workflows that route exceptions and request missing information intelligently",
      "Seamless integration with systems of record, logging every decision for compliance and audit",
      "SME Workbench for domain experts to configure extraction schemas and validation rules without code",
    ],
    capabilities: [
      "Document Classification",
      "Field Extraction",
      "Business Rule Validation",
      "Exception Routing",
      "Compliance Logging",
      "Multi-format Support",
    ],
    value:
      "Lower processing cost, higher accuracy, faster cycle times, and fewer backlogs — with full audit trails.",
    metric: "80%",
    metricLabel: "Reduction in manual processing",
  },
  {
    id: "production-ops",
    icon: Radio,
    title: "AI for Production Ops",
    subtitle: "SRE, IT Ops & Operations",
    color: "bg-blue-50 border-blue-200",
    challenge:
      "Alert noise overwhelms on-call teams. Diagnosis is slow because context is scattered across tools. Teams rely on scarce subject matter experts to find root cause under pressure.",
    solution: [
      "Agentic AI workflows that investigate every alert and deliver root cause findings with evidence",
      "Automated context gathering from logs, metrics, traces, recent changes, and runbooks",
      "Investigation reports delivered in Slack with recommended next steps and remediation actions",
      "Out-of-the-box integration with Datadog, PagerDuty, Grafana, New Relic, and more",
    ],
    capabilities: [
      "Alert Investigation",
      "Root Cause Analysis",
      "Incident Correlation",
      "Runbook Automation",
      "Observability Integration",
      "SLA Tracking",
    ],
    value:
      "Drastically reduce MTTD and MTTR metrics while freeing engineers from repetitive investigation work.",
    metric: "60%",
    metricLabel: "Reduction in MTTR",
  },
  {
    id: "sales-acceleration",
    icon: Rocket,
    title: "Sales Acceleration with AI",
    subtitle: "Sales & Pre-Sales Teams",
    color: "bg-emerald-50 border-emerald-200",
    challenge:
      "Buyers don't trust isolated demos. It's difficult to show measurable value quickly inside real customer workflows, leading to longer sales cycles and lower win rates.",
    solution: [
      "Deploy AI agents directly in customer cloud — specialized in integration, data access, and connectors",
      "Forward-deployed engineers tailor the use case to real workflows with agentic AI in weeks, not months",
      "Instrument outcomes and deliver an executive-ready value report with ROI and impact metrics",
      "Reusable deployment patterns that accelerate each subsequent customer engagement",
    ],
    capabilities: [
      "Customer Cloud Deployment",
      "Workflow Integration",
      "ROI Measurement",
      "Value Reporting",
      "Rapid Piloting",
      "Executive Dashboards",
    ],
    value:
      "Shorter sales cycles, higher win rate, and faster deal closure through proven, measurable value.",
    metric: "3x",
    metricLabel: "Faster deal closure",
  },
]

/* ─── Approach Data ─── */
interface Approach {
  icon: LucideIcon
  title: string
  description: string
}

const approaches: Approach[] = [
  {
    icon: Users,
    title: "Forward-Deployed Engineering",
    description:
      "Every Moring engineer embeds directly with your team. We don't hand off — we partner to make AI work in your environment.",
  },
  {
    icon: Wrench,
    title: "SME Workbench",
    description:
      "Business experts stay in control. Our tools let domain specialists configure, evaluate, and improve AI systems without engineering dependency.",
  },
  {
    icon: Layers,
    title: "Production-Grade Platform",
    description:
      "Enterprise-ready components — RAG pipelines, model gateway, observability — that accelerate time-to-value by months.",
  },
  {
    icon: Target,
    title: "Outcome Ownership",
    description:
      "We measure success by business impact, not deliverables. Every system compounds value, making transformation continuous.",
  },
]

/* ─── SVG Illustration for each pillar ─── */
function ServiceIllustration({ pillarId }: { pillarId: string }) {
  if (pillarId === "document-ai") {
    return (
      <svg viewBox="0 0 400 280" fill="none" className="w-full h-auto">
        {/* Document stack */}
        <rect x="60" y="40" width="160" height="200" rx="8" fill="#fff" stroke="#e5e5e5" strokeWidth="1.5" />
        <rect x="50" y="50" width="160" height="200" rx="8" fill="#fff" stroke="#e5e5e5" strokeWidth="1.5" />
        <rect x="40" y="60" width="160" height="200" rx="8" fill="#fffefa" stroke="#e5e5e5" strokeWidth="1.5" />
        {/* Text lines on document */}
        <rect x="60" y="85" width="100" height="6" rx="3" fill="#e5e5e5" />
        <rect x="60" y="100" width="120" height="6" rx="3" fill="#e5e5e5" />
        <rect x="60" y="115" width="80" height="6" rx="3" fill="#e5e5e5" />
        <rect x="60" y="138" width="110" height="6" rx="3" fill="#e5e5e5" />
        <rect x="60" y="153" width="90" height="6" rx="3" fill="#e5e5e5" />
        {/* AI processing node */}
        <circle cx="300" cy="100" r="36" fill="#fff0eb" stroke="#ff612b" strokeWidth="2" />
        <text x="300" y="96" textAnchor="middle" fill="#ff612b" fontSize="10" fontWeight="600">AI</text>
        <text x="300" y="110" textAnchor="middle" fill="#ff612b" fontSize="8">Agent</text>
        {/* Arrows */}
        <path d="M200 120 L260 105" stroke="#ff612b" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />
        {/* Output nodes */}
        <rect x="260" y="160" width="100" height="32" rx="6" fill="#fff" stroke="#22c55e" strokeWidth="1.5" />
        <text x="310" y="180" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="500">Validated</text>
        <rect x="260" y="204" width="100" height="32" rx="6" fill="#fff" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="310" y="224" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="500">Review Needed</text>
        <path d="M300 136 L310 160" stroke="#858483" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M300 136 L310 204" stroke="#858483" strokeWidth="1" strokeDasharray="3 3" />
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0 0L8 3L0 6Z" fill="#ff612b" />
          </marker>
        </defs>
      </svg>
    )
  }
  if (pillarId === "production-ops") {
    return (
      <svg viewBox="0 0 400 280" fill="none" className="w-full h-auto">
        {/* Dashboard frame */}
        <rect x="30" y="30" width="340" height="220" rx="10" fill="#181818" />
        <rect x="30" y="30" width="340" height="36" rx="10" fill="#2a2a2a" />
        <circle cx="52" cy="48" r="5" fill="#ff5f57" />
        <circle cx="68" cy="48" r="5" fill="#febc2e" />
        <circle cx="84" cy="48" r="5" fill="#28c840" />
        {/* Alert bars */}
        <rect x="50" y="80" width="200" height="20" rx="4" fill="#ff612b" opacity="0.15" />
        <rect x="54" y="84" width="4" height="12" rx="2" fill="#ff612b" />
        <text x="66" y="94" fill="#ff612b" fontSize="9" fontWeight="500">CRITICAL: CPU spike on prod-api-3</text>
        <rect x="50" y="108" width="200" height="20" rx="4" fill="#f59e0b" opacity="0.1" />
        <rect x="54" y="112" width="4" height="12" rx="2" fill="#f59e0b" />
        <text x="66" y="122" fill="#f59e0b" fontSize="9" fontWeight="500">WARN: Memory usage &gt; 85%</text>
        <rect x="50" y="136" width="200" height="20" rx="4" fill="#22c55e" opacity="0.1" />
        <rect x="54" y="140" width="4" height="12" rx="2" fill="#22c55e" />
        <text x="66" y="150" fill="#22c55e" fontSize="9" fontWeight="500">RESOLVED: DB connection restored</text>
        {/* AI investigation panel */}
        <rect x="262" y="80" width="96" height="130" rx="6" fill="#1f1f1f" stroke="#ff612b" strokeWidth="1" />
        <text x="310" y="97" textAnchor="middle" fill="#ff612b" fontSize="8" fontWeight="600">AI INVESTIGATION</text>
        <rect x="272" y="106" width="76" height="6" rx="3" fill="#434343" />
        <rect x="272" y="118" width="60" height="6" rx="3" fill="#434343" />
        <rect x="272" y="130" width="70" height="6" rx="3" fill="#434343" />
        <text x="310" y="155" textAnchor="middle" fill="#22c55e" fontSize="8">Root Cause Found</text>
        {/* Metrics */}
        <text x="70" y="185" fill="#858483" fontSize="8">MTTD</text>
        <text x="70" y="200" fill="#fff" fontSize="14" fontWeight="600">2.3m</text>
        <text x="150" y="185" fill="#858483" fontSize="8">MTTR</text>
        <text x="150" y="200" fill="#fff" fontSize="14" fontWeight="600">8.1m</text>
        <text x="230" y="185" fill="#858483" fontSize="8">Alerts/Day</text>
        <text x="230" y="200" fill="#fff" fontSize="14" fontWeight="600">847</text>
      </svg>
    )
  }
  // Sales acceleration
  return (
    <svg viewBox="0 0 400 280" fill="none" className="w-full h-auto">
      {/* Pipeline funnel */}
      <path d="M60 60 L340 60 L280 140 L120 140 Z" fill="#fff0eb" stroke="#ff612b" strokeWidth="1.5" />
      <text x="200" y="95" textAnchor="middle" fill="#ff612b" fontSize="10" fontWeight="500">Customer Pipeline</text>
      <path d="M120 148 L280 148 L250 200 L150 200 Z" fill="#fff0eb" stroke="#ff612b" strokeWidth="1.5" opacity="0.8" />
      <text x="200" y="178" textAnchor="middle" fill="#ff612b" fontSize="9" fontWeight="500">AI Pilot Deployed</text>
      <path d="M150 208 L250 208 L230 248 L170 248 Z" fill="#ff612b" opacity="0.2" stroke="#ff612b" strokeWidth="1.5" />
      <text x="200" y="233" textAnchor="middle" fill="#ff612b" fontSize="9" fontWeight="600">Deal Closed</text>
      {/* Speed arrows */}
      <path d="M340 80 L370 80" stroke="#ff612b" strokeWidth="2" opacity="0.6" />
      <path d="M340 90 L380 90" stroke="#ff612b" strokeWidth="2" opacity="0.4" />
      <path d="M340 100 L360 100" stroke="#ff612b" strokeWidth="2" opacity="0.3" />
      {/* ROI badge */}
      <rect x="300" y="200" width="80" height="50" rx="8" fill="#fff" stroke="#22c55e" strokeWidth="1.5" />
      <text x="340" y="220" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="500">ROI Report</text>
      <text x="340" y="238" textAnchor="middle" fill="#22c55e" fontSize="16" fontWeight="700">3.2x</text>
    </svg>
  )
}

/* ─── Pillar Tab Component ─── */
function PillarTab({
  pillar,
  isActive,
  onClick,
}: {
  pillar: ServicePillar
  isActive: boolean
  onClick: () => void
}) {
  const Icon = pillar.icon
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-5 py-4 rounded-xl border text-left transition-all duration-300 w-full ${
        isActive
          ? `${pillar.color} border-current shadow-sm`
          : "bg-white border-border hover:border-primary/20"
      }`}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
          isActive ? "bg-primary/10" : "bg-light-gray"
        }`}
      >
        <Icon
          size={20}
          strokeWidth={1.5}
          className={isActive ? "text-primary" : "text-muted"}
        />
      </div>
      <div>
        <p
          className={`text-[15px] font-medium ${isActive ? "text-dark" : "text-dark/80"}`}
        >
          {pillar.title}
        </p>
        <p className="text-[12px] text-muted">{pillar.subtitle}</p>
      </div>
    </button>
  )
}

/* ─── Main Services Page ─── */
export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0)
  const heroRef = useReveal()
  const pillarsRef = useReveal()
  const approachRef = useReveal()
  const ctaRef = useReveal()

  const activePillar = pillars[activeTab]
  const ActiveIcon = activePillar.icon

  return (
    <>
      {/* Hero */}
      <section className="pt-[120px] pb-16 md:pb-24 border-b border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={heroRef} className="reveal md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Our Services
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[48px] font-medium leading-[1.1] tracking-tight mb-6">
              Transform Your Business{" "}
              <br className="hidden md:block" />
              with <span className="text-primary">Applied AI</span>
            </h1>
            <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
              Three specialized AI solutions backed by our composable enterprise
              platform and forward-deployed engineering model. We don&apos;t just build
              AI — we deploy it where it matters.
            </p>
          </div>
        </div>
      </section>

      {/* Service Pillars — Tabbed Interface */}
      <section className="py-16 md:py-24">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={pillarsRef} className="reveal md:pl-10">
            {/* Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
              {pillars.map((pillar, i) => (
                <PillarTab
                  key={pillar.id}
                  pillar={pillar}
                  isActive={activeTab === i}
                  onClick={() => setActiveTab(i)}
                />
              ))}
            </div>

            {/* Active Pillar Content */}
            <div className="bg-white rounded-2xl border border-border p-6 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <ActiveIcon size={24} strokeWidth={1.5} className="text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-medium text-dark">
                        {activePillar.title}
                      </h2>
                      <p className="text-[13px] text-muted">{activePillar.subtitle}</p>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-8">
                    <h3 className="text-[12px] font-semibold tracking-wider uppercase text-muted mb-2">
                      The Challenge
                    </h3>
                    <p className="text-[14px] leading-relaxed text-dark/70">
                      {activePillar.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h3 className="text-[12px] font-semibold tracking-wider uppercase text-muted mb-3">
                      How We Solve It
                    </h3>
                    <ul className="space-y-3">
                      {activePillar.solution.map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-dark/70">
                          <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Capabilities */}
                  <div className="mb-8">
                    <h3 className="text-[12px] font-semibold tracking-wider uppercase text-muted mb-3">
                      Key Capabilities
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activePillar.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="text-[12px] font-medium text-dark/60 bg-light-gray px-3 py-1.5 rounded-full"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Value + Metric */}
                  <div className="flex items-start gap-6 p-5 bg-primary/[0.03] rounded-xl border border-primary/10">
                    <div className="text-center shrink-0">
                      <p className="text-3xl font-semibold text-primary">
                        {activePillar.metric}
                      </p>
                      <p className="text-[11px] text-muted mt-1">
                        {activePillar.metricLabel}
                      </p>
                    </div>
                    <div className="border-l border-primary/10 pl-6">
                      <p className="text-[14px] leading-relaxed text-dark/70">
                        {activePillar.value}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Illustration */}
                <div className="flex items-center justify-center bg-light-gray/50 rounded-xl p-6">
                  <ServiceIllustration pillarId={activePillar.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={approachRef} className="reveal md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Our Approach
              </span>
            </div>
            <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-4">
              How We <span className="text-primary">Deliver</span>
            </h2>
            <p className="text-base text-muted max-w-xl mb-12">
              Every engagement combines platform technology with hands-on
              engineering to ensure measurable outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {approaches.map((a, i) => {
                const Icon = a.icon
                return (
                  <div
                    key={a.title}
                    className={`p-6 md:p-8 border-b border-border transition-colors hover:bg-primary/[0.02] ${
                      i < 3 ? "lg:border-r" : ""
                    } ${i % 2 === 0 ? "sm:border-r lg:border-r" : "sm:border-r-0"} ${i < 2 ? "" : "lg:border-r"}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={20} strokeWidth={1.5} className="text-primary" />
                    </div>
                    <h3 className="text-[15px] font-medium text-dark mb-2">
                      {a.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-muted">
                      {a.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div ref={ctaRef} className="reveal text-center">
            <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-4">
              Ready to See AI in{" "}
              <span className="text-primary">Action</span>?
            </h2>
            <p className="text-base text-muted max-w-lg mx-auto mb-8">
              Let&apos;s discuss how our forward-deployed engineering team can deliver
              measurable outcomes for your organization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-primary hover:bg-primary-hover transition-colors px-7 py-3.5 rounded-md"
              >
                Talk to Us
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-dark border border-border hover:border-primary/30 transition-colors px-7 py-3.5 rounded-md"
              >
                Explore Our Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
