import React, { useEffect, useState } from 'react'
import blogs from '../blog/blog.json'
import SingleCards from './SingleCards'

function PersonalBlogs() {
  const [usuarios, setusuarios ] = useState([])
  const [tablaUsuarios, setTablaUsuarios] = useState([])
  const [busqueda,setBusqueda] = useState("")
  const error = () =>{
    return (
      <div className='mt-16'>Error</div>
    )
  }
  const handleChange = (e) =>{
    setBusqueda(e.target.value)
    searchFilter(e.target.value)
  }
  const searchFilter = (search) =>{
    const searchRes = tablaUsuarios.filter((element) =>{
      if(element.title.toString().toLowerCase().includes(search.toLowerCase())){
          return element
      }
    }
  )
    setusuarios(searchRes)
  }
  const peticionget = () =>{
    setusuarios(blogs)
    setTablaUsuarios(blogs)
  }
  useEffect(() =>{
    peticionget()
  },[])
  return (
    <>
        { /* ------------------------------- SEARCH BAR ------------------------------- */ }
        <div className='pt-48 inter flex flex-col justify-center w-full items-center'>
          <h1 className='text-5xl font-semibold'>Blog & Article</h1>
          <p className='text-[#00000099] px-8 sm:px-32 text-center mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <input 
              type="text" 
              value={busqueda}
              autoFocus
              onChange={handleChange}
              placeholder='Search article, news or recipe...' 
              className='outline-none  md:w-[40%] border border-slate-300 py-4 md:pr-64 px-6 mt-12 rounded-xl '/>          
        </div>
      {/* --------------------------------- RECIPES --------------------------------  */}
      <div className='w-full flex flex-col items-center md:items-start justify-center  px-6 md:px-16'>
        <div className='w-full lg:w-[70%] '>
        {usuarios &&
          usuarios.map (blog =>{
            return (
              <SingleCards
              key={blog.id}
              image={blog.img}
              title={blog.title}
              description={blog.description}
              personImg={blog.personImg}
              personName={blog.personName}
              date={blog.date} />  
            )
          })
        }
        </div>
        <div className='w-full lg:w-[30%] '></div>
      </div>    
    </>
  )
}

export default PersonalBlogs