import React from 'react'
import { image1, image2, image3 ,herodesktop, heromobile } from '../assets'


const Hero = () => {

  return (
    <nav className="w-full flex py-8 justify-center items-center ">
      <div className='md:w-[70%] w-[100%] flex justify-betweens items-center'>

        <div className='flex flex-col md:flex-row'>
          <div className='px-4'>
            <img src={`${heromobile}`} alt='Hero Image' className='w-[100%] h-[100%]' />
          </div>
          <div className='flex flex-col p-4 md:flex-row'>
            <h1 className='text-5xl font-extrabold text-primary mt-5 mb-6 md:mb-0'>The Bright Future of Web 3.0?</h1>
            <div className='flex flex-col justify-start'>
              <p className='font-inter text-lg text-gray'>We dive into the next evolution of the web that claims to put the power
                of platforms back to the hands of the people. But is it really fulfilling the promise?
              </p>
              <button className='my-8 w-[60%] bg-secondary text-white text-xl font-bold uppercase p-5'>Read More</button>
            </div>
          </div>
        </div>

        <div></div>

      </div>
    </nav>
  );
};

export default Hero;
