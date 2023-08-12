import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex items-center justify-center'>
       <div className=''>
       <Image src='/vero-logo-yellow.png' width={150} height={150} alt='logo'  className='mx-10 mt-5'/>
       </div>
    </div>
  )
}

export default Header