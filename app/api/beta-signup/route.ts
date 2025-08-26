import { NextRequest, NextResponse } from 'next/server'
import { createBetaSignup } from '@/lib/cosmic'
import { BetaSignupFormData } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: BetaSignupFormData = await request.json()
    
    // Validate required fields
    if (!body.fullName || !body.email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }
    
    // Create the beta signup
    const signup = await createBetaSignup(body)
    
    return NextResponse.json({ 
      success: true, 
      signup: {
        id: signup.id,
        email: signup.metadata.email,
        fullName: signup.metadata.full_name
      }
    })
  } catch (error) {
    console.error('Beta signup API error:', error)
    
    return NextResponse.json(
      { error: 'Failed to create beta signup' },
      { status: 500 }
    )
  }
}