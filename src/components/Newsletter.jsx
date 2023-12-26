import React from 'react'

const Newsletter = () => {
  return (
    <div className=' w-full text-white px-6'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 py-8'>
            <div className='lg:col-span-2 '>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your work ?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
                    <button className='bg-[#00df9a] rounded-md w-[200px] font-medium ml-4 my-6 py-3 px-6 text-black '>Notify Me</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Newsletter