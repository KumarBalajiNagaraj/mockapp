"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Send, Bot, User, ArrowRight, Mail, Sparkles } from "lucide-react"
import Link from "next/link"

/* ─── Chat Message Types ─── */
interface Message {
  id: string
  role: "ai" | "user"
  text: string
  options?: string[]
}

/* ─── Conversation Flow ─── */
const FLOWS: Record<string, { text: string; options?: string[] }> = {
  greeting: {
    text: "Hi there! I'm Moring's AI assistant. I'm here to help you get connected with the right team.\n\nWhat brings you here today?",
    options: [
      "I want to explore AI solutions for my business",
      "I'd like to book a demo",
      "I have a partnership inquiry",
      "Something else",
    ],
  },
  explore: {
    text: "Great choice! We specialize in three core areas:\n\n**1. Agentic AI Platform** — Infrastructure for AI agents at enterprise scale\n**2. AI-Powered Document Processing** — Intelligent extraction and analysis\n**3. Production AI Ops** — Monitoring, deployment, and optimization\n\nWhich area interests you most?",
    options: [
      "Agentic AI Platform",
      "Document Processing",
      "Production AI Ops",
      "I'm not sure yet — help me figure it out",
    ],
  },
  demo: {
    text: "We'd love to show you what Moring can do. Our demos are tailored to your specific use case.\n\nTo get you set up, could you share your **name** and **work email**? Our team will reach out within 24 hours to schedule a time that works.",
  },
  partnership: {
    text: "We're always open to meaningful partnerships. Whether you're a technology provider, systems integrator, or consultancy — let's explore how we can work together.\n\nPlease share a brief description of the opportunity and your **contact details**, and our partnerships team will get back to you.",
  },
  other: {
    text: "No problem! Feel free to tell me what's on your mind, and I'll make sure your message gets to the right person at Moring.",
  },
  interest_response: {
    text: "Excellent! Our team has deep expertise in that area. To connect you with the right specialist, could you share:\n\n1. Your **name** and **company**\n2. Your **work email**\n3. A brief description of your use case\n\nOr if you prefer, you can email us directly.",
  },
  thanks: {
    text: "Thank you! I've noted your message. Our team will review it and get back to you within **24 hours**.\n\nIn the meantime, feel free to explore our [Services](/services) or [Platform](/platform) pages.\n\nIs there anything else I can help with?",
    options: ["No, that's all — thanks!", "Yes, I have another question"],
  },
  farewell: {
    text: "Great talking with you! If you need anything else, you can always come back here or email us at **rajarajan@moring.ai**.\n\nHave a wonderful day!",
  },
}

/* ─── Typing indicator ─── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:0ms]" />
      <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:150ms]" />
      <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:300ms]" />
    </div>
  )
}

/* ─── Render markdown-lite text ─── */
function RenderText({ text }: { text: string }) {
  const parts = text.split("\n").map((line, i) => {
    // Bold
    const boldified = line.replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="font-semibold text-dark">$1</strong>'
    )
    // Links
    const linked = boldified.replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-primary hover:underline">$1</a>'
    )
    return (
      <span key={i}>
        {i > 0 && <br />}
        <span dangerouslySetInnerHTML={{ __html: linked }} />
      </span>
    )
  })
  return <>{parts}</>
}

