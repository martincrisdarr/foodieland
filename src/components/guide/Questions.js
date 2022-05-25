import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
import cocinera from '../../assets/images/recipesSection/cocinera.png'
function Questions() {
  return (
    <>
      <div className='px-6 md:px-16 inter flex flex-col mt-24 w-full'>
        {/* FIRST QUESTIONS */}
        <div className='flex w-full' >
          <div className='w-full md:w-[90%] '>
            <h1 className='font-semibold text-2xl'>How did you start out in the food industry?</h1>
            <p className='text-[#00000099] md:pr-48 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className='w-[10%] flex flex-col items-center gap-8 hidden md:flex '>
              <p className='font-semibold text-sm'>SHARE THIS ON:</p>
              <FaFacebookF size='1.5rem' className='cursor-pointer'/>
              <FaTwitter size='1.5rem' className='cursor-pointer'/>
              <FaInstagram size='1.5rem' className='cursor-pointer'/>
          </div>
        </div>
        <div className='mt-16'>
          <div className='w-[90%] '>
            <h1 className='font-semibold text-2xl'>What do you like most about your job?</h1>
            <p className='text-[#00000099] md:pr-48 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
        </div>
        {/* IMG QUESTION */}
        <div className='mt-16 w-full md:w-[90%]'>
          <h1 className='font-semibold text-2xl'>Do you cook at home on your days off?</h1>
          <img src={cocinera} alt="" className='mt-8 w-full' />
          <p className='text-[#00000099] md:pr-52 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          <h1 className='font-semibold text-2xl mt-16'>What would your advice be to young people looking to get their foot in the door?</h1>
          <p className='text-[#00000099] md:pr-52 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
        </div>
        <h1 className='mt-16 border-b-2 border-t-2 py-16 w-full md:w-[80%] text-2xl md:text-4xl interItalic guideItalicTextBackground font-semibold px-8 '>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</h1>
        <div>
          <h1 className='font-semibold text-2xl md:pr-64 mt-16'>What is the biggest misconception that people have about being a professional chef?</h1>
          <p className='text-[#00000099] md:pr-64 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
        </div>
      </div>
    </>
  )
}

export default Questions