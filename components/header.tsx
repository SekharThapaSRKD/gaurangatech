'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-transparent backdrop-blur-sm border-b border-transparent z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-extrabold text-foreground tracking-tighter flex items-center gap-2 group">
            <span>Gauranga<span className="font-light text-primary">Tech</span></span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-foreground hover:text-spiritual transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-foreground hover:text-spiritual transition-colors">
              Work
            </Link>
            <Link href="#about" className="text-sm font-medium text-foreground hover:text-spiritual transition-colors">
              About
            </Link>
            <Link href="#contact" className="bg-spiritual text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity hover:shadow-lg hover:shadow-spiritual/30">
              Begin Journey
            </Link>
          </nav>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-border">
            <Link href="#services" className="text-sm font-medium text-foreground py-2 hover:text-spiritual">Services</Link>
            
            <Link href="#portfolio" className="text-sm font-medium text-foreground py-2 hover:text-spiritual">Work</Link>
            <Link href="#about" className="text-sm font-medium text-foreground py-2 hover:text-spiritual">About</Link>
            <Link href="#contact" className="bg-spiritual text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 w-fit">Begin Journey</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
