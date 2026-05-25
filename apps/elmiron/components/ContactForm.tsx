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
    <section id="contact" className="bg-charcoal py-24">
      <div className="max-w-2xl mx-auto px-6">
        <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-light mb-3">
          Medical Affairs
        </span>
        <h2 className="font-display text-4xl font-light text-white mb-2 leading-tight">
          Contact 
        </h2>
        <p className="font-body text-sm text-white/50 mb-10 font-light">
          For product enquiries, prescribing information, or medical information requests.
        </p>

        {status === 'success' ? (
          <div className="border border-sage/40 bg-sage/10 p-8 text-center">
            <p className="font-display text-2xl font-light text-white mb-2">Thank you.</p>
            <p className="font-body text-sm text-white/60">
              We've received your enquiry and will respond within 1 business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage/60 transition-colors"
                  placeholder="Dr. Firstname Lastname"
                />
                {errors.name && (
                  <p className="font-body text-[0.65rem] text-red-400 mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block font-body text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage/60 transition-colors"
                  placeholder="doctor@hospital.in"
                />
                {errors.email && (
                  <p className="font-body text-[0.65rem] text-red-400 mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block font-body text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-2">
                Phone
              </label>
              <input
                {...register('phone')}
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage/60 transition-colors"
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
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage/60 transition-colors resize-none"
                placeholder="Your enquiry or question..."
              />
              {errors.message && (
                <p className="font-body text-[0.65rem] text-red-400 mt-1">{errors.message.message}</p>
              )}
            </div>

            {status === 'error' && (
              <p className="font-body text-[0.7rem] text-red-400">
                Something went wrong. Please try again or email contact@elmiron.com
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="font-body text-sm px-8 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors tracking-wide disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

