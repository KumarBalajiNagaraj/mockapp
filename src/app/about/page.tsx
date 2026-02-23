"use client"

import { useReveal } from "@/lib/useReveal"
import Link from "next/link"
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Zap,
  Users,
  Target,
  Shield,
  MapPin,
  CheckCircle2,
  Briefcase,
} from "lucide-react"

/* ─── Founders Data ─── */
const founders = [
  {
    name: "Rajarajan Pudupatti",
    role: "Founder & CEO",
    bio: "AWS Hero Award recipient. 15+ years building enterprise platforms at scale. Previously led engineering teams at top-tier technology companies.",
    initials: "RP",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Balaji Nagaraj",
    role: "Chief AI Officer",
    bio: "Deep expertise in applied AI and machine learning. Architected production AI systems processing millions of transactions daily.",
    initials: "BN",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Srini Kolusu",
    role: "COO",
    bio: "Operations leader with a track record of scaling technology companies. Brings decades of experience in enterprise go-to-market and delivery.",
    initials: "SK",
    linkedin: "#",
    twitter: "#",
  },
]

/* ─── Approach Differentiators ─── */
const differentiators = [
  {
    icon: Zap,
    title: "Speed as a Feature",
    description:
      "We compress timelines by deploying proven platform components on day one. No six-month discovery phases — working AI agents in your environment within weeks.",
  },
  {
    icon: Users,
    title: "Forward-Deployed Engineers",
    description:
      "Our engineers embed directly in your team. We don't hand off slide decks — we ship production systems side-by-side with your people.",
  },
  {
    icon: Target,
    title: "Outcome Ownership",
    description:
      "We measure success by business impact, not deliverables. Every engagement has a quantified target — cost reduction, cycle time, accuracy — and we hit it.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Everything runs on your cloud. Zero data exfiltration, full audit trails, SOC 2 compliant practices, and your existing security policies respected from day one.",
  },
]

/* ─── Advisors ─── */
const advisors = [
  {
    name: "Shiv Sundar",
    role: "Co-Founder & COO, Esper.io",
    note: "Series C startup, raised $100M+",
    initials: "SS",
  },
  {
    name: "Sudalai Rajkumar",
    role: "Head of AI, Tiger Analytics",
    note: "Quadruple Kaggle Grandmaster",
    initials: "SR",
  },
]

/* ─── Office Locations ─── */
const locations = [
  { city: "Bangalore", country: "India", label: "Engineering HQ", x: 68, y: 52 },
  { city: "Chennai", country: "India", label: "AI Lab", x: 67, y: 56 },
  { city: "Singapore", country: "Singapore", label: "APAC", x: 76, y: 60 },
  { city: "Boston", country: "USA", label: "US Office", x: 26, y: 35 },
]

/* ─── Career Traits ─── */
const careerTraits = [
  "You thrive in ambiguity and move fast without waiting for perfect information",
  "You've built production AI systems — not just prototypes and demos",
  "You believe enterprise software can be elegant, not just functional",
  "You care about measurable outcomes, not activity metrics",
  "You want to work with a small, senior team where every person matters",
  "You're excited about the intersection of AI and real business operations",
]

