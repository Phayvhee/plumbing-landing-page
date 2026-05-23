"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

/**
 * Contact Section Component
 * 
 * Provides multiple ways for customers to get in touch.
 * Includes:
 * - Contact information cards
 * - Contact form with validation
 * - Business hours
 * - Form submission feedback
 */

// Contact information data
const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(123) 456-7890",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@aquaflow.com",
    href: "mailto:info@aquaflow.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Greater Metro Area",
    href: null,
  },
  {
    icon: Clock,
    label: "Emergency Line",
    value: "24/7 Available",
    href: "tel:+1234567890",
  },
]

export function ContactSection() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section id="contact" className="bg-secondary py-20 lg:py-28">
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
            Contact Us
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Ready to solve your plumbing needs?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get in touch for a free estimate or to schedule service. 
            We respond quickly to all inquiries.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4 lg:col-span-2"
          >
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Business Hours */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold text-foreground">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Emergency Only</span>
                  </div>
                </div>
                <p className="mt-4 rounded-lg bg-accent/10 p-3 text-sm text-accent">
                  24/7 Emergency service available for urgent plumbing issues
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <Card className="border-border bg-card">
              <CardContent className="p-6 sm:p-8">
                <h3 className="mb-6 text-xl font-semibold text-foreground">
                  Request a Free Quote
                </h3>

                {isSubmitted ? (
                  // Success Message
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="mt-4 text-xl font-semibold text-foreground">
                      Thank you!
                    </h4>
                    <p className="mt-2 text-muted-foreground">
                      We&apos;ve received your request and will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  // Contact Form
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name and Email Row */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone and Service Row */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a service</option>
                          <option value="leak">Leak Detection & Repair</option>
                          <option value="drain">Drain Cleaning</option>
                          <option value="water-heater">Water Heater Services</option>
                          <option value="pipe">Pipe Installation</option>
                          <option value="fixture">Fixture Installation</option>
                          <option value="emergency">Emergency Repair</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your project</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Describe your plumbing issue or project..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Request
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      By submitting, you agree to our privacy policy. 
                      We&apos;ll never share your information.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
