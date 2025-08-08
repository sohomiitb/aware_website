import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CssGridBackground from "@/components/css-grid-background"
import FramerSpotlight from "@/components/framer-spotlight"
import WaitlistClientPage from "./WaitlistClientPage"

export const metadata: Metadata = {
  title: "Join the Waitlist | Enterprise AI Platform",
  description: "Be the first to experience the future of personalized healthcare AI. Join our waitlist today.",
}

export default function WaitlistPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow relative">
        <CssGridBackground />
        <FramerSpotlight />

        <WaitlistClientPage />
      </main>

      <Footer />
    </div>
  )
}
