// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Landing page content structure
export interface LandingPage extends CosmicObject {
  type: 'app-landing-page';
  metadata: {
    app_name: string;
    hero_tagline: string;
    hero_description: string;
    app_screenshots?: {
      url: string;
      imgix_url: string;
    }[];
    about_section: string;
    team_mission: string;
    for_investors: string;
    contact_email: string;
    contact_phone?: string;
    contact_address?: string;
  };
}

// Beta signup structure
export interface BetaSignup extends CosmicObject {
  type: 'beta-signups';
  metadata: {
    email: string;
    full_name: string;
    message?: string;
    signup_date: string;
  };
}

// Form data types
export interface BetaSignupFormData {
  fullName: string;
  email: string;
  message?: string;
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards
export function isLandingPage(obj: CosmicObject): obj is LandingPage {
  return obj.type === 'app-landing-page';
}

export function isBetaSignup(obj: CosmicObject): obj is BetaSignup {
  return obj.type === 'beta-signups';
}