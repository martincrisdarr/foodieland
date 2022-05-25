import React, {useState} from 'react'
import {FiCircle} from 'react-icons/fi'
import {FaCheckCircle} from 'react-icons/fa'

function Ingredient(props) {
    const [apretado, setApretado] = useState(true)
    const meApretaste = () =>{
      setApretado(!apretado)
      
    }
  return (
    <>
        <div className='flex gap-2 items-center'>
            {(apretado) ? <FiCircle onClick={meApretaste} size='1.2rem' className='cursor-pointer text-slate-400'/> : <FaCheckCircle onClick={meApretaste} size='1.2rem' className='cursor-pointer'/>}
            {(apretado) ? <p className='text-lg'>{props.ingrediente}</p> : <p className='line-through text-lg text-[#00000099] '>{props.ingrediente} </p>}
        </div>
    </>
  )
}

export default Ingredient