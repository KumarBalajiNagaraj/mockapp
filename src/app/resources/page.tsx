"use client"

import { useReveal } from "@/lib/useReveal"
import Link from "next/link"
import { ArrowRight, Clock, BookOpen } from "lucide-react"
import { blogPosts, getFeaturedPost } from "@/lib/blog-data"

/* ─── Blog Card ─── */
function BlogCard({
  post,
  featured = false,
}: {
  post: (typeof blogPosts)[0]
  featured?: boolean
}) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  if (featured) {
    return (
      <Link
        href={`/resources/${post.slug}`}
        className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-primary/20 transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image placeholder */}
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-8 lg:p-12 flex items-center justify-center min-h-[240px]">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen size={28} strokeWidth={1.5} className="text-primary" />
              </div>
              <p className="text-[12px] font-medium text-primary uppercase tracking-wider">
                Featured Article
              </p>
            </div>
          </div>
          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                {post.category}
              </span>
              <span className="text-[12px] text-muted">{formattedDate}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-medium text-dark mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-[14px] leading-relaxed text-muted mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-primary">
                    {post.author.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-medium text-dark">
                    {post.author.name}
                  </p>
                  <p className="text-[11px] text-muted">{post.readTime}</p>
                </div>
              </div>
              <span className="text-[13px] font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Read article
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/resources/${post.slug}`}
      className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:border-primary/20 transition-all duration-300"
    >
      {/* Image placeholder */}
      <div className="bg-gradient-to-br from-light-gray to-border/30 p-6 flex items-center justify-center h-[160px]">
        <BookOpen size={24} strokeWidth={1.5} className="text-muted/40" />
      </div>
      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-2.5 mb-3">
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${post.categoryColor}`}>
            {post.category}
          </span>
          <span className="text-[11px] text-muted">{formattedDate}</span>
        </div>
        <h3 className="text-[16px] font-medium text-dark mb-2 group-hover:text-primary transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-muted mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-[9px] font-semibold text-primary">
                {post.author.initials}
              </span>
            </div>
            <p className="text-[12px] text-muted">{post.author.name}</p>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-muted">
            <Clock size={11} />
            {post.readTime}
          </div>
        </div>
      </div>
    </Link>
  )
}

/* ─── Main Resources Page ─── */
export default function ResourcesPage() {
  const heroRef = useReveal()
  const gridRef = useReveal()
  const caseStudyRef = useReveal()

  const featuredPost = getFeaturedPost()
  const otherPosts = blogPosts.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="pt-[120px] pb-16 md:pb-20 border-b border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={heroRef} className="reveal md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-muted">
                Resources
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[48px] font-medium leading-[1.1] tracking-tight mb-4">
              AI Insights &{" "}
              <span className="text-primary">Resources</span>
            </h1>
            <p className="text-base md:text-lg text-muted max-w-xl">
              Technical deep-dives, platform updates, and lessons from the field
              — written by the team building and deploying enterprise AI.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-16">
          <div className="relative mx-auto max-w-container px-6 md:px-12">
            <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="md:pl-10">
              <BlogCard post={featuredPost} featured />
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 md:py-16">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={gridRef} className="reveal md:pl-10">
            <h2 className="text-xl md:text-2xl font-medium text-dark mb-8">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Coming Soon */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="relative mx-auto max-w-container px-6 md:px-12">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div ref={caseStudyRef} className="reveal md:pl-10">
            <div className="bg-dark rounded-2xl p-8 md:p-12 lg:p-16 text-center">
              <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Coming Soon
              </span>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
                Case Studies
              </h2>
              <p className="text-[14px] text-white/60 max-w-md mx-auto mb-6">
                Real-world impact stories from our enterprise deployments.
                Detailed results, architectures, and lessons learned.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-white bg-primary hover:bg-primary-hover transition-colors px-6 py-3 rounded-md"
              >
                Get Notified
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
