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
        <p>
          You can view or download my resume in PDF format by clicking the
          button below:
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/Serhii_Rozhok_Frontend_developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block min-w-14 border border-cyan-400 text-cyan-400 px-6 py-3 rounded hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
          >
            View My Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
