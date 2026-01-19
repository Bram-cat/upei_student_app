'use client'

import { useUser } from '@clerk/nextjs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Avatar } from '@/components/ui/avatar'
import Link from 'next/link'
import { ArrowRight, Calendar, Target, TrendingUp, Users } from 'lucide-react'

// Demo data for matched alumni
const matchedAlumni = [
  {
    id: '1',
    name: 'Sarah Kim',
    role: 'Software Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    matchScore: 95,
    yearsAhead: 2,
    sharedCourses: 5,
  },
  {
    id: '2',
    name: 'David Lee',
    role: 'Product Manager',
    company: 'Shopify',
    location: 'Ottawa, ON',
    matchScore: 88,
    yearsAhead: 3,
    sharedCourses: 4,
  },
  {
    id: '3',
    name: 'Rachel Patel',
    role: 'Data Analyst',
    company: 'Amazon',
    location: 'Seattle, WA',
    matchScore: 82,
    yearsAhead: 2,
    sharedCourses: 4,
  },
]

// Demo upcoming sessions
const upcomingSessions = [
  {
    id: '1',
    alumniName: 'Sarah Kim',
    sessionType: 'Interview Prep',
    date: '2026-01-25',
    time: '2:00 PM',
    duration: 30,
  },
  {
    id: '2',
    alumniName: 'David Lee',
    sessionType: 'Course Navigation',
    date: '2026-01-27',
    time: '4:00 PM',
    duration: 45,
  },
]

// Demo career pathway
const careerPathway = {
  targetRole: 'Software Engineer',
  targetCompany: 'Google',
  progress: 45,
  nextMilestone: 'Complete LeetCode Practice',
  milestones: [
    { title: 'Complete CS301 Algorithms', completed: true },
    { title: 'Build 2 Full-Stack Projects', completed: true },
    { title: 'Connect with 3 Alumni', completed: false },
    { title: 'Complete LeetCode Practice', completed: false },
    { title: 'Apply to 10 Internships', completed: false },
  ],
}

// Demo opportunities
const opportunities = [
  {
    id: '1',
    title: 'Summer Software Engineering Internship',
    company: 'Google',
    type: 'Internship',
    deadline: '2026-03-15',
  },
  {
    id: '2',
    title: 'Research Assistant - ML Lab',
    company: 'UPEI',
    type: 'Research',
    deadline: '2026-02-28',
  },
  {
    id: '3',
    title: 'Atlantic Hackathon 2026',
    company: 'TechAtlantic',
    type: 'Competition',
    deadline: '2026-04-01',
  },
]

export default function DashboardPage() {
  const { user } = useUser()

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.firstName || 'Student'}!</h1>
        <p className="text-gray-600 mt-1">Here&apos;s your career path overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Match Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">Top alumni match</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Connections</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Active alumni connections</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Completed this semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pathway Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{careerPathway.progress}%</div>
            <p className="text-xs text-muted-foreground">To {careerPathway.targetRole}</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Career Pathway */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Your Career Pathway</CardTitle>
                <CardDescription>
                  {careerPathway.targetRole} at {careerPathway.targetCompany}
                </CardDescription>
              </div>
              <Link href="/pathways">
                <Button variant="outline" size="sm">View Details</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-gray-600">{careerPathway.progress}%</span>
              </div>
              <Progress value={careerPathway.progress} className="h-2" />
            </div>

            <div className="space-y-2">
              {careerPathway.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50"
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    milestone.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    {milestone.completed && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className={`flex-1 text-sm ${
                    milestone.completed ? 'text-gray-600 line-through' : 'text-gray-900 font-medium'
                  }`}>
                    {milestone.title}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/pathways">
              <Button className="w-full">
                Continue Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Sessions</CardTitle>
              <Link href="/sessions">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="font-medium text-sm">{session.sessionType}</div>
                <div className="text-sm text-gray-600">with {session.alumniName}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {session.date} at {session.time} ({session.duration} min)
                </div>
              </div>
            ))}

            <Link href="/sessions">
              <Button variant="outline" className="w-full">
                Schedule More Sessions
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Matched Alumni */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Top Matched Alumni</CardTitle>
              <CardDescription>Based on your courses, goals, and timeline</CardDescription>
            </div>
            <Link href="/discover">
              <Button variant="outline">Discover More</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {matchedAlumni.map((alumni) => (
              <div
                key={alumni.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium">{alumni.name}</div>
                      <div className="text-sm text-gray-600">{alumni.role}</div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{alumni.matchScore}%</Badge>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>{alumni.company}</div>
                  <div>{alumni.location}</div>
                  <div className="text-xs text-gray-500 mt-2">
                    {alumni.yearsAhead} years ahead • {alumni.sharedCourses} shared courses
                  </div>
                </div>
                <Link href={`/discover/${alumni.id}`}>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    View Profile
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Opportunities */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Featured Opportunities</CardTitle>
              <CardDescription>Internships, research, and more</CardDescription>
            </div>
            <Link href="/opportunities">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="font-medium">{opp.title}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {opp.company} • <Badge variant="secondary" className="text-xs">{opp.type}</Badge>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Deadline: {opp.deadline}
                  </div>
                </div>
                <Link href={`/opportunities/${opp.id}`}>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
