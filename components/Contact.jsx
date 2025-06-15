export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-3xl mx-auto text-center scroll-mt-24"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 border-b border-gray-700 pb-2">
        Get In Touch
      </h2>
      <p className="text-gray-300 text-base sm:text-lg mb-6">
        I’m currently looking for new opportunities. Whether you have a
        question, a freelance project, or just want to say hi — my inbox is
        always open!
      </p>
      <a
        href="mailto:sergrozhok07@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
        className="inline-block mt-4 px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition rounded-lg font-medium"
      >
        Say Hello
      </a>
    </section>
  );
}
