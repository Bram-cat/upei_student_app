'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Target, Briefcase, GraduationCap, RefreshCw, Globe, Rocket, HelpCircle } from 'lucide-react'

interface GoalSelectionScreenProps {
  onNext: (data: { primaryGoal: string; goalDetails?: string }) => void
  onBack: () => void
  initialData?: {
    primaryGoal: string
    goalDetails?: string
  }
}

const goals = [
  {
    id: 'coop',
    label: 'Find a co-op/internship in PEI',
    icon: Target,
    color: 'blue'
  },
  {
    id: 'job',
    label: 'Get first full-time job after graduation',
    icon: Briefcase,
    color: 'green'
  },
  {
    id: 'gradschool',
    label: 'Apply to grad school (Master\'s/PhD)',
    icon: GraduationCap,
    color: 'purple'
  },
  {
    id: 'switch',
    label: 'Switch programs or change major',
    icon: RefreshCw,
    color: 'orange'
  },
  {
    id: 'immigration',
    label: 'Navigate immigration/PR process',
    icon: Globe,
    color: 'indigo'
  },
  {
    id: 'project',
    label: 'Start a side project or business',
    icon: Rocket,
    color: 'pink'
  },
  {
    id: 'explore',
    label: 'Explore career options (not sure yet)',
    icon: HelpCircle,
    color: 'gray'
  }
]

export function GoalSelectionScreen({ onNext, onBack, initialData }: GoalSelectionScreenProps) {
  const [selectedGoal, setSelectedGoal] = useState(initialData?.primaryGoal || '')
  const [goalDetails, setGoalDetails] = useState(initialData?.goalDetails || '')

  const selectedGoalData = goals.find(g => g.id === selectedGoal)

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Card className="max-w-3xl w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">What&apos;s your main goal this term?</CardTitle>
              <CardDescription className="text-base mt-2">
                This helps us recommend the most relevant mentors for you
              </CardDescription>
            </div>
            <div className="text-sm text-gray-500">Step 2 of 3</div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Goal Cards */}
          <div className="grid md:grid-cols-2 gap-3">
            {goals.map((goal) => {
              const Icon = goal.icon
              const isSelected = selectedGoal === goal.id

              return (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    isSelected
                      ? `border-${goal.color}-600 bg-${goal.color}-50`
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      isSelected
                        ? `bg-${goal.color}-100`
                        : 'bg-gray-100'
                    }`}>
                      <Icon className={`h-5 w-5 ${
                        isSelected
                          ? `text-${goal.color}-600`
                          : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${
                        isSelected
                          ? `text-${goal.color}-900`
                          : 'text-gray-900'
                      }`}>
                        {goal.label}
                      </div>
                    </div>
                    {isSelected && (
                      <div className="text-blue-600">✓</div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Optional Details */}
          {selectedGoal && (
            <div className="pt-2">
              <label className="block text-sm font-medium mb-2">
                Anything specific? (Optional)
              </label>
              <Input
                value={goalDetails}
                onChange={(e) => setGoalDetails(e.target.value)}
                placeholder="e.g., Interested in software development roles in Charlottetown"
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                This helps us fine-tune your mentor recommendations
              </p>
            </div>
          )}

          {selectedGoalData && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                🎯 Great choice! We&apos;ll connect you with seniors who&apos;ve successfully navigated <strong>{selectedGoalData.label.toLowerCase()}</strong>
              </p>
            </div>
          )}

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
              onClick={() => onNext({
                primaryGoal: goals.find(g => g.id === selectedGoal)?.label || '',
                goalDetails: goalDetails || undefined
              })}
              disabled={!selectedGoal}
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
