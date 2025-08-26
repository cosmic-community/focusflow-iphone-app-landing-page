import { ArrowDown, Play, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BetaSignupForm from '@/components/BetaSignupForm'
import { LandingPage } from '@/types'

interface HeroSectionProps {
  landingPage: LandingPage
}

export default function HeroSection({ landingPage }: HeroSectionProps) {
  const { metadata } = landingPage
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-blue-100/30"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
      <div className="relative container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  <Smartphone className="w-4 h-4 inline mr-1" />
                  iPhone App
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {metadata.hero_tagline}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                {metadata.hero_description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                variant="gradient"
                onClick={() => document.getElementById('beta-signup')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Beta Testing
              </Button>
              
              <Button 
                size="xl" 
                variant="glass"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>2,500+ Beta Users</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>4.8★ Rating</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Beta Signup Form */}
          <div className="lg:mt-0">
            <BetaSignupForm />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Phone mockups */}
      {metadata.app_screenshots && metadata.app_screenshots.length > 0 && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="relative">
            {metadata.app_screenshots.slice(0, 3).map((screenshot, index) => (
              <div
                key={index}
                className={`absolute w-48 h-96 bg-white rounded-[2.5rem] p-2 shadow-2xl transition-all duration-500 ${
                  index === 0 ? 'z-30 translate-x-0' : 
                  index === 1 ? 'z-20 translate-x-8 translate-y-4' :
                  'z-10 translate-x-16 translate-y-8'
                }`}
                style={{
                  transform: `translateX(${index * 32}px) translateY(${index * 16}px) rotate(${index * 2}deg)`
                }}
              >
                <img
                  src={`${screenshot.imgix_url}?w=400&h=800&fit=crop&auto=format,compress`}
                  alt={`FocusFlow screenshot ${index + 1}`}
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}