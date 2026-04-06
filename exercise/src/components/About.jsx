import AboutImage from "../assets/coding.jpg";

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: "90%" },
    { name: "JavaScript", level: "88%" },
    { name: "React JS", level: "92%" },
    { name: "Python", level: "75%" },
  ];

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#14b8a6_0%,transparent_70%)] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-400 via-cyan-500 to-transparent opacity-20 rounded-[3rem] blur-3xl group-hover:opacity-30 transition-opacity" />
            
            <img
              src={AboutImage}
              alt="Duncan Kiptum - Frontend Engineer"
              className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/3] lg:aspect-square relative z-10 border border-zinc-800"
            />
            
            {/* Decorative corner accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-teal-400/30 rounded-2xl z-20" />
          </div>

          {/* Right - Content */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                <span className="text-teal-400">👨‍💻</span>
                <span className="uppercase text-xs font-semibold tracking-[3px] text-zinc-400">MY STORY</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>

            <div className="text-zinc-400 text-[17px] leading-relaxed max-w-2xl">
              A versatile frontend engineer passionate about building elegant, high-performance web applications. 
              I thrive on working with diverse tech stacks and I'm always excited to learn new technologies and frameworks.
            </div>

            {/* Skills Section */}
            <div className="space-y-7">
              <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
              
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="w-36 text-sm font-medium text-zinc-400 group-hover:text-teal-400 transition-colors">
                    {skill.name}
                  </div>
                  <div className="flex-1 bg-zinc-900 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full transition-all duration-700 group-hover:scale-x-105 origin-left"
                      style={{ width: skill.level }}
                    />
                  </div>
                  <div className="w-12 text-right text-sm font-mono text-teal-400">
                    {skill.level}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-5xl font-bold bg-gradient-to-br from-teal-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-zinc-400 mt-3 text-sm uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;