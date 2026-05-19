import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Endeavour Real Estate Coaching — Book Your Coffee Call'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(160deg, #000000 0%, #1a1a1a 60%, #000000 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 100px',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Gold grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              'repeating-linear-gradient(0deg, #bc9c22 0, #bc9c22 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #bc9c22 0, #bc9c22 1px, transparent 1px, transparent 60px)',
          }}
        />

        {/* Gold accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '6px',
            height: '100%',
            background: '#bc9c22',
          }}
        />

        {/* Brand label */}
        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '13px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#bc9c22',
            margin: '0 0 24px',
          }}
        >
          Endeavour Real Estate Coaching
        </p>

        {/* Headline */}
        <h1
          style={{
            fontSize: '68px',
            fontWeight: 'normal',
            color: '#fffff6',
            lineHeight: 1.1,
            margin: '0 0 28px',
            maxWidth: '800px',
          }}
        >
          Your Next Breakthrough
          <br />
          <span style={{ color: '#bc9c22' }}>Starts With Coffee</span>
        </h1>

        {/* Gold rule */}
        <div
          style={{
            width: '60px',
            height: '1px',
            background: '#bc9c22',
            margin: '0 0 28px',
          }}
        />

        {/* Subheading */}
        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '20px',
            color: 'rgba(255,255,246,0.65)',
            margin: '0 0 48px',
            maxWidth: '620px',
            lineHeight: 1.5,
          }}
        >
          A free coffee call for realtors &amp; brokers — take the 2-minute survey and book your spot.
        </p>

        {/* CTA pill */}
        <div
          style={{
            background: '#bc9c22',
            color: '#000000',
            fontFamily: 'sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '16px 36px',
          }}
        >
          Take the Survey →
        </div>
      </div>
    ),
    { ...size }
  )
}
