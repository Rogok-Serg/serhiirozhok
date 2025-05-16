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
            className="hover:text-cyan-400 transition-colors duration-300 block"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-cyan-400 transition-colors duration-300 block"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-cyan-400 transition-colors duration-300 block"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
