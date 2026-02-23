"use client"

import { useReveal } from "@/lib/useReveal"

const platformFeatures = [
  { label: "RAG Pipelines", category: "core" },
  { label: "AI Gateway", category: "core" },
  { label: "Agent Observability & Analytics", category: "core" },
  { label: "Secure, Hosted MCP Servers", category: "core" },
  { label: "Model Serving & Inference", category: "infra" },
  { label: "Model Performance Optimization", category: "infra" },
  { label: "GPU Optimization", category: "infra" },
  { label: "AI Security & Compliance", category: "infra" },
  { label: "Cost Optimization", category: "infra" },
  { label: "Evaluation Suite", category: "infra" },
]

const cloudFeatures = [
  "Kubernetes",
  "Observability",
  "CI/CD",
  "IaC",
  "Reliability",
  "Cloud Security",
]

export default function Platform() {
  const ref = useReveal()

  return (
    <section className="py-20 md:py-28 border-t border-border bg-dark text-white">
      <div className="relative mx-auto max-w-container px-6 md:px-12">
        <div ref={ref} className="reveal">
          {/* Section Header */}
          <div className="mb-14 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted-light">
                Agentic AI Platform
              </span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-medium leading-tight tracking-tight text-white">
              Intelligent Infrastructure
              <br />
              <span className="text-primary">for Agents</span>
            </h2>
            <p className="text-base md:text-lg text-white/50 mt-4 max-w-xl">
              Our composable enterprise AI platform runs on your cloud —
              providing the complete stack for building, deploying, and
              operating AI agents at scale.
            </p>
          </div>

          {/* Platform Architecture Visual */}
          <div className="rounded-xl border border-white/10 overflow-hidden">
            {/* Top: Platform Label */}
            <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-white/60">
                Moring Agentic AI Platform — On Your Cloud
              </span>
            </div>

            {/* Core AI Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5">
              {platformFeatures.map((feat, i) => (
                <div
                  key={feat.label}
                  className={`px-5 py-6 border-b border-white/10 ${
                    i % 5 !== 4 ? "md:border-r" : ""
                  } ${i % 2 !== 1 ? "border-r md:border-r" : "border-r-0 md:border-r"} hover:bg-white/5 transition-colors duration-300`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full mb-3 ${
                      feat.category === "core"
                        ? "bg-primary"
                        : "bg-white/30"
                    }`}
                  />
                  <p className="text-[13px] font-medium text-white/80 leading-snug">
                    {feat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Cloud Native Layer */}
            <div className="bg-white/[0.03] px-6 py-5 border-t border-white/10">
              <p className="text-[11px] font-medium tracking-wider uppercase text-white/40 mb-3">
                Cloud Native Platform
              </p>
              <div className="flex flex-wrap gap-3">
                {cloudFeatures.map((feat) => (
                  <span
                    key={feat}
                    className="text-[12px] text-white/50 bg-white/5 px-3 py-1.5 rounded-md border border-white/10"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Providers */}
            <div className="px-6 py-4 border-t border-white/10 flex flex-wrap items-center gap-4">
              <span className="text-[11px] font-medium tracking-wider uppercase text-white/30">
                Cloud Providers
              </span>
              {["AWS", "Azure", "GCP", "On-Premises"].map((p) => (
                <span
                  key={p}
                  className="text-[12px] text-white/40 font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
