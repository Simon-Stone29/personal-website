import ProjectDetail from "@/components/ProjectDetail";

export default function StockAppProject() {
  return (
    <ProjectDetail
      title="AlphaPool"
      tagline="Real-time stock picking competition with automated scoring"
      description="A multi-user web application where users submit weekly stock portfolios and compete on a live leaderboard. Automated scripts fetch real-time prices from Yahoo Finance, calculate returns, and update scores daily. Features meritocratic weighting where better performers have more influence on the group portfolio."

      techStack={[
        { name: "Next.js 14", category: "frontend" },
        { name: "React", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "Tailwind CSS", category: "frontend" },
        { name: "Node.js", category: "backend" },
        { name: "Supabase", category: "database" },
        { name: "PostgreSQL", category: "database" },
        { name: "Vercel", category: "deployment" },
        { name: "GitHub Actions", category: "deployment" },
        { name: "Yahoo Finance API", category: "other" },
      ]}

      features={[
        "Weekly portfolio submission with sliding allocation interface",
        "Live leaderboard with real-time score updates",
        "Automated daily price fetching and score calculation via cron jobs",
        "Meritocratic group portfolio weighted by user performance",
        "Timezone-aware week boundaries (America/New_York)",
        "Google OAuth authentication",
        "Simulation mode for testing with historical data",
      ]}

      liveLink="https://your-deployed-app.vercel.app"
      githubLink="https://github.com/yourusername/stock-app"

      expandableSections={[
        {
          title: "Architecture & Design",
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">System Architecture</h4>
                <p>
                  Serverless Next.js frontend deployed on Vercel with Supabase handling authentication,
                  database, and row-level security. GitHub Actions runs scheduled scripts for daily price
                  updates and weekly portfolio calculations.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Database Schema</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Normalized schema with 4 core tables (users, weekly_picks, stock_prices, scores)</li>
                  <li>Composite primary keys for temporal data (user_id, week_start)</li>
                  <li>Row-level security policies for multi-tenant isolation</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Scheduled Automation</h4>
                <p>
                  Two cron jobs handle data updates: <code className="bg-white/10 px-2 py-1 rounded text-sm">daily-update.ts</code> fetches
                  prices and updates scores weekdays at 5 PM ET, while <code className="bg-white/10 px-2 py-1 rounded text-sm">weekly-finalize.ts</code> initializes
                  the group portfolio each Monday morning.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "Technical Challenges",
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Challenge: Timezone Consistency</h4>
                <p className="mb-2">
                  <strong className="text-white/90">Problem:</strong> Week boundaries calculated differently on
                  Vercel (UTC) vs. user browsers (local time), causing picks to appear in the wrong week near
                  day/week boundaries.
                </p>
                <p>
                  <strong className="text-white/90">Solution:</strong> Created centralized <code className="bg-white/10 px-2 py-1 rounded text-sm">weekDates.ts</code> utility
                  using <code className="bg-white/10 px-2 py-1 rounded text-sm">Intl.DateTimeFormat</code> to force all date calculations to America/New_York timezone
                  regardless of execution environment.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Challenge: Data Dependencies</h4>
                <p className="mb-2">
                  <strong className="text-white/90">Problem:</strong> Daily script needed Monday opening prices before
                  calculating returns later in the week, but scripts could miss runs.
                </p>
                <p>
                  <strong className="text-white/90">Solution:</strong> Implemented idempotent upsert logic that detects
                  missing data and backfills automatically, allowing the system to self-heal from missed script runs.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "Deployment & Operations",
          content: (
            <div className="space-y-4">
              <p>
                <strong className="text-white/90">Hosting:</strong> Vercel (frontend) + Supabase (database + auth)
              </p>
              <p>
                <strong className="text-white/90">CI/CD:</strong> GitHub Actions for scheduled jobs (daily price updates at 5 PM ET, weekly finalization at 1 AM ET Monday)
              </p>
              <p>
                <strong className="text-white/90">Monitoring:</strong> Vercel Analytics for performance, custom logging for cron job debugging
              </p>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2 mt-4">Production Considerations</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Idempotent scripts that can safely re-run without data duplication</li>
                  <li>Simulation mode for testing historical weeks without affecting production data</li>
                  <li>Rate limiting on Yahoo Finance API calls to avoid throttling</li>
                  <li>Structured error logging for debugging scheduled job failures</li>
                </ul>
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
