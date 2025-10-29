import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-400 font-extrabold text-2xl tracking-wide">
          ALIYA
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-800 dark:text-gray-200 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition duration-300"
              >
                <span className="group-hover:text-rose-400 transition-colors duration-300">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-500"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="text-yellow-300" size={20} />
            ) : (
              <Moon className="text-gray-800" size={20} />
            )}
          </button>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-gray-800 dark:text-gray-200 cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 animate-slideDown">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-800 dark:text-gray-200">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="relative group transition duration-300"
                >
                  <span className="group-hover:text-rose-400 transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