/* ─── Main Contact Page ─── */
export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  const addAiMessage = useCallback(
    (flowKey: string) => {
      const flow = FLOWS[flowKey]
      if (!flow) return

      setIsTyping(true)
      const delay = Math.min(flow.text.length * 8, 1800)

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            role: "ai",
            text: flow.text,
            options: flow.options,
          },
        ])
        setIsTyping(false)
      }, delay)
    },
    []
  )

  const startChat = useCallback(() => {
    setHasStarted(true)
    addAiMessage("greeting")
  }, [addAiMessage])

  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: "user", text: option },
    ])

    // Remove options from previous AI message
    setMessages((prev) =>
      prev.map((m) =>
        m.options ? { ...m, options: undefined } : m
      )
    )

    // Determine response
    setTimeout(() => {
      if (option.includes("explore AI solutions")) addAiMessage("explore")
      else if (option.includes("book a demo")) addAiMessage("demo")
      else if (option.includes("partnership")) addAiMessage("partnership")
      else if (option.includes("Something else")) addAiMessage("other")
      else if (
        option.includes("Agentic") ||
        option.includes("Document") ||
        option.includes("Production") ||
        option.includes("not sure")
      )
        addAiMessage("interest_response")
      else if (option.includes("that's all")) addAiMessage("farewell")
      else if (option.includes("another question")) addAiMessage("other")
      else addAiMessage("thanks")
    }, 300)
  }

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: "user", text: input.trim() },
    ])
    setInput("")

    // Remove options from previous AI message
    setMessages((prev) =>
      prev.map((m) => (m.options ? { ...m, options: undefined } : m))
    )

    setTimeout(() => addAiMessage("thanks"), 400)
  }

  return (
    <div className="min-h-screen pt-[100px] pb-20">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ─── Left Column: Context ─── */}
          <div className="lg:col-span-4 lg:pt-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Contact
              </span>
            </div>
            <h1 className="text-3xl md:text-[40px] font-medium leading-tight tracking-tight mb-5">
              Let&apos;s Build{" "}
              <span className="text-primary">Together</span>
            </h1>
            <p className="text-[15px] leading-relaxed text-muted mb-10">
              Our AI assistant will help route your inquiry to the right team.
              Or reach out directly — we typically respond within 24 hours.
            </p>

            {/* Direct contact info */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-dark mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:rajarajan@moring.ai"
                    className="text-[14px] text-primary hover:underline"
                  >
                    rajarajan@moring.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Sparkles size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-dark mb-0.5">
                    Response Time
                  </p>
                  <p className="text-[14px] text-muted">
                    Within 24 hours, usually sooner
                  </p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-[12px] font-medium tracking-wider uppercase text-muted mb-4">
                Quick Links
              </p>
              <div className="space-y-2">
                {[
                  { label: "Explore Services", href: "/services" },
                  { label: "View Platform", href: "/platform" },
                  { label: "About Us", href: "/about" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-[14px] text-dark/70 hover:text-primary transition-colors py-1"
                  >
                    <ArrowRight size={14} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Right Column: Chat Interface ─── */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-border shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col h-[600px] md:h-[640px]">
              {/* Chat Header */}
              <div className="px-6 py-4 border-b border-border bg-light-gray/50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-dark">
                    Moring AI Assistant
                  </p>
                  <p className="text-[12px] text-muted">
                    {isTyping ? "Typing..." : "Online"}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[11px] text-muted">Live</span>
                </div>
              </div>

              {/* Chat Messages Area */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
                {!hasStarted ? (
                  /* Landing State */
                  <div className="flex flex-col items-center justify-center h-full text-center px-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                      <Sparkles
                        size={28}
                        className="text-primary"
                      />
                    </div>
                    <h3 className="text-[20px] font-medium text-dark mb-2">
                      AI-Powered Contact
                    </h3>
                    <p className="text-[14px] text-muted leading-relaxed max-w-sm mb-8">
                      Skip the forms. Our AI assistant will understand your
                      needs and connect you with the right team instantly.
                    </p>
                    <button
                      onClick={startChat}
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-primary hover:bg-primary-hover transition-all duration-200 px-8 py-3.5 rounded-lg shadow-[0_2px_8px_rgba(255,97,43,0.25)] hover:shadow-[0_4px_16px_rgba(255,97,43,0.35)]"
                    >
                      <Sparkles size={16} />
                      Start Conversation
                    </button>
                  </div>
                ) : (
                  /* Messages */
                  <>
                    {messages.map((msg) => (
                      <div key={msg.id}>
                        <div
                          className={`flex gap-3 ${
                            msg.role === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          {msg.role === "ai" && (
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Bot size={16} className="text-primary" />
                            </div>
                          )}
                          <div
                            className={`max-w-[80%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed ${
                              msg.role === "user"
                                ? "bg-primary text-white rounded-br-md"
                                : "bg-light-gray text-dark/80 rounded-bl-md"
                            }`}
                          >
                            <RenderText text={msg.text} />
                          </div>
                          {msg.role === "user" && (
                            <div className="w-8 h-8 rounded-full bg-dark/10 flex items-center justify-center shrink-0 mt-0.5">
                              <User size={16} className="text-dark/60" />
                            </div>
                          )}
                        </div>

                        {/* Quick reply options */}
                        {msg.options && (
                          <div className="ml-11 mt-3 flex flex-wrap gap-2">
                            {msg.options.map((option) => (
                              <button
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                className="text-[13px] text-dark/70 bg-white border border-border hover:border-primary/40 hover:text-primary px-4 py-2 rounded-full transition-all duration-200 hover:shadow-sm"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex gap-3 justify-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Bot size={16} className="text-primary" />
                        </div>
                        <div className="bg-light-gray rounded-2xl rounded-bl-md">
                          <TypingDots />
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input Area */}
              {hasStarted && (
                <div className="px-6 py-4 border-t border-border bg-white">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSend()
                    }}
                    className="flex items-center gap-3"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 text-[14px] text-dark bg-light-gray rounded-xl px-4 py-3 outline-none border border-transparent focus:border-primary/30 transition-colors placeholder:text-muted/60"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim()}
                      className="w-10 h-10 rounded-xl bg-primary hover:bg-primary-hover disabled:bg-border disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                      <Send
                        size={16}
                        className="text-white"
                        strokeWidth={2}
                      />
                    </button>
                  </form>
                  <p className="text-[11px] text-muted/60 mt-2 text-center">
                    Or email us directly at{" "}
                    <a
                      href="mailto:rajarajan@moring.ai"
                      className="text-primary/60 hover:text-primary"
                    >
                      rajarajan@moring.ai
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
