import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1>Manage Data Analytics Centrally</h1>
                <p>
                Utilisez le text generator online pour créer votre propre texte! Le générateur de texte Lorem Ipsum crée un texte fictif, faux, causal ou fictif.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Analytics