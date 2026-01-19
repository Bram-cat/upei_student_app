// Mock data for demo purposes
// This file contains comprehensive seed data for the AlumniPath platform

export const mockSkills = [
  // Technical skills
  { name: 'JavaScript', category: 'technical' },
  { name: 'TypeScript', category: 'technical' },
  { name: 'Python', category: 'technical' },
  { name: 'Java', category: 'technical' },
  { name: 'React', category: 'technical' },
  { name: 'Node.js', category: 'technical' },
  { name: 'SQL', category: 'technical' },
  { name: 'Data Analysis', category: 'technical' },
  { name: 'Machine Learning', category: 'technical' },
  { name: 'AWS', category: 'tool' },
  { name: 'Git', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  // Soft skills
  { name: 'Communication', category: 'soft' },
  { name: 'Leadership', category: 'soft' },
  { name: 'Problem Solving', category: 'soft' },
  { name: 'Team Collaboration', category: 'soft' },
  { name: 'Time Management', category: 'soft' },
  { name: 'Public Speaking', category: 'soft' },
  // Languages
  { name: 'English', category: 'language' },
  { name: 'French', category: 'language' },
  { name: 'Spanish', category: 'language' },
];

export const mockCourses = [
  // Computer Science
  { code: 'CS101', name: 'Introduction to Programming', department: 'Computer Science', description: 'Fundamentals of programming using Python', credits: 3 },
  { code: 'CS201', name: 'Data Structures', department: 'Computer Science', description: 'Arrays, linked lists, trees, and graphs', credits: 3 },
  { code: 'CS301', name: 'Algorithms', department: 'Computer Science', description: 'Algorithm design and analysis', credits: 3 },
  { code: 'CS350', name: 'Web Development', department: 'Computer Science', description: 'Full-stack web development with modern frameworks', credits: 3 },
  { code: 'CS401', name: 'Machine Learning', department: 'Computer Science', description: 'Introduction to ML algorithms and applications', credits: 3 },

  // Business
  { code: 'BUS101', name: 'Introduction to Business', department: 'Business', description: 'Fundamentals of business operations', credits: 3 },
  { code: 'BUS201', name: 'Marketing Principles', department: 'Business', description: 'Core marketing concepts and strategies', credits: 3 },
  { code: 'BUS301', name: 'Financial Management', department: 'Business', description: 'Corporate finance and investment decisions', credits: 3 },
  { code: 'BUS350', name: 'Entrepreneurship', department: 'Business', description: 'Starting and managing new ventures', credits: 3 },

  // Engineering
  { code: 'ENG101', name: 'Engineering Design', department: 'Engineering', description: 'Introduction to engineering design process', credits: 4 },
  { code: 'ENG201', name: 'Thermodynamics', department: 'Engineering', description: 'Energy and heat transfer principles', credits: 3 },
  { code: 'ENG301', name: 'Control Systems', department: 'Engineering', description: 'Feedback control systems design', credits: 3 },

  // Biology
  { code: 'BIO101', name: 'General Biology', department: 'Biology', description: 'Introduction to biological sciences', credits: 4 },
  { code: 'BIO201', name: 'Genetics', department: 'Biology', description: 'Principles of heredity and gene expression', credits: 3 },
  { code: 'BIO301', name: 'Molecular Biology', department: 'Biology', description: 'DNA, RNA, and protein synthesis', credits: 3 },
];

export const mockProfessors = [
  { name: 'Dr. Sarah Johnson', department: 'Computer Science', email: 'sjohnson@upei.ca', research_areas: ['Machine Learning', 'AI'] },
  { name: 'Dr. Michael Chen', department: 'Computer Science', email: 'mchen@upei.ca', research_areas: ['Web Development', 'Databases'] },
  { name: 'Dr. Emily Rodriguez', department: 'Business', email: 'erodriguez@upei.ca', research_areas: ['Marketing', 'Consumer Behavior'] },
  { name: 'Dr. James Smith', department: 'Business', email: 'jsmith@upei.ca', research_areas: ['Finance', 'Entrepreneurship'] },
  { name: 'Dr. Lisa Wang', department: 'Engineering', email: 'lwang@upei.ca', research_areas: ['Renewable Energy', 'Sustainability'] },
  { name: 'Dr. Robert Brown', department: 'Biology', email: 'rbrown@upei.ca', research_areas: ['Genetics', 'Biotechnology'] },
];

export const mockStudents = [
  {
    email: 'demo-student@alumnipath.com',
    role: 'student' as const,
    full_name: 'Alex Thompson',
    bio: 'Computer Science student passionate about web development and AI',
    location: 'Charlottetown, PE',
    student_profile: {
      major: 'Computer Science',
      minor: 'Business',
      year: 3,
      gpa_range: '3.5-4.0',
      graduation_year: 2026,
    },
    courses: ['CS101', 'CS201', 'CS301', 'CS350', 'BUS101'],
    skills: [
      { skill: 'JavaScript', proficiency: 4 },
      { skill: 'React', proficiency: 3 },
      { skill: 'Python', proficiency: 4 },
      { skill: 'SQL', proficiency: 3 },
      { skill: 'Communication', proficiency: 4 },
    ]
  },
  {
    email: 'emma.wilson@upei.ca',
    role: 'student' as const,
    full_name: 'Emma Wilson',
    bio: 'Business student with interests in marketing and digital strategy',
    location: 'Charlottetown, PE',
    student_profile: {
      major: 'Business Administration',
      minor: null,
      year: 2,
      gpa_range: '3.0-3.5',
      graduation_year: 2027,
    },
    courses: ['BUS101', 'BUS201', 'BUS301'],
    skills: [
      { skill: 'Communication', proficiency: 5 },
      { skill: 'Leadership', proficiency: 4 },
      { skill: 'Problem Solving', proficiency: 4 },
    ]
  },
  {
    email: 'liam.martinez@upei.ca',
    role: 'student' as const,
    full_name: 'Liam Martinez',
    bio: 'Engineering student focused on sustainable energy solutions',
    location: 'Summerside, PE',
    student_profile: {
      major: 'Engineering',
      minor: null,
      year: 3,
      gpa_range: '3.5-4.0',
      graduation_year: 2026,
    },
    courses: ['ENG101', 'ENG201', 'ENG301'],
    skills: [
      { skill: 'Problem Solving', proficiency: 5 },
      { skill: 'Python', proficiency: 3 },
    ]
  },
];

export const mockAlumni = [
  {
    email: 'demo-alumni@alumnipath.com',
    role: 'alumni' as const,
    full_name: 'Sarah Kim',
    bio: 'Software Engineer at Google, graduated from UPEI CS program in 2022',
    location: 'Mountain View, CA',
    alumni_profile: {
      graduation_year: 2022,
      current_company: 'Google',
      current_role: 'Software Engineer',
      years_experience: 2,
      industry: 'Technology',
      linkedin_url: 'https://linkedin.com/in/sarahkim',
    },
    courses_taken: ['CS101', 'CS201', 'CS301', 'CS350', 'CS401', 'BUS101'],
    skills: [
      { skill: 'JavaScript', proficiency: 5 },
      { skill: 'TypeScript', proficiency: 5 },
      { skill: 'React', proficiency: 5 },
      { skill: 'Node.js', proficiency: 4 },
      { skill: 'AWS', proficiency: 4 },
    ]
  },
  {
    email: 'david.lee@alumni.upei.ca',
    role: 'alumni' as const,
    full_name: 'David Lee',
    bio: 'Product Manager at Shopify, passionate about helping students transition to tech',
    location: 'Ottawa, ON',
    alumni_profile: {
      graduation_year: 2021,
      current_company: 'Shopify',
      current_role: 'Product Manager',
      years_experience: 3,
      industry: 'Technology',
      linkedin_url: 'https://linkedin.com/in/davidlee',
    },
    courses_taken: ['CS101', 'CS201', 'CS350', 'BUS101', 'BUS201'],
    skills: [
      { skill: 'Leadership', proficiency: 5 },
      { skill: 'Communication', proficiency: 5 },
      { skill: 'Problem Solving', proficiency: 5 },
      { skill: 'JavaScript', proficiency: 4 },
    ]
  },
  {
    email: 'rachel.patel@alumni.upei.ca',
    role: 'alumni' as const,
    full_name: 'Rachel Patel',
    bio: 'Data Analyst at Amazon, loves mentoring students in data science',
    location: 'Seattle, WA',
    alumni_profile: {
      graduation_year: 2022,
      current_company: 'Amazon',
      current_role: 'Data Analyst',
      years_experience: 2,
      industry: 'Technology',
      linkedin_url: 'https://linkedin.com/in/rachelpatel',
    },
    courses_taken: ['CS101', 'CS201', 'CS401', 'BUS301'],
    skills: [
      { skill: 'Python', proficiency: 5 },
      { skill: 'SQL', proficiency: 5 },
      { skill: 'Data Analysis', proficiency: 5 },
      { skill: 'Machine Learning', proficiency: 4 },
    ]
  },
  {
    email: 'marcus.johnson@alumni.upei.ca',
    role: 'alumni' as const,
    full_name: 'Marcus Johnson',
    bio: 'Full Stack Developer at local startup, UPEI CS grad 2023',
    location: 'Charlottetown, PE',
    alumni_profile: {
      graduation_year: 2023,
      current_company: 'TechAtlantic',
      current_role: 'Full Stack Developer',
      years_experience: 1,
      industry: 'Technology',
      linkedin_url: 'https://linkedin.com/in/marcusjohnson',
    },
    courses_taken: ['CS101', 'CS201', 'CS301', 'CS350'],
    skills: [
      { skill: 'JavaScript', proficiency: 5 },
      { skill: 'React', proficiency: 5 },
      { skill: 'Node.js', proficiency: 4 },
      { skill: 'SQL', proficiency: 4 },
    ]
  },
  {
    email: 'jennifer.wong@alumni.upei.ca',
    role: 'alumni' as const,
    full_name: 'Jennifer Wong',
    bio: 'Marketing Manager at HubSpot, helping students navigate marketing careers',
    location: 'Boston, MA',
    alumni_profile: {
      graduation_year: 2021,
      current_company: 'HubSpot',
      current_role: 'Marketing Manager',
      years_experience: 3,
      industry: 'Marketing',
      linkedin_url: 'https://linkedin.com/in/jenniferwong',
    },
    courses_taken: ['BUS101', 'BUS201', 'BUS301'],
    skills: [
      { skill: 'Communication', proficiency: 5 },
      { skill: 'Leadership', proficiency: 4 },
      { skill: 'Problem Solving', proficiency: 4 },
    ]
  },
];

export const mockOpportunities = [
  {
    title: 'Summer Software Engineering Internship',
    type: 'internship' as const,
    company: 'Google',
    description: '12-week paid internship for CS students. Work on real products with mentorship from senior engineers.',
    application_deadline: '2026-03-15',
    is_active: true,
  },
  {
    title: 'Research Assistant - Machine Learning Lab',
    type: 'research' as const,
    company: 'UPEI Research Lab',
    description: 'Work with Dr. Johnson on ML research projects. Flexible hours, great for building research portfolio.',
    application_deadline: '2026-02-28',
    is_active: true,
  },
  {
    title: 'Atlantic Hackathon 2026',
    type: 'competition' as const,
    company: 'TechAtlantic',
    description: '48-hour hackathon with $10,000 in prizes. Great networking opportunity with local tech companies.',
    application_deadline: '2026-04-01',
    is_active: true,
  },
  {
    title: 'Product Management Shadow Day',
    type: 'shadowing' as const,
    company: 'Shopify',
    description: 'Spend a day shadowing our PM team. Learn about product strategy, user research, and stakeholder management.',
    application_deadline: '2026-03-01',
    is_active: true,
  },
  {
    title: 'Web Development Micro-Project',
    type: 'project' as const,
    company: 'Local Non-Profit',
    description: '10-15 hours building a website for a local charity. Paid opportunity with portfolio potential.',
    application_deadline: '2026-02-20',
    is_active: true,
  },
];

export const mockCareerPathway = {
  target_role: 'Software Engineer',
  target_company: 'Google',
  target_industry: 'Technology',
  status: 'active' as const,
  progress_percentage: 45,
  milestones: [
    {
      title: 'Complete CS301 Algorithms Course',
      description: 'Take with Prof. Smith for best prep for technical interviews',
      milestone_type: 'academic' as const,
      deadline: '2026-05-01',
      completed: true,
      order_index: 1,
    },
    {
      title: 'Build 2 Full-Stack Projects',
      description: 'Create portfolio projects using React, Node.js, and PostgreSQL',
      milestone_type: 'skill' as const,
      deadline: '2026-06-15',
      completed: true,
      order_index: 2,
    },
    {
      title: 'Connect with 3 Alumni at Target Companies',
      description: 'Network with alumni at Google, Microsoft, and Amazon',
      milestone_type: 'networking' as const,
      deadline: '2026-07-01',
      completed: false,
      order_index: 3,
    },
    {
      title: 'Complete LeetCode Practice',
      description: 'Solve 100 medium-level problems for interview prep',
      milestone_type: 'skill' as const,
      deadline: '2026-08-01',
      completed: false,
      order_index: 4,
    },
    {
      title: 'Apply to 10 Internships',
      description: 'Target companies: FAANG + 5 startups',
      milestone_type: 'application' as const,
      deadline: '2026-09-01',
      completed: false,
      order_index: 5,
    },
  ]
};
