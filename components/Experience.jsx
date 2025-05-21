"use client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto scroll-mt-24"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
        Experience
      </h2>
      <div className="text-gray-300 space-y-4 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Frontend Developer · SMM Oksima Group
          </h3>
          <p className="text-sm text-gray-400 mb-1">
            Apr 2024 – Aug 2024 · 5 months · Remote
          </p>
          <p className="mb-3">
            Project-based collaboration on a contact management application.
          </p>

          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
            <li>
              Developed a responsive contact management app with filtering and
              pagination.
            </li>
            <li>
              Implemented adding, editing, and deleting contacts using{" "}
              <span className="text-cyan-400">Redux Toolkit</span> and{" "}
              <span className="text-cyan-400">redux-persist</span>.
            </li>
            <li>
              Integrated <span className="text-cyan-400">React Router v6</span>{" "}
              for intuitive navigation and routing.
            </li>
            <li>
              Designed a UI using{" "}
              <span className="text-cyan-400">Ant Design</span> components.
            </li>
            <li>
              Applied <span className="text-cyan-400">nanoid</span> for
              generating unique contact IDs and{" "}
              <span className="text-cyan-400">react-redux</span> for global
              state management.
            </li>
            <li>
              Structured the codebase with modular architecture, separating
              components, logic, styles, and services.
            </li>
            <li>
              Followed <span className="text-cyan-400">ESLint</span> rules and
              clean code principles for maintainability.
            </li>
            <li>
              Collaborated with designers and backend developers to ensure
              high-quality results.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 flex flex-col sm:flex-row gap-4">
        <a
          href="/Serhii_Rozhok_Frontend_developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block min-w-14 border border-cyan-400 text-cyan-400 px-6 py-3 rounded hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
        >
          View Resume (PDF)
        </a>
      </div>
    </section>
  );
}
