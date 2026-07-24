# Setup Instructions

## Prerequisites
Install Node.js from: https://nodejs.org/ (download the LTS version)

## Installation

1. **Initialize Next.js project**:
```bash
cd "C:\Users\simon.stone\PersonalWebsite"
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

2. **Install additional packages**:
```bash
npm install framer-motion lucide-react
npm install @react-three/fiber @react-three/drei three
```

3. **Run development server**:
```bash
npm run dev
```
Visit: http://localhost:3000

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Visit vercel.com
3. Import your repository
4. Deploy automatically

### With Supabase (for backend features)
1. Create project at supabase.com
2. Add environment variables to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
3. Install: `npm install @supabase/supabase-js`

## Project Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
