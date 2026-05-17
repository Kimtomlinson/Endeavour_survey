import Link from 'next/link'

const SKOOL_URL =
  'https://www.skool.com/endeavour-real-estate-coaching/calendar?eid=8df8070b1ce94478924ec73c851b407f'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-playfair text-gold text-xl mb-1">Endeavour</p>
            <p className="font-inter text-cream/50 text-[10px] tracking-widest uppercase mb-4">
              Real Estate Coaching
            </p>
            <p className="font-inter text-cream/50 text-sm leading-relaxed">
              Connecting realtors and brokers who think bigger — one coffee call
              at a time.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <p className="font-inter text-[10px] tracking-widest uppercase text-gold/70">
              Navigation
            </p>
            <Link
              href="/"
              className="font-inter text-sm text-cream/60 hover:text-gold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/survey"
              className="font-inter text-sm text-cream/60 hover:text-gold transition-colors"
            >
              Take the Survey
            </Link>
            <Link
              href="/resources"
              className="font-inter text-sm text-cream/60 hover:text-gold transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/book"
              className="font-inter text-sm text-cream/60 hover:text-gold transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <p className="font-inter text-[10px] tracking-widest uppercase text-gold/70">
              Community
            </p>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-cream/60 hover:text-gold transition-colors"
            >
              Join on Skool →
            </a>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-inter text-xs text-cream/30">
            © {new Date().getFullYear()} Endeavour Real Estate Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
