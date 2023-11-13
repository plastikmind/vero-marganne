import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20 md:mt-40 mb-12'>
       <Link href='/' className='relative w-[160px] h-[197px] sm:w-[250px] sm:h-[308px] mt-5'>
       <Image src='/vero-logo-yellow.png'  alt='logo' layout='fill' objectFit='fill' />
       </Link>
       <Link href='https://studiomuz.com' target='blank'>
       <p className='pt-8 text-lg items-center text-center font-extralight'>Made with love by <span className='text-3xl'>🍌</span> </p>
       
       </Link>
    </div>
  )
}

export default Footer