/* ─── World Map SVG ─── */
function WorldMapSVG() {
  return (
    <svg viewBox="0 0 800 400" fill="none" className="w-full h-auto">
      {/* Simplified world map outline */}
      {/* North America */}
      <path
        d="M80 120 Q100 100 140 95 Q180 90 200 100 Q220 90 240 95 Q260 100 270 120 Q280 140 270 160 Q260 180 240 190 Q220 200 200 220 Q190 240 170 250 Q150 240 130 230 Q110 220 100 200 Q90 180 80 160 Q70 140 80 120Z"
        fill="#f5f5f5"
        stroke="#e5e5e5"
        strokeWidth="1"
      />
      {/* South America */}
      <path
        d="M200 260 Q220 250 230 270 Q240 290 235 310 Q230 330 220 345 Q210 355 200 350 Q190 340 185 320 Q180 300 185 280 Q190 270 200 260Z"
        fill="#f5f5f5"
        stroke="#e5e5e5"
        strokeWidth="1"
      />
      {/* Europe */}
      <path
        d="M380 90 Q400 80 420 85 Q440 90 450 100 Q460 110 455 125 Q450 140 430 145 Q410 150 395 145 Q380 140 375 125 Q370 110 380 90Z"
        fill="#f5f5f5"
        stroke="#e5e5e5"
        strokeWidth="1"
      />
      {/* Africa */}
      <path
        d="M400 160 Q420 150 440 155 Q460 160 470 180 Q480 200 475 230 Q470 260 460 280 Q450 295 430 300 Q410 295 400 280 Q390 260 385 230 Q380 200 385 180 Q390 165 400 160Z"
        fill="#f5f5f5"
        stroke="#e5e5e5"
        strokeWidth="1"
      />
      {/* Asia (India region) */}
      <path
        d="M480 90 Q520 80 560 85 Q600 90 620 110 Q640 130 630 150 Q620 170 600 180 Q580 190 560 200 Q540 210 520 220 Q500 210 490 190 Q480 170 475 150 Q470 130 475 110 Q478 95 480 90Z"
        fill="#f5f5f5"
        stroke="#e5e5e5"
        strokeWidth="1"
      />
      {/* Southeast Asia */}
      <path
        d="M600 190 Q620 185 640 195 Q660 205 665 225 Q660 240 645 245 Q630 240 615 230 Q600 220 595 205 Q598 195 600 190Z"
        fill="#f5f5f5"
        stroke="#e5e5e5"
        strokeWidth="1"
      />
      {/* Australia */}
      <path
        d="M640 290 Q660 280 690 285 Q720 290 730 305 Q735 320 725 335 Q710 345 690 340 Q670 335 655 325 Q640 315 635 305 Q636 295 640 290Z"
        fill="#f5f5f5"
        stroke="#e5e5e5"
        strokeWidth="1"
      />

      {/* Grid dots for texture */}
      {Array.from({ length: 20 }).map((_, row) =>
        Array.from({ length: 40 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 20 + 10}
            cy={row * 20 + 10}
            r="0.5"
            fill="#e5e5e5"
            opacity="0.5"
          />
        ))
      )}

      {/* Location markers */}
      {locations.map((loc) => (
        <g key={loc.city}>
          {/* Pulse ring */}
          <circle
            cx={loc.x * 8}
            cy={loc.y * 6.5}
            r="12"
            fill="none"
            stroke="#ff612b"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values="8;16;8"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0;0.4"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Marker dot */}
          <circle
            cx={loc.x * 8}
            cy={loc.y * 6.5}
            r="5"
            fill="#ff612b"
          />
          <circle
            cx={loc.x * 8}
            cy={loc.y * 6.5}
            r="2"
            fill="white"
          />
        </g>
      ))}
    </svg>
  )
}

