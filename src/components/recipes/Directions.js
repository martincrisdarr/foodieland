import React from 'react'
import cocinera from '../../assets/images/recipesSection/cocinera.png'
function Directions() {
  return (
    <>
       <div className='px-6 lg:px-16 w-full lg:w-[70%] inter mt-16 '>
       <h1 className='text-3xl font-semibold'>Directions</h1>
        <div className='mt-8 flex flex-col gap-8'>
            <h1 className='text-xl font-semibold'>1. Lorem ipsum dolor sit amet </h1>
            <p className='text-[#00000099] '>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <img src={cocinera} alt="cocinera" />
            <p className='text-[#00000099] '>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <div className='mt-8 flex flex-col gap-8'>
            <h1 className='text-xl font-semibold'>2. Lorem ipsum dolor sit amet</h1>
            <p className='text-[#00000099] '>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <div className='mt-8 flex flex-col gap-8'>
            <h1 className='text-xl font-semibold'>3. Lorem ipsum dolor sit amet  </h1>
            <p className='text-[#00000099] '>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
       </div>
    </>
  )
}

export default Directions