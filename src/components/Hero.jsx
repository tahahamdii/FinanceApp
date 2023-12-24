import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING TOGETHER</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>HOUSE MUSIC IS STILL KICKING</h1>
            <div>
                <p className='md:text-3xl sm:text-2xl text-xl '>Take a deep breath and Enjoy</p>
                <TypeAnimation sequence={['We make Money',1000,
            'We make Love', 1000,
            'We make what we want',4000
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}

            />
            </div>
        </div>
    </div>
  )
}

export default Hero