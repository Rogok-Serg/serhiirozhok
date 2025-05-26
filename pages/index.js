import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Serhii Rozhok | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio website of Serhii Rozhok – showcasing real projects, modern tech stack and contact details."
        />
        <meta
          name="keywords"
          content="Frontend Developer, React, Next.js, Tailwind, Portfolio, Serhii Rozhok"
        />
        <meta name="author" content="Serhii Rozhok" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://serhiirozhok.vercel.app/" />
        <meta
          name="google-site-verification"
          content="P2A5rNwJwzC1P4lbPZ_qAkHJCv0icyM95xFmDAF4JTQ"
        />
        <meta
          property="og:title"
          content="Serhii Rozhok | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Explore Serhii’s portfolio: modern projects, technologies, and contact information."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://serhiirozhok.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="https://serhiirozhok.vercel.app/og-image.png"
        />
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
          <Experience />
          <Projects />
          <Contact />
        </section>
      </main>
    </>
  );
}
