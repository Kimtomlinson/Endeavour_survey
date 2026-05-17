'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const TOPICS = [
  { id: 'market', label: 'The current market and what it\'s doing' },
  { id: 'presentations', label: 'Organizing a listing or buyer presentation' },
  { id: 'open-houses', label: 'Running effective open houses' },
  { id: 'procurement', label: 'Client procurement strategies' },
  { id: 'ai', label: 'Using AI in real estate' },
]

const EXPERIENCE = ['Less than 1 year', '1–3 years', '3–10 years', '10+ years']

const AGENT_TYPES = ['Independent agent', 'Team member', 'Broker / Owner']

type FormState = {
  name: string
  email: string
  phone: string
  brokerage: string
  challenge: string
  topics: string[]
  experience: string
  agentType: string
}

export default function SurveyPage() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    brokerage: '',
    challenge: '',
    topics: [],
    experience: '',
    agentType: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function set<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: val }))
  }

  function toggleTopic(id: string) {
    setForm((prev) => ({
      ...prev,
      topics: prev.topics.includes(id)
        ? prev.topics.filter((t) => t !== id)
        : [...prev.topics, id],
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/submit-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Submission failed')

      router.push('/thank-you')
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-cream pt-24 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
            Step 1 of 2
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl text-navy mb-4">
            Before We Meet
          </h1>
          <span className="gold-rule mx-auto mb-4" />
          <p className="font-inter text-slate leading-relaxed">
            Help me prepare so our time together is as useful as possible.
            Takes about two minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ─ 1. Contact Info ─ */}
          <div className="bg-white border border-gold/20 p-8">
            <h2 className="font-playfair text-2xl text-navy mb-6">
              Your Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-inter text-xs tracking-wide text-slate mb-2">
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className="input-field"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block font-inter text-xs tracking-wide text-slate mb-2">
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className="input-field"
                  placeholder="jane@brokerage.com"
                />
              </div>
              <div>
                <label className="block font-inter text-xs tracking-wide text-slate mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  className="input-field"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block font-inter text-xs tracking-wide text-slate mb-2">
                  Brokerage
                </label>
                <input
                  type="text"
                  value={form.brokerage}
                  onChange={(e) => set('brokerage', e.target.value)}
                  className="input-field"
                  placeholder="Your brokerage name"
                />
              </div>
            </div>
          </div>

          {/* ─ 2. Biggest Challenge ─ */}
          <div className="bg-white border border-gold/20 p-8">
            <h2 className="font-playfair text-2xl text-navy mb-2">
              Your Biggest Challenge Right Now
            </h2>
            <p className="font-inter text-xs text-slate mb-5">
              The one thing you most want to solve or get clarity on.
            </p>
            <textarea
              value={form.challenge}
              onChange={(e) => set('challenge', e.target.value)}
              rows={4}
              className="input-field resize-none"
              placeholder="Tell me what's on your mind…"
            />
          </div>

          {/* ─ 3. Topics ─ */}
          <div className="bg-white border border-gold/20 p-8">
            <h2 className="font-playfair text-2xl text-navy mb-2">
              What Would You Like to Cover?
            </h2>
            <p className="font-inter text-xs text-slate mb-5">
              Select all that apply — we'll shape the call around your priorities.
            </p>
            <div className="space-y-3">
              {TOPICS.map((topic) => {
                const active = form.topics.includes(topic.id)
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => toggleTopic(topic.id)}
                    className={`w-full text-left flex items-center gap-4 px-4 py-3.5 border font-inter text-sm transition-colors ${
                      active
                        ? 'border-gold bg-gold/10 text-navy'
                        : 'border-gold/25 bg-cream text-slate hover:border-gold/60'
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-4 h-4 border flex items-center justify-center transition-colors ${
                        active ? 'border-gold bg-gold' : 'border-gold/40'
                      }`}
                    >
                      {active && (
                        <svg
                          className="w-2.5 h-2.5 text-navy"
                          viewBox="0 0 10 8"
                          fill="none"
                        >
                          <path
                            d="M1 4l3 3 5-6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    {topic.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* ─ 4. Experience & Type ─ */}
          <div className="bg-white border border-gold/20 p-8 space-y-6">
            <h2 className="font-playfair text-2xl text-navy">Your Background</h2>

            <div>
              <label className="block font-inter text-xs tracking-wide text-slate mb-2">
                How long have you been in real estate?{' '}
                <span className="text-gold">*</span>
              </label>
              <select
                required
                value={form.experience}
                onChange={(e) => set('experience', e.target.value)}
                className="input-field"
              >
                <option value="">Select…</option>
                {EXPERIENCE.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-inter text-xs tracking-wide text-slate mb-3">
                How do you work? <span className="text-gold">*</span>
              </label>
              <div className="space-y-3">
                {AGENT_TYPES.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        form.agentType === type
                          ? 'border-gold'
                          : 'border-gold/40 group-hover:border-gold/70'
                      }`}
                    >
                      {form.agentType === type && (
                        <span className="w-2 h-2 rounded-full bg-gold block" />
                      )}
                    </span>
                    <input
                      type="radio"
                      name="agentType"
                      value={type}
                      checked={form.agentType === type}
                      onChange={(e) => set('agentType', e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-inter text-sm text-navy">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {error && (
            <p className="font-inter text-sm text-red-600 text-center bg-red-50 border border-red-200 px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold text-navy font-inter font-semibold text-xs tracking-widest uppercase py-5 hover:bg-gold-light transition-colors disabled:opacity-50"
          >
            {submitting ? 'Submitting…' : 'Submit & Book My Coffee Call →'}
          </button>

          <p className="font-inter text-xs text-slate/60 text-center">
            Your information is never sold or shared with third parties.
          </p>
        </form>
      </div>
    </main>
  )
}
