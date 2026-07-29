import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            image="/projects/project1.jpg"
            title="Project Name"
            description="A brief description of your project and what technologies you used to build it."
            status="live"
            liveLink="https://example.com"
            githubLink="https://github.com/username/project"
          />

          <ProjectCard
            image="/projects/project2.jpg"
            title="Another Project"
            description="Description of another cool project you've worked on."
            status="building"
            liveLink="https://example.com"
            githubLink="https://github.com/username/project"
          />

          <ProjectCard
            image="/projects/project3.jpg"
            title="Third Project"
            description="Yet another amazing project showcasing your skills."
            status="live"
            githubLink="https://github.com/username/project"
          />
        </div>
      </div>
    </div>
  );
}
