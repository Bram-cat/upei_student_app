'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { WelcomeScreen } from '@/components/onboarding/WelcomeScreen'
import { ProgramYearScreen } from '@/components/onboarding/ProgramYearScreen'
import { GoalSelectionScreen } from '@/components/onboarding/GoalSelectionScreen'
import { InstantMatchScreen } from '@/components/onboarding/InstantMatchScreen'

interface ProfileData {
  major: string
  year: string
  gradYear: number
  primaryGoal: string
  goalDetails?: string
}

export default function OnboardingPage() {
  const { user } = useUser()
  const [currentStep, setCurrentStep] = useState(0)
  const [profileData, setProfileData] = useState<ProfileData>({
    major: '',
    year: '',
    gradYear: new Date().getFullYear() + 2,
    primaryGoal: '',
    goalDetails: ''
  })

  const handleWelcomeNext = () => {
    setCurrentStep(1)
  }

  const handleProgramYearNext = (data: { major: string; year: string; gradYear: number }) => {
    setProfileData(prev => ({
      ...prev,
      major: data.major,
      year: data.year,
      gradYear: data.gradYear
    }))
    setCurrentStep(2)
  }

  const handleProgramYearBack = () => {
    setCurrentStep(0)
  }

  const handleGoalNext = (data: { primaryGoal: string; goalDetails?: string }) => {
    setProfileData(prev => ({
      ...prev,
      primaryGoal: data.primaryGoal,
      goalDetails: data.goalDetails
    }))
    setCurrentStep(3)
  }

  const handleGoalBack = () => {
    setCurrentStep(1)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="w-full">
        {currentStep === 0 && <WelcomeScreen onNext={handleWelcomeNext} />}
        {currentStep === 1 && (
          <ProgramYearScreen
            onNext={handleProgramYearNext}
            onBack={handleProgramYearBack}
            initialData={{
              major: profileData.major,
              year: profileData.year,
              gradYear: profileData.gradYear
            }}
          />
        )}
        {currentStep === 2 && (
          <GoalSelectionScreen
            onNext={handleGoalNext}
            onBack={handleGoalBack}
            initialData={{
              primaryGoal: profileData.primaryGoal,
              goalDetails: profileData.goalDetails
            }}
          />
        )}
        {currentStep === 3 && <InstantMatchScreen profileData={profileData} />}
      </div>
    </div>
  )
}
