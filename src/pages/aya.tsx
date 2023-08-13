import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from "next/link";



const Aya = () => {
  return (
   
<>
<Header />
<div className='flex items-center justify-center w-full'>
<p className='mt-10 md:mt-20 text-xl font-extralight sm:text-4xl text-center'>Vero Marganne presents AYA collection</p>
</div>
<section className="flex flex-col w-full overflow-hidden xl:flex-row sm:mx-auto">
    <div className="flex justify-end p-8 xl:py-32 xl:px-16 xl:pl-10 xl:w-2/3">
        <div className="flex flex-col items-start justify-center w-full xl:max-w-2xl">
          <p className='text-3xl p-5 font-extralight'>AYA</p>
            <p className="p-5 mb-5 text-gray-600 xl:text-xl">
            AYA is designed by a Belgian stylist and illustrator Véronique Marganne in an artistic collaboration with a Nigerian architect and product designer Akai Stephen Simples.<br/><br/>

Through their interactions, they invented a new creative language inspired by their respective global vision and the mixage of their cultures in the light of one of the most beautiful cities, Istanbul.<br/><br/>

AYA a fusion of souls and culture inspired by their admiration for pre-colonial African arts and Crafts.<br/><br/>

Upholding the Afro-modernism trends and style combined with the contemporary aesthetic research of Véronique Marganne under the art direction of Stephen Akai Simples.<br/><br/>

AYA creates exclusively hand made products in limited editions. AYA respects environment and people by using only natural and equitable materials in a sustainable way.

Because AYA’s goal is the sharing of art, cultures and love.
            </p>
          
        </div>
    </div>
    <div className="flex items-center justify-center w-full">
     <a className='h-80 w-80 md:w-[480px] md:h-[480px] relative'>
          <Image src='/aya-collection.webp'  alt='logo' layout='fill' objectFit='fill' />
     </a>
    </div>
</section>









<div className='flex flex-col 2xl:flex-row mt-20'>

     <div className='flex flex-col items-center justify-center w-full'>
     <p className='text-4xl my-4'>Adire</p>
     <a className='h-[204px] w-[330px] md:w-[660px] md:h-[408px] relative'>
          <Image src='/adire-bg.jpg'  alt='logo' layout='fill' objectFit='fill' />
     </a>
     {/* button */}
     <Link href='/adire'>
              <button type="button" className="text-white bg-[#be1e2d] font-medium text-sm px-16 py-4 text-center mr-2 mb-2 mt-10">SEE COLLECTION</button>
              </Link>
     </div>

     <div className='flex flex-col items-center justify-center w-full mt-12 2xl:mt-0'>
     <p className='text-4xl my-4 '>Nsibidi</p>
     <a className='h-[204px] w-[330px] md:w-[660px] md:h-[408px] relative'>
          <Image src='/nsibidi_banner_web.jpg'  alt='logo' layout='fill' objectFit='fill' />
     </a>
     {/* button */}
     <Link href='/nsibidi'>
              <button type="button" className="text-white bg-[#be1e2d] font-medium text-sm px-16 py-4 text-center mr-2 mb-2 mt-10">SEE COLLECTION</button>
              </Link>
     </div>

</div>
<Footer />
</>
  )
}

export default Aya





