import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from "next/link";

const Adire = () => {
  return (
<>
<Header />
<div className='flex items-center justify-center w-full mt-10 md:mt-20 flex-col'>
<a className='h-[204px] w-[330px] md:w-[660px] md:h-[408px] relative'>
          <Image src='/adire-bg.jpg'  alt='logo' layout='fill' objectFit='fill' />
     </a>
     <p className='font-semibold text-xl mt-5 lg:text-4xl'>Adire Batik Technique inspired collection</p>
     <p className='mt-6 mx-4 md:mx-20 md:text-lg font-medium xl:text-xl text-center'>Adire, which is common among the people of Egbaland in Ogun State , is probably the most reflective of its cultural origin. <br/>Abeokuta is said to be the capital of the Egba nation, and the Adire industry in Nigeria.</p>
     <p className='mt-10 mx-4 md:mx-20 xl:mx-24 2xl:mx-[480px] md:text-lg font-medium text-gray-600 xl:text-xl'>Adire textile is a resist-dyed cloth produced and worn primarily by the Yoruba people of southwestern Nigeria. The Yoruba label adire (meaning “tie and dye”) was first applied to indigo-dyed cloth decorated with resist patterns in the early twentieth century.
     <br/><br/>
     Adire textile production is assumed to be inborn; inherited by birth and the heritage passed on to descendants of families who were also involved in the production process.<br/><br/>
     In Egba land, the craft was formerly known to be a family business. Parents passed the techniques down to their female children and the wives of their sons. For a long time, people who were not from a certain family were not allowed to partake in adire production as it was a part of the family’s heritage.<br/><br/>
     AYA Fusion Design wants to pay tribute to this beautiful cultural heritage with a dedicated collection encompassing the spirit and richness of culture of the Nigerian people.
     </p>
     <Link href='https://shop.veromarganne.com/product-tag/adire/'>
     <button type="button" className="text-white bg-[#be1e2d] font-medium text-sm px-16 py-4 text-center mr-2 mb-2 mt-10">SHOP NOW</button>
     </Link>
</div>
<Footer />
</>
  )
}

export default Adire