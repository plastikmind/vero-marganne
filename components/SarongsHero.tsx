import React from 'react'
import Image from 'next/image'

const SarongsHero = () => {
  return (
<div className='flex w-full mt-48'>
  <div className='flex w-full flex-col'>
    <a className='w-[363px] h-[484px] md:w-[440px] md:h-[587px] lg:w-[600px] lg:h-[800px] xl:w-[660px] xl:h-[880px] relative'>
      <Image src='/beautiful-sarongs.webp' alt='hero' layout='fill' objectFit='fill' />
      <p className='absolute -right-1 sm:-right-[60%] lg:-right-[50%] text-6xl sm:text-8xl lg:text-9xl xl:text-[142px] top-[44%] sm:top-[37%] text-[#be1e2d] font-semibold'>Perfect<br/>Sarongs</p>
      <p className='hidden sm:flex absolute -right-1 sm:-right-[40%] lg:-right-[30%] xl:-right-[70%] sm:text-2xl lg:text-3xl top-[12%] lg:top-[18%] xl:top-[21%] text-black font-medium'>Discover<br/>Unique<br/>Designs.</p>
      {/* BUTTON */}
      <div className='mt-5 absolute -right-[75%] md:-right-[70%] bottom-2 md:bottom-10 lg:bottom-20 xl:bottom-32 lg:md:-right-[60%]'>
              {/* <button type="button" className="text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium  text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button> */}
                <button type="button" className="text-white bg-[#be1e2d] font-medium text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button>
            </div>
    </a>
  </div>  
</div>

  )
}

export default SarongsHero