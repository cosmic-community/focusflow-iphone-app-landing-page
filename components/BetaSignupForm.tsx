'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { CheckCircle, Loader2, Mail, User, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { BetaSignupFormData } from '@/types'

const formSchema = z.object({
  fullName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters'),
  message: z.string()
    .max(500, 'Message must be less than 500 characters')
    .optional()
})

export default function BetaSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { toast } = useToast()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BetaSignupFormData>({
    resolver: zodResolver(formSchema)
  })
  
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
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit signup')
      }
      
      setSubmitStatus('success')
      toast({
        title: "Welcome to FocusFlow! 🎉",
        description: "We'll notify you when beta testing begins.",
        variant: "success",
      })
      reset()
    } catch (error) {
      console.error('Signup error:', error)
      setSubmitStatus('error')
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  if (submitStatus === 'success') {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/50 shadow-xl">
        <div className="text-green-600 mb-4">
          <CheckCircle className="w-16 h-16 mx-auto mb-4" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanks for signing up!</h3>
        <p className="text-gray-700">We'll notify you when FocusFlow is ready for beta testing.</p>
        <Button 
          variant="ghost" 
          onClick={() => setSubmitStatus('idle')}
          className="mt-4"
        >
          Sign up another person
        </Button>
      </div>
    )
  }
  
  return (
    <div id="beta-signup" className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Beta</h3>
        <p className="text-gray-600">Be among the first to experience FocusFlow</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-gray-700 font-medium">
            <User className="w-4 h-4 inline mr-2" />
            Full Name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            className="h-12 px-4 rounded-xl bg-white/90 border-gray-200 focus:border-purple-500 focus:ring-purple-500/20"
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="h-12 px-4 rounded-xl bg-white/90 border-gray-200 focus:border-purple-500 focus:ring-purple-500/20"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-700 font-medium">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Why are you interested? (Optional)
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us what excites you about FocusFlow..."
            rows={4}
            className="px-4 py-3 rounded-xl bg-white/90 border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
            {...register('message')}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          size="xl"
          variant="gradient"
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining Beta...
            </>
          ) : (
            'Get Early Access'
          )}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          By signing up, you agree to receive updates about FocusFlow's beta launch.
        </p>
      </form>
    </div>
  )
}