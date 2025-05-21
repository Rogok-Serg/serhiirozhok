// components/Navbar.js
import useActiveSection from "../hooks/useActiveSection";

const btnNav = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const active = useActiveSection([
    "about",
    "projects",
    "contact",
    "experience",
  ]);

  return (
    <nav>
      <ul className="flex flex-col space-y-8 text-sm uppercase tracking-wider w-full max-w-50">
        {btnNav.map(({ label, href, id }) => (
          <li className="w-full" key={id}>
            <a
              href={href}
              className={`inline-block w-full border border-cyan-400 text-cyan-400 px-6 py-3 rounded hover:bg-cyan-400 hover:text-gray-900 transition duration-300
                ${
                  active === id
                    ? "border-cyan-400 bg-cyan-400 text-gray-900"
                    : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
