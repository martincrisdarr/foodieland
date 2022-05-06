import React, { useState } from 'react'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
import {FcMenu} from 'react-icons/fc'
import { ImCross } from 'react-icons/im'
function Navbar() {
    const [menu, setMenu] = useState(false)
    const menuClick = () =>{
        setMenu(!menu)
    }
  return ( 
    <>
        <div className='w-full z-50 flex justify-between bg-white items-center px-16 fixed h-[110px] border-b border-slate-200'>
            <h1 className='lobster text-3xl'>Foodieland<span className='text-[#FF7426] '>.</span></h1>
            <ul className='hidden lg:flex gap-10 inter font-medium'>
                <li>Home</li>
                <li>Recipes</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>About us</li>
            </ul>
            <div className='hidden lg:flex gap-10 text-xl'>
                <FaFacebookF className='cursor-pointer' />
                <FaTwitter className='cursor-pointer'  />
                <FaInstagram className='cursor-pointer' />
            </div>
            <FcMenu onClick={menuClick} className='text-3xl  mt-2 flex lg:hidden cursor-pointer'/>
        </div>
            <div className={!menu ? 'hidden' : 'absolute w-full h-screen  flex items-center justify-center  bg-black'}>
                <ul className='lobster text-6xl flex flex-col gap-12 text-white text-center'>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>About us</li>
                </ul>
                <ImCross onClick={menuClick} className='text-white absolute top-12 right-16 text-3xl cursor-pointer'/>
            </div>
    </>
  )
}

export default Navbar