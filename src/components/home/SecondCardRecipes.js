import React, { useState } from 'react'
import {BsClockFill, BsFillHeartFill} from 'react-icons/bs'
import {ImSpoonKnife} from 'react-icons/im'
function SecondCardRecipes(props) {
    const [liked, setLiked] = useState (true)
    const likedClick = () =>{
        setLiked(!liked)
    }
  return (
    <>
         <div  className='p-4 rounded-3xl mx-auto grid shadow-md '>
            <img src={props.img} className='rounded-3xl  object-cover w-full'/>
            <h1 className='inter font-semibold text-lg mt-4'>{props.title} </h1>
            <div className='flex gap-4 mt-4 inter mb-4 '>
                <div className='flex gap-2 items-center'>
                    <BsClockFill />
                    <p className='text-[#00000099]'>{props.minutes} </p>
                </div>
                <div className='flex gap-2 items-center'>
                    <ImSpoonKnife/>
                    <p className='text-[#00000099]'>{props.type} </p>
                </div>
                        
            </div>
            <div className='bg-white flex items-center justify-center cursor-pointer absolute rounded-[50%] mt-4 ml-4 p-2 '
            onClick={likedClick}>
                <BsFillHeartFill className={liked ? 'text-[#DBE2E5] text-xl' : 'text-[#FF6363] text-xl'}  />
            </div>
        </div>
    </>
  )
}

export default SecondCardRecipes