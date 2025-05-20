// components/Navbar.js
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <ul className="flex flex-col space-y-8 text-sm uppercase tracking-wider">
        <li>
          <a
            href="#about"
            className="inline-block border border-cyan-400 text-cyan-400 px-6 py-3 rounded hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="inline-block border border-cyan-400 text-cyan-400 px-6 py-3 rounded hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="inline-block border border-cyan-400 text-cyan-400 px-6 py-3 rounded hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
