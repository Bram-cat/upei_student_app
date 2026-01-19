import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Target, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4" variant="secondary">How It Works</Badge>
          <h1 className="text-5xl font-bold mb-4">Your Journey from Student to Professional</h1>
          <p className="text-xl text-gray-600">
            Three simple steps to connect with alumni and build your career path
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  1
                </div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-3xl">Set Your Career Goal</CardTitle>
                  <CardDescription className="text-lg">
                    Tell us where you want to go and we&apos;ll help you get there
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Define Your Target Role</div>
                        <div className="text-sm text-gray-600">Software Engineer, Product Manager, Data Scientist, etc.</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Choose Your Industry</div>
                        <div className="text-sm text-gray-600">Technology, Finance, Consulting, Healthcare, etc.</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Complete Your Profile</div>
                        <div className="text-sm text-gray-600">Add your courses, skills, and interests</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Set Your Timeline</div>
                        <div className="text-sm text-gray-600">When do you want to achieve this goal?</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  2
                </div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-3xl">Get Matched with Alumni</CardTitle>
                  <CardDescription className="text-lg">
                    Our algorithm finds the perfect mentors for your journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Academic Overlap</div>
                        <div className="text-sm text-gray-600">Find alumni who took your exact courses</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Career Alignment</div>
                        <div className="text-sm text-gray-600">Match with people in your target role</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Timeline Relevance</div>
                        <div className="text-sm text-gray-600">Connect with alumni 2-3 years ahead of you</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Browse & Filter</div>
                        <div className="text-sm text-gray-600">Explore 50+ verified alumni profiles</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  3
                </div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-3xl">Follow Your Personalized Path</CardTitle>
                  <CardDescription className="text-lg">
                    Build your roadmap with guidance from those who&apos;ve succeeded
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Create Career Pathway</div>
                        <div className="text-sm text-gray-600">Build a step-by-step roadmap to your goal</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Book Mentorship Sessions</div>
                        <div className="text-sm text-gray-600">15-45 minute focused sessions with alumni</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Track Your Progress</div>
                        <div className="text-sm text-gray-600">Monitor milestones and celebrate achievements</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Access Opportunities</div>
                        <div className="text-sm text-gray-600">Find internships, research, and job openings</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Create your free account and get matched with alumni today
          </p>
          <Link href="/sign-up">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
