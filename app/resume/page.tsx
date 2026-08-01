import ExperienceCard from "@/components/ExperienceCard";
import SkillPill from "@/components/SkillPill";

export default function Resume() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Resume</h1>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-white">Experience</h2>
          <div className="space-y-0">
            <ExperienceCard
              logo="/icons/regeneron_pharmaceuticals_logo.jpg"
              company="Regeneron Pharmaceuticals"
              role="IOPS CMC Regulatory Sciences - Intern"
              duration="May 2026 - Present"
              points={[
                "Selected for the highly competitive Regeneron internship program, with an acceptance rate of approximately 2%",
                "Developed an SQL database & a full stack web application for efficiently tracking errors in regulatory submissions",
                "Interacted and presented to stakeholders, users, and business leaders to gather requirements and incorporate feedback into the tool",
                "Explored new departments and functions of Regeneron to more holistically understand the process of bringing medicines to patients"
              ]}
              rounded="all"
              skills={['Flask', 'Python', 'SQL Server Management Studio', 'HTML5', 'JavaScript', 'CSS', 'Microsoft Suite', 'Power Point', 'Claude Code']}
            />

            <ExperienceCard
              logo="/icons/regeneron_pharmaceuticals_logo.jpg"
              company="Regeneron Pharmaceuticals"
              role="IOPS IT Applications - Intern"
              duration="May 2025 - Aug 2025"
              points={[
                "Developed a full stack web application as a proof of concept for budget management, utilizing Java Spring Boot, HTML, JavaScript, and PostgreSQL",
                "Collaborated with a team of interns to create an Electric Vehicle charger availability app, seeking to improve charger utilization, reduce employee wait times, and support policy compliance",
                "Applied Agile Scrum methodology as a Developer and gained experience with Sprints, Reviews and Retrospectives, and the roles of the Product Owner and Scrum Master",
                "Engaged with business stakeholders to gather requirements and regularly presented project progress and deliverables to leadership"
              ]}
              rounded="all"
              skills={['Java', 'JavaScript', 'HTML5', 'CSS', 'Spring Boot', 'PostgreSQL', 'Requirements Gathering', 'Microsoft PowerPoint', 'Public Speaking']}
            />

            <ExperienceCard
              logo="/icons/siena_college_logo.jpg"
              company="Siena University"
              role="Writing Center Tutor"
              duration="Sep 2025 - Present"
              points={[
                "Worked with members of the Siena community to provide writing strategies",
                "Learned and utilized tutoring practices to positively impact student work",
                "Consistently demonstrated timeliness in submitting appointment reflections & timecards"
              ]}
              rounded="all"
              skills={['Communication', 'Teaching']}
            />

            <ExperienceCard
              logo="/icons/target_logo.jpg"
              company="Target"
              role="Guest Advocate"
              duration="May 2024 - Jan 2025"
              points={[
                "Delivered exceptional customer service and facilitated returns, exchanges, and checkout",
                "Worked daily with Point of Sale (POS) systems to accurately process transactions",
                "Adapted to various roles and responsibilities, contributing to a positive working environment"
              ]}
              rounded="all"
              skills={['Customer Service', 'Point of Sale (POS) Systems', 'Retail']}
            />
          </div>
        </section>

        {/* Skills Section */}
<section>
          <h2 className="text-2xl font-semibold mb-6 text-white">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <SkillPill skillName="TypeScript" />
            <SkillPill skillName="JavaScript" />
            <SkillPill skillName="React" />
            <SkillPill skillName="Next.js" />
            <SkillPill skillName="Tailwind CSS" />
            <SkillPill skillName="HTML" />
            <SkillPill skillName="CSS" />
            <SkillPill skillName="Git" />
            <SkillPill skillName="Node.js" />
            <SkillPill skillName="Python" />
            <SkillPill skillName="Power Point" />
            <SkillPill skillName="Microsoft Suite" />
          </div>
        </section>
      </div>
    </div>
  );
}