/* ─── Main About Page ─── */
export default function AboutPage() {
  const heroRef = useReveal()
  const missionRef = useReveal()
  const foundersRef = useReveal()
  const platformRef = useReveal()
  const approachRef = useReveal()
  const advisorsRef = useReveal()
  const locationsRef = useReveal()
  const careersRef = useReveal()

  return (
    <>
      {/* ────── Hero Section ────── */}
      <section className="pt-[120px] pb-16 md:pb-24 border-b border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={heroRef} className="reveal md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                About Us
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[52px] font-medium leading-[1.08] tracking-tight mb-6 max-w-3xl">
              We&apos;re re-engineering{" "}
              <span className="text-primary">enterprise AI</span> for the
              agentic era
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10">
              Working solutions over process. Measurable outcomes over slide decks.
              Production systems over proofs of concept.
            </p>
          </div>

          {/* Hero Team Image Placeholder */}
          <div className="md:pl-10">
            <div className="relative w-full aspect-[21/9] bg-light-gray rounded-2xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark/5 via-transparent to-primary/5" />
              {/* Placeholder pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    {founders.map((f) => (
                      <div
                        key={f.initials}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-border flex items-center justify-center"
                      >
                        <span className="text-lg md:text-xl font-medium text-muted">
                          {f.initials}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] text-muted">
                    Team photo placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── Mission Section ────── */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={missionRef} className="reveal md:pl-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: Label */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-px bg-primary" />
                  <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight">
                  AI that works in{" "}
                  <span className="text-primary">production</span>,{" "}
                  <br className="hidden md:block" />
                  not just in demos
                </h2>
              </div>

              {/* Right: Body copy */}
              <div className="space-y-5 text-[15px] leading-relaxed text-dark/70">
                <p>
                  Most enterprise AI projects stall between proof-of-concept and
                  production. The gap isn&apos;t technology — it&apos;s the
                  infrastructure, integration, and operational rigor needed to
                  make AI reliable at scale.
                </p>
                <p>
                  We built Moring to close that gap. Our agentic AI platform
                  handles the hard parts — RAG pipelines, model gateways,
                  observability, security — so your team can focus on the use
                  cases that move the business forward.
                </p>
                <p>
                  AI handles the repetitive, pattern-matching work. Humans focus
                  on strategy, judgment, and the edge cases that actually matter.
                  That&apos;s not replacing people — it&apos;s giving them
                  leverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── Founders Section ────── */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={foundersRef} className="reveal md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Founders
              </span>
            </div>
            <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-12">
              The People Behind{" "}
              <span className="text-primary">Moring</span>
            </h2>

            {/* Founder Cards — 3 column grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="group text-center"
                >
                  {/* Headshot placeholder */}
                  <div className="relative w-full aspect-[3/4] bg-light-gray rounded-xl overflow-hidden mb-6 group-hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white border-2 border-border flex items-center justify-center">
                        <span className="text-2xl font-medium text-muted">
                          {founder.initials}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-[11px] text-muted text-center">
                        Photo placeholder
                      </p>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-[18px] font-medium text-dark mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-[14px] text-primary font-medium mb-3">
                    {founder.role}
                  </p>
                  <p className="text-[13px] text-muted leading-relaxed mb-4 max-w-xs mx-auto">
                    {founder.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={founder.twitter}
                      className="w-9 h-9 rounded-full bg-light-gray hover:bg-primary/10 flex items-center justify-center transition-colors"
                      aria-label={`${founder.name} on Twitter`}
                    >
                      <Twitter size={15} className="text-muted" />
                    </a>
                    <a
                      href={founder.linkedin}
                      className="w-9 h-9 rounded-full bg-light-gray hover:bg-primary/10 flex items-center justify-center transition-colors"
                      aria-label={`${founder.name} on LinkedIn`}
                    >
                      <Linkedin size={15} className="text-muted" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────── Secret Sauce: The Platform ────── */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={platformRef} className="reveal md:pl-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Platform Screenshot Placeholder */}
              <div className="relative bg-dark rounded-xl overflow-hidden p-6 md:p-8">
                {/* Fake UI chrome */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <div className="flex-1 ml-4 h-6 bg-white/5 rounded-md" />
                </div>
                {/* Dashboard skeleton */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-1/3 h-24 bg-white/5 rounded-lg border border-white/10 p-3">
                      <div className="h-2 w-16 bg-primary/40 rounded mb-2" />
                      <div className="h-6 w-12 bg-white/20 rounded mt-3" />
                    </div>
                    <div className="w-1/3 h-24 bg-white/5 rounded-lg border border-white/10 p-3">
                      <div className="h-2 w-20 bg-primary/40 rounded mb-2" />
                      <div className="h-6 w-10 bg-white/20 rounded mt-3" />
                    </div>
                    <div className="w-1/3 h-24 bg-white/5 rounded-lg border border-white/10 p-3">
                      <div className="h-2 w-14 bg-primary/40 rounded mb-2" />
                      <div className="h-6 w-14 bg-white/20 rounded mt-3" />
                    </div>
                  </div>
                  <div className="h-32 bg-white/5 rounded-lg border border-white/10 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-24 bg-primary/40 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <div className="h-2 w-full bg-primary/20 rounded" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-2 w-3/4 bg-white/10 rounded" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-2 w-5/6 bg-white/10 rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 px-4 bg-primary rounded-md flex items-center">
                      <div className="h-2 w-16 bg-white/80 rounded" />
                    </div>
                    <div className="h-8 px-4 bg-white/10 rounded-md flex items-center">
                      <div className="h-2 w-12 bg-white/30 rounded" />
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-white/20 text-center mt-4">
                  Platform UI placeholder
                </p>
              </div>

              {/* Right: Description */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-px bg-primary" />
                  <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                    The Secret Sauce
                  </span>
                </div>
                <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-4">
                  The <span className="text-primary">Moring</span> Platform
                </h2>
                <p className="text-[15px] leading-relaxed text-dark/70 mb-6">
                  Our proprietary agentic AI platform is the backbone of
                  everything we deliver. It&apos;s not just tools — it&apos;s a
                  complete infrastructure layer that deploys on your cloud and
                  gives your AI agents everything they need to run in production.
                </p>
                <p className="text-[15px] leading-relaxed text-dark/70 mb-8">
                  RAG pipelines, model gateway, agent observability, security,
                  cost optimization — all pre-built, battle-tested, and ready on
                  day one. Your team focuses on business logic. We handle the
                  infrastructure.
                </p>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  Explore the Platform
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── Approach / Differentiators ────── */}
      <section className="py-16 md:py-24 border-b border-border">
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
              What Makes Us{" "}
              <span className="text-primary">Different</span>
            </h2>
            <p className="text-base text-muted max-w-xl mb-12">
              We&apos;re not another consulting firm that talks about AI.
              We&apos;re engineers who ship it.
            </p>

            {/* 4 Differentiator Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {differentiators.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className={`p-8 md:p-10 border-b border-border hover:bg-primary/[0.02] transition-colors duration-300 ${
                      i % 2 === 0 ? "md:border-r" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon size={22} strokeWidth={1.5} className="text-primary" />
                    </div>
                    <h3 className="text-[17px] font-medium text-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ────── Advisors & Investors ────── */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={advisorsRef} className="reveal md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Advisors & Backers
              </span>
            </div>
            <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-12">
              Backed by <span className="text-primary">Industry Leaders</span>
            </h2>

            {/* Advisor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {advisors.map((advisor) => (
                <div
                  key={advisor.name}
                  className="group p-6 bg-white rounded-xl border border-border hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-light-gray flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <span className="text-[15px] font-medium text-muted group-hover:text-primary transition-colors">
                      {advisor.initials}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-medium text-dark mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-[13px] text-muted mb-2">{advisor.role}</p>
                  <p className="text-[12px] text-primary font-medium">
                    {advisor.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Investor Logos Placeholder */}
            <div>
              <p className="text-[12px] font-semibold tracking-wider uppercase text-muted mb-6">
                Investors & Partners
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {["Partner 1", "Partner 2", "Partner 3"].map((partner) => (
                  <div
                    key={partner}
                    className="h-10 px-8 bg-light-gray rounded-lg flex items-center justify-center"
                  >
                    <span className="text-[13px] font-medium text-muted/60">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── Locations ────── */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={locationsRef} className="reveal md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Global Presence
              </span>
            </div>
            <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-4">
              Where We <span className="text-primary">Operate</span>
            </h2>
            <p className="text-base text-muted max-w-xl mb-12">
              Strategically located to serve enterprise clients across time zones,
              with engineering depth in India and client-facing presence worldwide.
            </p>

            {/* World Map */}
            <div className="bg-white rounded-xl border border-border p-6 md:p-8 mb-8">
              <WorldMapSVG />
            </div>

            {/* Location Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {locations.map((loc) => (
                <div
                  key={loc.city}
                  className="p-4 md:p-5 bg-white rounded-xl border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <h3 className="text-[15px] font-medium text-dark">
                    {loc.city}
                  </h3>
                  <p className="text-[12px] text-muted">{loc.country}</p>
                  <p className="text-[11px] text-primary font-medium mt-1">
                    {loc.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────── Careers Section ────── */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={careersRef} className="reveal md:pl-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-px bg-primary" />
                  <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                    Careers
                  </span>
                </div>
                <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-4">
                  Build the Future of{" "}
                  <span className="text-primary">Enterprise AI</span>
                </h2>
                <p className="text-[15px] leading-relaxed text-muted mb-8">
                  We&apos;re a small, senior team that punches way above its
                  weight. If you want to work on hard problems with smart people
                  and see your work running in production at enterprise scale —
                  let&apos;s talk.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-primary hover:bg-primary-hover transition-colors px-7 py-3.5 rounded-md"
                >
                  <Briefcase size={16} />
                  View Open Roles
                </Link>
              </div>

              {/* Right: Traits checklist */}
              <div className="flex items-center">
                <div className="space-y-4">
                  <p className="text-[12px] font-semibold tracking-wider uppercase text-muted mb-4">
                    You might be a fit if...
                  </p>
                  {careerTraits.map((trait) => (
                    <div key={trait} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <p className="text-[14px] leading-relaxed text-dark/70">
                        {trait}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── CTA Section ────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="reveal text-center">
            <h2 className="text-2xl md:text-[36px] font-medium leading-tight tracking-tight mb-4">
              Ready to Work With{" "}
              <span className="text-primary">Us</span>?
            </h2>
            <p className="text-base text-muted max-w-lg mx-auto mb-8">
              Whether you want to explore our platform, discuss a use case, or
              join our team — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-primary hover:bg-primary-hover transition-colors px-7 py-3.5 rounded-md"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-dark border border-border hover:border-primary/30 transition-colors px-7 py-3.5 rounded-md"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
