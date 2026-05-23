"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Hero Section Component
 * 
 * This is the first thing visitors see when they land on the page.
 * Key elements:
 * - Large, compelling headline
 * - Clear value proposition
 * - Primary and secondary CTAs
 * - Trust indicators (badges)
 * - Clean, professional imagery suggestion area
 */

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// Trust badges data
const trustBadges = [
  {
    icon: Clock,
    text: "24/7 Emergency",
  },
  {
    icon: Shield,
    text: "Licensed & Insured",
  },
  {
    icon: Star,
    text: "5-Star Rated",
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Fast Response Time
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Expert plumbing solutions you can{" "}
              <span className="text-primary">trust</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0"
            >
              From emergency repairs to complete installations, our licensed 
              professionals deliver quality workmanship with transparent 
              pricing and guaranteed satisfaction.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="#contact">
                  Schedule Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="#services">View Our Services</Link>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <badge.icon className="h-5 w-5 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-square overflow-hidden rounded-3xl bg-primary/10 p-8 lg:aspect-[4/5]">
                <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-card p-8 shadow-xl">
                  {/* Stats Display */}
                  <div className="space-y-6 text-center">
                    <div>
                      <p className="text-5xl font-bold text-primary">15+</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Years Experience
                      </p>
                    </div>
                    <div className="h-px w-24 bg-border" />
                    <div>
                      <p className="text-5xl font-bold text-primary">10K+</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Happy Customers
                      </p>
                    </div>
                    <div className="h-px w-24 bg-border" />
                    <div>
                      <p className="text-5xl font-bold text-primary">98%</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Satisfaction Rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg sm:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Same-Day Service
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Available 7 days a week
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
