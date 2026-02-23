import Link from "next/link"

export default function Logo({
  size = "default",
  className = "",
}: {
  size?: "small" | "default" | "large"
  className?: string
}) {
  const markClass =
    size === "small"
      ? "w-5 h-4"
      : size === "large"
        ? "w-8 h-[26px]"
        : "w-6 h-5"
  const textClass =
    size === "small"
      ? "text-[17px]"
      : size === "large"
        ? "text-[24px]"
        : "text-[20px]"

  return (
    <Link href="/" className={`flex items-center gap-1.5 shrink-0 ${className}`}>
      {/* M Mark — speed-inspired geometric M with orange accent */}
      <svg
        viewBox="0 0 28 22"
        fill="none"
        className={markClass}
        aria-hidden="true"
      >
        <path
          d="M0 22V0h4.2L14 12.6L23.8 0H28v22h-4V7.2L14 18.6 4 7.2V22H0z"
          fill="currentColor"
        />
        {/* Speed accent line */}
        <rect x="24.5" y="18" width="5" height="1.8" rx="0.9" className="fill-primary" />
      </svg>
      {/* Wordmark */}
      <span className={`${textClass} font-semibold tracking-tight leading-none`}>
        <span className="text-dark">moring</span>
        <span className="text-primary">.ai</span>
      </span>
    </Link>
  )
}
