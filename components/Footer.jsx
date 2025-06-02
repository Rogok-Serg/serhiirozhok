import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-4 flex flex-col items-center gap-3 text-gray-400 text-sm">
      <div className="flex space-x-6 text-cyan-400">
        <a
          href="https://github.com/Rogok-Serg"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-cyan-300 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/serhii-rozhok-frontend-developer/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-cyan-300 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://t.me/serg_rzhk"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
          className="hover:text-cyan-300 transition"
        >
          <FaTelegram size={24} />
        </a>
      </div>
    </footer>
  );
}
