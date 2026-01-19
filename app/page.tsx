import Link from 'next/link'
import { Navigation } from '@/components/shared/Navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Target, Users, TrendingUp, Calendar, BookOpen, Briefcase } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="mb-4" variant="secondary">
            Your Career GPS
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Connect with Alumni{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              2-3 Steps Ahead
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Transform mentorship into actionable career roadmaps. Find alumni who were exactly
            where you are now and reached where you want to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/signup">
              <Button size="lg" className="text-lg px-8">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary">92%</div>
              <div className="text-sm text-gray-600">Match Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600">Alumni Network</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">2-3</div>
              <div className="text-sm text-gray-600">Years Ahead</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How AlumniPath Works</h2>
            <p className="text-xl text-gray-600">Your journey from student to professional in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full flex items-start justify-end p-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Set Your Goal</CardTitle>
                <CardDescription>
                  Tell us your target role, industry, and timeline. Complete your academic profile with courses and skills.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-bl-full flex items-start justify-end p-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Get Matched</CardTitle>
                <CardDescription>
                  Our algorithm finds alumni who took your courses, had your major, and now work in your target role.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-bl-full flex items-start justify-end p-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Follow the Path</CardTitle>
                <CardDescription>
                  Build your custom roadmap with milestones, course recommendations, and structured mentorship sessions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Students Love AlumniPath</h2>
            <p className="text-xl text-gray-600">Everything you need to navigate from university to career</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Intelligent Matching</CardTitle>
                <CardDescription className="text-base">
                  Connect with alumni based on academic trajectory, career path alignment, and timeline relevance.
                  No more random networking—find people who literally walked your path.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Career Pathways</CardTitle>
                <CardDescription className="text-base">
                  Visual roadmaps showing exactly what to do next. From courses to projects to applications,
                  see the complete journey from where you are to where you want to be.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Course Intelligence</CardTitle>
                <CardDescription className="text-base">
                  Crowdsourced insights from alumni: which courses actually helped their career, which professors
                  to take, and which projects impressed recruiters.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Structured Mentorship</CardTitle>
                <CardDescription className="text-base">
                  Time-efficient 15-45 minute sessions focused on specific topics: course navigation,
                  project reviews, interview prep. Respect everyone&apos;s time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Opportunity Discovery</CardTitle>
                <CardDescription className="text-base">
                  Access curated internships, research projects, competitions, and shadowing opportunities
                  shared by alumni at target companies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Reciprocal Value</CardTitle>
                <CardDescription className="text-base">
                  Give back to alumni with tech assistance, fresh industry insights, research collaboration,
                  and university connection maintenance. True mentorship is two-way.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Path?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of students connecting with alumni who know exactly what it takes to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">AlumniPath</h3>
              <p className="text-gray-600 text-sm">Your Career GPS for navigating university to professional life.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/demo">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600 text-sm">
            <p>&copy; 2026 AlumniPath. Built for students, by students.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
