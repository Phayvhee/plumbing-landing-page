import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

/**
 * AquaFlow Plumbing Landing Page
 * 
 * A professional, conversion-focused landing page for a plumbing services company.
 * 
 * Page Structure:
 * 1. Navigation - Sticky header with mobile-responsive menu
 * 2. Hero Section - Main headline, value proposition, and CTAs
 * 3. Services Section - Grid of offered plumbing services
 * 4. About Section - Company story and trust indicators
 * 5. Testimonials Section - Customer reviews carousel
 * 6. Contact Section - Contact form and information
 * 7. Footer - Links and social media
 * 
 * Features:
 * - Smooth scroll animations using Framer Motion
 * - Fully responsive design (mobile-first approach)
 * - Accessible with proper ARIA labels and semantic HTML
 * - Interactive elements with hover states
 * - Form validation and submission feedback
 */

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Fixed Navigation Bar */}
      <Navigation />
      
      {/* Hero Section - First impression and main call to action */}
      <HeroSection />
      
      {/* Services Section - What we offer */}
      <ServicesSection />
      
      {/* About Section - Build trust and credibility */}
      <AboutSection />
      
      {/* Testimonials Section - Social proof */}
      <TestimonialsSection />
      
      {/* Contact Section - Convert visitors to leads */}
      <ContactSection />
      
      {/* Footer - Additional navigation and info */}
      <Footer />
    </main>
  )
}
