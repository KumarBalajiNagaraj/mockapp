"use client"

import { useReveal } from "@/lib/useReveal"
import { Linkedin } from "lucide-react"

const team = [
  {
    name: "Rajarajan Pudupatti",
    role: "Founder & CEO",
    note: "AWS Hero Award Recipient",
    initials: "RP",
  },
  {
    name: "Balaji Nagaraj",
    role: "Chief AI Officer",
    note: "",
    initials: "BN",
  },
  {
    name: "Srini Kolusu",
    role: "COO",
    note: "",
    initials: "SK",
  },
]

const advisors = [
  {
    name: "Shiv Sundar",
    role: "Co-Founder & COO, Esper.io",
    note: "Series C Startup, raised $100M+",
    initials: "SS",
  },
  {
    name: "Sudalai Rajkumar",
    role: "Head of AI, Tiger Analytics",
    note: "Quadruple Kaggle Grandmaster",
    initials: "SR",
  },
]

export default function Team() {
  const ref = useReveal()

  return (
    <section id="about" className="py-20 md:py-28 border-t border-border">
      <div className="relative mx-auto max-w-container px-6 md:px-12">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div ref={ref} className="reveal">
          {/* Section Header */}
          <div className="mb-14 md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-medium leading-tight tracking-tight">
              Meet Our Team
            </h2>
          </div>

          {/* Leadership */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-16 md:pl-10">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`group p-6 md:p-8 border-b border-border hover:bg-primary/[0.02] transition-colors duration-300 ${
                  i < 2 ? "sm:border-r" : ""
                }`}
              >
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-light-gray flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="text-lg font-medium text-muted group-hover:text-primary transition-colors duration-300">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-[16px] font-medium text-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-[14px] text-muted mb-2">{member.role}</p>
                {member.note && (
                  <p className="text-[12px] text-primary font-medium">
                    {member.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Advisors */}
          <div className="md:pl-10">
            <p className="text-[13px] font-medium tracking-wider uppercase text-muted mb-8">
              Advisors
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {advisors.map((advisor, i) => (
                <div
                  key={advisor.name}
                  className={`group p-6 md:p-8 border-b border-border hover:bg-primary/[0.02] transition-colors duration-300 ${
                    i < advisors.length - 1 ? "sm:border-r" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                    <span className="text-sm font-medium text-muted group-hover:text-primary transition-colors duration-300">
                      {advisor.initials}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-medium text-dark mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-[13px] text-muted mb-1">
                    {advisor.role}
                  </p>
                  {advisor.note && (
                    <p className="text-[12px] text-primary/80 font-medium">
                      {advisor.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
