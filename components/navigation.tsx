"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Navigation component for the plumbing website
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Scroll-based background change for better readability
 * - Smooth animations using Framer Motion
 * - Sticky positioning for easy access
 */

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  // Track scroll position to change navbar appearance
  const [isScrolled, setIsScrolled] = useState(false)
  // Track mobile menu open/close state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled past 50px
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Droplets className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              AquaFlow
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-accent" />
              (123) 456-7890
            </a>
            <Button asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-card shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border" />
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-lg font-medium text-foreground"
              >
                <Phone className="h-5 w-5 text-accent" />
                (123) 456-7890
              </a>
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
