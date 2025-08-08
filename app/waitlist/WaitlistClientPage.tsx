"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
// Removed: import Script from "next/script"

export default function WaitlistClientPage() {
  return (
    <>
      {/* Removed: <Script src="https://getlaunchlist.com/js/widget-diy.js" defer /> */}
      <section className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">
                Early Access
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Join the Waitlist</h1>
              <p className="text-xl text-muted-foreground md:text-2xl/relaxed max-w-2xl mx-auto mb-8">
                Be the first to experience personalized AI healthcare. Get early access and help shape the future of
                care.
              </p>
            </div>
          </div>

          {/* Launchlist Form */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-md bg-background/60 backdrop-blur-sm border border-border rounded-xl shadow-lg p-6">
              <form className="launchlist-form space-y-4" action="https://getlaunchlist.com/s/THkOxf" method="POST">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input name="name" type="text" placeholder="Your Name" className="launchlist-input" required />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input name="email" type="email" placeholder="Your Email" className="launchlist-input" required />
                </div>
                <button type="submit" className="launchlist-button">
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <p>Join the waitlist</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <p>Get early access</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <p>Shape the future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .launchlist-form {
          background: transparent !important;
        }
        
        .launchlist-input {
          width: 100%;
          background: hsl(var(--background) / 0.8) !important;
          border: 1px solid hsl(var(--border)) !important;
          border-radius: 8px !important;
          color: hsl(var(--foreground)) !important;
          padding: 12px !important;
          font-size: 16px !important;
        }
        
        .launchlist-input:focus {
          outline: none !important;
          border-color: hsl(var(--primary)) !important;
          box-shadow: 0 0 0 2px hsl(var(--primary) / 0.2) !important;
        }
        
        .launchlist-button {
          width: 100%;
          background: hsl(var(--primary)) !important;
          color: hsl(var(--primary-foreground)) !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 12px 16px !important;
          font-weight: 600 !important;
          transition: all 0.2s ease !important;
          cursor: pointer !important;
        }
        
        .launchlist-button:hover {
          background: hsl(var(--primary) / 0.9) !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 8px rgba(36, 101, 237, 0.3) !important;
        }
        
        .dark .launchlist-input {
          background: hsl(var(--background) / 0.6) !important;
          border-color: hsl(var(--border)) !important;
        }
      `}</style>
    </>
  )
}
