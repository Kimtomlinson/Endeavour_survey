import { NextRequest, NextResponse } from 'next/server'

type SurveyPayload = {
  name: string
  email: string
  phone: string
  brokerage: string
  challenge: string
  topics: string[]
  experience: string
  agentType: string
}

function formatEmailHtml(data: SurveyPayload): string {
  const topicList = data.topics.length
    ? data.topics.map((t) => `<li>${t}</li>`).join('')
    : '<li>None selected</li>'

  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #000000;">
      <div style="background: #000000; padding: 32px; text-align: center;">
        <h1 style="color: #bc9c22; font-size: 22px; margin: 0; letter-spacing: 2px;">
          ENDEAVOUR
        </h1>
        <p style="color: rgba(255,255,246,0.6); font-family: sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 6px 0 0;">
          New Coffee Call Survey
        </p>
      </div>

      <div style="padding: 40px 32px; background: #fffff6; border: 1px solid rgba(188,156,34,0.2);">
        <h2 style="font-size: 24px; color: #000000; margin-top: 0;">
          ${data.name} wants to book a coffee call
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(188,156,34,0.15); font-family: sans-serif; font-size: 12px; color: #66706f; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(188,156,34,0.15); font-family: sans-serif; font-size: 14px;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(188,156,34,0.15); font-family: sans-serif; font-size: 12px; color: #66706f; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(188,156,34,0.15); font-family: sans-serif; font-size: 14px;">${data.phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(188,156,34,0.15); font-family: sans-serif; font-size: 12px; color: #66706f; text-transform: uppercase; letter-spacing: 1px;">Brokerage</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(188,156,34,0.15); font-family: sans-serif; font-size: 14px;">${data.brokerage || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(188,156,34,0.15); font-family: sans-serif; font-size: 12px; color: #66706f; text-transform: uppercase; letter-spacing: 1px;">Experience</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(188,156,34,0.15); font-family: sans-serif; font-size: 14px;">${data.experience || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-family: sans-serif; font-size: 12px; color: #66706f; text-transform: uppercase; letter-spacing: 1px;">Type</td>
            <td style="padding: 10px 0; font-family: sans-serif; font-size: 14px;">${data.agentType || '—'}</td>
          </tr>
        </table>

        <div style="background: white; border: 1px solid rgba(188,156,34,0.2); padding: 20px; margin-bottom: 20px;">
          <p style="font-family: sans-serif; font-size: 11px; color: #66706f; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px;">Topics Requested</p>
          <ul style="font-family: sans-serif; font-size: 14px; color: #000000; margin: 0; padding-left: 20px; line-height: 1.8;">
            ${topicList}
          </ul>
        </div>

        <div style="background: white; border: 1px solid rgba(188,156,34,0.2); padding: 20px;">
          <p style="font-family: sans-serif; font-size: 11px; color: #66706f; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px;">Their Biggest Challenge</p>
          <p style="font-family: sans-serif; font-size: 14px; color: #000000; margin: 0; line-height: 1.7;">${data.challenge || '(not provided)'}</p>
        </div>
      </div>

      <div style="background: #000000; padding: 20px 32px; text-align: center;">
        <p style="font-family: sans-serif; font-size: 11px; color: rgba(255,255,246,0.4); margin: 0;">
          Endeavour Real Estate Coaching
        </p>
      </div>
    </div>
  `
}

async function addToMailchimp(email: string, name: string) {
  const { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_SERVER_PREFIX } =
    process.env

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) return

  const [firstName, ...rest] = name.trim().split(' ')
  const lastName = rest.join(' ')

  await fetch(
    `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: { FNAME: firstName, LNAME: lastName },
        tags: ['coffee-call-survey'],
      }),
    }
  )
}

export async function POST(req: NextRequest) {
  try {
    const data: SurveyPayload = await req.json()

    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const { RESEND_API_KEY, NOTIFICATION_EMAIL } = process.env

    if (RESEND_API_KEY && NOTIFICATION_EMAIL) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Endeavour Survey <onboarding@resend.dev>',
          to: [NOTIFICATION_EMAIL],
          subject: `New coffee call survey — ${data.name}`,
          html: formatEmailHtml(data),
        }),
      })
    } else {
      // Dev fallback: log to console when env vars are not set
      console.log('[Survey Submission]', JSON.stringify(data, null, 2))
    }

    // Mailchimp is best-effort — don't block the response on failure
    addToMailchimp(data.email, data.name).catch(() => {})

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[submit-survey]', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
