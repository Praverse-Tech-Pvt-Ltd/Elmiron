import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
const contactEmail = process.env.CONTACT_EMAIL ?? 'contact@elmiron.com'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      reply_to: data.email,
      subject: `New enquiry from ${data.name} — Missed Bladder Website`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #2c2c2a;">New Contact Enquiry — Missed Bladder Disease</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone ?? 'Not provided'}</p>
          <hr style="border: none; border-top: 1px solid #e8f0e8; margin: 16px 0;" />
          <p><strong>Message:</strong></p>
          <p style="color: #6b6b68;">${data.message}</p>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact error:', error)
    return Response.json({ success: false }, { status: 500 })
  }
}

