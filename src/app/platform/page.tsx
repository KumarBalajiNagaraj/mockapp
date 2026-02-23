"use client"

import { useReveal } from "@/lib/useReveal"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  Shield,
  Cpu,
  BarChart3,
  Globe,
  Zap,
  Eye,
  Server,
  DollarSign,
  TestTube,
  GitBranch,
  Lock,
  Cloud,
  Gauge,
  Workflow,
  type LucideIcon,
} from "lucide-react"

/* ─── Platform Component Data ─── */
interface PlatformFeature {
  icon: LucideIcon
  title: string
  description: string
  tag: string
}

const coreComponents: PlatformFeature[] = [
  {
    icon: Database,
    title: "RAG Pipelines",
    description:
      "End-to-end retrieval-augmented generation pipelines with advanced chunking, embedding, and retrieval strategies. Support for multi-modal documents and custom knowledge bases.",
    tag: "Data",
  },
  {
    icon: Globe,
    title: "AI Gateway",
    description:
      "Unified model routing with intelligent load balancing, fallback strategies, rate limiting, and cost tracking across multiple LLM providers.",
    tag: "Routing",
  },
  {
    icon: Eye,
    title: "Agent Observability & Analytics",
    description:
      "Full visibility into agent behavior — trace every decision, monitor latency, track token usage, and detect anomalies in real-time.",
    tag: "Monitoring",
  },
  {
    icon: Server,
    title: "Secure, Hosted MCP Servers",
    description:
      "Managed Model Context Protocol servers that securely connect AI agents to enterprise tools, APIs, and data sources with granular access controls.",
    tag: "Integration",
  },
  {
    icon: Cpu,
    title: "GPU Optimization",
    description:
      "Intelligent GPU scheduling and resource allocation. Maximize hardware utilization while minimizing inference costs across multi-tenant workloads.",
    tag: "Compute",
  },
  {
    icon: Zap,
    title: "Model Serving & Inference Stack",
    description:
      "High-performance model serving with auto-scaling, batching, and caching. Support for custom models, fine-tuned variants, and multi-model pipelines.",
    tag: "Inference",
  },
  {
    icon: BarChart3,
    title: "Model Performance Optimization",
    description:
      "Continuous model evaluation, A/B testing, and automatic prompt optimization. Track accuracy, latency, and cost metrics across model versions.",
    tag: "Optimization",
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description:
      "Enterprise-grade security with data encryption, PII detection, prompt injection prevention, and audit logging for regulatory compliance.",
    tag: "Security",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description:
      "Real-time cost tracking and optimization across all AI operations. Set budgets, get alerts, and automatically route to cost-effective models.",
    tag: "FinOps",
  },
  {
    icon: TestTube,
    title: "Evaluation Suite",
    description:
      "Comprehensive evaluation framework for testing agent behavior, accuracy, safety, and reliability before production deployment.",
    tag: "Testing",
  },
]

const cloudNative = [
  { label: "Kubernetes", icon: "K8s" },
  { label: "Observability", icon: "OBS" },
  { label: "CI/CD", icon: "CI" },
  { label: "IaC", icon: "IAC" },
  { label: "Reliability", icon: "SRE" },
  { label: "Cloud Security & Compliance", icon: "SEC" },
]

const cloudProviders = ["AWS", "Azure", "GCP", "On-Premises"]

