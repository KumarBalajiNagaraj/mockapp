import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Logo from "./Logo"

const footerLinks = {
  Solutions: [
    { label: "Services", href: "/services" },
    { label: "Platform", href: "/platform" },
    { label: "Industries", href: "/#industries" },
  ],
  Company: [
    { label: "About", href: "/#about" },
    { label: "Resources", href: "/resources" },
    { label: "Careers", href: "#" },
  ],
  Connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-container px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="mb-4">
              <Logo size="default" />
            </div>
            <p className="text-[14px] text-muted leading-relaxed max-w-xs mb-6">
              Applied AI for Enterprise Outcomes.
              <br />
              Built Right. Delivered Fast.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-white bg-dark-gray hover:bg-dark transition-colors duration-200 px-5 py-2.5 rounded-[6px]"
            >
              Get in Touch
              <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <p className="text-[12px] font-medium tracking-wider uppercase text-dark mb-5">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-muted hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] text-muted">
            &copy; {new Date().getFullYear()} Moring AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[13px] text-muted hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[13px] text-muted hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
