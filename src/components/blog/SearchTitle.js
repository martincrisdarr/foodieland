import React from 'react'

function SearchTitle() {
    const handleSubmit = (e) =>{
        e.preventDefault()
        e.target.reset()
    }
  return (
      <>
      <div className='pt-48 inter flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-semibold'>Blog & Article</h1>
        <p className='text-[#00000099] px-8 sm:px-32 text-center mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        <form
        className='mt-16 flex gap-2'
        onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Search article, news or recipe...' 
                className='outline-none border border-slate-300 py-4 md:pr-64 px-6 rounded-xl '/>
                <button type='submit' className='py-4 px-8 bg-black rounded-xl text-white font-semibold hover:bg-gray-900'>Search</button>
        </form>
      </div>
        
      </>
  )
}

export default SearchTitle