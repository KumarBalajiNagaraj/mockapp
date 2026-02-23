"use client"

import { useReveal } from "@/lib/useReveal"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
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

const LocationMap = dynamic(() => import("@/components/LocationMap"), { ssr: false })

/* ─── Founders Data ─── */
const founders = [
  {
    name: "Rajarajan Pudupatti",
    role: "Founder & CEO",
    bio: "AWS Hero Award recipient. 15+ years building enterprise platforms at scale. Previously led engineering teams at top-tier technology companies.",
    photo: "/images/rajarajan.jpeg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Balaji Nagaraj",
    role: "Chief AI Officer",
    bio: "Deep expertise in applied AI and machine learning. Architected production AI systems processing millions of transactions daily.",
    photo: "/images/balaji.jpeg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Srini Kolusu",
    role: "COO",
    bio: "Operations leader with a track record of scaling technology companies. Brings decades of experience in enterprise go-to-market and delivery.",
    photo: "/images/srini.jpeg",
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

/* ─── Office Locations ─── */
const locations = [
  { city: "Atlanta", country: "USA", label: "HQ", lat: 33.749, lng: -84.388 },
  { city: "Gothenburg", country: "Sweden", label: "AI Labs", lat: 57.709, lng: 11.975 },
  { city: "India", country: "India", label: "Office", lat: 12.972, lng: 77.594 },
  { city: "Dubai", country: "UAE", label: "Office", lat: 25.276, lng: 55.296 },
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

/* ─── Main About Page ─── */
export default function AboutPage() {
  const heroRef = useReveal()
  const missionRef = useReveal()
  const foundersRef = useReveal()
  const platformRef = useReveal()
  const approachRef = useReveal()
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

          {/* Hero Team Image */}
          <div className="md:pl-10">
            <div className="relative w-full aspect-[21/9] bg-light-gray rounded-2xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark/5 via-transparent to-primary/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center gap-5">
                  {founders.map((f) => (
                    <div
                      key={f.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-white shadow-lg"
                    >
                      <Image
                        src={f.photo}
                        alt={f.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
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
                  {/* Headshot */}
                  <div className="relative w-full aspect-[3/4] bg-light-gray rounded-xl overflow-hidden mb-6 group-hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/10" />
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
            <div className="rounded-xl border border-border overflow-hidden mb-8">
              <LocationMap locations={locations} />
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
                  href="/contact"
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
                href="/contact"
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
