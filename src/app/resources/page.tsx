import Link from 'next/link'

// Placeholder resources — replace with real content
const VIDEOS: { id: string; title: string; description: string }[] = [
  // Example: { id: 'dQw4w9WgXcQ', title: 'Video Title', description: 'Short description' }
]

const GUIDES: { title: string; description: string; href: string }[] = [
  // Example: { title: 'Guide Title', description: 'Description', href: '/guides/example.pdf' }
]

const TOPICS = [
  'The Current Market',
  'Listing & Buyer Presentations',
  'Open Houses',
  'Client Procurement',
  'AI in Real Estate',
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-cream pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
            Free Resources
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl text-navy mb-4">
            Tools & Ideas for
            <br />
            Working Agents
          </h1>
          <span className="gold-rule mx-auto mb-6" />
          <p className="font-inter text-slate leading-relaxed max-w-lg mx-auto">
            Videos, guides, and frameworks you can use this week — covering the
            topics we talk about on every coffee call.
          </p>
        </div>

        {/* Topic filter tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {TOPICS.map((topic) => (
            <span
              key={topic}
              className="font-inter text-[10px] tracking-widest uppercase border border-gold/30 text-slate px-4 py-2"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Videos section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-playfair text-2xl text-navy">Videos</h2>
            <span className="flex-1 h-px bg-gold/20" />
          </div>

          {VIDEOS.length === 0 ? (
            <div className="bg-white border border-gold/20 p-12 text-center">
              <p className="font-playfair text-2xl text-navy/40 mb-3">
                Videos coming soon
              </p>
              <p className="font-inter text-sm text-slate/60">
                Subscribe on YouTube to be notified when new content drops.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VIDEOS.map((video) => (
                <div key={video.id} className="bg-white border border-gold/20">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-playfair text-lg text-navy mb-2">
                      {video.title}
                    </h3>
                    <p className="font-inter text-sm text-slate leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Guides / Downloads */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-playfair text-2xl text-navy">Guides & Downloads</h2>
            <span className="flex-1 h-px bg-gold/20" />
          </div>

          {GUIDES.length === 0 ? (
            <div className="bg-white border border-gold/20 p-12 text-center">
              <p className="font-playfair text-2xl text-navy/40 mb-3">
                Guides coming soon
              </p>
              <p className="font-inter text-sm text-slate/60">
                Frameworks and checklists will be added here for community members.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GUIDES.map((guide) => (
                <a
                  key={guide.title}
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gold/20 p-6 flex items-start gap-4 hover:border-gold/60 transition-colors group"
                >
                  <span className="text-gold text-xl mt-0.5">↓</span>
                  <div>
                    <h3 className="font-playfair text-lg text-navy group-hover:text-gold transition-colors mb-1">
                      {guide.title}
                    </h3>
                    <p className="font-inter text-sm text-slate">{guide.description}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <div
          className="p-10 text-center"
          style={{ background: 'linear-gradient(160deg, #000000 0%, #1a1a1a 100%)' }}
        >
          <h2 className="font-playfair text-3xl text-cream mb-4">
            Want to go deeper?
          </h2>
          <p className="font-inter text-cream/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Resources only get you so far. Book a coffee call and bring your
            questions directly.
          </p>
          <Link href="/survey" className="btn-primary">
            Book a Coffee Call
          </Link>
        </div>
      </div>
    </main>
  )
}
