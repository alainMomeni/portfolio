import SectionTitle from "./atoms/SectionTitle";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/Projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#060c1a] py-16 sm:py-20 border-t border-[#0f1e3a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}