'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GraduationCap, Menu } from 'lucide-react'
import { useState } from 'react'
import { useUser, UserButton, SignInButton } from '@clerk/nextjs'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isSignedIn, user } = useUser()

  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AlumniPath
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <div className="flex items-center space-x-4">
              {isSignedIn ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="ghost">Dashboard</Button>
                  </Link>
                  <UserButton afterSignOutUrl="/" />
                </>
              ) : (
                <>
                  <Link href="/sign-in">
                    <Button variant="ghost">Sign In</Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button>Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/features" className="block text-sm font-medium text-gray-700 hover:text-primary">
              Features
            </Link>
            <Link href="/how-it-works" className="block text-sm font-medium text-gray-700 hover:text-primary">
              How It Works
            </Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 hover:text-primary">
              About
            </Link>
            <div className="space-y-2 pt-4">
              {isSignedIn ? (
                <>
                  <Link href="/dashboard" className="block">
                    <Button className="w-full">Dashboard</Button>
                  </Link>
                  <div className="flex justify-center pt-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </>
              ) : (
                <>
                  <Link href="/sign-in" className="block">
                    <Button variant="ghost" className="w-full">Sign In</Button>
                  </Link>
                  <Link href="/sign-up" className="block">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
