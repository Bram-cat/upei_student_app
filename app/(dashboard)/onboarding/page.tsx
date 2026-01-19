'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GraduationCap, Briefcase } from 'lucide-react'

export default function OnboardingPage() {
  const router = useRouter()
  const [selected, setSelected] = useState<'student' | 'alumni' | null>(null)

  const handleContinue = () => {
    if (selected) {
      // In a real app, this would save to database
      // For now, just redirect to dashboard
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome to AlumniPath</h1>
          <p className="text-xl text-gray-600">Are you a student or an alumni?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selected === 'student' ? 'ring-2 ring-blue-600' : ''
            }`}
            onClick={() => setSelected('student')}
          >
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <GraduationCap className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">I&apos;m a Student</CardTitle>
              <CardDescription className="text-center text-base">
                Looking to connect with alumni and build my career path
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Find alumni in your target roles</li>
                <li>• Get personalized career pathway guidance</li>
                <li>• Book mentorship sessions</li>
                <li>• Access course reviews and insights</li>
                <li>• Discover opportunities</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selected === 'alumni' ? 'ring-2 ring-purple-600' : ''
            }`}
            onClick={() => setSelected('alumni')}
          >
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Briefcase className="h-12 w-12 text-purple-600" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">I&apos;m an Alumni</CardTitle>
              <CardDescription className="text-center text-base">
                Ready to mentor students and give back to the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mentor students in your field</li>
                <li>• Share your career journey</li>
                <li>• Offer mentorship sessions</li>
                <li>• Post opportunities</li>
                <li>• Stay connected with your university</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={!selected}
            className="px-12"
          >
            Continue to Dashboard
          </Button>
        </div>
      </div>
    </div>
  )
}
