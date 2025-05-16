export default function About() {
  const stacks = [
    "HTML",
    "CSS",
    "Java Script",
    "React.js",
    "React-Redux",
    "Redux Toolkit",
    "REST API",
    "HeroUI",
    "Tailwind CSS",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Postman",
    "Git",
    "Webpack",
    "Vite",
    "Figma",
  ];
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto scroll-mt-24"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
        About Me
      </h2>
      <div className="text-gray-300 space-y-4 text-base leading-relaxed">
        <p>
          Hello! I'm Serhii, a passionate frontend developer who loves creating
          beautiful and functional user experiences for the web.
        </p>
        <p>
          I specialize in building responsive websites using modern technologies
          like React, Tailwind CSS, and more. I enjoy turning ideas into reality
          and constantly learning new tools and techniques.
        </p>
        <p>
          In addition to coding, I enjoy analyzing good design, optimizing
          performance, and contributing to team projects.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-cyan-400 list-disc list-inside mt-2">
          {stacks.map((stack, index) => (
            <li key={index}>{stack}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
