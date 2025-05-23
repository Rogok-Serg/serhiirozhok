import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col sm:flex-row gap-6 rounded-xl p-4 transition-all duration-300 border border-transparent hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:p-6">
      <div className="sm:w-2/5 w-full">
        <div className="overflow-hidden rounded-lg aspect-[16/9] relative w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="sm:w-3/5">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition">
          {project.title}
        </h3>
        <p className="text-gray-300 mt-2">{project.description}</p>
        <ul className="flex flex-wrap gap-3 text-sm text-cyan-400 mt-2">
          {project.tech.map((t, i) => (
            <li key={i}>#{t}</li>
          ))}
        </ul>
        <div className="mt-3 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-sm text-gray-400 hover:text-white transition underline"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            className="text-sm text-gray-400 hover:text-white transition underline"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
