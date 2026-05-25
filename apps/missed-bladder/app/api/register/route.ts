import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  specialty: z.string().min(2),
  hospital: z.string().min(2),
  city: z.string().min(2),
})

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Save to Supabase if configured
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
      const { createClient } = await import('@supabase/supabase-js')
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_KEY
      )
      await supabase.from('registrations').insert({
        ...data,
        event_id: 'roundtable-2026',
        status: 'pending',
      })
    }

    await resend.emails.send({
      from: 'events@elmiron.com',
      to: data.email,
      subject: "Expression of Interest Received — Women's Bladder Health Round Table 2026",
      html: `<div style="font-family: sans-serif;"><h2>Thank you, Dr. ${data.name}</h2><p>We have received your expression of interest. Our team will be in touch.</p><p>The Company</p></div>`,
    })

    await resend.emails.send({
      from: 'events@elmiron.com',
      to: process.env.CONTACT_EMAIL ?? 'contact@elmiron.com',
      subject: `New Round Table Registration — Dr. ${data.name} · ${data.city}`,
      html: `<div style="font-family: sans-serif;"><h2>New Round Table Registration</h2><p><b>Name:</b> ${data.name}</p><p><b>Email:</b> ${data.email}</p><p><b>Phone:</b> ${data.phone}</p><p><b>Specialty:</b> ${data.specialty}</p><p><b>Hospital:</b> ${data.hospital}, ${data.city}</p></div>`,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Registration error:', error)
    return Response.json({ success: false }, { status: 500 })
  }
}

