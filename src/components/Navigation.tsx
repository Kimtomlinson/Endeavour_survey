'use client'

import { useState } from 'react'
import Link from 'next/link'

const SKOOL_URL =
  'https://www.skool.com/endeavour-real-estate-coaching/calendar?eid=8df8070b1ce94478924ec73c851b407f'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-playfair text-gold text-lg tracking-wide">Endeavour</span>
          <span className="font-inter text-cream/60 text-[10px] tracking-widest uppercase">
            Real Estate Coaching
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/resources"
            className="font-inter text-xs tracking-widest uppercase text-cream/70 hover:text-gold transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/survey"
            className="font-inter text-xs tracking-widest uppercase text-cream/70 hover:text-gold transition-colors"
          >
            Take the Survey
          </Link>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-[10px]"
          >
            Join on Skool
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5 transition-transform" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 px-6 py-6 flex flex-col gap-6">
          <Link
            href="/resources"
            onClick={() => setOpen(false)}
            className="font-inter text-xs tracking-widest uppercase text-cream/70"
          >
            Resources
          </Link>
          <Link
            href="/survey"
            onClick={() => setOpen(false)}
            className="font-inter text-xs tracking-widest uppercase text-cream/70"
          >
            Take the Survey
          </Link>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-outline self-start text-[10px]"
          >
            Join on Skool
          </a>
        </div>
      )}
    </header>
  )
}
