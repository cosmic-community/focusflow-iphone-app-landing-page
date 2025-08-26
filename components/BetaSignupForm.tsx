'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BetaSignupFormData } from '@/types'

export default function BetaSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BetaSignupFormData>()
  
  const onSubmit = async (data: BetaSignupFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit signup')
      }
      
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Signup error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  if (submitStatus === 'success') {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
        <div className="text-white mb-4">
          <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Thanks for signing up!</h3>
        <p className="text-white/80">We'll notify you when FocusFlow is ready for beta testing.</p>
      </div>
    )
  }
  
  return (
    <div id="beta-signup" className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">Join the Beta</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white/50 focus:outline-none transition-colors"
            {...register('fullName', { 
              required: 'Full name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
          />
          {errors.fullName && (
            <p className="text-red-200 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white/50 focus:outline-none transition-colors"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
              }
            })}
          />
          {errors.email && (
            <p className="text-red-200 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <textarea
            placeholder="Tell us why you're interested (optional)"
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white/50 focus:outline-none transition-colors resize-none"
            {...register('message')}
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get Early Access'}
        </button>
        
        {submitStatus === 'error' && (
          <p className="text-red-200 text-sm text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  )
}