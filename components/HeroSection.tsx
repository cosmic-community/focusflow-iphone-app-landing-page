'use client'

import { LandingPage } from '@/types'
import BetaSignupForm from '@/components/BetaSignupForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Play } from 'lucide-react'

interface HeroSectionProps {
  landingPage: LandingPage
}

export default function HeroSection({ landingPage }: HeroSectionProps) {
  const { metadata } = landingPage
  const featuredImage = metadata.app_screenshots?.[0]
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 container-max section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Focus on managing{' '}
              <span className="gradient-text">your</span>
              <br />
              <span className="gradient-text">Productivity</span>{' '}
              instead of managing
              <br />
              numerous <span className="gradient-text">Apps</span>.
            </h1>
            
            <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-lg">
              {metadata.hero_description}
            </p>
            
            {/* Email signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Type your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/80 backdrop-blur-sm border-white/50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent h-14"
              />
              <Button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 whitespace-nowrap h-14">
                Get the App
              </Button>
            </div>
            
            {/* Quick tour link */}
            <div className="mt-16">
              <Button variant="ghost" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors mx-auto lg:mx-0 px-0">
                <div className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center">
                  <Play className="w-4 h-4" />
                </div>
                <span className="font-medium">Take a Quick Tour</span>
              </Button>
            </div>
          </div>
          
          {/* Right side - iPhone mockup */}
          <div className="flex justify-center lg:justify-end animate-float">
            {featuredImage && (
              <div className="relative">
                <div className="w-80 h-[640px] bg-black rounded-[3.5rem] p-2 shadow-2xl shadow-black/20">
                  <div className="w-full h-full rounded-[3rem] overflow-hidden">
                    <img
                      src={`${featuredImage.imgix_url}?w=640&h=1280&fit=crop&auto=format,compress`}
                      alt={`${metadata.app_name} App Screenshot`}
                      className="w-full h-full object-cover"
                      width="320"
                      height="640"
                    />
                  </div>
                </div>
                
                {/* Floating notification elements */}
                <div className="absolute -top-6 -left-6 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 -right-8 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 -left-8 w-5 h-5 bg-pink-400 rounded-full animate-bounce"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}