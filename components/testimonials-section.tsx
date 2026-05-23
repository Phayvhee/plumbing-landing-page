"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Testimonials Section Component
 * 
 * Displays customer reviews in a carousel format.
 * Features:
 * - Smooth slide transitions
 * - Navigation arrows
 * - Indicator dots
 * - Customer avatars (initials)
 * - Star ratings
 */

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Riverside District",
    rating: 5,
    text: "AquaFlow saved us during a weekend emergency. They arrived within an hour and fixed our burst pipe professionally. The technician was courteous and explained everything clearly. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Oak Valley",
    rating: 5,
    text: "We had them install a new water heater and remodel our bathroom plumbing. The work was impeccable, done on time, and within budget. Their attention to detail is impressive.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Downtown",
    rating: 5,
    text: "Best plumbing service I have ever used. Fair pricing, no surprises, and the quality of work is outstanding. They have become our go-to for any plumbing needs.",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Greenwood Heights",
    rating: 5,
    text: "Professional from start to finish. They diagnosed and fixed a complex drainage issue that two other companies could not figure out. True experts in their field.",
  },
]

export function TestimonialsSection() {
  // Track current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0)

  // Navigate to previous testimonial
  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  // Navigate to next testimonial
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  // Get initials from name for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
  }

  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
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
            Testimonials
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What our customers say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real feedback from real customers who trust us with their plumbing needs
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative mt-16">
          <div className="mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative rounded-3xl bg-card p-8 shadow-lg sm:p-12"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg sm:left-12">
                  <Quote className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Testimonial Content */}
                <div className="pt-4">
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 fill-accent"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </p>

                  {/* Customer Info */}
                  <div className="mt-8 flex items-center gap-4">
                    {/* Avatar */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                      {getInitials(testimonials[currentIndex].name)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              {/* Previous Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Indicator Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
