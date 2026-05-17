import Link from 'next/link'

const SKOOL_URL =
  'https://www.skool.com/endeavour-real-estate-coaching/calendar?eid=8df8070b1ce94478924ec73c851b407f'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-cream pt-24 pb-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Confirmation */}
        <div className="mb-14">
          <div className="w-16 h-16 border border-gold/40 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-7 h-7 text-gold"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
            Survey Received
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl text-navy mb-4 leading-tight">
            You're one step away
            <br />
            from your coffee call.
          </h1>
          <span className="gold-rule mx-auto mb-6" />
          <p className="font-inter text-slate leading-relaxed mb-2">
            Your survey has been submitted. I'll review your answers before we
            meet so our time together is focused and valuable.
          </p>
          <p className="font-inter text-slate leading-relaxed">
            Now, pick a time on the Skool calendar to lock in your spot.
          </p>
        </div>

        {/* Step 2 CTA */}
        <div className="bg-navy border border-gold/30 p-10 mb-10">
          <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
            Step 2 of 2
          </p>
          <h2 className="font-playfair text-3xl text-cream mb-4">
            Choose Your Time
          </h2>
          <p className="font-inter text-cream/60 text-sm leading-relaxed mb-8">
            Coffee calls are casual 30-minute conversations — small groups, real
            talk, no sales pitch. Spots fill up, so grab yours now.
          </p>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Book on Skool Calendar →
          </a>
        </div>

        {/* What to expect */}
        <div className="bg-white border border-gold/20 p-8 text-left mb-10">
          <h3 className="font-playfair text-xl text-navy mb-5">
            What to expect
          </h3>
          <ul className="space-y-4">
            {[
              "I'll review your survey before the call so we hit the ground running.",
              'Calls are kept small — real conversation, not a webinar.',
              'Come with your questions. There are no wrong ones.',
              "You'll receive a confirmation email from Skool once you're booked.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                <span className="font-inter text-sm text-slate leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
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
