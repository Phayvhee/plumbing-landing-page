"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

/**
 * About Section Component
 * 
 * Tells the company story and builds trust with potential customers.
 * Includes:
 * - Company description
 * - Key differentiators as a checklist
 * - Visual statistics/numbers
 * - Professional layout with two columns
 */

// List of company highlights/features
const highlights = [
  "Licensed and fully insured professionals",
  "Transparent upfront pricing with no hidden fees",
  "Satisfaction guaranteed on every job",
  "Eco-friendly and sustainable solutions",
  "Latest technology and equipment",
  "Clean and respectful of your property",
]

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Main visual container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative shape */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-primary/20" />
              
              {/* Main card */}
              <div className="relative overflow-hidden rounded-3xl bg-primary p-8 lg:p-12">
                <div className="relative z-10 text-center text-primary-foreground">
                  <p className="text-6xl font-bold lg:text-7xl">15+</p>
                  <p className="mt-2 text-xl font-medium opacity-90">
                    Years of Excellence
                  </p>
                  <div className="mx-auto my-8 h-px w-24 bg-primary-foreground/30" />
                  <p className="text-lg opacity-80">
                    Serving our community with dedication and expertise since 2009
                  </p>
                </div>
                
                {/* Decorative circles */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 rounded-2xl bg-card p-6 shadow-xl lg:-right-12"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">4.9</p>
                  <div className="mt-1 flex justify-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-accent"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Google Rating
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Your trusted local plumbing experts
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              At AquaFlow Plumbing, we believe in doing things right the first 
              time. Our team of skilled professionals brings years of experience 
              and a commitment to excellence to every project, big or small.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We understand that plumbing issues can be stressful. That&apos;s why 
              we focus on clear communication, honest pricing, and quality 
              workmanship to give you peace of mind.
            </p>

            {/* Highlights List */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
