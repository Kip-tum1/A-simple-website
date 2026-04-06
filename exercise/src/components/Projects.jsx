// src/components/Projects.jsx
import Group from "../assets/group.png";
import Todo from "../assets/todo.png";
import Portfolio from "../assets/portfolio.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Full-featured admin panel with real-time analytics, product management, and order tracking.",
    githubUrl: "https://github.com/Kip-tum1/My-Resume.git",
    image: Group,
    tags: ["React", "Tailwind", "Chart.js"],
  },
  {
    id: 2,
    title: "Dynamic To-Do List",
    description: "Beautiful and responsive todo app with smooth animations, local storage, and dark mode support.",
    githubUrl: "https://github.com/Kip-tum1/dynamic-to-do-list-js.git",
    image: Todo,
    tags: ["JavaScript", "CSS3", "Animation"],
  },
  {
    id: 3,
    title: "Building APIs with Django REST Framework",
    description: "Clean and robust REST API built with Django REST Framework, authentication, and PostgreSQL.",
    githubUrl: "https://github.com/Kip-tum1/A-simple-website.git",
    image: Portfolio,
    tags: ["Django", "DRF", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top,#14b8a6_0%,transparent_70%)] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full mb-4">
            <span className="text-teal-400">✦</span>
            <span className="text-sm font-medium tracking-widest text-zinc-400">PORTFOLIO</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-5 text-xl text-zinc-400 max-w-2xl mx-auto">
            A selection of my recent work. Each project reflects clean code, great UX, and modern practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-teal-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* GitHub Button - Appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-teal-400 hover:text-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>

                {/* Tech tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-black/70 backdrop-blur-md text-teal-300 rounded-full border border-teal-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="mt-4 text-zinc-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-transparent w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Optional "See more" button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Kip-tum1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 hover:border-teal-400 rounded-2xl text-zinc-300 hover:text-white transition-all duration-300 hover:bg-zinc-900 group"
          >
            See all projects on GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}