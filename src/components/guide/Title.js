import React from 'react'
import footerSplashName from '../../assets/images/homePage/splashMainPage/footerSplashName.png'
import chefGuide from '../../assets/images/guides/chefGuide.png'
function Title() {
  return (
    <>
        <div className='pt-32 flex flex-col justify-center items-center inter'>
            <h1 className='font-semibold text-4xl md:text-5xl mt-12 text-center px-2'>Full Guide to Becoming a Professional Chef</h1>
            <div className='flex gap-4 items-center mt-10'>
                <img src={footerSplashName} />
                <div className=' flex items-center'>
                     <p className='inter font-semibold border-r-2 pr-6'>Jonh Smith</p>
                    <p className='inter font-medium text-[#00000099] text-sm pl-6'>15 March 2022</p>
                </div>
            </div>
            <p className='px-8 lg:px-52 text-[#00000099] text-center mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
            <div className='mt-16 w-full px-6 h-[550px] '>
                <img src={chefGuide} alt="chef guides section" className='rounded-3xl w-full h-full object-cover' />
            </div>
        </div>
    </>
  )
}

export default Title