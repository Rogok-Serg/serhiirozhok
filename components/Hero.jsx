export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-start mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
        Serhii Rozhok.
      </h1>
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-400 mb-6">
        I build things for the web.
      </h2>
      <p className="text-gray-300 max-w-xl mb-8">
        I'm a frontend developer specializing in building (and occasionally
        designing) responsive and high-quality websites and applications using
        React, Tailwind CSS, and more.
      </p>
      <a
        href="#projects"
        className="inline-block border border-cyan-400 text-cyan-400 px-6 py-3 rounded hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
      >
        View Projects
      </a>
    </section>
  );
}
