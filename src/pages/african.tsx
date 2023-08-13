import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'


const African = () => {
  return (
   
<>
<Header />
<div className='flex items-center justify-center w-full'>

</div>
<section className="flex flex-col w-full overflow-hidden xl:flex-row sm:mx-auto">
    <div className="flex justify-end p-8 xl:py-32 xl:px-16 xl:pl-10 xl:w-2/3">
        <div className="flex flex-col items-start justify-center w-full xl:max-w-2xl">
          <p className='text-3xl p-5 font-extralight'>African Poem</p>
            <p className="p-5 mb-5 text-gray-600 xl:text-xl">
            For this collection Ver Marganne, a Belgian designer living in Istanbul, decided to live the happiness of expressing her love for African nature, but also for the naivety of the human soul and the innocent poetry that can emerge from them.<br/><br/>

           Naive - surrealist art is the world in which she finds her soul.<br/><br/>
She has always been inspired by the French painter, <span className='font-bold'>Douanier Rousseau</span>, the fact that he painted by imagination the African savannahs, just by mere regular visits to the local zoos and botanic gardens, his love for nature and the pictorial innocence of his paintings.<br/><br/>

She has in the last decades found a strong interest regarding the history of art and this includes African Art as it captures the soul in its styling, patterns and motifs. She finds the colors both in painting and sculpturing as her art language.<br/><br/>

From her searchings, she met <span className='font-bold'>Edward Safi Ting Tinga</span>, and the same wonder was born in her, indeed, his paintings were soon recognised for their surrealist appearance and naïve style.

            </p>
          
        </div>
    </div>
    <div className="flex items-center justify-center w-full">
     <a className='h-80 w-80 md:w-[480px] md:h-[480px] relative'>
          <Image src='/african.gif'  alt='logo' layout='fill' objectFit='fill' />
     </a>
    </div>
</section>








{/* The Three Beauties */}
<div className='flex w-full mt-16 sm:mt-20 lg:mt-32 xl:mt-40 flex-col items-center'>
<p className='text-3xl p-5 font-extralight'>The Three Beauties</p>
     {/* DESCRIPTION */}
<p className='mb-28 px-8 text-center sm:px-20 lg:px-60 mt-12 text-gray-600 xl:text-xl'>
This creation is a tribute to the beauty of Zebras and Tigers.<br/><br/>
The graphic charm of the stripes they both wear.<br/><br/>
They dance in circles flown over by imaginary birds escaped from a Tinga
Tinga painting.
            </p>
          <div className='flex w-full items-center justify-center flex-col md:flex-row'>
           
           < div className='flex w-full items-center justify-center flex-col mb-10 md:mb-0'>
            <Link href='https://shop.veromarganne.com/product/the-three-beauties-beige/' className='h-72 w-72 lg:h-[480px] lg:w-[480px] xl:h-[555px] xl:w-[555px]  relative'>
            <Image src='/the-three-beauties-beige.webp' alt='hero' layout='fill' objectFit='fill' />
            </Link>
            <p className='text-center italic'>The Three Beauties - Beige</p>

            </div>
            < div className='flex w-full items-center justify-center flex-col'>
            <Link href='https://shop.veromarganne.com/product/the-three-beauties-blue/' className='h-72 w-72 lg:h-[480px] lg:w-[480px] xl:h-[555px] xl:w-[555px]  relative'>
            <Image src='/the-three-beauties-blue.webp' alt='hero' layout='fill' objectFit='fill' />
            </Link>
            <p className='text-center italic'>The Three Beauties - Blue</p>

            </div>

          
          </div>
       </div>

       {/* The Traveller's Trees */}
<div className='flex w-full mt-16 sm:mt-20 lg:mt-32 xl:mt-40 flex-col items-center'>
<p className='text-3xl p-5 font-extralight'>The Traveller's Trees</p>
     {/* description */}
<p className='mb-28 text-center px-8 sm:px-20 lg:px-60 mt-12 text-gray-600 xl:text-xl'>
This creation celebrates African nature with, featured, her beautiful Traveller's Palm Trees, their capacity to hold rain water as an emergency of drinking supply for live beings.<br/><br/>
They are surrounded by Birds of Paradise, those flowers with their resemblance to birds from a terrestrial Eden.<br/> <br/>To bring them fantasy, African Green Monkeys were invited to create a frame and offer one Paradise's Bird to their spectators.
            </p>
          <div className='flex w-full items-center justify-center flex-col md:flex-row'>
           
           < div className='flex w-full items-center justify-center flex-col mb-10 md:mb-0'>
            <Link href='https://shop.veromarganne.com/product/the-traveller-tree-grey/' className='h-72 w-72 lg:h-[480px] lg:w-[480px] xl:h-[555px] xl:w-[555px]  relative'>
            <Image src='/the-traveller-tree-grey.webp' alt='hero' layout='fill' objectFit='fill' />
            </Link>
            <p className='text-center italic'>The Traveller's Trees - Grey</p>

            </div>
            < div className='flex w-full items-center justify-center flex-col'>
            <Link href='https://shop.veromarganne.com/product/the-traveller-tree-orange/' className='h-72 w-72 lg:h-[480px] lg:w-[480px] xl:h-[555px] xl:w-[555px]  relative'>
            <Image src='/the-traveller-tree-orange.webp' alt='hero' layout='fill' objectFit='fill' />
            </Link>
            <p className='text-center italic'>The Traveller's Trees - Orange</p>

            </div>

          
          </div>
       </div>

<Footer />
</>
  )
}

export default African





