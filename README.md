# FocusFlow - iPhone App Landing Page

![App Preview](https://imgix.cosmicjs.com/16bdd7b0-8220-11f0-a561-cd0208bbad0c-photo-1512941937669-90a1b58e7e9c-1756173477864.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive landing page built to promote the FocusFlow iPhone app. Features dynamic content management through Cosmic CMS, beta signup functionality, and professional sections for About, Team & Mission, For Investors, and Contact information.

## ✨ Features

- **Dynamic Content Management** - All content sections managed through Cosmic CMS
- **Beta Signup System** - Email capture form for early access requests with validation
- **Responsive Design** - Mobile-first approach optimized for all devices
- **Professional Sections** - About, Team & Mission, For Investors, Contact
- **App Screenshots Gallery** - Showcase iPhone app interface with optimized images
- **Modern Tech Stack** - Next.js 15, TypeScript, Tailwind CSS
- **SEO Optimized** - Meta tags and structured data for search engines
- **Performance Optimized** - Fast loading with image optimization and caching

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68ad11e204ea77b1e31e575b&clone_repository=68ad974b1f09167261d58e05)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want to build a clone of the attached files to build a landing page to promote an iPhone app. What is important is to have the sections About, Team & Mission, For Investors, Contact, and a way for early beta testers to request access by submitting their email."

### Code Generation Prompt

> "I want to build a clone of the attached media files to build a landing page to promote an iPhone app. What is important is to have the sections About, Team & Mission, For Investors, Contact, and a way for early beta testers to request access by submitting their email."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **React Hook Form** - Form handling and validation
- **Framer Motion** - Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket

### Installation

1. Clone the repository and install dependencies:
```bash
bun install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Cosmic SDK Examples

### Fetching Landing Page Content
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getLandingPageContent() {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'app-landing-page'
      })
      .depth(1)
    
    return response.object
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    throw error
  }
}
```

### Creating Beta Signup
```typescript
export async function createBetaSignup(formData: BetaSignupFormData) {
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
    })
    
    return response.object
  } catch (error) {
    throw new Error('Failed to create beta signup')
  }
}
```

## 🗄️ Cosmic CMS Integration

This application uses two main content types in your Cosmic bucket:

### App Landing Page (Singleton)
Contains all the main landing page content:
- App name and hero content
- About section with HTML content
- Team & Mission information  
- For Investors section
- Contact details
- App screenshots gallery

### Beta Signups
Stores early access requests with:
- Email address (validated)
- Full name
- Optional message
- Signup date

All content is dynamically fetched from Cosmic, allowing you to update the landing page content without deploying new code.

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod --dir=out
```

### Environment Variables
Set these in your deployment platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`

<!-- README_END -->