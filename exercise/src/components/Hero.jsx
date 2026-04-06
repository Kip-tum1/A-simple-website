// Hero.jsx
import HeroImage from '../assets/photo.png';

const Hero = () => {
  return (
   <section 
  id="hero"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white"
>
  {/* Hero Grid Background */}
  <div className="hero-grid absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />

  {/* Hero Glow 1 */}
  <div className="hero-glow absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />

  {/* Hero Glow 2 */}
  <div className="hero-glow2 absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.15),transparent_50%)]" />

  {/* Main Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
    {/* Badge */}
    <div className="hero-badge mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-5 py-2 text-sm backdrop-blur-md">
      <span className="badge-dot h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      Available for Work
    </div>

    {/* Title */}
    <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6">
      Fullstack<br />
      <span className="hero-title-accent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Developer
      </span>
    </h1>

    {/* Subtitle */}
    <p className="hero-sub max-w-2xl mx-auto text-xl text-zinc-400 mb-10">
      Hi, I'm <strong className="text-white">Duncan Kiptum</strong> — experienced website and mobile app developer building impactful solutions for businesses and individuals.
    </p>

    {/* Actions */}
    <div className="hero-actions flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="#projects" 
        className="btn-primary group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-105"
      >
        View Projects 
        {/* <Icon name="arrow" size={15} className="group-hover:translate-x-1 transition" /> */}
      </a>
      <a 
        href="#contact" 
        className="btn-outline rounded-full border border-zinc-700 px-8 py-4 text-lg font-medium transition-all hover:bg-white/10"
      >
        Get in Touch
      </a>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-xs tracking-widest text-zinc-500">
    <div className="scroll-line h-12 w-px bg-gradient-to-b from-transparent via-zinc-400 to-transparent" />
    SCROLL TO EXPLORE
  </div>
</section>
  );
};

export default Hero;