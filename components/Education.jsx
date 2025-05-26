"use client";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto scroll-mt-24"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
        Education
      </h2>
      <div className="text-gray-300 space-y-10 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-white">
            IT School GoIT · Fullstack Developer
          </h3>
          <p className="text-sm text-gray-400 mb-1">2022 – 2023</p>
          <p className="mb-3">Fullstack Developor</p>
          <a
            href="/Certificate_FullStack_developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-cyan-400 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-gray-900 transition duration-300 text-sm"
          >
            View Certificate (PDF)
          </a>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Odesa Polytechnic National University · Mechanical Engineering
          </h3>
          <p className="text-sm text-gray-400 mb-1">2006 – 2011</p>
          <p>Faculty of mechanical engineering. Engineer</p>
        </div>
      </div>
    </section>
  );
}
