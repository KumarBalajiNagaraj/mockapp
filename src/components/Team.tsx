"use client"

import Image from "next/image"
import { useReveal } from "@/lib/useReveal"

const team = [
  {
    name: "Rajarajan Pudupatti",
    role: "Founder & CEO",
    note: "AWS Hero Award Recipient",
    photo: "/images/rajarajan.jpeg",
  },
  {
    name: "Balaji Nagaraj",
    role: "Chief AI Officer",
    note: "",
    photo: "/images/balaji.jpeg",
  },
  {
    name: "Srini Kolusu",
    role: "COO",
    note: "",
    photo: "/images/srini.jpeg",
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 md:pl-10">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`group p-6 md:p-8 border-b border-border hover:bg-primary/[0.02] transition-colors duration-300 ${
                  i < 2 ? "sm:border-r" : ""
                }`}
              >
                {/* Photo */}
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-5 ring-2 ring-transparent group-hover:ring-primary/20 transition-all duration-300">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover grayscale"
                  />
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
        </div>
      </div>
    </section>
  )
}
