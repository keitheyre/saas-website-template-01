'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { STRINGS } from '../../config/strings'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Handle scrolling to section when page loads with hash
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1))
      if (element) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          const navHeight = 80
          const elementPosition = element.offsetTop - navHeight
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [pathname])

  const navItems = [
    { href: '#home', label: STRINGS.navigation.home },
    { href: '#features', label: STRINGS.navigation.features },
    { href: '#pricing', label: STRINGS.navigation.pricing },
    { href: '#testimonials', label: STRINGS.navigation.testimonials },
    { href: '#contact', label: STRINGS.navigation.contact },
  ]

  const handleNavClick = (href: string) => {
    // If we're not on the home page, navigate to home page first
    if (pathname !== '/') {
      router.push('/' + href)
    } else {
      // If we're on the home page, use smooth scrolling
      const element = document.getElementById(href.slice(1))
      if (element) {
        const navHeight = 80 // Approximate height of fixed nav bar
        const elementPosition = element.offsetTop - navHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsOpen(false)
  }

  useEffect(() => {
    // If we're on a page that has a hash, scroll to that section
    const hash = pathname.slice(1)
    if (hash && navItems.some(item => item.href === hash)) {
      handleNavClick(hash)
    }
  }, [pathname])

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2" style={{ zIndex: 9999999 }}>
      <div className="glass dark:glass-dark backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl px-8 py-4 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <div
              className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => router.push('/')}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="glass dark:glass-dark border border-white/20 p-3 rounded-xl text-foreground hover:bg-white/10 dark:hover:bg-white/5 transition-colors duration-300"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20" style={{ zIndex: 9999999 }}>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}