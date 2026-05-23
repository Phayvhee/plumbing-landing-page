"use client"

import Link from "next/link"
import { Droplets, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

/**
 * Footer Component
 * 
 * Contains:
 * - Company branding
 * - Navigation links organized by category
 * - Social media links
 * - Copyright information
 */

// Footer navigation structure
const footerLinks = {
  services: [
    { label: "Leak Repair", href: "#services" },
    { label: "Drain Cleaning", href: "#services" },
    { label: "Water Heaters", href: "#services" },
    { label: "Pipe Installation", href: "#services" },
    { label: "Emergency Services", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Service Areas", href: "#contact" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQs", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Schedule Service", href: "#contact" },
  ],
}

// Social media links
const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Droplets className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                AquaFlow
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              Professional plumbing services for residential and commercial 
              properties. Licensed, insured, and committed to excellence.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-background/20"
                >
                  <social.icon className="h-5 w-5 text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-background">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-background">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-background">Support</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-background/60">
              &copy; {currentYear} AquaFlow Plumbing. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <Link href="#" className="transition-colors hover:text-background">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-background">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
