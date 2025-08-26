import { createBucketClient } from '@cosmicjs/sdk'
import { LandingPage, BetaSignup, BetaSignupFormData } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch landing page content
export async function getLandingPageContent(): Promise<LandingPage | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'app-landing-page'
      })
      .depth(1)
    
    const landingPage = response.object as LandingPage;
    
    // Validate critical properties exist
    if (!landingPage || !landingPage.metadata) {
      return null;
    }
    
    return landingPage;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch landing page content');
  }
}

// Create beta signup
export async function createBetaSignup(formData: BetaSignupFormData): Promise<BetaSignup> {
  // Validate required fields
  if (!formData.fullName.trim() || !formData.email.trim()) {
    throw new Error('Full name and email are required');
  }
  
  try {
    const response = await cosmic.objects.insertOne({
      type: 'beta-signups',
      title: `${formData.fullName} Beta Signup`,
      metadata: {
        email: formData.email,
        full_name: formData.fullName,
        message: formData.message || '',
        signup_date: new Date().toISOString().split('T')[0]
      }
    });
    
    return response.object as BetaSignup;
  } catch (error) {
    console.error('Error creating beta signup:', error);
    throw new Error('Failed to create beta signup');
  }
}

// Get recent beta signups (for admin view)
export async function getRecentBetaSignups(limit = 10): Promise<BetaSignup[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'beta-signups' })
      .props(['id', 'title', 'metadata', 'created_at'])
      .depth(1);
    
    // Manual sorting by created_at (newest first)
    const signups = response.objects as BetaSignup[];
    return signups.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateB - dateA; // Newest first
    }).slice(0, limit);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch beta signups');
  }
}