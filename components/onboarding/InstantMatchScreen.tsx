'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import { MapPin, Briefcase, GraduationCap, Sparkles } from 'lucide-react'

interface InstantMatchScreenProps {
  profileData: {
    major: string
    year: string
    gradYear: number
    primaryGoal: string
    goalDetails?: string
  }
}

// Demo alumni data for instant recommendations
const allAlumni = [
  { id: '1', name: 'Sarah Kim', role: 'Software Engineer', company: 'Google', location: 'Mountain View, CA', major: 'Computer Science', gradYear: 2022, matchScore: 95, canHelpWith: ['Finding co-op in PEI', 'Interview prep for tech roles'] },
  { id: '2', name: 'David Lee', role: 'Product Manager', company: 'Shopify', location: 'Ottawa, ON', major: 'Computer Science', gradYear: 2021, matchScore: 88, canHelpWith: ['Get first full-time job after graduation', 'Interview prep for tech roles'] },
  { id: '3', name: 'Rachel Patel', role: 'Data Analyst', company: 'Amazon', location: 'Seattle, WA', major: 'Computer Science', gradYear: 2022, matchScore: 82, canHelpWith: ['Finding co-op in PEI', 'Get first full-time job after graduation'] },
  { id: '4', name: 'Marcus Johnson', role: 'Full Stack Developer', company: 'TechAtlantic', location: 'Charlottetown, PE', major: 'Computer Science', gradYear: 2023, matchScore: 78, canHelpWith: ['Finding co-op in PEI'] },
  { id: '5', name: 'Jennifer Wong', role: 'Marketing Manager', company: 'HubSpot', location: 'Boston, MA', major: 'Business Administration', gradYear: 2021, matchScore: 75, canHelpWith: ['Get first full-time job after graduation'] },
  { id: '6', name: 'Michael Chen', role: 'Data Scientist', company: 'Microsoft', location: 'Redmond, WA', major: 'Computer Science', gradYear: 2021, matchScore: 92, canHelpWith: ['Apply to grad school (Master\'s/PhD)', 'Finding co-op in PEI'] },
  { id: '12', name: 'Chris Taylor', role: 'Backend Engineer', company: 'Stripe', location: 'San Francisco, CA', major: 'Computer Science', gradYear: 2021, matchScore: 91, canHelpWith: ['Get first full-time job after graduation', 'Interview prep for tech roles'] },
  { id: '15', name: 'Olivia Jackson', role: 'Business Analyst', company: 'McKinsey', location: 'New York, NY', major: 'Business Administration', gradYear: 2021, matchScore: 72, canHelpWith: ['Get first full-time job after graduation', 'Switch programs or change major'] },
  { id: '26', name: 'Noah Lopez', role: 'ML Engineer', company: 'OpenAI', location: 'San Francisco, CA', major: 'Computer Science', gradYear: 2022, matchScore: 94, canHelpWith: ['Apply to grad school (Master\'s/PhD)', 'Get first full-time job after graduation'] },
]

function getTopMatches(profileData: InstantMatchScreenProps['profileData']) {
  const currentYear = new Date().getFullYear()
  const studentYear = parseInt(profileData.year) || 2
  const studentCurrentYearApprox = currentYear - (4 - studentYear)

  // Filter and score alumni
  const scored = allAlumni.map(alumni => {
    let score = 0
    let reasons: string[] = []

    // Major match (40 points)
    if (alumni.major === profileData.major) {
      score += 40
      reasons.push(`Same ${profileData.major} major`)
    } else if (
      (alumni.major === 'Computer Science' && profileData.major === 'Engineering') ||
      (alumni.major === 'Engineering' && profileData.major === 'Computer Science')
    ) {
      score += 20
      reasons.push('Related field')
    }

    // Years ahead calculation (30 points)
    const yearsAhead = alumni.gradYear - studentCurrentYearApprox
    if (yearsAhead >= 2 && yearsAhead <= 3) {
      score += 30
      reasons.push(`${yearsAhead} years ahead of you`)
    } else if (yearsAhead >= 1 && yearsAhead <= 4) {
      score += 15
      reasons.push(`${yearsAhead} years ahead`)
    }

    // Goal alignment (30 points)
    if (alumni.canHelpWith.includes(profileData.primaryGoal)) {
      score += 30
      reasons.push(`Can help with: ${profileData.primaryGoal}`)
    }

    return {
      ...alumni,
      calculatedScore: score,
      reasons: reasons.join(' • ')
    }
  })

  // Sort by calculated score and return top 3
  return scored.sort((a, b) => b.calculatedScore - a.calculatedScore).slice(0, 3)
}

export function InstantMatchScreen({ profileData }: InstantMatchScreenProps) {
  const router = useRouter()
  const topMatches = getTopMatches(profileData)

  const handleFinish = () => {
    // Save profile to localStorage
    const userProfile = {
      ...profileData,
      onboardingCompleted: true,
      onboardingCompletedAt: new Date().toISOString()
    }

    // We'll need the user ID from Clerk, but for now use a placeholder
    // This will be properly integrated with Clerk user ID
    localStorage.setItem('onboarding_profile', JSON.stringify(userProfile))

    router.push('/dashboard')
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Card className="max-w-4xl w-full">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="h-8 w-8 text-yellow-500" />
            <div className="flex-1">
              <CardTitle className="text-2xl">Your Instant Recommendations</CardTitle>
              <CardDescription className="text-base mt-1">
                Based on your profile, here are 3 seniors who can help with your goal
              </CardDescription>
            </div>
            <div className="text-sm text-gray-500">Step 3 of 3</div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Your Profile</div>
                <div className="text-sm text-gray-700 mt-1">
                  {profileData.major} • Year {profileData.year} • Graduating {profileData.gradYear}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  🎯 Goal: {profileData.primaryGoal}
                </div>
              </div>
            </div>
          </div>

          {/* Matched Alumni Cards */}
          <div className="space-y-4">
            {topMatches.map((alumni, index) => (
              <div
                key={alumni.id}
                className="border-2 border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{alumni.name}</h3>
                        {index === 0 && <Badge className="bg-yellow-100 text-yellow-800">Top Match</Badge>}
                      </div>
                      <p className="text-gray-700">{alumni.role} at {alumni.company}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {alumni.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          Class of {alumni.gradYear}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-base px-3 py-1">
                    {alumni.calculatedScore}% Match
                  </Badge>
                </div>

                {/* Why Recommended */}
                <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-blue-900 mb-1">
                    Why this mentor was recommended:
                  </div>
                  <div className="text-sm text-blue-800">
                    {alumni.reasons}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="bg-gray-50 p-5 rounded-lg">
            <h4 className="font-semibold mb-3">Ready to get started?</h4>
            <div className="flex gap-3">
              <Button
                onClick={handleFinish}
                size="lg"
                className="flex-1"
              >
                Go to Dashboard
              </Button>
              <Button
                onClick={() => router.push('/discover')}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                Browse All Mentors
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center">
              You can always update your profile and goals later
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
