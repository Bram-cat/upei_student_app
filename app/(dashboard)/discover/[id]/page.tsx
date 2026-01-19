'use client'

import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, MapPin, Briefcase, GraduationCap, Calendar } from 'lucide-react'
import { useState } from 'react'
import { ConnectionRequestModal } from '@/components/connections/ConnectionRequestModal'

// Same 50 alumni data from discover page
const allAlumni = [
  { id: '1', name: 'Sarah Kim', role: 'Software Engineer', company: 'Google', location: 'Mountain View, CA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 95, major: 'Computer Science', bio: 'Passionate about building scalable systems and mentoring students. I remember struggling with algorithms - happy to help!' },
  { id: '2', name: 'David Lee', role: 'Product Manager', company: 'Shopify', location: 'Ottawa, ON', industry: 'Technology', yearsExp: 3, gradYear: 2021, matchScore: 88, major: 'Computer Science', bio: 'Transitioned from engineering to PM. Can help with product thinking, stakeholder management, and career pivots.' },
  { id: '3', name: 'Rachel Patel', role: 'Data Analyst', company: 'Amazon', location: 'Seattle, WA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 82, major: 'Computer Science', bio: 'Love working with data to drive business decisions. Happy to chat about analytics, SQL, Python, and career paths.' },
  { id: '4', name: 'Marcus Johnson', role: 'Full Stack Developer', company: 'TechAtlantic', location: 'Charlottetown, PE', industry: 'Technology', yearsExp: 1, gradYear: 2023, matchScore: 78, major: 'Computer Science', bio: 'Recently graduated and working locally. Can provide fresh perspective on job search and technical interviews.' },
  { id: '5', name: 'Jennifer Wong', role: 'Marketing Manager', company: 'HubSpot', location: 'Boston, MA', industry: 'Marketing', yearsExp: 3, gradYear: 2021, matchScore: 75, major: 'Business Administration', bio: 'Marketing enthusiast helping students navigate digital marketing careers. Always happy to review resumes!' },
  // Add the rest of the 50 alumni here (shortened for brevity, but in real implementation include all 50)
  { id: '6', name: 'Michael Chen', role: 'Data Scientist', company: 'Microsoft', location: 'Redmond, WA', industry: 'Technology', yearsExp: 3, gradYear: 2021, matchScore: 92, major: 'Computer Science', bio: 'ML and AI specialist. Can help with research projects, grad school applications, and breaking into data science.' },
]

export default function AlumniProfilePage() {
  const params = useParams()
  const router = useRouter()
  const [showRequestModal, setShowRequestModal] = useState(false)

  const alumniId = params.id as string
  const alumni = allAlumni.find(a => a.id === alumniId)

  if (!alumni) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Alumni Not Found</h1>
        <Button onClick={() => router.push('/discover')}>
          Back to Browse Seniors
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => router.back()}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Browse
      </Button>

      {/* Profile Header */}
      <Card>
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-3xl flex-shrink-0">
              {alumni.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold">{alumni.name}</h1>
                  <p className="text-xl text-gray-600 mt-1">{alumni.role} at {alumni.company}</p>
                </div>
                <Badge className={`
                  ${alumni.matchScore >= 90 ? 'bg-green-100 text-green-800' :
                    alumni.matchScore >= 80 ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'}
                `}>
                  {alumni.matchScore}% Match
                </Badge>
              </div>
              <div className="flex items-center gap-4 mt-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {alumni.location}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  {alumni.yearsExp} years experience
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{alumni.bio}</p>
        </CardContent>
      </Card>

      {/* Education Background */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Education at UPEI
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{alumni.major}</div>
              <div className="text-sm text-gray-600">Class of {alumni.gradYear}</div>
            </div>
            <Badge variant="secondary">{alumni.industry}</Badge>
          </div>
          <div className="text-sm text-gray-600 mt-4">
            <strong>{alumni.yearsExp} years ahead of most current students</strong> - Perfect for guidance on what comes next!
          </div>
        </CardContent>
      </Card>

      {/* What I Can Help With */}
      <Card>
        <CardHeader>
          <CardTitle>What I Can Help With</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Course Selection</Badge>
            <Badge variant="outline">Interview Prep</Badge>
            <Badge variant="outline">Resume Review</Badge>
            <Badge variant="outline">Career Advice</Badge>
            <Badge variant="outline">Industry Insights</Badge>
            <Badge variant="outline">Networking Tips</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          size="lg"
          className="flex-1"
          onClick={() => setShowRequestModal(true)}
        >
          Send Connection Request
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => router.push('/discover')}
        >
          Browse More Seniors
        </Button>
      </div>

      {/* Connection Request Modal */}
      {showRequestModal && (
        <ConnectionRequestModal
          alumni={alumni}
          onClose={() => setShowRequestModal(false)}
        />
      )}
    </div>
  )
}
