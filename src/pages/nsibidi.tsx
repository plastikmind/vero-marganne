import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from "next/link";



const Nsibidi = () => {
  return (
   
<>
<Header />
<div className='flex items-center justify-center w-full mt-10 md:mt-20 flex-col'>
<a className='h-[135px] w-[288px] md:w-[624px] md:h-[293px] lg:w-[944px] lg:h-[443px] relative'>
          <Image src='/nsibidi.jpg'  alt='logo' layout='fill' objectFit='fill' />
     </a>
     <p className='font-semibold text-xl mt-5 lg:text-4xl'>Nsibidi Symbols inspired Collection</p>
     <p className='mt-2 font-medium'>The origins of Nsibidi</p>
     <p className='mt-6 mx-4 md:mx-20 md:text-lg font-medium xl:text-xl'>Nsibidi is a pictogram language used in the pre colonial era in the Cross River region, in Southeastern Nigeria and Southwestern Cameroon.</p>
     <p className='mt-10 mx-4 md:mx-20 xl:mx-24 2xl:mx-[480px] md:text-lg font-medium text-gray-600 xl:text-xl'>This language was introduced by the Ejagham people during the 5th century. It was used for all aspects of life, however, the symbols used for warfare and the sacred were kept secret and limited to men’s associations and secret societies as the Ekpe Leopard Society, which controlled the trade, the society life and politics.
     <br/><br/>
     Nsibidi is composed of around 1000 pictograms which were drawn on the ground, the skin, masks and textile or as an artistic expression.<br/><br/>
     Until today, Nsibidi symbols remain an important source of inspiration for contemporary Nigerian artists.<br/><br/>
     AYA Fusion Design is paying tribute to this beautiful cultural heritage with a dedicated collection encompassing the spirit and richness of the Nigerian people.
     </p>
     <Link href='https://shop.veromarganne.com/product-tag/nsibidi/'>
     <button type="button" className="text-white bg-[#be1e2d] font-medium text-sm px-16 py-4 text-center mr-2 mb-2 mt-10">SHOP NOW</button>
     </Link>
</div>




<Footer />
</>
  )
}

export default Nsibidi





