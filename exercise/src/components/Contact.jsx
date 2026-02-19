import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-[#f4f3f2] text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-black text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-black mb-4'>Let's Get In Touch</h3>
            <p className='text-black'>I'm open to discussing web development prjects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-black mr-2'></FaEnvelope>
                 <span className='text-black'>duncankipkoech12@gmail.com</span>
                
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-black -400 mr-2'></FaPhone>
                <span className='text-black'>+254 769 930 350</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-black mr-2'></FaMapMarkedAlt>
                <span className='text-black'>Nairobi, Kenya</span>
            </div>
          </div>
          <div className='flex-1 w-full bg-[#9aafc9] w-full'>
            <form className='space-y-4 pt-4'>
                <div className='px-3'>
                    <label htmlFor="name" className='block mb-2 text-black'>Your Name</label>
                    <input type="text" 
                    // className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    // focus:border-green-400'
                    className='bg-white w-full p-2 rounded border-gray-600 focus:outline-none
                     focus:border-green-400 text-black'
                    
                    placeholder='Enter You Name'/>
                </div>
                <div  className='px-3'>
                    <label htmlFor="emial" className='block mb-2 text-black' required>Email</label>
                    <input type="text" 
                    // className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    // focus:border-green-400'
                    className='bg-white w-full p-2 rounded border-gray-600 focus:outline-none
                     focus:border-green-400 text-black'
                    placeholder='Enter You Email' />
                </div>
                <div  className='px-3'>
                    <label htmlFor="message" className='block mb-2 text-black' >Message</label>
                    <textarea type="text" 
                    // className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    // focus:border-green-400'
                    className='bg-white w-full p-2 rounded border-gray-600 focus:outline-none
                     focus:border-green-400 text-black'
                    rows="5"
                    placeholder='Enter You Message'/>
                </div>
                <div class="flex items-center justify-center">
                   <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-2 mb-4 rounded">

                    SEND
                   </button>
</div>

                {/* <button className='bg-black text-white hidden md:inline items-centre justify-centre mb-5
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button> */}
            </form>
          </div>
        </div>
      </div>
  
    </div>
    
  )
}

export default Contact