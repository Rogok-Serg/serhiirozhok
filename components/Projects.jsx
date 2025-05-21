import ProjectCard from "./ProjectCard";

import projects from "../data/projects.json";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 border-b border-gray-700 pb-2">
        Projects
      </h2>
      <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
        Personal Projects
      </h3>
      <div className="space-y-12 mb-14">
        {projects.personal.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
        Team Projects
      </h3>
      <div className="space-y-12">
        {projects.team.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
