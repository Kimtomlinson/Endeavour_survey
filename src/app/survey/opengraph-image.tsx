import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Take the Survey — Endeavour Real Estate Coaching Coffee Call'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function SurveyOGImage() {
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

        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'normal',
            color: '#fffff6',
            lineHeight: 1.1,
            margin: '0 0 28px',
            maxWidth: '800px',
          }}
        >
          Before We Meet —<br />
          <span style={{ color: '#bc9c22' }}>Tell Me What You Need</span>
        </h1>

        <div style={{ width: '60px', height: '1px', background: '#bc9c22', margin: '0 0 28px' }} />

        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '20px',
            color: 'rgba(255,255,246,0.65)',
            margin: '0 0 48px',
            maxWidth: '660px',
            lineHeight: 1.5,
          }}
        >
          Takes 2 minutes. I'll review your answers before we meet so every coffee call is worth your time.
        </p>

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
          Start the Survey →
        </div>
      </div>
    ),
    { ...size }
  )
}
