'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Team & Mission', href: '#team-mission' },
    { name: 'For Investors', href: '#investors' },
    { name: 'Contact', href: '#contact' },
  ]
  
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 fixed top-0 left-0 right-0 z-50">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="gradient-text text-3xl font-bold tracking-tight">
              focusflow
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild>
                <Link
                  href="#beta-signup"
                  className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200"
                >
                  Get the App
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-white/20 rounded-b-2xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <Link
                  href="#beta-signup"
                  className="bg-gray-900 text-white block text-center px-6 py-3 rounded-full font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get the App
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}