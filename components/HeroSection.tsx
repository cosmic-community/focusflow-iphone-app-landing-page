'use client'

import { LandingPage } from '@/types'
import BetaSignupForm from '@/components/BetaSignupForm'

interface HeroSectionProps {
  landingPage: LandingPage
}

export default function HeroSection({ landingPage }: HeroSectionProps) {
  const { metadata } = landingPage
  const featuredImage = metadata.app_screenshots?.[0]
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 container-max section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              {metadata.hero_tagline}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {metadata.hero_description}
            </p>
            
            {/* Beta signup form */}
            <div className="max-w-md mx-auto lg:mx-0">
              <BetaSignupForm />
            </div>
          </div>
          
          {/* Right side - iPhone mockup */}
          <div className="flex justify-center lg:justify-end animate-float">
            {featuredImage && (
              <div className="relative">
                <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                    <img
                      src={`${featuredImage.imgix_url}?w=600&h=1200&fit=crop&auto=format,compress`}
                      alt={`${metadata.app_name} App Screenshot`}
                      className="w-full h-full object-cover"
                      width="300"
                      height="600"
                    />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}