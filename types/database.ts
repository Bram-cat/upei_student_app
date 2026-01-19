export type UserRole = 'student' | 'alumni' | 'admin'

export interface Profile {
  id: string
  email: string
  role: UserRole
  full_name: string | null
  avatar_url: string | null
  bio: string | null
  location: string | null
  university: string
  created_at: string
  updated_at: string
}

export interface StudentProfile {
  id: string
  profile_id: string
  major: string
  minor: string | null
  year: number
  gpa_range: string | null
  graduation_year: number
  created_at: string
}

export interface AlumniProfile {
  id: string
  profile_id: string
  graduation_year: number
  current_company: string
  current_role: string
  years_experience: number
  industry: string | null
  linkedin_url: string | null
  created_at: string
}

export interface Course {
  id: string
  code: string
  name: string
  department: string
  description: string | null
  credits: number
  created_at: string
}

export interface StudentCourse {
  id: string
  student_profile_id: string
  course_id: string
  semester: string | null
  grade: string | null
  created_at: string
}

export interface Professor {
  id: string
  name: string
  department: string
  email: string | null
  research_areas: string[]
  created_at: string
}

export interface CourseReview {
  id: string
  course_id: string
  professor_id: string
  student_id: string
  rating: number
  career_relevance: number
  difficulty: number
  review_text: string | null
  created_at: string
}

export interface CareerPathway {
  id: string
  student_id: string
  target_role: string
  target_company: string | null
  target_industry: string | null
  status: 'active' | 'completed' | 'paused'
  progress_percentage: number
  created_at: string
  updated_at: string
}

export interface PathwayMilestone {
  id: string
  pathway_id: string
  title: string
  description: string | null
  milestone_type: 'academic' | 'skill' | 'networking' | 'application' | 'other'
  deadline: string | null
  completed: boolean
  order_index: number
  created_at: string
}

export interface Connection {
  id: string
  student_id: string
  alumni_id: string
  status: 'pending' | 'accepted' | 'declined'
  message: string | null
  created_at: string
  updated_at: string
}

export interface MentorshipSession {
  id: string
  connection_id: string
  session_type: string
  scheduled_time: string | null
  duration: number
  status: 'scheduled' | 'completed' | 'cancelled'
  notes: string | null
  created_at: string
}

export interface Opportunity {
  id: string
  title: string
  type: 'internship' | 'research' | 'competition' | 'shadowing' | 'project'
  company: string | null
  description: string | null
  posted_by_alumni_id: string | null
  application_deadline: string | null
  is_active: boolean
  created_at: string
}

export interface Skill {
  id: string
  name: string
  category: 'technical' | 'soft' | 'language' | 'tool'
  created_at: string
}

export interface StudentSkill {
  id: string
  student_profile_id: string
  skill_id: string
  proficiency_level: number
  created_at: string
}

export interface AlumniSkill {
  id: string
  alumni_profile_id: string
  skill_id: string
  proficiency_level: number
  created_at: string
}

// Extended types with joined data
export interface StudentProfileWithDetails extends StudentProfile {
  profile: Profile
  courses?: (StudentCourse & { course: Course })[]
  skills?: (StudentSkill & { skill: Skill })[]
}

export interface AlumniProfileWithDetails extends AlumniProfile {
  profile: Profile
  skills?: (AlumniSkill & { skill: Skill })[]
}

export interface AlumniMatchResult {
  alumni: AlumniProfileWithDetails
  match_score: number
  academic_score: number
  career_score: number
  timeline_score: number
}
