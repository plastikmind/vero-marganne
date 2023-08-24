import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const VeroSarongs = () => {
  return (
    


<>
<div className='flex flex-col w-full'>
      {/* FIRST PART */}
      <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
         {/* LEFT */}
         <div className='hidden sm:flex w-full flex-col ml-2 mt-10 sm:mt-0 lg:ml-[4%] xl:ml-[10%] min-[1920px]:ml-[14%]'>
          {/* <div className={roboto.className}> */}
          <div >
            <p className='text-3xl sm:text-5xl 2xl:text-6xl min-[1920px]:text-6xl font-thin'>Perfect Sarongs</p>
          </div>
            <p className='text-2xl min-[1920px]:text-3xl text-gray-600 mt-3 sm:mt-5 font-thin'>Discover<br/>Unique<br/>Designs.</p>
            <div className='mt-5'>
              {/* <button type="button" className="text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium  text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button> */}
              <Link href='https://shop.veromarganne.com/product-category/sarongs/'>
              <button type="button" className="text-black font-light text-md text-center">SHOP NOW</button>
              </Link>
            </div>
        </div>
        {/* PHOTO */}
        <div className='flex flex-col w-full justify-end items-center sm:items-end mt-16 mr-2 lg:mr-[6%] xl:mr-[10%] min-[1920px]:mr-[15%]'>
          <Link href='https://shop.veromarganne.com/product-category/sarongs/' className='w-[302.4px] h-[403.2px] md:w-[432px] md:h-[576px] 2xl:w-[604.8px] 2xl:h-[806.4px] relative'>
          <Image src='/beautiful-sarongs.webp' alt='Sarongs' layout='fill' objectFit='fill'/>
          </Link>
        </div>
        {/* LEFT MOBILE */}
       <div className='flex sm:hidden w-full flex-col items-center justify-center mt-10 sm:mt-0 sm:ml-40'>
          <div>
            <p className='text-3xl sm:text-4xl font-thin'>Perfect Sarongs</p>
          </div>
            <p className='text-2xl text-gray-600 font-thin mt-3 sm:mt-5'>Discover<br/>Unique<br/>Designs.</p>
            <div className='mt-5'>
              {/* <button type="button" className="text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium  text-sm px-16 py-4 text-center mr-2 mb-2">SHOP NOW</button> */}
            <Link href='https://shop.veromarganne.com/product-category/sarongs/'>
            <button type="button" className="text-black font-medium  text-sm px-16 py-2 text-center mr-2 mb-2">SHOP NOW</button>
            </Link>
            </div>
        </div>
        
      </div>
    
    </div>

</>
  )
}

export default VeroSarongs