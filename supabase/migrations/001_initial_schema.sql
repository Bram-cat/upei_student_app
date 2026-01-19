-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('student', 'alumni', 'admin')),
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  location TEXT,
  university TEXT DEFAULT 'University of Prince Edward Island',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Student profiles
CREATE TABLE student_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  major TEXT NOT NULL,
  minor TEXT,
  year INTEGER CHECK (year >= 1 AND year <= 4),
  gpa_range TEXT,
  graduation_year INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Alumni profiles
CREATE TABLE alumni_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  graduation_year INTEGER NOT NULL,
  current_company TEXT NOT NULL,
  current_role TEXT NOT NULL,
  years_experience INTEGER DEFAULT 0,
  industry TEXT,
  linkedin_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  department TEXT NOT NULL,
  description TEXT,
  credits INTEGER DEFAULT 3,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Student courses (courses taken by students)
CREATE TABLE student_courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_profile_id UUID REFERENCES student_profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  semester TEXT,
  grade TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Professors
CREATE TABLE professors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  department TEXT NOT NULL,
  email TEXT,
  research_areas TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Course reviews
CREATE TABLE course_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  professor_id UUID REFERENCES professors(id) ON DELETE CASCADE,
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  career_relevance INTEGER CHECK (career_relevance >= 1 AND career_relevance <= 5),
  difficulty INTEGER CHECK (difficulty >= 1 AND difficulty <= 5),
  review_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Career pathways
CREATE TABLE career_pathways (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  target_role TEXT NOT NULL,
  target_company TEXT,
  target_industry TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused')),
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Pathway milestones
CREATE TABLE pathway_milestones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pathway_id UUID REFERENCES career_pathways(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  milestone_type TEXT CHECK (milestone_type IN ('academic', 'skill', 'networking', 'application', 'other')),
  deadline DATE,
  completed BOOLEAN DEFAULT FALSE,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Connections (student-alumni relationships)
CREATE TABLE connections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  alumni_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined')),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Mentorship sessions
CREATE TABLE mentorship_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  connection_id UUID REFERENCES connections(id) ON DELETE CASCADE,
  session_type TEXT NOT NULL,
  scheduled_time TIMESTAMP WITH TIME ZONE,
  duration INTEGER, -- in minutes
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Opportunities
CREATE TABLE opportunities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('internship', 'research', 'competition', 'shadowing', 'project')),
  company TEXT,
  description TEXT,
  posted_by_alumni_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  application_deadline DATE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Skills
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  category TEXT CHECK (category IN ('technical', 'soft', 'language', 'tool')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Student skills
CREATE TABLE student_skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_profile_id UUID REFERENCES student_profiles(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
  proficiency_level INTEGER CHECK (proficiency_level >= 1 AND proficiency_level <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_profile_id, skill_id)
);

-- Alumni skills
CREATE TABLE alumni_skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  alumni_profile_id UUID REFERENCES alumni_profiles(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
  proficiency_level INTEGER CHECK (proficiency_level >= 1 AND proficiency_level <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(alumni_profile_id, skill_id)
);

-- Create indexes for better query performance
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_student_profiles_major ON student_profiles(major);
CREATE INDEX idx_alumni_profiles_company ON alumni_profiles(current_company);
CREATE INDEX idx_connections_student ON connections(student_id);
CREATE INDEX idx_connections_alumni ON connections(alumni_id);
CREATE INDEX idx_pathway_milestones_pathway ON pathway_milestones(pathway_id);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE alumni_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_pathways ENABLE ROW LEVEL SECURITY;
ALTER TABLE pathway_milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentorship_sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies (Basic - can be expanded)
-- Profiles are viewable by all authenticated users
CREATE POLICY "Profiles are viewable by authenticated users"
  ON profiles FOR SELECT
  USING (auth.role() = 'authenticated');

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Students can view their own student profile
CREATE POLICY "Students can view own profile"
  ON student_profiles FOR SELECT
  USING (profile_id = auth.uid());

-- Alumni can view their own alumni profile
CREATE POLICY "Alumni can view own profile"
  ON alumni_profiles FOR SELECT
  USING (profile_id = auth.uid());
