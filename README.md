# AlumniPath - Your Career GPS

AlumniPath is a professional networking platform that connects university students with strategically-positioned alumni who are exactly 2-3 career steps ahead, transforming mentorship into actionable career roadmaps.

## Features

- **Intelligent Matching**: Algorithm-based matching of students with alumni based on academic trajectory, career path alignment, and timeline relevance
- **Career Pathway Builder**: Interactive visual roadmaps with milestones and progress tracking
- **Course Intelligence**: Crowdsourced insights from alumni about courses, professors, and career relevance
- **Structured Mentorship**: Time-efficient 15-45 minute sessions focused on specific topics
- **Opportunity Discovery**: Curated internships, research projects, competitions, and shadowing opportunities
- **Skill Gap Analysis**: Compare student skills with alumni in target roles

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + React + TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: NextAuth.js
- **UI Components**: shadcn/ui + Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier is fine)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd upei_student_app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Create a Supabase project at https://supabase.com
   - Add your Supabase credentials to `.env.local`:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
   - Generate a NextAuth secret: `openssl rand -base64 32`
   - Add the secret to `NEXTAUTH_SECRET`

4. Set up the database:
   - Go to your Supabase project dashboard
   - Navigate to the SQL Editor
   - Run the migration file from `supabase/migrations/001_initial_schema.sql`

5. Seed with mock data (optional for demo):
   - The platform includes comprehensive mock data in `lib/mock-data/seed-data.ts`
   - This data can be used to populate your database for demo purposes

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
upei_student_app/
├── app/                      # Next.js App Router pages
│   ├── (auth)/              # Authentication pages
│   ├── (dashboard)/         # Dashboard pages (student/alumni)
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── dashboard/           # Dashboard components
│   ├── matching/            # Matching algorithm components
│   ├── pathway/             # Career pathway components
│   └── shared/              # Shared components
├── lib/                     # Utility functions and configurations
│   ├── supabase/            # Supabase client setup
│   ├── mock-data/           # Demo data for testing
│   └── utils/               # Helper functions
├── types/                   # TypeScript type definitions
├── supabase/                # Database migrations
│   └── migrations/
└── public/                  # Static assets
```

## Demo Accounts (Coming Soon)

Once you seed the database with mock data:
- **Student Demo**: `demo-student@alumnipath.com` / `demo123`
- **Alumni Demo**: `demo-alumni@alumnipath.com` / `demo123`

## Features Roadmap

### Phase 1: Foundation (Completed)
- [x] Next.js project setup
- [x] Tailwind CSS & shadcn/ui integration
- [x] Supabase configuration
- [x] Database schema design
- [x] Landing page

### Phase 2: Student Dashboard & Matching
- [ ] Student dashboard layout
- [ ] Profile completion wizard
- [ ] Matching algorithm implementation
- [ ] Alumni card components
- [ ] Connection request system

### Phase 3: Career Pathway Builder
- [ ] Pathway creation wizard
- [ ] Visual timeline component
- [ ] Milestone tracking
- [ ] Course recommendations
- [ ] Skill gap analysis

### Phase 4: Course Intelligence
- [ ] Course catalog interface
- [ ] Professor ratings
- [ ] Review system
- [ ] Career relevance scoring

### Phase 5: Mentorship & Opportunities
- [ ] Session booking system
- [ ] Opportunity discovery feed
- [ ] Messaging interface
- [ ] Alumni dashboard

### Phase 6: Polish & Production
- [ ] Loading states and animations
- [ ] Mobile optimization
- [ ] Admin analytics dashboard
- [ ] Performance optimization

## Database Schema

The platform uses the following main tables:
- `profiles` - User profiles (students, alumni, admins)
- `student_profiles` - Extended student information
- `alumni_profiles` - Extended alumni information
- `courses` - Course catalog
- `professors` - Professor directory
- `course_reviews` - Course and professor reviews
- `career_pathways` - Student career pathways
- `pathway_milestones` - Milestones for each pathway
- `connections` - Student-alumni connections
- `mentorship_sessions` - Scheduled sessions
- `opportunities` - Internships, projects, competitions
- `skills` - Skill catalog
- `student_skills` & `alumni_skills` - User skill proficiency

See `supabase/migrations/001_initial_schema.sql` for the complete schema.

## Contributing

This is a competition demo project. Contributions are welcome after the competition phase.

## License

MIT License - feel free to use this for educational purposes.

## Contact

Built by UPEI students for the [Competition Name] - 2026

---

**Note**: This is a demo version using mock data. No real university integrations are active yet.
