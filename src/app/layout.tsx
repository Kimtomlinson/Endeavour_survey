import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://endeavourrealestatecoaching.com'),
  title: 'Endeavour Real Estate Coaching | Coffee Calls for Realtors',
  description:
    'Join realtors and brokers solving real problems — inspections, procurement, AI tools, listing presentations — one coffee call at a time.',
  openGraph: {
    title: 'Your Next Breakthrough Starts With Coffee',
    description:
      'A free coffee call for realtors & brokers. Take the 2-minute survey and book your spot with Endeavour Real Estate Coaching.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Endeavour Real Estate Coaching — Book Your Coffee Call' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Next Breakthrough Starts With Coffee',
    description: 'A free coffee call for realtors & brokers. Take the 2-minute survey and book your spot.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
