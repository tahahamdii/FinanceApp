import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white'>
            <h1 className='w-ful text-3xl font-bold text-[#00df9a]'>TAHTAH.</h1>
            <ul className='flex hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Blog</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>

            </ul>
            <div>
                <AiOutlineMenu />
            </div>
            <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]'>
                <h1 className='w-ful text-3xl font-bold text-[#00df9a] m-4'>TAHTAH.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-100'>Home</li>
                    <li className='p-4 border-b border-gray-100'>Blog</li>
                    <li className='p-4 border-b border-gray-100'>Projects</li>
                    <li className='p-4 border-b border-gray-100'>About</li>
                    <li className='p-4 '>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar