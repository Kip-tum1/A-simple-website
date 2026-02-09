// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <nav className='bg-[#3b6264] text-white px-8 md:px-16 lg:px-24'>
//         <div className='container py-2 hidden sm:flex justify-center md:justify-between items-center'>
//             <div className='text-2xl font-bold hidden md:inline'>DUNCAN</div>
//             <div className='space-x-6 text-white'>
//                 <a href="#home" className='text-white hover:text-gray-400'>Home</a>
//                 <a href="#about" className='text-white hover:text-gray-400'>About Me</a>
//                 <a href="#service" className='text-white hover:text-gray-400'>Services</a>
//                 <a href="#contact" className='text-blue-600 hover:text-gray-400'>Contact</a>
//             </div>
//             <button className='bg-black text-black hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
//         </div>
//         {/* RESPONSIVENESS IN MOBILE */}
//         <div  className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-gray-100 space-y-2 pb-3`}>                      

//             <div className='text-2xl font-bold md:inline'>DUNCAN</div>
//             <button onClick={() => setIsOpen(!isOpen)}>Open</button>
            
//                 <a href="#home" className='block text-white hover:text-gray-400'>Home</a>
//                 <a href="#about" className='block text-white hover:text-gray-400'>About Me</a>
//                 <a href="#service" className='block text-white hover:text-gray-400'>Services</a>
//                 <a href="#contact" className='block text-blue-600 hover:text-gray-400'>Contact</a>
            
//             <button className='bg-black text-black hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
//         </div>
//     </nav>
//   )
// }

// export default Navbar;

import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3b6264] text-white px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Brand / Logo */}
        <div className="text-2xl font-bold">DUNCAN</div>

        {/* Desktop Menu - hidden on mobile, visible on md+ */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300 transition-colors">
            About Me
          </a>
          <a href="#service" className="hover:text-gray-300 transition-colors">
            Services
          </a>
          <a
            href="#contact"
            className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transform transition-transform duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Button - visible only on mobile */}
        <button
          className="bg-[#3b6264] md:hidden focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown - appears below when open */}
      <div
        className={`
          md:hidden 
          bg-gray-800 
          overflow-hidden 
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}
        `}
      >
        <div className="flex flex-col space-y-4 px-6 text-center">
          <a
            href="#home"
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#service"
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transform transition-transform duration-300 mx-auto w-fit"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;