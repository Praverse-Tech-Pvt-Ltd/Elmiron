'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const contacts = [
  {
    name: 'Isshane Guptaa, BD Head',
    email: 'isshane.guptaa@swatispentose.com',
  },
  {
    name: 'Ms Kanchan Londhe',
    email: 'kanchan.londhe@swatispentose.com',
  },
]

const inputClass =
  'w-full bg-white/5 border border-white/12 text-white placeholder:text-white/20 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage/60 focus:bg-white/8 transition-all duration-200'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-charcoal py-20 md:py-24" data-nav-theme="dark">
      <div className="max-w-2xl mx-auto px-5 md:px-8">
        <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-light mb-3">
          BD Head
        </span>
        <h2 className="font-display text-4xl font-light text-white mb-2 leading-tight">
          Contact
        </h2>
        <p className="font-body text-sm text-white/50 mb-8 font-light leading-relaxed">
          For product enquiries, prescribing information, or medical information requests
          regarding Elmiron® for women with IC/BPS.
        </p>

        <div className="grid grid-cols-1 gap-3 mb-8">
          {contacts.map((contact) => (
            <a
              key={contact.email}
              href={`mailto:${contact.email}`}
              className="flex items-center justify-between border border-white/10 bg-white/4 px-5 py-4 hover:border-sage/50 hover:bg-white/7 transition-all duration-200 group"
            >
              <div>
                <span className="block font-display text-lg font-light text-white mb-0.5">
                  {contact.name}
                </span>
                <span className="block font-body text-sm text-sage-light break-all">
                  {contact.email}
                </span>
              </div>
              <span className="font-body text-white/30 group-hover:text-sage-light group-hover:translate-x-1 transition-all duration-200 text-sm ml-4">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-white/8" />
          <span className="font-body text-[0.65rem] uppercase tracking-[0.15em] text-white/25">or send a message</span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        {status === 'success' ? (
          <div className="border border-sage/40 bg-sage/10 p-8 text-center">
            <div className="w-8 h-px bg-sage/60 mx-auto mb-4" />
            <p className="font-display text-2xl font-light text-white mb-2">Thank you.</p>
            <p className="font-body text-sm text-white/60 font-light">
              We've received your enquiry and will respond within 1 business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-body text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  className={inputClass}
                  placeholder="Dr. Firstname Lastname"
                />
                {errors.name && (
                  <p className="font-body text-[0.65rem] text-red-400 mt-1.5">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block font-body text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className={inputClass}
                  placeholder="doctor@hospital.in"
                />
                {errors.email && (
                  <p className="font-body text-[0.65rem] text-red-400 mt-1.5">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block font-body text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-2">
                Phone
              </label>
              <input
                {...register('phone')}
                className={inputClass}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label className="block font-body text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-2">
                Message *
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Your enquiry or question..."
              />
              {errors.message && (
                <p className="font-body text-[0.65rem] text-red-400 mt-1.5">{errors.message.message}</p>
              )}
            </div>

            {status === 'error' && (
              <div className="font-body text-[0.7rem] text-red-400 leading-relaxed">
                Something went wrong. Please email{' '}
                <a href="mailto:isshane.guptaa@swatispentose.com" className="underline underline-offset-2 hover:text-red-300 transition-colors">
                  isshane.guptaa@swatispentose.com
                </a>
                {' '}or{' '}
                <a href="mailto:kanchan.londhe@swatispentose.com" className="underline underline-offset-2 hover:text-red-300 transition-colors">
                  kanchan.londhe@swatispentose.com
                </a>
                .
              </div>
            )}

            <div className="pt-1">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="font-body text-sm px-8 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors duration-200 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
