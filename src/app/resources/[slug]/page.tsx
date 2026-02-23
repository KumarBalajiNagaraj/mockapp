import { blogPosts, getPostBySlug } from "@/lib/blog-data"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: "Not Found" }
  return {
    title: `${post.title} | Moring AI`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Get related posts (same category, exclude current)
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      {/* Article Header */}
      <section className="pt-[120px] pb-10 md:pb-14 border-b border-border">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          {/* Back link */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Resources
          </Link>

          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${post.categoryColor}`}
            >
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-[12px] text-muted">
              <Calendar size={12} />
              {formattedDate}
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-muted">
              <Clock size={12} />
              {post.readTime}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-medium leading-[1.15] tracking-tight text-dark mb-8">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 pb-8 border-b border-border">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-[13px] font-semibold text-primary">
                {post.author.initials}
              </span>
            </div>
            <div>
              <p className="text-[14px] font-medium text-dark">
                {post.author.name}
              </p>
              <p className="text-[12px] text-muted">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body — Medium-style clean typography */}
      <article className="py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="prose-moring space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-[16px] md:text-[17px] leading-[1.8] text-dark/80"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share / Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[12px] font-medium text-muted mr-2">
                Tags:
              </span>
              <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                {post.category}
              </span>
              <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-light-gray text-dark/60">
                Enterprise AI
              </span>
              <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-light-gray text-dark/60">
                Moring AI
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-14 md:py-20 border-t border-border">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <h2 className="text-xl md:text-2xl font-medium text-dark mb-8 text-center">
            More from the Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {related.map((relPost) => (
              <Link
                key={relPost.slug}
                href={`/resources/${relPost.slug}`}
                className="group block bg-white rounded-xl border border-border p-5 hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${relPost.categoryColor}`}
                >
                  {relPost.category}
                </span>
                <h3 className="text-[15px] font-medium text-dark mt-3 mb-2 group-hover:text-primary transition-colors leading-snug">
                  {relPost.title}
                </h3>
                <p className="text-[12px] text-muted line-clamp-2">
                  {relPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-[12px] font-medium text-primary mt-3 group-hover:translate-x-0.5 transition-transform">
                  Read more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
