import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 text-white scroll-smooth min-h-screen flex flex-col lg:flex-row">
        <aside className="min-h-screen w-full lg:w-2/5 bg-gray-900 py-24 px-6 flex flex-col justify-between">
          <div className="flex flex-col gap-8 flex-grow  px-4 sm:px-8 md:px-16 lg:px-8 max-w-6xl">
            <Hero />
            <Navbar />
          </div>
          <Footer className="mt-auto" />
        </aside>

        <section className="w-full lg:w-3/5 p-6 sm:p-8 space-y-16 lg:overflow-y-auto lg:max-h-screen">
          <About />
          <Projects />
          <Contact />
        </section>
      </main>
    </>
  );
}
