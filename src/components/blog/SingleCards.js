import React from 'react'

function SingleCards({id, image, title, description, personImg, personName, date}) {
  return (
    <>
      <div className='flex flex-col md:flex-row h-full lg:h-48 w-full gap-8 mt-12 inter' >
        <img src={image} alt="blogPersonal" className='rounded-xl object-cover' />
        <div className='h-full flex flex-col justify-around gap-6 '>
          <h1 className='font-semibold text-xl  '>{title}</h1>
          <p className='text-[#00000099]'>{description}</p>
          <div className='flex items-center '>
            <img src={personImg} alt="" />
            <p className='font-semibold border-r-2 border-slate-200 pr-6 pl-2 h-6'>{personName} </p>
            <p className='text-[#00000099] pl-6'>{date} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleCards