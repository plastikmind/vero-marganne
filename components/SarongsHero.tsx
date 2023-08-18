import React from 'react'
import Image from 'next/image'
import Link from "next/link";

import { Roboto } from 'next/font/google'

const roboto = Roboto( 
  {
    subsets: ['latin'],
    weight: ['700'],
    style: ['italic', 'normal']
  }
)


const SarongsHero = () => {
  return (
<div className='flex w-full mt-48 flex-col'>
  <div className='flex w-full flex-col'>
    <div className='w-[363px] h-[484px] md:w-[440px] md:h-[587px] lg:w-[600px] lg:h-[800px] xl:w-[660px] xl:h-[880px] 2xl:w-[869px] 2xl:h-[1155px] relative'>
      <Image src='/beautiful-sarongs.webp' alt='hero' layout='fill' objectFit='fill' />
      <p className='absolute left-[4%] sm:left-[70%] md:left-[75%] text-6xl sm:text-8xl lg:text-9xl xl:text-[142px] 2xl:text-[162px] min-[1920px]:text-[192px] -top-[14%] sm:top-[37%] text-[#be1e2d] font-semibold'><span className={roboto.className}>Perfect<br/>Sarongs</span></p>

<p className='hidden sm:flex absolute  -right-1 sm:-right-[40%] lg:-right-[30%] xl:-right-[80%] 2xl:-right-[65%] min-[1920px]:-right-[95%] sm:text-2xl lg:text-3xl top-[12%] lg:top-[18%] xl:top-[21%] text-black font-medium'>Discover<br/>Unique<br/>Designs.</p>



<div className='hidden mt-5 sm:flex sm:absolute sm:-right-[75%] md:-right-[70%] bottom-2 md:bottom-10 lg:bottom-20 xl:bottom-32 lg:md:-right-[60%] min-[1920px]:-right-[80%]'>

        <Link href='https://shop.veromarganne.com/product-category/sarongs/'>
          <button type="button" className="text-white bg-[#be1e2d] font-medium text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button>
          </Link>
      </div>
    </div>
  </div>  
  <div className='flex items-center justify-center'>
 <Link href='https://shop.veromarganne.com/product-category/sarongs/'>
 <button type="button" className="block mt-10 sm:hidden text-white bg-[#be1e2d] font-medium text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button>
 </Link>

  </div>
</div>

  )
}

export default SarongsHero