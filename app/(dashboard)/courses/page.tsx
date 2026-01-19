'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, BookOpen, Users } from 'lucide-react'
import Link from 'next/link'

const courses = [
  { code: 'CS101', name: 'Introduction to Programming', department: 'Computer Science', avgRating: 4.5, careerRelevance: 4.8, reviews: 24, alumniCount: 45 },
  { code: 'CS201', name: 'Data Structures', department: 'Computer Science', avgRating: 4.2, careerRelevance: 4.9, reviews: 28, alumniCount: 42 },
  { code: 'CS301', name: 'Algorithms', department: 'Computer Science', avgRating: 4.7, careerRelevance: 5.0, reviews: 32, alumniCount: 38 },
  { code: 'CS350', name: 'Web Development', department: 'Computer Science', avgRating: 4.6, careerRelevance: 4.7, reviews: 26, alumniCount: 35 },
  { code: 'CS401', name: 'Machine Learning', department: 'Computer Science', avgRating: 4.8, careerRelevance: 4.9, reviews: 22, alumniCount: 28 },
  { code: 'BUS101', name: 'Introduction to Business', department: 'Business', avgRating: 4.1, careerRelevance: 4.3, reviews: 30, alumniCount: 40 },
  { code: 'BUS201', name: 'Marketing Principles', department: 'Business', avgRating: 4.3, careerRelevance: 4.5, reviews: 25, alumniCount: 32 },
  { code: 'BUS301', name: 'Financial Management', department: 'Business', avgRating: 4.0, careerRelevance: 4.6, reviews: 20, alumniCount: 28 },
  { code: 'ENG101', name: 'Engineering Design', department: 'Engineering', avgRating: 4.4, careerRelevance: 4.7, reviews: 18, alumniCount: 22 },
  { code: 'ENG201', name: 'Thermodynamics', department: 'Engineering', avgRating: 3.9, careerRelevance: 4.2, reviews: 15, alumniCount: 20 },
]

export default function CoursesPage() {
  const [selectedDept, setSelectedDept] = useState('All')
  const depts = ['All', 'Computer Science', 'Business', 'Engineering']

  const filteredCourses = selectedDept === 'All' ? courses : courses.filter(c => c.department === selectedDept)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Course Intelligence</h1>
        <p className="text-gray-600 mt-1">Discover which courses helped alumni succeed in their careers</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border">
        <div className="flex gap-2">
          {depts.map((dept) => (
            <Button
              key={dept}
              variant={selectedDept === dept ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedDept(dept)}
            >
              {dept}
            </Button>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.code} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-primary mb-1">{course.code}</div>
                  <CardTitle className="text-xl">{course.name}</CardTitle>
                  <CardDescription>{course.department}</CardDescription>
                </div>
                <Badge variant="secondary">{course.department.split(' ')[0]}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Overall Rating</div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-lg">{course.avgRating}</span>
                    <span className="text-xs text-gray-600">/5.0</span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Career Relevance</div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-green-500 text-green-500" />
                    <span className="font-bold text-lg">{course.careerRelevance}</span>
                    <span className="text-xs text-gray-600">/5.0</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  {course.reviews} reviews
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {course.alumniCount} alumni took this
                </div>
              </div>

              <Link href={`/courses/${course.code}`}>
                <Button className="w-full">View Details & Reviews</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
