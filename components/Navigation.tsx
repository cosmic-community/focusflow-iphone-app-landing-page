'use client'

import { useState } from 'react'
import { Menu, X, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
    setIsMenuOpen(false)
  }
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">FocusFlow</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('investors')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Investors
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
            
            <Button 
              variant="gradient" 
              size="sm"
              onClick={() => scrollToSection('beta-signup')}
            >
              Join Beta
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('investors')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Investors
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Contact
              </button>
              <div className="px-3 pt-2">
                <Button 
                  variant="gradient" 
                  size="sm" 
                  className="w-full"
                  onClick={() => scrollToSection('beta-signup')}
                >
                  Join Beta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}