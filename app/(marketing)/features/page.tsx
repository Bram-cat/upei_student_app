import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Target, Users, TrendingUp, Calendar, BookOpen, Briefcase, ArrowRight, Zap, Shield, Heart } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4" variant="secondary">Features</Badge>
          <h1 className="text-5xl font-bold mb-4">Everything You Need to Navigate Your Career</h1>
          <p className="text-xl text-gray-600">
            AlumniPath combines intelligent matching, career planning, and mentorship in one powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Card>
            <CardHeader>
              <Target className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Intelligent Matching</CardTitle>
              <CardDescription>
                Connect with alumni based on academic trajectory, career path alignment, and timeline relevance. Our algorithm finds people who literally walked your path.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Course overlap analysis</li>
                <li>• Career goal alignment</li>
                <li>• Timeline relevance (2-3 years ahead)</li>
                <li>• Skill-based matching</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Career Pathways</CardTitle>
              <CardDescription>
                Visual roadmaps showing exactly what to do next. From courses to projects to applications, see the complete journey.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Personalized milestone tracking</li>
                <li>• Progress visualization</li>
                <li>• Alumni-validated paths</li>
                <li>• Actionable next steps</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Course Intelligence</CardTitle>
              <CardDescription>
                Crowdsourced insights from alumni about which courses actually helped their career and which professors to take.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Career relevance ratings</li>
                <li>• Professor recommendations</li>
                <li>• Real-world applications</li>
                <li>• Project ideas that impressed recruiters</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Structured Mentorship</CardTitle>
              <CardDescription>
                Time-efficient 15-45 minute sessions focused on specific topics. Respect everyone&apos;s time with purposeful meetings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Course navigation sessions</li>
                <li>• Project reviews</li>
                <li>• Interview preparation</li>
                <li>• Career strategy discussions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Briefcase className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Opportunity Discovery</CardTitle>
              <CardDescription>
                Access curated internships, research projects, competitions, and shadowing opportunities shared by alumni.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Internships at top companies</li>
                <li>• Research positions</li>
                <li>• Hackathons and competitions</li>
                <li>• Job shadowing programs</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Reciprocal Value</CardTitle>
              <CardDescription>
                Give back to alumni with tech assistance, fresh insights, research collaboration. True mentorship is two-way.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Help alumni with current tech</li>
                <li>• Share fresh industry insights</li>
                <li>• Collaborate on research</li>
                <li>• Maintain university connections</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Real-Time Updates</CardTitle>
              <CardDescription>
                Stay informed with notifications about new connections, session reminders, and opportunity alerts.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Verified Profiles</CardTitle>
              <CardDescription>
                All alumni profiles are verified through university email and LinkedIn integration for authenticity.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Community Driven</CardTitle>
              <CardDescription>
                Built by students, for students. Our platform grows stronger with every connection made.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of students connecting with alumni who know exactly what it takes to succeed.
          </p>
          <Link href="/sign-up">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
