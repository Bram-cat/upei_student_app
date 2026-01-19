'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Search, MapPin, Briefcase, GraduationCap } from 'lucide-react'

// Rich demo data - 50 diverse alumni
const allAlumni = [
  { id: '1', name: 'Sarah Kim', role: 'Software Engineer', company: 'Google', location: 'Mountain View, CA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 95 },
  { id: '2', name: 'David Lee', role: 'Product Manager', company: 'Shopify', location: 'Ottawa, ON', industry: 'Technology', yearsExp: 3, gradYear: 2021, matchScore: 88 },
  { id: '3', name: 'Rachel Patel', role: 'Data Analyst', company: 'Amazon', location: 'Seattle, WA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 82 },
  { id: '4', name: 'Marcus Johnson', role: 'Full Stack Developer', company: 'TechAtlantic', location: 'Charlottetown, PE', industry: 'Technology', yearsExp: 1, gradYear: 2023, matchScore: 78 },
  { id: '5', name: 'Jennifer Wong', role: 'Marketing Manager', company: 'HubSpot', location: 'Boston, MA', industry: 'Marketing', yearsExp: 3, gradYear: 2021, matchScore: 75 },
  { id: '6', name: 'Michael Chen', role: 'Data Scientist', company: 'Microsoft', location: 'Redmond, WA', industry: 'Technology', yearsExp: 3, gradYear: 2021, matchScore: 92 },
  { id: '7', name: 'Emily Rodriguez', role: 'UX Designer', company: 'Meta', location: 'Menlo Park, CA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 85 },
  { id: '8', name: 'James Smith', role: 'Financial Analyst', company: 'Deloitte', location: 'Toronto, ON', industry: 'Finance', yearsExp: 2, gradYear: 2022, matchScore: 70 },
  { id: '9', name: 'Lisa Wang', role: 'Mechanical Engineer', company: 'Tesla', location: 'Fremont, CA', industry: 'Engineering', yearsExp: 3, gradYear: 2021, matchScore: 68 },
  { id: '10', name: 'Robert Brown', role: 'Research Scientist', company: 'UPEI', location: 'Charlottetown, PE', industry: 'Research', yearsExp: 4, gradYear: 2020, matchScore: 65 },
  { id: '11', name: 'Amanda Martinez', role: 'DevOps Engineer', company: 'Amazon', location: 'Seattle, WA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 89 },
  { id: '12', name: 'Chris Taylor', role: 'Backend Engineer', company: 'Stripe', location: 'San Francisco, CA', industry: 'Technology', yearsExp: 3, gradYear: 2021, matchScore: 91 },
  { id: '13', name: 'Sophia Anderson', role: 'Product Designer', company: 'Airbnb', location: 'San Francisco, CA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 83 },
  { id: '14', name: 'Daniel Thomas', role: 'Mobile Developer', company: 'Uber', location: 'San Francisco, CA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 87 },
  { id: '15', name: 'Olivia Jackson', role: 'Business Analyst', company: 'McKinsey', location: 'New York, NY', industry: 'Consulting', yearsExp: 3, gradYear: 2021, matchScore: 72 },
  { id: '16', name: 'Ethan White', role: 'Cloud Engineer', company: 'AWS', location: 'Seattle, WA', industry: 'Technology', yearsExp: 3, gradYear: 2021, matchScore: 90 },
  { id: '17', name: 'Isabella Harris', role: 'Marketing Analyst', company: 'Netflix', location: 'Los Gatos, CA', industry: 'Entertainment', yearsExp: 2, gradYear: 2022, matchScore: 74 },
  { id: '18', name: 'Matthew Clark', role: 'Security Engineer', company: 'Cisco', location: 'San Jose, CA', industry: 'Technology', yearsExp: 3, gradYear: 2021, matchScore: 86 },
  { id: '19', name: 'Mia Lewis', role: 'HR Manager', company: 'Google', location: 'Mountain View, CA', industry: 'HR', yearsExp: 4, gradYear: 2020, matchScore: 66 },
  { id: '20', name: 'Alexander Walker', role: 'Frontend Developer', company: 'Shopify', location: 'Ottawa, ON', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 88 },
  { id: '21', name: 'Charlotte Hall', role: 'Data Engineer', company: 'Snowflake', location: 'San Mateo, CA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 91 },
  { id: '22', name: 'William Allen', role: 'Solutions Architect', company: 'IBM', location: 'Toronto, ON', industry: 'Technology', yearsExp: 4, gradYear: 2020, matchScore: 84 },
  { id: '23', name: 'Ava Young', role: 'Content Strategist', company: 'Adobe', location: 'San Jose, CA', industry: 'Marketing', yearsExp: 3, gradYear: 2021, matchScore: 71 },
  { id: '24', name: 'Liam King', role: 'QA Engineer', company: 'Microsoft', location: 'Redmond, WA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 80 },
  { id: '25', name: 'Emma Wright', role: 'Project Manager', company: 'Atlassian', location: 'Sydney, Australia', industry: 'Technology', yearsExp: 3, gradYear: 2021, matchScore: 76 },
  { id: '26', name: 'Noah Lopez', role: 'ML Engineer', company: 'OpenAI', location: 'San Francisco, CA', industry: 'AI/ML', yearsExp: 2, gradYear: 2022, matchScore: 94 },
  { id: '27', name: 'Grace Hill', role: 'Sales Engineer', company: 'Salesforce', location: 'San Francisco, CA', industry: 'Technology', yearsExp: 3, gradYear: 2021, matchScore: 73 },
  { id: '28', name: 'Logan Scott', role: 'Systems Engineer', company: 'SpaceX', location: 'Hawthorne, CA', industry: 'Aerospace', yearsExp: 3, gradYear: 2021, matchScore: 77 },
  { id: '29', name: 'Zoe Green', role: 'Technical Writer', company: 'MongoDB', location: 'New York, NY', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 69 },
  { id: '30', name: 'Mason Adams', role: 'iOS Developer', company: 'Apple', location: 'Cupertino, CA', industry: 'Technology', yearsExp: 3, gradYear: 2021, matchScore: 89 },
  { id: '31', name: 'Aria Baker', role: 'Consultant', company: 'Accenture', location: 'Toronto, ON', industry: 'Consulting', yearsExp: 2, gradYear: 2022, matchScore: 70 },
  { id: '32', name: 'Jackson Nelson', role: 'Game Developer', company: 'Ubisoft', location: 'Montreal, QC', industry: 'Gaming', yearsExp: 3, gradYear: 2021, matchScore: 81 },
  { id: '33', name: 'Chloe Carter', role: 'Biomedical Engineer', company: 'Johnson & Johnson', location: 'New Brunswick, NJ', industry: 'Healthcare', yearsExp: 3, gradYear: 2021, matchScore: 67 },
  { id: '34', name: 'Lucas Mitchell', role: 'Cybersecurity Analyst', company: 'Palo Alto Networks', location: 'Santa Clara, CA', industry: 'Security', yearsExp: 2, gradYear: 2022, matchScore: 85 },
  { id: '35', name: 'Ella Perez', role: 'Growth Marketer', company: 'Slack', location: 'San Francisco, CA', industry: 'Marketing', yearsExp: 2, gradYear: 2022, matchScore: 73 },
  { id: '36', name: 'Henry Roberts', role: 'Environmental Engineer', company: 'Tesla', location: 'Austin, TX', industry: 'Engineering', yearsExp: 3, gradYear: 2021, matchScore: 68 },
  { id: '37', name: 'Scarlett Turner', role: 'AI Researcher', company: 'DeepMind', location: 'London, UK', industry: 'AI/ML', yearsExp: 3, gradYear: 2021, matchScore: 93 },
  { id: '38', name: 'Jack Phillips', role: 'Electrical Engineer', company: 'GE', location: 'Boston, MA', industry: 'Engineering', yearsExp: 4, gradYear: 2020, matchScore: 69 },
  { id: '39', name: 'Luna Campbell', role: 'Blockchain Developer', company: 'Coinbase', location: 'San Francisco, CA', industry: 'Crypto', yearsExp: 2, gradYear: 2022, matchScore: 86 },
  { id: '40', name: 'Sebastian Parker', role: 'Chemical Engineer', company: 'Dow', location: 'Midland, MI', industry: 'Engineering', yearsExp: 3, gradYear: 2021, matchScore: 66 },
  { id: '41', name: 'Layla Evans', role: 'Policy Analyst', company: 'Government of Canada', location: 'Ottawa, ON', industry: 'Government', yearsExp: 2, gradYear: 2022, matchScore: 64 },
  { id: '42', name: 'Aiden Edwards', role: 'Network Engineer', company: 'Bell', location: 'Toronto, ON', industry: 'Telecom', yearsExp: 3, gradYear: 2021, matchScore: 75 },
  { id: '43', name: 'Paisley Collins', role: 'Sustainability Consultant', company: 'EY', location: 'Vancouver, BC', industry: 'Consulting', yearsExp: 2, gradYear: 2022, matchScore: 68 },
  { id: '44', name: 'Grayson Stewart', role: 'Robotics Engineer', company: 'Boston Dynamics', location: 'Waltham, MA', industry: 'Robotics', yearsExp: 3, gradYear: 2021, matchScore: 79 },
  { id: '45', name: 'Hazel Sanchez', role: 'Investment Analyst', company: 'Goldman Sachs', location: 'New York, NY', industry: 'Finance', yearsExp: 2, gradYear: 2022, matchScore: 71 },
  { id: '46', name: 'Leo Morris', role: 'Civil Engineer', company: 'AECOM', location: 'Los Angeles, CA', industry: 'Engineering', yearsExp: 3, gradYear: 2021, matchScore: 67 },
  { id: '47', name: 'Violet Rogers', role: 'User Researcher', company: 'LinkedIn', location: 'Sunnyvale, CA', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 76 },
  { id: '48', name: 'Carter Reed', role: 'Embedded Systems Engineer', company: 'Intel', location: 'Santa Clara, CA', industry: 'Hardware', yearsExp: 3, gradYear: 2021, matchScore: 80 },
  { id: '49', name: 'Aurora Cook', role: 'Brand Manager', company: 'Procter & Gamble', location: 'Cincinnati, OH', industry: 'Consumer Goods', yearsExp: 3, gradYear: 2021, matchScore: 70 },
  { id: '50', name: 'Wyatt Morgan', role: 'Database Administrator', company: 'Oracle', location: 'Austin, TX', industry: 'Technology', yearsExp: 2, gradYear: 2022, matchScore: 82 },
]

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All')

  const industries = ['All', 'Technology', 'Finance', 'Consulting', 'Engineering', 'Marketing', 'AI/ML', 'Research', 'Healthcare', 'Government']

  const filteredAlumni = allAlumni.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          alumni.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          alumni.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = selectedIndustry === 'All' || alumni.industry === selectedIndustry
    return matchesSearch && matchesIndustry
  })

  // Sort by match score
  const sortedAlumni = [...filteredAlumni].sort((a, b) => b.matchScore - a.matchScore)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Discover Alumni</h1>
        <p className="text-gray-600 mt-1">Connect with {allAlumni.length} alumni who can guide your career journey</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name, role, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedIndustry(industry)}
                className="whitespace-nowrap"
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {sortedAlumni.length} alumni {selectedIndustry !== 'All' && `in ${selectedIndustry}`}
        </p>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          Sorted by Match Score
        </Badge>
      </div>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAlumni.map((alumni) => (
          <Card key={alumni.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {alumni.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{alumni.name}</h3>
                    <p className="text-sm text-gray-600">{alumni.role}</p>
                  </div>
                </div>
                <Badge className={`
                  ${alumni.matchScore >= 90 ? 'bg-green-100 text-green-800' :
                    alumni.matchScore >= 80 ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'}
                `}>
                  {alumni.matchScore}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Briefcase className="h-4 w-4 mr-2" />
                {alumni.company}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {alumni.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <GraduationCap className="h-4 w-4 mr-2" />
                Class of {alumni.gradYear} • {alumni.yearsExp} years experience
              </div>
              <div className="pt-2">
                <Badge variant="secondary" className="text-xs">{alumni.industry}</Badge>
              </div>
              <Link href={`/discover/${alumni.id}`}>
                <Button className="w-full mt-2">View Profile & Connect</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {sortedAlumni.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No alumni found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchTerm('')
              setSelectedIndustry('All')
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
