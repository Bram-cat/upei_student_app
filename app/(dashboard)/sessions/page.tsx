'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Video, User } from 'lucide-react'
import Link from 'next/link'

const upcomingSessions = [
  { id: '1', alumniName: 'Sarah Kim', alumniRole: 'Software Engineer at Google', sessionType: 'Interview Prep', date: '2026-01-25', time: '2:00 PM', duration: 30, status: 'Confirmed' },
  { id: '2', alumniName: 'David Lee', alumniRole: 'Product Manager at Shopify', sessionType: 'Course Navigation', date: '2026-01-27', time: '4:00 PM', duration: 45, status: 'Confirmed' },
  { id: '3', alumniName: 'Rachel Patel', alumniRole: 'Data Analyst at Amazon', sessionType: 'Career Planning', date: '2026-01-30', time: '1:00 PM', duration: 30, status: 'Pending' },
]

const pastSessions = [
  { id: '4', alumniName: 'Marcus Johnson', alumniRole: 'Full Stack Developer at TechAtlantic', sessionType: 'Project Review', date: '2026-01-15', time: '3:00 PM', duration: 45, status: 'Completed' },
  { id: '5', alumniName: 'Sarah Kim', alumniRole: 'Software Engineer at Google', sessionType: 'Resume Review', date: '2026-01-10', time: '2:00 PM', duration: 30, status: 'Completed' },
  { id: '6', alumniName: 'David Lee', alumniRole: 'Product Manager at Shopify', sessionType: 'Industry Insights', date: '2026-01-05', time: '5:00 PM', duration: 30, status: 'Completed' },
  { id: '7', alumniName: 'Rachel Patel', alumniRole: 'Data Analyst at Amazon', sessionType: 'Technical Skills', date: '2025-12-20', time: '2:30 PM', duration: 45, status: 'Completed' },
  { id: '8', alumniName: 'Michael Chen', alumniRole: 'Data Scientist at Microsoft', sessionType: 'Career Transition', date: '2025-12-15', time: '4:00 PM', duration: 30, status: 'Completed' },
]

export default function SessionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mentorship Sessions</h1>
          <p className="text-gray-600 mt-1">Manage your upcoming and past sessions with alumni</p>
        </div>
        <Link href="/discover">
          <Button>Book New Session</Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{upcomingSessions.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Completed Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{pastSessions.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">6.5</div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Sessions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Upcoming Sessions</h2>
        <div className="space-y-4">
          {upcomingSessions.map((session) => (
            <Card key={session.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {session.alumniName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle>{session.alumniName}</CardTitle>
                      <CardDescription>{session.alumniRole}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={session.status === 'Confirmed' ? 'default' : 'secondary'}>
                    {session.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">{session.sessionType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    {session.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    {session.time} ({session.duration} min)
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Reschedule</Button>
                    <Button size="sm">Join Meeting</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Past Sessions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Past Sessions</h2>
        <div className="space-y-4">
          {pastSessions.map((session) => (
            <Card key={session.id} className="opacity-75">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                      {session.alumniName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle>{session.alumniName}</CardTitle>
                      <CardDescription>{session.alumniRole}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">{session.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">{session.sessionType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    {session.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    {session.time} ({session.duration} min)
                  </div>
                  <div>
                    <Button size="sm" variant="outline">View Notes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
