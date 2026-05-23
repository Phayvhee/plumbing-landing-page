import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AquaFlow Plumbing | Professional Plumbing Services',
  description: 'Expert plumbing services for residential and commercial properties. 24/7 emergency service, licensed professionals, and guaranteed satisfaction.',
  keywords: ['plumbing', 'plumber', 'emergency plumbing', 'leak repair', 'water heater', 'drain cleaning'],
}

export const viewport = {
  themeColor: '#1e3a5f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
