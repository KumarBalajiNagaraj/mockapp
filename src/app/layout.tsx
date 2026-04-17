import type { Metadata } from "next"
import { Afacad } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moring.ai"),
  title: "Moring AI | Applied AI for Enterprise Outcomes",
  description:
    "Applied AI for Enterprise Outcomes. Built Right. Delivered Fast. We embed forward-deployed engineers and proprietary AI infrastructure to deliver real, operational results.",
  keywords: [
    "AI",
    "Enterprise AI",
    "Agentic AI",
    "Document Processing",
    "Production Ops",
    "Forward-Deployed Engineering",
  ],
  icons: {
    icon: "/images/moringai-logo.png",
    shortcut: "/images/moringai-logo.png",
    apple: "/images/moringai-logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.moring.ai",
    siteName: "Moring AI",
    title: "Moring AI | Applied AI for Enterprise Outcomes",
    description:
      "Applied AI for Enterprise Outcomes. Built Right. Delivered Fast. We embed forward-deployed engineers and proprietary AI infrastructure to deliver real, operational results.",
    images: [
      {
        url: "/images/moringai-logo.png",
        width: 1200,
        height: 630,
        alt: "Moring AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moring AI | Applied AI for Enterprise Outcomes",
    description:
      "Applied AI for Enterprise Outcomes. Built Right. Delivered Fast.",
    images: ["/images/moringai-logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={afacad.variable}>
      <body className="bg-cream text-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
