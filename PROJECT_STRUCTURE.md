# Personal Portfolio Website

## Tech Stack
- **Framework**: Next.js 14 (React) with App Router
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (frontend) + Supabase (optional backend/DB)
- **Language**: TypeScript

## Site Structure

### Navigation
- **Home** - Hero section with intro
- **About** - Your story, skills, tech stack
- **Projects** - Portfolio work with video demos
- **Playground** - Interactive content (games, 3D models, experiments)
- **Resume** - Downloadable CV + experience timeline

## Project Structure
```
PersonalWebsite/
├── app/
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Home/Hero page
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── playground/
│   │   └── page.tsx
│   └── resume/
│       └── page.tsx
├── components/
│   ├── Navigation.tsx       # Header/nav bar
│   ├── Hero.tsx            # Landing section
│   ├── ProjectCard.tsx     # Project display component
│   ├── VideoPlayer.tsx     # Video embed component
│   └── Footer.tsx
├── public/
│   ├── resume.pdf
│   ├── projects/           # Project videos/images
│   └── models/             # 3D models
├── styles/
│   └── globals.css
├── lib/                    # Utilities/helpers
├── package.json
└── tailwind.config.ts
```

## Features to Implement
1. **Smooth scroll navigation** between sections
2. **Video embedding** for project demos
3. **Responsive design** (mobile-first)
4. **Dark mode** toggle
5. **Animated transitions** (Framer Motion)
6. **SEO optimization** (Next.js metadata)
7. **Contact form** (optional, via Supabase)

## Design Philosophy
- **Minimal & Clean**: Let the work speak for itself
- **Fast Loading**: Optimized images/videos
- **Interactive**: Engaging without being gimmicky
- **Professional**: Shows technical skill through execution

## Next Steps
1. Install Node.js (v18+)
2. Run: `npx create-next-app@latest . --typescript --tailwind --app`
3. Install additional deps: `npm install framer-motion lucide-react`
4. Build out components and pages
