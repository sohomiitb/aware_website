import FeatureCard from "@/components/feature-card"
import {
  BotIcon,
  SparklesIcon,
  DatabaseIcon,
  ShieldIcon,
  FileTextIcon,
  ServerIcon,
  LockIcon,
  ZapIcon,
} from "@/components/feature-icons"
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import { useEffect, useState, useRef } from "react"

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor?: string;
};

function FeatureProgression({ features, isClient }: { features: Feature[], isClient: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  const scrollProgress = useMotionValue(0)
  const isInSection = useRef(false)
  const sectionStartY = useRef(0)
  const animationComplete = useRef(false)
  const isAnimating = useRef(false)

  // Each card will animate in with a different range and z-index
  const cardConfigs = [
    { angle: 0, radius: 500, z: 5, rotation: 3 },      // Top
    { angle: 72, radius: 500, z: 4, rotation: -2 },     // Top-right
    { angle: 144, radius: 500, z: 3, rotation: 4 },    // Bottom-right
    { angle: 216, radius: 500, z: 2, rotation: -3 },    // Bottom-left
    { angle: 288, radius: 500, z: 1, rotation: 2 },    // Top-left
  ]

  // Lock scroll when in section
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const currentProgress = scrollProgress.get()

        // Check if we're entering the section
        if (rect.top <= 0 && rect.bottom >= windowHeight && !isInSection.current) {
          isInSection.current = true
          sectionStartY.current = window.scrollY
          animationComplete.current = false
          isAnimating.current = false
        }

        // If we're in the section
        if (isInSection.current) {
          // Determine if we should be in animation mode
          const shouldAnimate = (currentProgress > 0 && currentProgress < 1) || 
                              (e.deltaY > 0 && currentProgress === 0) ||
                              (e.deltaY < 0 && currentProgress === 1)

          if (shouldAnimate && !isAnimating.current) {
            isAnimating.current = true
            animationComplete.current = false
          }

          // If we're animating, control the cards
          if (isAnimating.current) {
            e.preventDefault()
            
            const delta = e.deltaY
            const newProgress = Math.min(Math.max(currentProgress + delta * 0.001, 0), 1)
            scrollProgress.set(newProgress)
            
            // Check if animation is complete
            if (newProgress >= 1) {
              animationComplete.current = true
              isAnimating.current = false
            }
            
            // Check if animation is reset
            if (newProgress <= 0) {
              isAnimating.current = false
            }
            
            // Keep the page at the section start position
            window.scrollTo(0, sectionStartY.current)
          }
        }

        // Check if we're leaving the section
        if (rect.bottom < 0 || rect.top > windowHeight) {
          isInSection.current = false
          animationComplete.current = false
          isAnimating.current = false
        }
      }
    }

    // Use passive: false to allow preventDefault
    window.addEventListener('wheel', handleScroll, { passive: false })
    return () => window.removeEventListener('wheel', handleScroll)
  }, [scrollProgress])

  return (
    <div ref={containerRef} className="relative min-h-[1000px] flex items-center justify-center w-full mb-20 overflow-hidden">
      {features.slice(0, 5).map((feature: Feature, i: number) => {
        // Calculate circular positions
        const angle = cardConfigs[i].angle * (Math.PI / 180) // Convert to radians
        const radius = cardConfigs[i].radius
        const startX = Math.cos(angle) * radius
        const startY = Math.sin(angle) * radius

        // Animate position, scale, and opacity based on scroll progress
        const x = useTransform(scrollProgress, [0, 1], [startX, startX * 0.6])
        const y = useTransform(scrollProgress, [0, 1], [startY, startY * 0.6])
        const scale = useTransform(scrollProgress, [0, 1], [0.8, 1])
        const opacity = useTransform(scrollProgress, [0, 0.2 + i * 0.15, 1], [0, 1, 1])
        const rotate = useTransform(scrollProgress, [0, 1], [cardConfigs[i].rotation, 0])
        
        if (!isClient) return null
        
        return (
          <motion.div
            key={i}
            style={{
              x,
              y,
              scale,
              opacity,
              rotate,
              zIndex: cardConfigs[i].z,
              boxShadow: "0 8px 32px rgba(36,101,237,0.10)",
              background: "var(--background)",
              borderRadius: 28,
            }}
            className="absolute w-[320px] max-w-[90vw] min-h-[320px] p-8 flex flex-col items-center justify-start hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="mb-6 text-5xl group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">{feature.title}</h3>
            <p className="text-muted-foreground text-center text-base flex-grow">{feature.description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function FeaturesSection() {
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  const features = [
    {
      icon: <BotIcon />,
      title: "Personalized Care Agents",
      description:
        "Hyper-personalized AI companions that transform your unique health data into proactive guidance and step-by-step care plans.",
      accentColor: "rgba(36, 101, 237, 0.5)",
    },
    {
      icon: <SparklesIcon />,
      title: "Real-Time Risk Alerts",
      description: "Our AI monitors your data 24/7 and flags emerging issues before they become problems.",
      accentColor: "rgba(251, 191, 36, 0.5)",
    },
    {
      icon: <DatabaseIcon />,
      title: "Unified Patient Dashboard",
      description: "Seamlessly combines EHR, lab, imaging, and wearable streams into a single, living health record.",
      accentColor: "rgba(34, 211, 238, 0.5)",
    },
    {
      icon: <ShieldIcon />,
      title: "24/7 Health Answers",
      description: "Instant, evidence-based guidance for any care question, personalized to your data and context.",
      accentColor: "rgba(132, 204, 22, 0.5)",
    },
    {
      icon: <FileTextIcon />,
      title: "Precision Care Plans",
      description: "Generates step-by-step, evidence-based treatment paths tailored to your unique profile.",
      accentColor: "rgba(249, 115, 22, 0.5)",
    },
    {
      icon: <ServerIcon />,
      title: "Smart Health Nudges",
      description: "Timely reminders and motivational prompts that boost medication and care adherence.",
      accentColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      icon: <LockIcon />,
      title: "Data Privacy & Compliance",
      description:
        "Meet all regulatory requirements with compliance from day one including GDPR, HIPAA, HITRUST, and SOC 2.",
      accentColor: "rgba(251, 191, 36, 0.5)",
    },
    {
      icon: <ZapIcon />,
      title: "Clinical Collaboration Hub",
      description: "Gives your doctors a clear, actionable snapshot of your status, no extra log-ins required.",
      accentColor: "rgba(16, 185, 129, 0.5)",
    },
  ]

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="features" aria-labelledby="features-heading">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Key Features
            </motion.div>
            <motion.h2
              id="features-heading"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Personally trained army of doctors.
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Designed tailored to your care needs.
            </motion.p>
          </div>
        </motion.div>
        <FeatureProgression features={features} isClient={isClient} />
      </div>
    </section>
  )
}
