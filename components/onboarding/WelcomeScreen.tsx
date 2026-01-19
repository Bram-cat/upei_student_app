'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'
import { useUser } from '@clerk/nextjs'

interface WelcomeScreenProps {
  onNext: () => void
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  const { user } = useUser()

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="flex items-center space-x-3">
        <GraduationCap className="h-16 w-16 text-blue-600" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          UPEI MentorConnect
        </h1>
      </div>

      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">
            Welcome, {user?.firstName || 'Student'}! 👋
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Let&apos;s get you connected with UPEI seniors who can help guide your journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">What is UPEI MentorConnect?</h3>
            <p className="text-gray-700 leading-relaxed">
              A platform to connect you with UPEI students and alumni who are 2-3 steps ahead of you.
              Get personalized advice, career guidance, and insights from people who&apos;ve been exactly where you are now.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600">2-3</div>
              <div className="text-sm text-gray-600">Years ahead of you</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">UPEI mentors</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600">20-30</div>
              <div className="text-sm text-gray-600">Minute sessions</div>
            </div>
          </div>

          <div className="pt-4">
            <Button onClick={onNext} size="lg" className="w-full">
              Let&apos;s Get Started
            </Button>
          </div>
        </CardContent>
      </Card>

      <p className="text-sm text-gray-500">This will only take 60 seconds</p>
    </div>
  )
}
