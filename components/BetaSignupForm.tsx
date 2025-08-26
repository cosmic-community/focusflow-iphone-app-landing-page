'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BetaSignupFormData } from '@/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { CheckCircle } from 'lucide-react'

export default function BetaSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { toast } = useToast()
  
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
      toast({
        title: "Success!",
        description: "Thank you for joining the beta. We'll be in touch soon!",
        variant: "default",
      })
      reset()
    } catch (error) {
      console.error('Signup error:', error)
      setSubmitStatus('error')
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  if (submitStatus === 'success') {
    return (
      <Card id="beta-signup" className="bg-white/70 backdrop-blur-sm border-white/50">
        <CardContent className="text-center p-8">
          <div className="text-gray-900 mb-4">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Thanks for signing up!</CardTitle>
          <CardDescription className="text-gray-700">
            We'll notify you when FocusFlow is ready for beta testing.
          </CardDescription>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <Card id="beta-signup" className="bg-white/70 backdrop-blur-sm border-white/50">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">Join the Beta</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Input
              type="text"
              placeholder="Full Name"
              className="w-full px-6 py-4 rounded-2xl bg-white/80 text-gray-900 placeholder-gray-500 border-white/50 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all h-14"
              {...register('fullName', { 
                required: 'Full name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-2">{errors.fullName.message}</p>
            )}
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              className="w-full px-6 py-4 rounded-2xl bg-white/80 text-gray-900 placeholder-gray-500 border-white/50 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all h-14"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address'
                }
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <Textarea
              placeholder="Tell us why you're interested (optional)"
              rows={4}
              className="w-full px-6 py-4 rounded-2xl bg-white/80 text-gray-900 placeholder-gray-500 border-white/50 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
              {...register('message')}
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 text-white py-4 px-6 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-200 h-14"
          >
            {isSubmitting ? 'Submitting...' : 'Get Early Access'}
          </Button>
          
          {submitStatus === 'error' && (
            <p className="text-red-500 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}