'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface ConnectionRequestModalProps {
  alumni: {
    id: string
    name: string
    role: string
    company: string
  }
  onClose: () => void
}

export function ConnectionRequestModal({ alumni, onClose }: ConnectionRequestModalProps) {
  const { user } = useUser()
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  const handleSendRequest = () => {
    if (!user) return

    setSending(true)

    // Get existing connections or initialize
    const existingConnections = JSON.parse(localStorage.getItem(`connections_${user.id}`) || '[]')

    // Add new pending connection
    const newConnection = {
      alumniId: alumni.id,
      alumniName: alumni.name,
      alumniRole: alumni.role,
      alumniCompany: alumni.company,
      status: 'pending',
      requestDate: new Date().toISOString(),
      message: message || 'Hi! I would love to connect and learn from your experience.'
    }

    existingConnections.push(newConnection)
    localStorage.setItem(`connections_${user.id}`, JSON.stringify(existingConnections))

    // Show success and close
    setTimeout(() => {
      setSending(false)
      alert('Connection request sent successfully! Check "My Connections" to see pending requests.')
      onClose()
    }, 500)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-lg w-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Send Connection Request</CardTitle>
              <CardDescription className="mt-2">
                Request to connect with {alumni.name}
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {alumni.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-medium">{alumni.name}</div>
                <div className="text-sm text-gray-600">{alumni.role} at {alumni.company}</div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Message (Optional)
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={4}
              placeholder="Introduce yourself and mention what you'd like to learn..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={300}
            />
            <div className="text-xs text-gray-500 mt-1">
              {message.length}/300 characters
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={handleSendRequest}
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Request'}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              disabled={sending}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
