
// import HeroImage from '../assets/ph'
import HeroImage from '../assets/photo.png';

const Hero = () => {
  return (
    <div className='bg-[#3b6264] text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-black'>Duncan Kiptum</span>
            , Frontend Developer
        </h1>
        <p className='mt-4 text-lg text-white'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <a href='#contact'
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-xl'>Contact With Me</a>
            {/* <a
            href="#contact"
            className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transform transition-transform duration-300"
          >
            Contact Me
          </a> */}
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-xl'>Resume</button>
        </div>

    </div>
  )
}

export default Hero;