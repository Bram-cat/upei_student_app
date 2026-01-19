'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Target, Plus, CheckCircle, Circle } from 'lucide-react'
import Link from 'next/link'

const pathways = [
  {
    id: '1',
    targetRole: 'Software Engineer',
    targetCompany: 'Google',
    targetIndustry: 'Technology',
    progress: 45,
    status: 'active',
    milestones: [
      { title: 'Complete CS301 Algorithms', completed: true },
      { title: 'Build 2 Full-Stack Projects', completed: true },
      { title: 'Connect with 3 Alumni', completed: false },
      { title: 'Complete LeetCode Practice', completed: false },
      { title: 'Apply to 10 Internships', completed: false },
    ]
  },
  {
    id: '2',
    targetRole: 'Product Manager',
    targetCompany: 'Shopify',
    targetIndustry: 'Technology',
    progress: 20,
    status: 'active',
    milestones: [
      { title: 'Take BUS201 Marketing', completed: true },
      { title: 'Build Product Portfolio', completed: false },
      { title: 'Network with PMs', completed: false },
      { title: 'Complete PM Course', completed: false },
    ]
  },
]

export default function PathwaysPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Career Pathways</h1>
          <p className="text-gray-600 mt-1">Track your progress toward your career goals</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create New Pathway
        </Button>
      </div>

      {/* Active Pathways */}
      <div className="space-y-6">
        {pathways.map((pathway) => (
          <Card key={pathway.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{pathway.targetRole}</CardTitle>
                    <CardDescription className="text-base">
                      {pathway.targetCompany} • {pathway.targetIndustry}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="default">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-gray-600">{pathway.progress}%</span>
                </div>
                <Progress value={pathway.progress} className="h-3" />
              </div>

              {/* Milestones */}
              <div className="space-y-3">
                <div className="font-medium text-sm text-gray-700">Milestones</div>
                {pathway.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
                  >
                    {milestone.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={`flex-1 ${
                      milestone.completed ? 'text-gray-600 line-through' : 'text-gray-900 font-medium'
                    }`}>
                      {milestone.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Link href={`/pathways/${pathway.id}`} className="flex-1">
                  <Button className="w-full">View Full Pathway</Button>
                </Link>
                <Button variant="outline">Edit</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create New Pathway CTA */}
      <Card className="border-dashed border-2">
        <CardHeader>
          <CardTitle className="text-center">Create Your First Career Pathway</CardTitle>
          <CardDescription className="text-center">
            Build a personalized roadmap to your dream job with guidance from alumni
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button size="lg">
            <Plus className="h-4 w-4 mr-2" />
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
