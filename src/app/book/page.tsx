import Link from 'next/link'

const SKOOL_URL =
  'https://www.skool.com/endeavour-real-estate-coaching/calendar?eid=8df8070b1ce94478924ec73c851b407f'

export default function BookPage() {
  return (
    <main className="min-h-screen bg-cream pt-24 pb-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
          Reserve Your Seat
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl text-navy mb-4 leading-tight">
          Book a Coffee Call
        </h1>
        <span className="gold-rule mx-auto mb-6" />
        <p className="font-inter text-slate leading-relaxed mb-10 max-w-md mx-auto">
          Casual 30-minute conversations for realtors and brokers — small groups,
          focused topics, no sales pitch.
        </p>

        {/* Primary CTA to Skool */}
        <div className="bg-navy border border-gold/30 p-10 mb-8">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-4">
            Skool Community Calendar
          </p>
          <h2 className="font-playfair text-2xl text-cream mb-4">
            Choose a time that works for you
          </h2>
          <p className="font-inter text-cream/60 text-sm leading-relaxed mb-8">
            The calendar lives on Skool — our community platform. Click below to
            view available times and reserve your seat.
          </p>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Open Skool Calendar →
          </a>
        </div>

        {/* First timer nudge */}
        <div className="bg-white border border-gold/20 p-8 text-left mb-8">
          <h3 className="font-playfair text-xl text-navy mb-4">
            First time? Take the survey first.
          </h3>
          <p className="font-inter text-sm text-slate leading-relaxed mb-5">
            If this is your first coffee call, I'd love to know a little about
            you and what you want to cover before we meet. Takes two minutes.
          </p>
          <Link
            href="/survey"
            className="font-inter text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors"
          >
            Take the Survey →
          </Link>
        </div>

        <Link
          href="/"
          className="font-inter text-xs tracking-widest uppercase text-slate hover:text-gold transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
