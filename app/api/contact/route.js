import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, message, timeline, budget } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Sliding Scale <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#0a0a0a;border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.1em;color:#888;text-transform:uppercase;">Sliding Scale Technologies</p>
              <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#ffffff;">New Inquiry</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px;">

              <!-- Sender pill -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#f4f4f5;border-radius:100px;padding:10px 18px;">
                    <span style="font-size:14px;color:#555;font-weight:500;">From: </span>
                    <strong style="font-size:14px;color:#0a0a0a;">${name}</strong>
                    <span style="font-size:14px;color:#888;margin-left:6px;">&lt;${email}&gt;</span>
                  </td>
                </tr>
              </table>

              <!-- What they're building -->
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#888;">What they're building</p>
              <div style="background:#f9f9f9;border-left:3px solid #0a0a0a;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:24px;">
                <p style="margin:0;font-size:15px;line-height:1.6;color:#1a1a1a;">${message.replace(/\n/g, '<br>')}</p>
              </div>

              <!-- Meta grid -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  ${timeline ? `
                  <td width="50%" style="padding-right:8px;vertical-align:top;">
                    <div style="background:#f4f4f5;border-radius:8px;padding:16px 18px;">
                      <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#888;">Timeline</p>
                      <p style="margin:0;font-size:15px;font-weight:600;color:#0a0a0a;">${timeline}</p>
                    </div>
                  </td>` : ''}
                  ${budget ? `
                  <td width="50%" style="padding-left:8px;vertical-align:top;">
                    <div style="background:#f4f4f5;border-radius:8px;padding:16px 18px;">
                      <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#888;">Budget</p>
                      <p style="margin:0;font-size:15px;font-weight:600;color:#0a0a0a;">${budget}</p>
                    </div>
                  </td>` : ''}
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" style="margin-top:32px;width:100%;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display:inline-block;background:#0a0a0a;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:14px 32px;border-radius:8px;">Reply to ${name}</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4f4f5;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#999;">This email was sent from the contact form on <strong>slidingscale.xyz</strong></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
