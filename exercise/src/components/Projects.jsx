// src/components/Projects.jsx
import Group from "../assets/group.png"
import Todo from "../assets/todo.png"
import Portfolio from "../assets/portfolio.png"

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Full-featured admin panel with real-time analytics, product management, and order tracking.",
    // tech: ["React", "Tailwind"],
    githubUrl: "https://github.com/Kip-tum1/My-Resume.git",
    image: Group
  },
  {
    id: 2,
    title: "To-List",
    description: "Clean, high-conversion todo-landing page with smooth animations and mobile design.",
    // tech: ["H", "Tailwind", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/Kip-tum1/dynamic-to-do-list-js.git",
    image: Todo
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Beautiful portfolio landing page with beautiful animations and first mobile designs.",
    // tech: ["React", "Redux Toolkit", "Tailwind", "localForage"],
    githubUrl: "https://github.com/Kip-tum1/A-simple-website.git",
    image: Portfolio
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work — hover to see the GitHub repository
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Image container */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* GitHub button - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white font-medium rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 ring-1 ring-black/10 dark:ring-white/20"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-3">
                  {project.description}
                </p>

                {/* <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}