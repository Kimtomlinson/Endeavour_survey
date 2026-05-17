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
  title: 'Endeavour Real Estate Coaching | Coffee Calls for Realtors',
  description:
    'Join realtors and brokers solving real problems — inspections, procurement, AI tools, listing presentations — one coffee call at a time.',
  openGraph: {
    title: 'Endeavour Real Estate Coaching',
    description: 'Coffee calls for real estate professionals who think bigger.',
    type: 'website',
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
