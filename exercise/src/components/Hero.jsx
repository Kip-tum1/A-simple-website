
// import HeroImage from '../assets/ph'
import HeroImage from '../assets/photo.png';

const Hero = () => {
  return (
    <div className='bg-[#f4f3f2] text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold text-black'>
            I'm {" "}
            <span className='text-black'>Duncan Kiptum</span>
            <span className='text-black'> Frontend Developer</span>
            
        </h1>
        <p className='mt-4 text-lg text-black'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='m-8'>
          {/* <a href='contact' className='bg-black tect-white px-4 py-2 rounded-xl m-4 transform transition-all duration-300
      no-underline hover:bg-gray-800 hover:text-gray-200 hover:scale-10'>
            Contact
          </a> */}

            <a
    href="#contact"
    className="
      inline-block bg-black text-white px-3 py-2 rounded-xl 
      hover:bg-gray-800 hover:text-gray-200 hover:scale-105 
      transform transition-all duration-300
      no-underline
    "
  >
    Contact Me
  </a>
          <button className='className="
      inline-block bg-black text-black ml-3 px-3 py-2 rounded-xl 
      hover:bg-gray-800 hover:text-black hover:scale-105 
      transform transition-all duration-300
      no-underline
    "'>
            Resume
          </button>
         
        </div>
    </div>
  )
}

export default Hero;