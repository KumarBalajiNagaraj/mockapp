import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-primary",
  display: "swap",
})

export const metadata: Metadata = {
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-cream text-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
