import Link from 'next/link'

const SKOOL_URL =
  'https://www.skool.com/endeavour-real-estate-coaching/calendar?eid=8df8070b1ce94478924ec73c851b407f'

const TOPICS = [
  {
    icon: '📈',
    title: 'The Current Market',
    body: 'What the data is actually saying — and how to position your clients inside it.',
  },
  {
    icon: '🗂️',
    title: 'Listing & Buyer Presentations',
    body: 'Walk in with a presentation that earns the listing before you leave the room.',
  },
  {
    icon: '🏡',
    title: 'Open Houses That Convert',
    body: 'Turn a Sunday afternoon into a pipeline of qualified buyers.',
  },
  {
    icon: '🤝',
    title: 'Client Procurement',
    body: 'Repeatable strategies for building a client base that refers and returns.',
  },
  {
    icon: '🤖',
    title: 'AI in Real Estate',
    body: 'The tools working agents are using right now — and how to integrate them without the noise.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Take the Survey',
    body: 'Tell me what you want to talk about and share a little about where you are in your business.',
  },
  {
    number: '02',
    title: 'Book Your Spot',
    body: "Choose a time on the Skool calendar. Coffee calls are casual, focused, and free.",
  },
  {
    number: '03',
    title: 'Show Up & Grow',
    body: 'Come with your questions. Leave with clarity, connections, and a plan.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6 pt-16"
        style={{
          background:
            'linear-gradient(160deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        }}
      >
        {/* Subtle gold grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #bc9c22 0, #bc9c22 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #bc9c22 0, #bc9c22 1px, transparent 1px, transparent 60px)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-gold mb-6">
            Endeavour Real Estate Coaching
          </p>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-cream leading-tight mb-6">
            Your Next Breakthrough
            <br />
            <span className="text-gold">Starts With Coffee</span>
          </h1>

          <span className="gold-rule mx-auto mb-6" />

          <p className="font-inter text-base md:text-lg text-cream/70 max-w-xl mx-auto leading-relaxed mb-10">
            A community of realtors and brokers tackling the real challenges —
            inspections, procurement, AI tools, presentation strategy — together,
            one focused conversation at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/survey" className="btn-primary">
              Book Your Coffee Call
            </Link>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-cream"
            >
              Join on Skool
            </a>
          </div>

          {/* Scroll nudge */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="font-inter text-[9px] tracking-widest uppercase text-cream">
              Scroll
            </span>
            <span className="block w-px h-8 bg-gold/60" />
          </div>
        </div>
      </section>

      {/* ─── TOPICS ─── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
              On The Agenda
            </p>
            <h2 className="section-heading mb-4">What We Talk About</h2>
            <span className="gold-rule mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOPICS.map((topic) => (
              <div
                key={topic.title}
                className="bg-white border border-gold/20 p-8 hover:border-gold/60 transition-colors group"
              >
                <span className="text-3xl mb-4 block">{topic.icon}</span>
                <h3 className="font-playfair text-xl text-navy mb-3 group-hover:text-gold transition-colors">
                  {topic.title}
                </h3>
                <p className="font-inter text-sm text-slate leading-relaxed">
                  {topic.body}
                </p>
              </div>
            ))}

            {/* CTA card */}
            <div className="bg-navy border border-gold/30 p-8 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
                  Your call, your agenda
                </p>
                <h3 className="font-playfair text-2xl text-cream mb-3">
                  Have something else on your mind?
                </h3>
                <p className="font-inter text-sm text-cream/60 leading-relaxed">
                  Tell us in the survey. Every call is shaped around what matters
                  most to you.
                </p>
              </div>
              <Link href="/survey" className="btn-primary mt-8 text-center">
                Take the Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-white py-24 px-6 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
              Simple By Design
            </p>
            <h2 className="section-heading mb-4">How It Works</h2>
            <span className="gold-rule mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STEPS.map((step) => (
              <div key={step.number} className="text-center md:text-left">
                <span className="font-playfair text-5xl text-gold/30 block mb-4">
                  {step.number}
                </span>
                <h3 className="font-playfair text-2xl text-navy mb-3">{step.title}</h3>
                <p className="font-inter text-sm text-slate leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        className="py-28 px-6 text-center"
        style={{
          background: 'linear-gradient(160deg, #000000 0%, #1a1a1a 100%)',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-gold mb-6">
            Ready When You Are
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-4 leading-tight">
            Your seat is waiting.
          </h2>
          <p className="font-inter text-cream/60 text-base leading-relaxed mb-10">
            Take two minutes to fill out the survey, then choose a time that works
            for you. Spots are limited — coffee calls stay small by design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/survey" className="btn-primary">
              Book My Coffee Call
            </Link>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-cream"
            >
              Explore the Community
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
