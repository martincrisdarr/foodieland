import React, { useState } from 'react'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
import {FcMenu} from 'react-icons/fc'
import { ImCross } from 'react-icons/im'
import {Link} from 'react-router-dom'
function Navbar() {
    const [menu, setMenu] = useState(false)
    const menuClick = () =>{
        setMenu(!menu)
    }
  return ( 
    <>
        <div className='w-full z-40 flex justify-between bg-white items-center px-16 fixed h-[110px] border-b border-slate-200'>
          <Link to='/'><h1 className='lobster text-3xl'>Foodieland<span className='text-[#FF7426] '>.</span></h1></Link>
          <ul className='hidden lg:flex gap-10 inter font-medium'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/recipes'><li>Recipes</li></Link>
            <Link to='/blog'><li>Blog</li></Link>
            <Link to='/guide'><li>Guide</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
          </ul>
          <div className='hidden lg:flex gap-10 text-xl'>
            <FaFacebookF className='cursor-pointer' />
            <FaTwitter className='cursor-pointer'  />
            <FaInstagram className='cursor-pointer' />
          </div>
          <FcMenu onClick={menuClick} className='text-3xl  mt-2 flex lg:hidden cursor-pointer'/>
        </div>
        <div className={!menu ? 'hidden' : 'z-50 fixed opacity-95 transition duration-700 ease-in w-full h-screen  flex items-center justify-center  bg-black'}>
          <ul className='lobster text-6xl flex flex-col gap-12 text-white text-center'>
            <Link to='/'><li onClick={menuClick}>Home</li></Link>
            <Link to='/recipes'><li onClick={menuClick}>Recipes</li></Link>
            <Link to='/blog'><li onClick={menuClick}>Blog</li></Link>
            <Link to='/guide'><li onClick={menuClick}>Guide</li></Link>
            <Link to='/contact'><li onClick={menuClick}>Contact</li></Link>
          </ul>
          <ImCross onClick={menuClick} className='text-white absolute top-12 right-16 text-3xl cursor-pointer'/>
        </div>
            
    </>
  )
}

export default Navbar