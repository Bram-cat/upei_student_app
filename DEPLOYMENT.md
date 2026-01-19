# Deployment Guide - Vercel & Supabase

## Quick Deploy to Vercel

### Step 1: Set up Supabase (5 minutes)

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in:
   - **Name**: alumnipath-demo
   - **Database Password**: (create a strong password - save it!)000
   - **Region**: Choose closest to your target audience
4. Click "Create new project" and wait ~2 minutes for setup

5. Once ready, go to **Settings** → **API**:
   - Copy **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - Copy **anon public** key (under "Project API keys")
   - Copy **service_role** key (keep this secret!)

6. Go to **SQL Editor** → Click "New Query"
   - Copy and paste the entire contents of `supabase/migrations/001_initial_schema.sql`
   - Click "Run" to create all tables
   - You should see "Success. No rows returned"

### Step 2: Deploy to Vercel (3 minutes)

1. Go to [https://vercel.com](https://vercel.com) and sign up/login with GitHub

2. Click "Add New" → "Project"

3. Import your repository:
   - Find `upei_student_app` in the list
   - Click "Import"

4. Configure environment variables (click "Environment Variables"):

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   NEXTAUTH_URL=https://your-vercel-url.vercel.app
   NEXTAUTH_SECRET=generate-using-command-below
   ```

   **To generate NEXTAUTH_SECRET**:
   - On Mac/Linux: Run `openssl rand -base64 32` in terminal
   - On Windows: Use https://generate-secret.vercel.app/32
   - Copy the generated string

5. Click "Deploy"

6. Wait 2-3 minutes for deployment

7. Once deployed, copy your Vercel URL (like `https://upei-student-app.vercel.app`)

8. Go back to Vercel → Settings → Environment Variables
   - Edit `NEXTAUTH_URL` and replace with your actual Vercel URL
   - Click "Save"

9. Go to Deployments → Click the three dots on latest deployment → "Redeploy"

### Step 3: Test Your Deployment

1. Visit your Vercel URL
2. You should see the beautiful AlumniPath landing page
3. Navigation and UI should work perfectly

## Adding Demo Data (Optional)

To populate your database with demo data for testing:

1. Create a simple Node.js script or use Supabase's SQL Editor to insert data from `lib/mock-data/seed-data.ts`

2. Or manually create demo accounts through your app's signup flow (once auth is implemented)

## Environment Variables Reference

| Variable                        | Description               | Where to Get It            |
| ------------------------------- | ------------------------- | -------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Your Supabase project URL | Supabase → Settings → API  |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anonymous key      | Supabase → Settings → API  |
| `SUPABASE_SERVICE_ROLE_KEY`     | Admin key (keep secret!)  | Supabase → Settings → API  |
| `NEXTAUTH_URL`                  | Your app's public URL     | Your Vercel deployment URL |
| `NEXTAUTH_SECRET`               | Random secret for JWT     | `openssl rand -base64 32`  |

## Troubleshooting

### "Module not found" errors

- Make sure all dependencies are in `package.json`
- Try "Redeploy" in Vercel

### Database connection issues

- Verify all Supabase environment variables are correct
- Check if SQL migration ran successfully
- Verify Supabase project is not paused

### CSS/Styling issues

- Clear your browser cache
- Check if Tailwind config is correct
- Verify `globals.css` is imported in `layout.tsx`

### Authentication not working

- Verify `NEXTAUTH_URL` matches your actual Vercel URL (no trailing slash)
- Check `NEXTAUTH_SECRET` is set
- Redeploy after changing environment variables

## Custom Domain (Optional)

1. Go to Vercel → Project Settings → Domains
2. Add your custom domain (e.g., `alumnipath.com`)
3. Update DNS records as instructed by Vercel
4. Update `NEXTAUTH_URL` to your custom domain
5. Redeploy

## Next Steps After Deployment

1. ✅ Test the landing page
2. Implement authentication pages (login/signup)
3. Build student dashboard
4. Implement matching algorithm
5. Create career pathway visualizer
6. Add course intelligence features
7. Build mentorship session booking
8. Polish and optimize for demo

## Support

For issues:

1. Check Vercel deployment logs
2. Check Supabase logs
3. Review browser console for errors
4. Check the GitHub Issues page

---

**Estimated Setup Time**: 10-15 minutes total
**Cost**: $0 (both Supabase and Vercel have generous free tiers)
