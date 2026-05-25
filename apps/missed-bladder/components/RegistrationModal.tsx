'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Phone required'),
  specialty: z.string().min(2, 'Specialty required'),
  hospital: z.string().min(2, 'Hospital required'),
  city: z.string().min(2, 'City required'),
})

type FormData = z.infer<typeof schema>

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setStatus('idle'); reset() }, 300)
    }
  }, [isOpen, reset])

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-cream w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-charcoal px-8 py-6 flex justify-between items-start z-10">
          <div>
            <span className="font-body text-[0.65rem] tracking-[0.18em] uppercase text-white/40 block mb-1">
              Round Table 2026
            </span>
            <h2 className="font-display text-xl font-light text-white">Express Interest</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white text-2xl leading-none mt-1"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="font-display text-3xl font-light text-charcoal mb-3">
                Thank you, Doctor.
              </div>
              <p className="font-body text-sm text-muted leading-relaxed">
                We've received your expression of interest. The our team will be in touch with
                event details and confirmation.
              </p>
              <button
                onClick={onClose}
                className="mt-8 font-body text-sm px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-muted block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    className="w-full border border-sage/30 bg-white text-charcoal placeholder:text-muted/40 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage transition-colors"
                    placeholder="Dr. Full Name"
                  />
                  {errors.name && <p className="font-body text-[0.6rem] text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-muted block mb-1.5">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full border border-sage/30 bg-white text-charcoal placeholder:text-muted/40 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage transition-colors"
                    placeholder="dr@hospital.in"
                  />
                  {errors.email && <p className="font-body text-[0.6rem] text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-muted block mb-1.5">
                  Phone *
                </label>
                <input
                  {...register('phone')}
                  className="w-full border border-sage/30 bg-white text-charcoal placeholder:text-muted/40 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && <p className="font-body text-[0.6rem] text-red-500 mt-1">{errors.phone.message}</p>}
              </div>

              {/* Specialty */}
              <div>
                <label className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-muted block mb-1.5">
                  Specialty *
                </label>
                <input
                  {...register('specialty')}
                  className="w-full border border-sage/30 bg-white text-charcoal placeholder:text-muted/40 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage transition-colors"
                  placeholder="e.g. Urology, Gynaecology, Pain Medicine"
                />
                {errors.specialty && <p className="font-body text-[0.6rem] text-red-500 mt-1">{errors.specialty.message}</p>}
              </div>

              {/* Hospital + City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-muted block mb-1.5">
                    Hospital / Institution *
                  </label>
                  <input
                    {...register('hospital')}
                    className="w-full border border-sage/30 bg-white text-charcoal placeholder:text-muted/40 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage transition-colors"
                    placeholder="Hospital name"
                  />
                  {errors.hospital && <p className="font-body text-[0.6rem] text-red-500 mt-1">{errors.hospital.message}</p>}
                </div>
                <div>
                  <label className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-muted block mb-1.5">
                    City *
                  </label>
                  <input
                    {...register('city')}
                    className="w-full border border-sage/30 bg-white text-charcoal placeholder:text-muted/40 font-body text-sm px-4 py-3 focus:outline-none focus:border-sage transition-colors"
                    placeholder="Mumbai, Delhi, Bangalore..."
                  />
                  {errors.city && <p className="font-body text-[0.6rem] text-red-500 mt-1">{errors.city.message}</p>}
                </div>
              </div>

              {status === 'error' && (
                <p className="font-body text-[0.7rem] text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full font-body text-sm py-3.5 bg-sage text-white hover:bg-sage-deep transition-colors tracking-wide disabled:opacity-50"
              >
                {status === 'loading' ? 'Submitting…' : 'Submit Expression of Interest'}
              </button>

              <p className="font-body text-[0.65rem] text-muted text-center">
                For specialist physicians only. We will confirm attendance eligibility.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

