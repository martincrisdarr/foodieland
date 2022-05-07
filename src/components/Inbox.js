import React, {useState} from 'react'
import salad from '../assets/images/footer/salad.png'
import condiments from '../assets/images/footer/condiments.png'
function Inbox() {
  const [datos, setDatos] = useState({email: ''})
  const handleInputChange = (e) =>{
    setDatos({
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e) =>{
      e.preventDefault()
      e.target.reset() 
      console.log(datos)
    }
  return (
    
   
    <>
        <div className='w-full lg:w-[85%] mt-32 rounded-3xl bg-[#E7F9FD] inter flex flex-col mx-auto items-center justify-center py-12 px-6 md:p-16 gap-8 '>
            <h1 className='text-4xl lg:text-5xl font-semibold text-center '>Deliciousness to your inbox</h1>
            <p className='text-[#00000099] px-8 lg:px-32 text-center '>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
            <form onSubmit={handleSubmit} className='w-full flex items-center gap-2 justify-center'>
                <input type="email" 
                placeholder='Your email address...'
                className='mt-6 p-6 outline-none w-[50%] font-semibold rounded-xl '
                name='email'
                onChange={handleInputChange}
                ></input>
                <button className='h-full py-6 px-6 md:px-12 mt-6 bg-black rounded-xl text-white font-semibold hover:bg-zinc-900' type='submit'>Suscribe</button>
            </form>
            
        </div>
    </>
  )
}

export default Inbox