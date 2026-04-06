import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-zinc-950 to-black text-white py-16 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#14b8a6_0%,transparent_50%)] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 mb-16">
          {/* Brand section */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl shadow-inner">
                D
              </div>
              <h3 className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
                Duncan
              </h3>
            </div>
            <p className="text-zinc-400 max-w-lg text-lg leading-relaxed">
              Skilled in crafting elegant static websites and modern web applications while following current best coding practices.
            </p>
          </div>

          {/* Newsletter form - glassmorphic & premium */}
          <div className="flex-1 w-full max-w-lg">
            <form className="group flex shadow-2xl">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/30 focus:border-teal-400 rounded-l-3xl px-8 py-5 text-base placeholder-zinc-400 text-white focus:outline-none transition-all duration-300 focus:ring-4 focus:ring-teal-400/20"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 px-10 py-5 rounded-r-3xl font-semibold text-lg tracking-wide flex items-center gap-2 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5 active:scale-95"
              >
                Subscribe
                <span className="text-xl leading-none transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
            <p className="text-[10px] text-zinc-500 mt-3 tracking-widest text-center lg:text-left">
              Monthly tips • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-zinc-400 text-sm flex items-center gap-1">
            <span className="text-teal-400">&copy;</span>
            {new Date().getFullYear()} KiptumDun. All rights reserved.
          </p>

          {/* Social icons with brand-aware hover */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-zinc-400 hover:text-[#1877F2] transition-all duration-300 hover:scale-125 active:scale-95"
              aria-label="Facebook"
            >
              <FaFacebook size={26} />
            </a>
            <a
              href="https://x.com/Raizy_tum"
              className="text-zinc-400 hover:text-[#000000] transition-all duration-300 hover:scale-125 active:scale-95"
              aria-label="X (Twitter)"
            >
              <FaTwitter size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/duncan-kiptum"
              className="text-zinc-400 hover:text-[#0A66C2] transition-all duration-300 hover:scale-125 active:scale-95"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://github.com/Kip-tum1"
              className="text-zinc-400 hover:text-[#FFFFFF] transition-all duration-300 hover:scale-125 active:scale-95"
              aria-label="GitHub"
            >
              <FaGithub size={26} />
            </a>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-8 text-sm">
            <a
              href="#"
              className="text-zinc-400 hover:text-teal-400 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-teal-400 after:transition-all"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-teal-400 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-teal-400 after:transition-all"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;