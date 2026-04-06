const services = [
    { id: 1, title: "Frontend Development", description: "Building modern, responsive web applications with React, Next.js, TypeScript, and the latest frontend technologies.", icon: "code" },
    { id: 2, title: "UI Implementation", description: "Pixel-perfect implementation of designs with attention to detail, animations, and user experience.", icon: "layout" },
    { id: 5, title: "Code Review & Optimization", description: "Comprehensive code reviews and performance optimization to improve quality and user experience.", icon: "search" },
  ]
    


function Services() {
  return (

    <section id="services" className="services-section py-24 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label inline-block mb-3 px-5 py-1.5 text-sm font-medium tracking-widest uppercase border border-zinc-700 rounded-full bg-zinc-900/50">
           What I Offer
          </div>
      
          <h2 className="section-title text-5xl md:text-6xl font-bold tracking-tighter mb-6">
           Services
          </h2>
      
          <p className="section-desc max-w-2xl mx-auto text-lg text-zinc-400">
            Comprehensive solutions tailored to your needs, from frontend development to technical workshops.
          </p>
        </div>
        <div  className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service=> (
                <div className="service-card" key={service.id}>
                    <div className="service-title text-2xl font-semibold mb-4 tracking-tight">{service.title}</div>
                    <div  className="service-desc text-zinc-400 leading-relaxed">{service.description}</div>
                </div>))}
       </div>
        {/* <div>
          {data.services.map((s) => (<div key={s.id}  className="service-card group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50" >

          <div className="service-icon mb-6 w-14 h-14 flex items-center justify-center bg-zinc-800 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300">
            <Icon name={s.icon} size={22} />
          </div>


          <div className="service-title text-2xl font-semibold mb-4 tracking-tight">
            {s.title}
          </div>


          <div className="service-desc text-zinc-400 leading-relaxed">
            {s.description}
          </div>
        </div>
      ))}
    </div> */}
  </div>
</section>
    
    
  );
}

export default Services;