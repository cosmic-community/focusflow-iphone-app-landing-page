'use client'

import { LandingPage } from '@/types'
import { Brain, Clock, BarChart3, Music, Trophy, Smartphone } from 'lucide-react'

interface AboutSectionProps {
  landingPage: LandingPage
}

const features = [
  {
    icon: Brain,
    title: 'Science-based focus training exercises',
    description: 'Leverage proven neuroscience techniques'
  },
  {
    icon: Clock,
    title: 'Smart Pomodoro timer with adaptive breaks',
    description: 'Optimize your work-rest cycles automatically'
  },
  {
    icon: BarChart3,
    title: 'Detailed analytics and progress tracking',
    description: 'Monitor your focus improvements over time'
  },
  {
    icon: Music,
    title: 'Curated soundscapes for deep work',
    description: 'Immersive audio environments for concentration'
  },
  {
    icon: Trophy,
    title: 'Achievement system to keep you motivated',
    description: 'Unlock rewards as you build focus habits'
  },
  {
    icon: Smartphone,
    title: 'Beautiful, distraction-free interface',
    description: 'Clean design that promotes mindful usage'
  }
]

export default function AboutSection({ landingPage }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About FocusFlow
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              In today's distracted world, maintaining deep focus has become a superpower. 
              FocusFlow leverages proven techniques from cognitive psychology and neuroscience 
              to train your brain for sustained attention and productivity.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:from-purple-600 group-hover:to-blue-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/50 shadow-xl">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a student, entrepreneur, or creative professional, 
              FocusFlow adapts to your unique workflow and helps you achieve your most important goals.
            </p>
            <div className="mt-8">
              <a 
                href="#beta-signup"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Your Focus Journey
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}