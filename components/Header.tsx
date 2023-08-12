import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
       <a className='relative w-[160px] h-[197px] sm:w-[250px] sm:h-[308px]  mt-5'>
       <Image src='/vero-logo-yellow.png'  alt='logo' layout='fill' objectFit='fill' />
       </a>
       {/* Menu */}
       <div>
          <ul className='flex items-center justify-center mt-5 lg:mt-10 text-[#be1e2d] text-lg sm:text-2xl lg:text-4xl font-extralight'>
            <li className='mr-2 sm:mr-4 lg:mr-8 xl:mr-12'>Home</li>
            <li className='mr-2 sm:mr-4 lg:mr-8 xl:mr-12'>Shop</li>
            <li className='mr-2 sm:mr-4 lg:mr-8 xl:mr-12'>Collections</li>
            <li className='mr-2 sm:mr-4 lg:mr-8 xl:mr-12'>About</li>
          </ul>
       </div>
    </div>
  )
}

export default Header