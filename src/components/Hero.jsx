import React from 'react'
import { image1, image2, image3 ,herodesktop, heromobile } from '../assets'


const Hero = () => {

  return (
    <nav className="w-full flex py-8 px-4 justify-center items-center ">
      <div className='md:w-[80%] w-[100%] flex flex-col md:flex-row items-center'>

        <div className='flex flex-col md:mr-5'>
          <div className=''>
            <img src={`${heromobile}`} alt='Hero Image' className='w-[100%] h-[100%]' />
          </div>
          <div className='flex flex-col py-4 md:flex-row justify-between'>
            <h1 className='text-5xl md:text-5xl md:leading-tight font-extrabold text-primary mt-5 mb-6 md:mb-0'>
              The Bright <br className='hidden md:block' /> 
              Future of <br className='hidden md:block' />
              Web 3.0?
              </h1>
            <div className='flex flex-col justify-start md:w-[50%]'>
              <p className='font-inter text-lg md:text-sm text-gray'>We dive into the next evolution of the web that claims to put the power
                of platforms back to the hands of the people. But is it really fulfilling the promise?
              </p>
              <button className='my-8 w-[60%] md:w-[50%] text-xl md:text-sm bg-secondary tracking-widest text-white  font-bold uppercase md:p-4 p-5'>Read More</button>
            </div>
          </div>
        </div>

        <div className='bg-primary mt-7 w-full p-5'>
          <h1 className='text-third text-3xl font-inter font-extrabold'>
            New
          </h1>
          <div className='my-8 border-b border-white py-6'>
            <h2 className='mb-6 text-white text-2xl font-bold'>
              Hydrogen Vs Electric Cars
            </h2>
            <p className='text-dimWhite font-inter text-lg'>Will hydrogen powered cars ever catch up with the EVs?</p>
          </div>
          <div className='my-8 border-b border-white py-6'>
            <h2 className='mb-6 text-white text-2xl font-bold'>
              The Downside of AI Artistry
            </h2>
            <p className='text-dimWhite font-inter text-lg'>What are the possible adverse effects of on
            demand AI image generation</p>
          </div>
          <div className='my-8 py-6'>
            <h2 className='mb-6 text-white text-2xl font-bold'>
              Is VC Funding drying up?
            </h2>
            <p className='text-dimWhite font-inter text-lg'>Private funding by VC firsm is down 50% YOY. We take
            a look at what that means.</p>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Hero;
