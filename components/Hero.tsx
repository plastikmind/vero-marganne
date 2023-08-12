import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'] })


const Hero = () => {
  return (
    <div className='flex flex-col w-full bg-red-100 sm:bg-red-200 md:bg-green-300 lg:bg-blue-400 xl:bg-red-500 2xl:bg-yellow-300'>
      
      {/* FIRST PART */}
      <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
         {/* LEFT */}
         <div className='hidden sm:flex w-full flex-col ml-2 mt-10 sm:mt-0 lg:ml-[4%] xl:ml-[10%]'>
          <div className={caveat.className}>
            <p className='text-5xl sm:text-7xl font-bold'>NEW SEASON</p>
          </div>
            <p className='text-3xl font-medium text-gray-600 mt-3 sm:mt-5'>Scarves</p>
            <div className='mt-5'>
              {/* <button type="button" className="text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium  text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button> */}
                <button type="button" className="text-white bg-[#be1e2d]  font-medium  text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button>
            </div>
        </div>
        {/* PHOTO */}
        <div className='flex flex-col w-full justify-end items-center sm:items-end mt-16 mr-2 lg:mr-[6%] xl:mr-[10%]'>
          <a className='w-[360px] h-[452px] md:w-[480px] md:h-[602.5px] relative'>
          <Image src='/anas.webp' alt='hero' layout='fill' objectFit='fill'/>
          </a>
          <p className=''>Traveller Tree</p>
        </div>
        {/* LEFT MOBILE */}
       <div className='flex sm:hidden w-full flex-col items-center justify-center mt-10 sm:mt-0 sm:ml-40'>
          <div className={caveat.className}>
            <p className='text-5xl sm:text-7xl font-bold'>NEW SEASON</p>
          </div>
            <p className='text-3xl font-medium text-gray-600 mt-3 sm:mt-5'>Scarves</p>
            <div className='mt-5'>
              {/* <button type="button" className="text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium  text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button> */}
                <button type="button" className="text-white bg-[#be1e2d]  font-medium  text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button>
            </div>
        </div>
        
      </div>

       <div className='flex w-full mt-10 sm:mt-20'>
    <div className='flex w-full items-center justify-center flex-col'>
      {/* <div className='flex flex-row'>
      <Image src='/the-three-beauties-beige.webp' alt='hero' width={400} height={400} />
      <Image src='/the-three-beauties-blue.webp' alt='hero' width={400} height={400} />
      <Image src='/the-traveller-tree-grey.webp' alt='hero' width={400} height={400} />

      </div> */}
      <Image src='/the-three-beauties-beige.webp' alt='hero' width={400} height={400} />
      <p>The Traveller Tree</p>

     
    </div>
</div>
    </div>
  )
}

export default Hero