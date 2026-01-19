'use client'

import { useUser } from '@clerk/nextjs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Mail, MapPin, GraduationCap, Briefcase, Star, Edit } from 'lucide-react'

export default function ProfilePage() {
  const { user } = useUser()

  // Demo student data
  const profile = {
    major: 'Computer Science',
    minor: 'Business',
    year: 3,
    gpaRange: '3.5-4.0',
    graduationYear: 2026,
    location: 'Charlottetown, PE',
    bio: 'Computer Science student passionate about web development and AI. Looking to connect with alumni in software engineering roles.',
    courses: ['CS101', 'CS201', 'CS301', 'CS350', 'BUS101'],
    skills: [
      { name: 'JavaScript', level: 4 },
      { name: 'React', level: 3 },
      { name: 'Python', level: 4 },
      { name: 'SQL', level: 3 },
      { name: 'Communication', level: 4 },
    ],
    interests: ['Web Development', 'Machine Learning', 'Product Management']
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <Link href="/profile/edit">
          <Button>
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </Link>
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-3xl">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold">{user?.firstName} {user?.lastName}</h2>
              <p className="text-xl text-gray-600 mt-1">{profile.major} Student</p>
              <div className="flex items-center gap-4 mt-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {user?.emailAddresses[0]?.emailAddress}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </div>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800">Student</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Bio */}
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{profile.bio}</p>
        </CardContent>
      </Card>

      {/* Academic Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Academic Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-gray-600">Major</div>
              <div className="font-semibold">{profile.major}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Minor</div>
              <div className="font-semibold">{profile.minor}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Current Year</div>
              <div className="font-semibold">Year {profile.year}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Graduation</div>
              <div className="font-semibold">{profile.graduationYear}</div>
            </div>
          </div>

          <Separator />

          <div>
            <div className="text-sm text-gray-600 mb-2">GPA Range</div>
            <Badge variant="secondary">{profile.gpaRange}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>Technical and soft skills</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {profile.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < skill.level
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Courses */}
      <Card>
        <CardHeader>
          <CardTitle>Courses Taken</CardTitle>
          <CardDescription>{profile.courses.length} courses completed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {profile.courses.map((course) => (
              <Link key={course} href={`/courses/${course}`}>
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                  {course}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interests */}
      <Card>
        <CardHeader>
          <CardTitle>Career Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <Badge key={interest} variant="secondary">
                {interest}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
