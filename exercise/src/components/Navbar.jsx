import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#service", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-black font-bold text-2xl shadow-inner">
              D
            </div>
            <span className="text-3xl font-bold tracking-tighter text-white">DUNCAN</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-white font-medium transition-colors duration-300 relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:bg-teal-400 after:w-0 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-3 px-8 py-3 bg-white text-black font-semibold rounded-2xl hover:bg-teal-400 hover:text-black transition-all duration-300 active:scale-95 shadow-lg"
          >
            Contact Me
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-white hover:bg-zinc-900 rounded-xl transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <FaTimes size={24} />
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-80 bg-zinc-950 border-l border-zinc-800 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-end mb-12">
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              <FaTimes size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-8 text-2xl font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-12">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-5 text-center bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-semibold rounded-2xl text-lg hover:shadow-2xl hover:shadow-teal-500/30 transition-all active:scale-95"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;