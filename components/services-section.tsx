"use client"

import { motion } from "framer-motion"
import {
  Droplets,
  Wrench,
  Thermometer,
  ShowerHead,
  PipetteIcon,
  AlertTriangle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Services Section Component
 * 
 * Displays all available plumbing services in a grid layout.
 * Each service card includes:
 * - Descriptive icon
 * - Service title
 * - Brief description
 * - Hover animations for interactivity
 */

// Define all services with their details
const services = [
  {
    icon: Droplets,
    title: "Leak Detection & Repair",
    description:
      "Advanced leak detection technology to find and fix hidden leaks before they cause major damage to your property.",
  },
  {
    icon: PipetteIcon,
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning services to clear clogs, improve flow, and prevent future blockages in your pipes.",
  },
  {
    icon: Thermometer,
    title: "Water Heater Services",
    description:
      "Installation, repair, and maintenance for all types of water heaters including tankless and traditional units.",
  },
  {
    icon: Wrench,
    title: "Pipe Installation",
    description:
      "New pipe installation and repiping services using durable, high-quality materials for long-lasting results.",
  },
  {
    icon: ShowerHead,
    title: "Fixture Installation",
    description:
      "Expert installation of faucets, toilets, showers, and other fixtures with precise, leak-free connections.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Repairs",
    description:
      "24/7 emergency plumbing services for urgent issues. Fast response times when you need help the most.",
  },
]

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Animation variants for each service card
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Services
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Comprehensive plumbing solutions
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From routine maintenance to complex repairs, we offer a full range 
            of professional plumbing services for homes and businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group h-full cursor-pointer border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <CardHeader>
                  {/* Icon Container */}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
