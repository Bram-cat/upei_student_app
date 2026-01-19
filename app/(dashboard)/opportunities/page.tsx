'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Building2, Filter } from 'lucide-react'
import Link from 'next/link'

const opportunities = [
  { id: '1', title: 'Summer Software Engineering Internship', company: 'Google', type: 'Internship', location: 'Mountain View, CA', deadline: '2026-03-15', description: '12-week paid internship for CS students. Work on real products with mentorship from senior engineers.', postedBy: 'Sarah Kim' },
  { id: '2', title: 'Research Assistant - Machine Learning Lab', company: 'UPEI Research Lab', type: 'Research', location: 'Charlottetown, PE', deadline: '2026-02-28', description: 'Work with Dr. Johnson on ML research projects. Flexible hours, great for building research portfolio.', postedBy: 'Dr. Sarah Johnson' },
  { id: '3', title: 'Atlantic Hackathon 2026', company: 'TechAtlantic', type: 'Competition', location: 'Halifax, NS', deadline: '2026-04-01', description: '48-hour hackathon with $10,000 in prizes. Great networking opportunity with local tech companies.', postedBy: 'Marcus Johnson' },
  { id: '4', title: 'Product Management Shadow Day', company: 'Shopify', type: 'Shadowing', location: 'Ottawa, ON', deadline: '2026-03-01', description: 'Spend a day shadowing our PM team. Learn about product strategy, user research, and stakeholder management.', postedBy: 'David Lee' },
  { id: '5', title: 'Web Development Micro-Project', company: 'Local Non-Profit', type: 'Project', location: 'Charlottetown, PE', deadline: '2026-02-20', description: '10-15 hours building a website for a local charity. Paid opportunity with portfolio potential.', postedBy: 'Marcus Johnson' },
  { id: '6', title: 'Data Analytics Internship', company: 'Amazon', type: 'Internship', location: 'Seattle, WA', deadline: '2026-03-20', description: 'Work with massive datasets to drive business insights. Mentorship from senior data scientists.', postedBy: 'Rachel Patel' },
  { id: '7', title: 'Mobile App Development Competition', company: 'Microsoft', type: 'Competition', location: 'Virtual', deadline: '2026-03-10', description: 'Build an innovative mobile app. Top 3 teams win internship interviews and $5,000 prizes.', postedBy: 'Michael Chen' },
  { id: '8', title: 'UX Research Internship', company: 'Meta', type: 'Internship', location: 'Menlo Park, CA', deadline: '2026-03-25', description: 'Conduct user research to inform product decisions. Learn from world-class UX team.', postedBy: 'Emily Rodriguez' },
  { id: '9', title: 'Startup Engineering Role', company: 'TechAtlantic Startup', type: 'Job', location: 'Charlottetown, PE', deadline: '2026-04-15', description: 'Join an early-stage startup. Equity + competitive salary. Build products from scratch.', postedBy: 'Marcus Johnson' },
  { id: '10', title: 'AI/ML Workshop Series', company: 'UPEI CS Department', type: 'Workshop', location: 'Charlottetown, PE', deadline: '2026-02-25', description: 'Free 4-week workshop series on machine learning fundamentals. Certificate upon completion.', postedBy: 'Dr. Sarah Johnson' },
]

export default function OpportunitiesPage() {
  const [selectedType, setSelectedType] = useState('All')
  const types = ['All', 'Internship', 'Research', 'Competition', 'Shadowing', 'Project', 'Job', 'Workshop']

  const filteredOpps = selectedType === 'All' ? opportunities : opportunities.filter(opp => opp.type === selectedType)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Opportunities</h1>
        <p className="text-gray-600 mt-1">Discover internships, research positions, and more shared by alumni</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border">
        <div className="flex items-center gap-2 overflow-x-auto">
          <Filter className="h-4 w-4 text-gray-500" />
          {types.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType(type)}
              className="whitespace-nowrap"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="text-sm text-gray-600">
        Showing {filteredOpps.length} opportunities
      </div>

      {/* Opportunities List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredOpps.map((opp) => (
          <Card key={opp.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={
                      opp.type === 'Internship' ? 'default' :
                      opp.type === 'Research' ? 'secondary' :
                      'outline'
                    }>
                      {opp.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{opp.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{opp.company}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{opp.description}</p>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {opp.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Deadline: {opp.deadline}
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Posted by {opp.postedBy}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Link href={`/opportunities/${opp.id}`} className="flex-1">
                  <Button className="w-full">Learn More</Button>
                </Link>
                <Button variant="outline">Save</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
