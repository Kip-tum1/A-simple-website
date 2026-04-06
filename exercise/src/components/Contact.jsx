import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_right,#14b8a6_0%,transparent_60%)] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Info */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                <span className="text-teal-400">✉️</span>
                <span className="uppercase text-xs font-semibold tracking-[3px] text-zinc-400">GET IN TOUCH</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-transparent">
                Let's Build Something Great Together
              </h2>
              <p className="mt-6 text-xl text-zinc-400 max-w-lg">
                I'm always excited to discuss new web development projects, collaborations, or just say hello.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-teal-400 border border-zinc-700 group-hover:border-teal-400 transition-colors">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-zinc-500">Email</p>
                  <a 
                    href="mailto:duncankipkoech12@gmail.com" 
                    className="text-lg text-white hover:text-teal-400 transition-colors block mt-1"
                  >
                    duncankipkoech12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-teal-400 border border-zinc-700 group-hover:border-teal-400 transition-colors">
                  <FaPhone className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-zinc-500">Phone</p>
                  <a 
                    href="tel:+254769930350" 
                    className="text-lg text-white hover:text-teal-400 transition-colors block mt-1"
                  >
                    +254 769 930 350
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-teal-400 border border-zinc-700 group-hover:border-teal-400 transition-colors">
                  <FaMapMarkedAlt className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-zinc-500">Location</p>
                  <p className="text-lg text-white mt-1">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-10 lg:p-12">
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-zinc-950 border border-zinc-700 focus:border-teal-400 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full bg-zinc-950 border border-zinc-700 focus:border-teal-400 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="w-full bg-zinc-950 border border-zinc-700 focus:border-teal-400 rounded-3xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none transition-all duration-300 resize-y"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-black font-semibold py-5 rounded-2xl flex items-center justify-center gap-3 text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 active:scale-[0.985]"
              >
                Send Message
                <FaPaperPlane className="text-xl" />
              </button>
            </form>

            <p className="text-center text-xs text-zinc-500 mt-8">
              I'll get back to you within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;