import ExperienceCard from "@/components/ExperienceCard";
import SkillPill from "@/components/SkillPill";

export default function Resume() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Resume</h1>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-0">
            <ExperienceCard
              logo="/experience/company1.jpg"
              company="Company Name"
              role="Software Engineer"
              duration="Jan 2024 - Present"
              points={[
                "Built and maintained scalable web applications using React and Next.js",
                "Collaborated with cross-functional teams to deliver high-quality features",
                "Improved application performance and user experience"
              ]}
              rounded="top"
              skills={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
            />
            <ExperienceCard
              logo="/experience/company2.jpg"
              company="Previous Company"
              role="Junior Developer"
              duration="Jun 2023 - Dec 2023"
              points={[
                "Developed responsive user interfaces using modern web technologies",
                "Participated in code reviews and team meetings",
                "Learned best practices for software development"
              ]}
              rounded="bottom"
              skills={['HTML', 'CSS', 'JavaScript']}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
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
          </div>
        </section>
      </div>
    </div>
  );
}
