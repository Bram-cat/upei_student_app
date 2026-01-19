'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

interface ProgramYearScreenProps {
  onNext: (data: { major: string; year: string; gradYear: number }) => void
  onBack: () => void
  initialData?: {
    major: string
    year: string
    gradYear: number
  }
}

const majors = [
  'Computer Science',
  'Business Administration',
  'Biology',
  'Engineering',
  'Psychology',
  'Nursing',
  'Education',
  'Arts',
  'Other'
]

const years = ['1', '2', '3', '4', 'Graduate']

const currentYear = new Date().getFullYear()
const gradYears = [currentYear, currentYear + 1, currentYear + 2, currentYear + 3, currentYear + 4]

export function ProgramYearScreen({ onNext, onBack, initialData }: ProgramYearScreenProps) {
  const [major, setMajor] = useState(initialData?.major || '')
  const [year, setYear] = useState(initialData?.year || '')
  const [gradYear, setGradYear] = useState<number>(initialData?.gradYear || currentYear + 2)

  const canProceed = major && year

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Tell us about your program</CardTitle>
              <CardDescription className="text-base mt-2">
                This helps us match you with relevant seniors
              </CardDescription>
            </div>
            <div className="text-sm text-gray-500">Step 1 of 3</div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Major Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">
              What&apos;s your major or program? <span className="text-red-500">*</span>
            </label>
            <select
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select your major...</option>
              {majors.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Year Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">
              What year are you in? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-5 gap-2">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    year === y
                      ? 'border-blue-600 bg-blue-50 text-blue-600 font-semibold'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {y === 'Graduate' ? 'Grad' : `Year ${y}`}
                </button>
              ))}
            </div>
          </div>

          {/* Graduation Year */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Expected graduation year <span className="text-red-500">*</span>
            </label>
            <select
              value={gradYear}
              onChange={(e) => setGradYear(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {gradYears.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              💡 We&apos;ll connect you with seniors who were in your program and are now 2-3 years ahead of you
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onBack}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              onClick={() => onNext({ major, year, gradYear })}
              disabled={!canProceed}
              className="flex-1"
            >
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
