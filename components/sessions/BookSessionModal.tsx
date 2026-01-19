'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'

interface BookSessionModalProps {
  onClose: () => void
}

const sessionTopics = [
  'Course Selection Advice',
  'Interview Preparation',
  'Career Guidance',
  'Resume Review',
  'General Chat',
  'Industry Insights'
]

export function BookSessionModal({ onClose }: BookSessionModalProps) {
  const { user } = useUser()
  const [connections, setConnections] = useState<any[]>([])
  const [selectedAlumni, setSelectedAlumni] = useState('')
  const [topic, setTopic] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredTime, setPreferredTime] = useState('')
  const [booking, setBooking] = useState(false)

  useEffect(() => {
    if (user) {
      // Load active connections
      const allConnections = JSON.parse(localStorage.getItem(`connections_${user.id}`) || '[]')
      const activeConnections = allConnections.filter((c: any) => c.status === 'accepted')
      setConnections(activeConnections)
    }
  }, [user])

  const handleBook = () => {
    if (!user || !selectedAlumni || !topic || !preferredDate || !preferredTime) {
      alert('Please fill in all fields')
      return
    }

    setBooking(true)

    // Get the selected alumni details
    const alumni = connections.find(c => c.alumniId === selectedAlumni)

    // Get existing sessions or initialize
    const existingSessions = JSON.parse(localStorage.getItem(`sessions_${user.id}`) || '[]')

    // Add new session
    const newSession = {
      id: Date.now().toString(),
      alumniId: selectedAlumni,
      alumniName: alumni?.alumniName || 'Alumni',
      alumniRole: alumni?.alumniRole || '',
      sessionType: topic,
      date: preferredDate,
      time: preferredTime,
      duration: 30,
      status: 'Pending Confirmation'
    }

    existingSessions.push(newSession)
    localStorage.setItem(`sessions_${user.id}`, JSON.stringify(existingSessions))

    // Show success and close
    setTimeout(() => {
      setBooking(false)
      alert('Session request sent! The senior will confirm the time. Check "Sessions" tab.')
      onClose()
    }, 500)
  }

  if (connections.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle>Book a Session</CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              You need to connect with seniors first before booking sessions.
            </p>
            <Button onClick={onClose} className="w-full">
              Browse Seniors
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-lg w-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Book a Mentorship Session</CardTitle>
              <CardDescription className="mt-2">
                Schedule a 30-minute session with a senior
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Senior *
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={selectedAlumni}
              onChange={(e) => setSelectedAlumni(e.target.value)}
            >
              <option value="">Choose a senior</option>
              {connections.map((conn) => (
                <option key={conn.alumniId} value={conn.alumniId}>
                  {conn.alumniName} - {conn.alumniRole}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Topic *
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="">Select topic</option>
              {sessionTopics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Preferred Date *
              </label>
              <Input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Preferred Time *
              </label>
              <Input
                type="time"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg text-sm text-gray-700">
            The senior will receive your request and confirm availability. You&apos;ll be notified once confirmed.
          </div>

          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={handleBook}
              disabled={booking}
            >
              {booking ? 'Booking...' : 'Send Request'}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              disabled={booking}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
