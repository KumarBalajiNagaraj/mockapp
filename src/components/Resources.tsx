"use client"

import { useReveal } from "@/lib/useReveal"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    date: "2025",
    tag: "Agentic AI",
    title: "Building Production-Ready Agentic AI Systems",
    excerpt:
      "How we architect reliable, observable AI agent pipelines for enterprise document processing at scale.",
  },
  {
    date: "2025",
    tag: "Platform",
    title: "The Composable AI Platform Approach",
    excerpt:
      "Why a modular, composable platform beats monolithic AI solutions for enterprise deployments.",
  },
  {
    date: "2025",
    tag: "Case Study",
    title: "Reducing MTTR by 60% with AI-Powered Incident Diagnosis",
    excerpt:
      "How AI agents transformed production operations for a leading SaaS company.",
  },
]

export default function Resources() {
  const ref = useReveal()

  return (
    <section id="resources" className="py-20 md:py-28 border-t border-border">
      <div className="relative mx-auto max-w-container px-6 md:px-12">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div ref={ref} className="reveal">
          {/* Section Header */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14 md:pl-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-primary" />
                <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                  Resources
                </span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-medium leading-tight tracking-tight">
                AI Insights & Resources
              </h2>
            </div>
            <a
              href="/resources"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary hover:underline"
            >
              View All Resources
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:pl-10">
            {articles.map((article, i) => (
              <a
                key={article.title}
                href="#"
                className={`group block p-6 md:p-8 border-b border-border hover:bg-primary/[0.02] transition-colors duration-300 ${
                  i < 2 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[12px] text-muted">{article.date}</span>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {article.tag}
                  </span>
                </div>
                <h3 className="text-[16px] font-medium text-dark mb-3 group-hover:text-primary transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-muted mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-[13px] font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Read more <ArrowRight size={13} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
