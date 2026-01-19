// Student profile data structure
export interface StudentProfile {
  // From Clerk
  clerkId: string
  email: string
  firstName: string
  lastName: string
  imageUrl?: string

  // From onboarding
  major: string
  year: '1' | '2' | '3' | '4' | 'Graduate'
  gradYear: number
  primaryGoal: string
  goalDetails?: string
  onboardingCompleted: boolean
  onboardingCompletedAt?: string // ISO timestamp

  // Collected later (profile edit)
  bio?: string
  interests?: string[]
  skills?: string[]
  location?: string
}

// Alumni profile data structure
export interface AlumniProfile {
  // Basic
  id: string
  clerkId: string
  firstName: string
  lastName: string
  imageUrl?: string
  email: string

  // Academic
  major: string
  minor?: string
  gradYear: number
  coursesTaken?: string[]

  // Current
  currentRole: string
  currentCompany: string
  location: string
  yearsExperience: number

  // Mentoring
  canHelpWith: string[] // Specific tags
  upeiExperience?: {
    favoriteProfs?: string[]
    clubsActivities?: string[]
    recommendations?: string
  }
  conversationStyle?: string[]
  availability?: {
    timezone: string
    windows: Array<{ day: string; startTime: string; endTime: string }>
    responseTime: string
  }

  // Stats
  conversationsCompleted: number
  averageRating: number
  testimonials?: Array<{
    text: string
    studentYear: string
    anonymous: true
  }>

  // For matching
  matchScore?: number
  bio?: string
}

// Connection between student and alumni
export interface Connection {
  id: string
  studentId: string
  alumniId: string
  alumniName: string
  alumniRole: string
  alumniCompany: string
  status: 'pending' | 'accepted' | 'declined'
  message?: string
  createdAt: string // ISO timestamp
  updatedAt: string // ISO timestamp
}

// Mentorship session
export interface Session {
  id: string
  studentId: string
  alumniId: string
  alumniName: string
  alumniRole: string
  sessionType: string
  date: string // Date string
  time: string // Time string
  duration: number // minutes
  status: 'Pending Confirmation' | 'Confirmed' | 'Completed' | 'Cancelled'
  zoomLink?: string
  studentNotes?: string
  alumniNotes?: string
  createdAt: string // ISO timestamp
}

// Goal tracking
export interface Goal {
  id: string
  userId: string
  title: string
  category: 'coop' | 'job' | 'gradschool' | 'switch' | 'immigration' | 'project' | 'explore'
  createdAt: string // ISO timestamp
  targetDate?: string // ISO timestamp
  status: 'active' | 'completed' | 'paused'
  progress: number // 0-100

  microSteps: MicroStep[]
  mentorsConnected: string[] // alumniIds
  conversationsHad: number
  actionsCompleted: number
}

// Micro-step within a goal
export interface MicroStep {
  id: string
  title: string
  completed: boolean
  completedAt?: string // ISO timestamp
  dueDate?: string // ISO timestamp
}

// Call feedback
export interface CallFeedback {
  id: string
  sessionId: string
  studentId: string
  alumniId: string
  completedAt: string // ISO timestamp

  // Student feedback
  studentRating: 1 | 2 | 3 | 4 | 5
  studentTags?: string[]
  studentComment?: string
  studentNextStep?: string
  studentNextStepDueDate?: string // ISO timestamp
  studentWantsFollowUp: boolean

  // Alumni feedback
  alumniRating?: 1 | 2 | 3 | 4 | 5
  alumniAssessment?: string
  alumniPrivateNotes?: string
  alumniRecommendation?: string // alumniId of recommended colleague
}

// Notification
export interface Notification {
  id: string
  userId: string
  type: 'call_reminder' | 'post_call' | 'weekly' | 'milestone' | 'term_event'
  scheduledFor: string // ISO timestamp
  sent: boolean
  title: string
  body: string
  actionUrl?: string
  actionLabel?: string
}

// Match score breakdown
export interface MatchScore {
  alumniId: string
  totalScore: number
  breakdown: {
    timeRelevance: number
    goalAlignment: number
    academicOverlap: number
    contextMatch: number
  }
  explanation: string // "Same CS major, 2 years ahead, has PEI co-op experience"
}
