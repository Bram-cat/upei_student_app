import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Heart, Target, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">About Us</Badge>
            <h1 className="text-5xl font-bold mb-4">Your Career GPS</h1>
            <p className="text-xl text-gray-600">
              Built by students, for students
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-white p-8 rounded-lg border">
              <div className="flex items-center gap-4 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold m-0">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg">
                AlumniPath exists to solve a fundamental problem: students don&apos;t know what they don&apos;t know.
                We believe the best way to navigate your career is to learn from someone who&apos;s exactly 2-3 steps ahead of you—
                someone who remembers the challenges, knows the shortcuts, and can provide actionable guidance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold m-0">The Problem We&apos;re Solving</h2>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                Traditional career services are one-size-fits-all. Generic advice doesn&apos;t help when you need to know:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>Should I take CS301 with Prof. Smith or Prof. Johnson for the best interview prep?</li>
                <li>What projects actually impressed recruiters at Google?</li>
                <li>How did someone with my exact major land a PM role at Shopify?</li>
                <li>What courses did successful alumni in my target role actually find useful?</li>
              </ul>
              <p className="text-gray-600 text-lg mt-4">
                AlumniPath provides personalized, actionable answers to these questions by connecting you with alumni who&apos;ve walked your exact path.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border">
              <div className="flex items-center gap-4 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold m-0">Our Approach</h2>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                We built AlumniPath on three core principles:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg mb-1">Intelligent Matching</h3>
                  <p className="text-gray-600">
                    Our algorithm matches students with alumni based on academic trajectory, career goals, and timeline alignment—not random networking.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg mb-1">Actionable Guidance</h3>
                  <p className="text-gray-600">
                    Every interaction is focused on concrete next steps: which courses to take, what projects to build, how to prepare for interviews.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg mb-1">Reciprocal Value</h3>
                  <p className="text-gray-600">
                    Mentorship works best when it&apos;s mutually beneficial. Students help alumni stay current with new tech, provide fresh perspectives, and maintain university connections.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border">
              <h2 className="text-3xl font-bold mb-4">Why 2-3 Steps Ahead?</h2>
              <p className="text-gray-600 text-lg mb-4">
                Research shows that the most effective mentorship comes from people who are 2-3 years ahead of you, not 20. Here&apos;s why:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Recent Memory:</strong> They remember exactly what challenges you&apos;re facing right now</li>
                <li><strong>Relevant Advice:</strong> The job market and technology they navigated is still current</li>
                <li><strong>Accessible Guidance:</strong> Their path is achievable and relatable, not intimidating</li>
                <li><strong>Practical Tips:</strong> They know which professors are good, which courses matter, which projects work</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <div className="grid grid-cols-3 gap-8 my-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-gray-600">Active Alumni</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">1,000+</div>
                  <div className="text-gray-600">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">92%</div>
                  <div className="text-gray-600">Match Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Join the AlumniPath Community</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you&apos;re a student looking for guidance or an alumni ready to give back
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Get Started as Student
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20">
                  Join as Alumni
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
