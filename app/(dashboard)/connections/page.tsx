'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Calendar, CheckCircle, Clock, X } from 'lucide-react'
import Link from 'next/link'

const activeConnections = [
  { id: '1', name: 'Sarah Kim', role: 'Software Engineer', company: 'Google', status: 'accepted', sessionsCompleted: 3, lastSession: '2026-01-15' },
  { id: '2', name: 'David Lee', role: 'Product Manager', company: 'Shopify', status: 'accepted', sessionsCompleted: 2, lastSession: '2026-01-10' },
  { id: '3', name: 'Rachel Patel', role: 'Data Analyst', company: 'Amazon', status: 'accepted', sessionsCompleted: 2, lastSession: '2025-12-20' },
  { id: '4', name: 'Marcus Johnson', role: 'Full Stack Developer', company: 'TechAtlantic', status: 'accepted', sessionsCompleted: 1, lastSession: '2025-12-15' },
]

const pendingConnections = [
  { id: '5', name: 'Michael Chen', role: 'Data Scientist', company: 'Microsoft', status: 'pending', requestDate: '2026-01-18' },
  { id: '6', name: 'Emily Rodriguez', role: 'UX Designer', company: 'Meta', status: 'pending', requestDate: '2026-01-17' },
]

export default function ConnectionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Connections</h1>
        <p className="text-gray-600 mt-1">Manage your alumni mentorship connections</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{activeConnections.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{pendingConnections.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {activeConnections.reduce((sum, conn) => sum + conn.sessionsCompleted, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Connections */}
      {pendingConnections.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Pending Requests</h2>
          <div className="space-y-4">
            {pendingConnections.map((connection) => (
              <Card key={connection.id} className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {connection.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{connection.name}</h3>
                        <p className="text-gray-600">{connection.role} at {connection.company}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          <Clock className="inline h-3 w-3 mr-1" />
                          Requested on {connection.requestDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-yellow-200 text-yellow-800">
                        Awaiting Response
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Active Connections */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Active Connections</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeConnections.map((connection) => (
            <Card key={connection.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {connection.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle>{connection.name}</CardTitle>
                      <CardDescription>{connection.role} at {connection.company}</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1 inline" />
                    Connected
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-gray-600 text-xs mb-1">Sessions Completed</div>
                    <div className="font-bold text-lg">{connection.sessionsCompleted}</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="text-gray-600 text-xs mb-1">Last Session</div>
                    <div className="font-bold text-sm">{connection.lastSession}</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/sessions/book/${connection.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Session
                    </Button>
                  </Link>
                  <Link href={`/messages/${connection.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </Link>
                </div>

                <Link href={`/discover/${connection.id}`}>
                  <Button className="w-full" size="sm">
                    View Full Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Add More Connections CTA */}
      <Card className="border-dashed border-2">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Expand Your Network</h3>
          <p className="text-gray-600 mb-4">
            Connect with more alumni to accelerate your career journey
          </p>
          <Link href="/discover">
            <Button size="lg">Browse Alumni</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
