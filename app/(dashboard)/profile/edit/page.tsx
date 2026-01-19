'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Save } from 'lucide-react'

const majors = ['Computer Science', 'Business Administration', 'Engineering', 'Biology', 'Mathematics', 'Psychology', 'English', 'Economics']
const years = ['1', '2', '3', '4', 'Graduate']
const interestOptions = ['Web Development', 'AI/Machine Learning', 'Data Science', 'Mobile Development', 'Product Management', 'Marketing', 'Finance', 'Consulting', 'Research', 'Entrepreneurship']

export default function EditProfilePage() {
  const { user } = useUser()
  const router = useRouter()

  const [formData, setFormData] = useState({
    major: '',
    year: '',
    gradYear: '',
    bio: '',
    interests: [] as string[]
  })

  const [success, setSuccess] = useState(false)

  // Load existing profile data from localStorage
  useEffect(() => {
    if (user) {
      const savedProfile = localStorage.getItem(`profile_${user.id}`)
      if (savedProfile) {
        setFormData(JSON.parse(savedProfile))
      }
    }
  }, [user])

  const handleSave = () => {
    if (user) {
      localStorage.setItem(`profile_${user.id}`, JSON.stringify(formData))
      setSuccess(true)
      setTimeout(() => {
        router.push('/profile')
      }, 1500)
    }
  }

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => router.back()}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Profile
      </Button>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Edit Profile</h1>
        <p className="text-gray-600 mt-1">Update your academic information and interests</p>
      </div>

      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Profile saved successfully! Redirecting...
        </div>
      )}

      {/* Clerk Info (Read-Only) */}
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Managed by your sign-in method (cannot be edited here)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Full Name</Label>
            <Input value={`${user.firstName} ${user.lastName}`} disabled />
          </div>
          <div>
            <Label>Email</Label>
            <Input value={user.emailAddresses[0]?.emailAddress || ''} disabled />
          </div>
        </CardContent>
      </Card>

      {/* Academic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="major">Major *</Label>
            <select
              id="major"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
              value={formData.major}
              onChange={(e) => setFormData({...formData, major: e.target.value})}
            >
              <option value="">Select your major</option>
              {majors.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="year">Current Year *</Label>
              <select
                id="year"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                value={formData.year}
                onChange={(e) => setFormData({...formData, year: e.target.value})}
              >
                <option value="">Select year</option>
                {years.map(y => (
                  <option key={y} value={y}>Year {y}</option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="gradYear">Expected Graduation</Label>
              <Input
                id="gradYear"
                type="number"
                placeholder="2026"
                min="2024"
                max="2030"
                value={formData.gradYear}
                onChange={(e) => setFormData({...formData, gradYear: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bio */}
      <Card>
        <CardHeader>
          <CardTitle>About You</CardTitle>
          <CardDescription>Tell seniors what you're looking for (max 200 characters)</CardDescription>
        </CardHeader>
        <CardContent>
          <textarea
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
            maxLength={200}
            placeholder="E.g., CS student interested in web development. Looking for advice on course selection and internship opportunities..."
            value={formData.bio}
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
          />
          <div className="text-sm text-gray-500 mt-1">
            {formData.bio.length}/200 characters
          </div>
        </CardContent>
      </Card>

      {/* Interests */}
      <Card>
        <CardHeader>
          <CardTitle>Interests & Focus Areas</CardTitle>
          <CardDescription>Select areas you&apos;re interested in (helps with matching)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map(interest => (
              <Badge
                key={interest}
                variant={formData.interests.includes(interest) ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => toggleInterest(interest)}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex gap-4">
        <Button
          size="lg"
          onClick={handleSave}
          disabled={!formData.major || !formData.year}
        >
          <Save className="h-4 w-4 mr-2" />
          Save Profile
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => router.push('/profile')}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}