/* ─── Architecture Diagram SVG ─── */
function ArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px] max-w-4xl mx-auto">
        {/* Our AI Infra Label */}
        <div className="flex items-start gap-4 mb-2">
          <div className="w-32 shrink-0 pt-2">
            <p className="text-[11px] font-medium text-primary">Our</p>
            <p className="text-[13px] font-semibold text-dark">New AI Infra</p>
            <p className="text-[13px] font-semibold text-dark">On your Cloud</p>
          </div>
          <div className="flex-1 relative">
            {/* Blue accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
            {/* Dark platform box */}
            <div className="bg-dark rounded-xl p-6 ml-2">
              <h3 className="text-white text-lg font-medium mb-6 text-center">
                Moring Agentic AI Platform
              </h3>
              {/* Grid of components */}
              <div className="grid grid-cols-4 gap-2.5 mb-3">
                {coreComponents.slice(0, 8).map((comp) => (
                  <div
                    key={comp.title}
                    className="bg-primary rounded-lg px-3 py-3 text-center"
                  >
                    <p className="text-white text-[11px] font-medium leading-tight">
                      {comp.title}
                    </p>
                  </div>
                ))}
              </div>
              {/* Bottom row (2 items spanning) */}
              <div className="grid grid-cols-4 gap-2.5">
                <div className="bg-primary rounded-lg px-3 py-3 text-center">
                  <p className="text-white text-[11px] font-medium leading-tight">
                    Cost Optimization
                  </p>
                </div>
                <div className="col-span-2" />
                <div className="bg-primary rounded-lg px-3 py-3 text-center">
                  <p className="text-white text-[11px] font-medium leading-tight">
                    Evaluation Suite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Native Platform */}
        <div className="flex items-start gap-4 mt-3">
          <div className="w-32 shrink-0 pt-4">
            <p className="text-[11px] font-medium text-primary">Your</p>
            <p className="text-[13px] font-semibold text-dark">Existing Cloud</p>
            <p className="text-[13px] font-semibold text-dark">Infrastructure</p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
            <div className="bg-[#e8e8e8] rounded-xl p-6 ml-2">
              <h4 className="text-dark text-[14px] font-semibold mb-4">
                Cloud Native Platform
              </h4>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {cloudNative.map((item) => (
                  <div
                    key={item.label}
                    className="bg-dark rounded-md px-3 py-2.5 text-center"
                  >
                    <p className="text-white text-[11px] font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              {/* Cloud Providers */}
              <div className="flex items-center gap-3 pt-3 border-t border-dark/10">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-dark/60">
                  Cloud Providers
                </p>
                <div className="flex items-center gap-4">
                  {cloudProviders.map((provider) => (
                    <span
                      key={provider}
                      className="text-[12px] font-medium text-dark/80"
                    >
                      {provider}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Feature Card ─── */
function FeatureCard({ feature }: { feature: PlatformFeature }) {
  const Icon = feature.icon
  return (
    <div className="group p-6 md:p-8 bg-white rounded-xl border border-border hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon size={20} strokeWidth={1.5} className="text-primary" />
        </div>
        <span className="text-[10px] font-semibold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          {feature.tag}
        </span>
      </div>
      <h3 className="text-[16px] font-medium text-dark mb-2">{feature.title}</h3>
      <p className="text-[13px] leading-relaxed text-muted">{feature.description}</p>
    </div>
  )
}

/* ─── Main Platform Page ─── */
export default function PlatformPage() {
  const heroRef = useReveal()
  const diagramRef = useReveal()
  const featuresRef = useReveal()
  const benefitsRef = useReveal()
  const ctaRef = useReveal()

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
                Platform
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[48px] font-medium leading-[1.1] tracking-tight mb-4">
              Agentic <span className="text-primary">AI Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-3">
              Intelligent Infrastructure for Agents
            </p>
            <p className="text-base text-muted/80 max-w-2xl leading-relaxed mb-8">
              A composable, enterprise-grade platform that provides the
              infrastructure primitives your AI agents need — from RAG pipelines
              and model gateways to observability and security. Deployed on your
              cloud, managed by our team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-primary hover:bg-primary-hover transition-colors px-7 py-3.5 rounded-md"
              >
                Request a Demo
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-dark border border-border hover:border-primary/30 transition-colors px-7 py-3.5 rounded-md"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={diagramRef} className="reveal md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Architecture
              </span>
            </div>
            <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-4">
              Platform <span className="text-primary">Overview</span>
            </h2>
            <p className="text-base text-muted max-w-xl mb-12">
              Our platform deploys on your existing cloud infrastructure,
              adding a powerful AI layer without disrupting what already works.
            </p>

            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* Core Components Grid */}
      <section className="py-16 md:py-24">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={featuresRef} className="reveal md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Core Components
              </span>
            </div>
            <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-4">
              Everything You Need to{" "}
              <span className="text-primary">Build & Run</span> AI
            </h2>
            <p className="text-base text-muted max-w-xl mb-12">
              Each component is production-grade on its own. Together, they form
              the most complete infrastructure for enterprise agentic AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreComponents.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — Alternating Layout */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={benefitsRef} className="reveal md:pl-10 space-y-20">
            {/* Benefit 1: Deploy Anywhere */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-dark mb-4">
                  Deploy on <span className="text-primary">Your Cloud</span>
                </h3>
                <p className="text-[14px] leading-relaxed text-muted mb-6">
                  Our platform runs on your existing cloud infrastructure — AWS,
                  Azure, GCP, or on-premises. Your data never leaves your
                  environment, and you maintain full control.
                </p>
                <ul className="space-y-3">
                  {[
                    "Multi-cloud and hybrid deployment support",
                    "Zero data exfiltration — everything stays in your VPC",
                    "Kubernetes-native with Helm charts and Terraform modules",
                    "SOC 2, ISO 27001, and HIPAA compliant infrastructure",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[13px] text-dark/70"
                    >
                      <Lock size={14} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dark rounded-xl p-8 text-center">
                <div className="flex items-center justify-center gap-6 mb-6">
                  {cloudProviders.map((p) => (
                    <div key={p} className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-2 mx-auto">
                        <Cloud size={20} className="text-white/80" />
                      </div>
                      <p className="text-[11px] text-white/60 font-medium">{p}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-white/40">
                  Your infrastructure. Our AI layer. Full control.
                </p>
              </div>
            </div>

            {/* Benefit 2: Composable Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-light-gray rounded-xl p-8">
                <div className="grid grid-cols-3 gap-3">
                  {["RAG", "Gateway", "Observe", "Serve", "Secure", "Eval"].map(
                    (label, i) => (
                      <div
                        key={label}
                        className="bg-white rounded-lg p-4 text-center border border-border"
                      >
                        <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                          <Workflow size={14} className="text-primary" />
                        </div>
                        <p className="text-[11px] font-medium text-dark">{label}</p>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="h-px flex-1 bg-primary/20" />
                  <p className="text-[11px] font-medium text-primary">Composable</p>
                  <div className="h-px flex-1 bg-primary/20" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-xl md:text-2xl font-medium text-dark mb-4">
                  <span className="text-primary">Composable</span> by Design
                </h3>
                <p className="text-[14px] leading-relaxed text-muted mb-6">
                  Start with a single component and expand as you grow. Each
                  module works independently and integrates seamlessly with your
                  existing tools. No big-bang deployment required.
                </p>
                <ul className="space-y-3">
                  {[
                    "Incremental adoption — start small, scale fast",
                    "Works with your existing observability and CI/CD tools",
                    "API-first design with comprehensive SDKs",
                    "Each component production-ready on its own",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[13px] text-dark/70"
                    >
                      <GitBranch size={14} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefit 3: Production-Grade */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-dark mb-4">
                  Built for <span className="text-primary">Production</span>
                </h3>
                <p className="text-[14px] leading-relaxed text-muted mb-6">
                  Enterprise AI needs the same rigor as enterprise software. Our
                  platform bakes in reliability, security, and observability from
                  day one — not as an afterthought.
                </p>
                <ul className="space-y-3">
                  {[
                    "99.9% uptime SLA with automated failover",
                    "Real-time cost tracking and budget controls",
                    "Full audit trails for compliance and governance",
                    "Automated evaluation before every deployment",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[13px] text-dark/70"
                    >
                      <Gauge size={14} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dark rounded-xl p-8">
                <div className="space-y-4">
                  {[
                    { label: "Uptime", value: "99.9%", bar: "w-[99%]" },
                    { label: "Avg Latency", value: "< 200ms", bar: "w-[85%]" },
                    { label: "Cost Savings", value: "40%", bar: "w-[70%]" },
                    { label: "Security Score", value: "A+", bar: "w-[95%]" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between text-[12px] mb-1.5">
                        <span className="text-white/60">{stat.label}</span>
                        <span className="text-white font-medium">
                          {stat.value}
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-primary rounded-full ${stat.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div ref={ctaRef} className="reveal text-center">
            <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-4">
              Ready to Build on{" "}
              <span className="text-primary">Moring AI</span>?
            </h2>
            <p className="text-base text-muted max-w-lg mx-auto mb-8">
              See how our platform accelerates your AI initiatives. Get a
              personalized demo from our engineering team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-primary hover:bg-primary-hover transition-colors px-7 py-3.5 rounded-md"
              >
                Request a Demo
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-dark border border-border hover:border-primary/30 transition-colors px-7 py-3.5 rounded-md"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
