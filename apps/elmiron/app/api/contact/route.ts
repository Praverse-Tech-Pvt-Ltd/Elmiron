import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
const contactEmail = process.env.CONTACT_EMAIL ?? 'isshane.guptaa@swatispentose.com'
const secondaryEmail = process.env.CONTACT_SECONDARY_EMAIL ?? 'kanchan.londhe@swatispentose.com'
const ccEmail = process.env.CONTACT_CC_EMAIL ?? 'v@v-group.in'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { success: false, error: 'Contact form is not configured' },
      { status: 503 },
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from: fromEmail,
      to: [contactEmail, secondaryEmail],
      cc: ccEmail,
      reply_to: data.email,
      subject: `New enquiry from ${data.name} — Elmiron Website`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #2c2c2a;">New Contact Enquiry — Elmiron</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(data.phone ?? 'Not provided')}</p>
          <hr style="border: none; border-top: 1px solid #e8f0e8; margin: 16px 0;" />
          <p><strong>Message:</strong></p>
          <p style="color: #6b6b68;">${escapeHtml(data.message)}</p>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json({ success: false, error: 'Failed to send message' }, { status: 500 })
  }
}

