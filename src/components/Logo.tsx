import Link from "next/link"

/**
 * Custom geometric "M" glyph — Resend-style inline letterform.
 * Same color, same visual weight as the text. Clean and geometric
 * with a sharp peak and slightly angled legs suggesting forward motion.
 */
function StylisedM({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/*
        Clean geometric M with:
        - Slightly narrower stroke on left (speed taper)
        - Sharp center peak
        - Forward-leaning feel through the angle proportions
      */}
      <path
        d="M0.5 20 L0.5 0 L3.2 0 L10 11.5 L16.8 0 L19.5 0 L19.5 20 L16.8 20 L16.8 6.2 L10 17 L3.2 6.2 L3.2 20 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Logo({
  size = "default",
  className = "",
}: {
  size?: "small" | "default" | "large"
  className?: string
}) {
  const mHeight =
    size === "small"
      ? "h-[13px]"
      : size === "large"
        ? "h-[21px]"
        : "h-[16px]"
  const textClass =
    size === "small"
      ? "text-[17px]"
      : size === "large"
        ? "text-[26px]"
        : "text-[21px]"

  return (
    <Link
      href="/"
      className={`inline-flex items-baseline shrink-0 ${className}`}
    >
      <span className={`${textClass} font-bold tracking-tight leading-none inline-flex items-baseline`}>
        <StylisedM className={`${mHeight} w-auto text-dark translate-y-[0.5px]`} />
        <span className="text-dark">oring</span>
        <span className="text-primary ml-1.5">AI</span>
      </span>
    </Link>
  )
}
