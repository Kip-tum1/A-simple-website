
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-center">Duncan</h3>
            <p className="text-[3b6264] text-center">
             Skilled in crafting elegant static websites and modern web applications while following current best coding practices.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                // className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                // focus:outline-none focus:border-green-400"
                 className='bg-blue-100 text-black w-full p-2 rounded border-gray-600 focus:outline-none
                     focus:border-green-400 text-black'
              />
              <button
                type="submit"
                // className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                // py-2 rounded-r-lg"
                className="bg-white text-black mx-4 'hover:bg-black hover:text-white'"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-black">
            &copy; {new Date().getFullYear()} © KiptumDun. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" // Source - https://stackoverflow.com/a/63883723
// Posted by Luke Storry, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-07, License - CC BY-SA 4.0

         className="underline text-black hover:text-blue-800 visited:text-purple-600"
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