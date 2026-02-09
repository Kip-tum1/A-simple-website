import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3b6264] text-white px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex justify-between items-center">

        <div className="text-2xl font-bold">DUNCAN</div>


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