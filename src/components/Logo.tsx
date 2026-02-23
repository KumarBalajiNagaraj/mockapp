import Link from "next/link"
import Image from "next/image"

export default function Logo({
  size = "default",
  className = "",
}: {
  size?: "small" | "default" | "large"
  className?: string
}) {
  const h =
    size === "small"
      ? "h-[22px]"
      : size === "large"
        ? "h-[36px]"
        : "h-[28px]"

  return (
    <Link
      href="/"
      className={`inline-flex items-center shrink-0 ${className}`}
    >
      <Image
        src="/images/moringai-logo.png"
        alt="Moring AI"
        width={850}
        height={185}
        className={`${h} w-auto select-none`}
        draggable={false}
        priority
      />
    </Link>
  )
}
