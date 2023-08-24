import React from 'react'
import Image from 'next/image'
import Link from "next/link";

import { Roboto } from 'next/font/google'

const roboto = Roboto( 
  {
    subsets: ['latin'],
    weight: ['500'],
    style: ['italic', 'normal']
  }
)

const Hero = () => {
  return (
    // bg-red-100 sm:bg-red-200 md:bg-green-300 lg:bg-blue-400 xl:bg-red-500 2xl:bg-yellow-300 min-[1920px]:bg-green-400
    <div className='flex flex-col w-full'>
      {/* FIRST PART */}
      <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
         {/* LEFT */}
         <div className='hidden sm:flex w-full flex-col ml-2 mt-10 sm:mt-0 lg:ml-[4%] xl:ml-[10%] min-[1920px]:ml-[14%]'>
          {/* <div className={roboto.className}> */}
          <div className='flex'>
          <span className='hidden lg:block w-[181px] h-[437px] animate-turning absolute left-[30%] lg:left-[33%] top-3/4'>
              <Image src='/monkey.png' alt='Traveller Tree Scarves' layout='fill' objectFit='fill'/>
            </span>
            <p className='text-3xl sm:text-5xl 2xl:text-6xl min-[1920px]:text-6xl font-thin'>NEW SEASON</p>
          </div>
            <p className='text-2xl min-[1920px]:text-3xl text-gray-600 mt-3 sm:mt-5 font-thin'>Scarves</p>
            <div className='mt-5'>
              {/* <button type="button" className="text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium  text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button> */}
              <Link href='https://shop.veromarganne.com/product-category/scarves/'>
              <button type="button" className="text-black font-light text-md text-center">SHOP NOW</button>
              </Link>
            </div>
        </div>
        {/* PHOTO */}
        <div className='flex flex-col w-full justify-end items-center sm:items-end mt-16 mr-2 lg:mr-[6%] xl:mr-[10%] min-[1920px]:mr-[15%]'>
          <Link href='https://shop.veromarganne.com/product/the-traveller-tree-orange/' className=' -z-20 w-[360px] h-[452px] md:w-[480px] md:h-[602.5px] 2xl:w-[637px] 2xl:h-[800px] relative'>
          <Image src='/anas.webp' alt='Traveller Tree Scarves' layout='fill' objectFit='fill'/>
          </Link>
          <p className='italic'>Traveller Tree</p>
        </div>
        {/* LEFT MOBILE */}
       <div className='flex sm:hidden w-full flex-col items-center justify-center mt-10 mb-20'>
          <div>
          <span className='w-[144.4px] h-[349.6px] animate-turning absolute left-0 -z-10 top-[95%]'>
              <Image src='/monkey.png' alt='Traveller Tree Scarves' layout='fill' objectFit='fill'/>
            </span>
            <p className='text-3xl sm:text-4xl font-thin'>NEW SEASON</p>
          </div>
            <p className='text-2xl text-gray-600 font-thin mt-3 sm:mt-5'>Scarves</p>
            <div className='mt-5'>
              {/* <button type="button" className="text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium  text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button> */}
            <Link href='https://shop.veromarganne.com/product-category/scarves/'>
            <button type="button" className="text-black font-medium  text-sm px-16 py-2 text-center mr-2 mb-2">SHOP NOW</button>
            </Link>
            </div>
        </div>
        
      </div>

       <div className='grid grid-cols-2 md:grid-cols-4 w-full mt-16 sm:mt-20 lg:mt-32 xl:mt-40 overflow-hidden place-items-center'>
       <Link href='https://shop.veromarganne.com/product/the-three-beauties-beige/'>
       <div className='flex flex-col items-center'> 
        <span className='w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 relative xl:h-64 xl:w-64 2xl:h-72 2xl:w-72'>
        <Image src='/the-three-beauties-beige.webp' alt='hero'  layout='fill' objectFit='fill' />
        </span>
        <p className='italic mb-8 mt-2 text-center'>Three Beauties <br/>Beige</p>
        </div>
        </Link>

       <Link href='https://shop.veromarganne.com/product/the-three-beauties-blue/'>

        <div className='flex flex-col items-center'> 
        <span className='w-32 h-32 relative sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:h-64 xl:w-64 2xl:h-72 2xl:w-72'>
        <Image src='/the-three-beauties-blue.webp' alt='hero'  layout='fill' objectFit='fill' />
        </span>
        <p className='italic mb-8 mt-2 text-center'>Three Beauties <br/>Blue</p>
        </div>
        </Link>
        
       <Link href='https://shop.veromarganne.com/product/the-traveller-tree-grey/'>
        <div className='flex flex-col items-center'> 
        <span className='w-32 h-32 relative sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:h-64 xl:w-64 2xl:h-72 2xl:w-72'>
        <Image src='/the-traveller-tree-grey.webp' alt='hero'  layout='fill' objectFit='fill' />
        </span>
        <p className='italic mb-8 mt-2 text-center'>Traveller Tree <br/>Grey</p>
        </div>
        </Link>
        <Link href='https://shop.veromarganne.com/product/the-traveller-tree-orange/'>

        <div className='flex flex-col items-center'> 
        <span className='w-32 h-32 relative sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:h-64 xl:w-64 2xl:h-72 2xl:w-72'>
        <Image src='/the-traveller-tree-orange.webp' alt='hero'  layout='fill' objectFit='fill' />
        </span>
        <p className='italic mb-8 mt-2 text-center'>Traveller Tree<br/>Orange</p>
        </div>
        </Link>

       </div>
    </div>
  )
}

export default Hero

