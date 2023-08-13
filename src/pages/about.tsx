import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'



const About = () => {
  return (
 <>
 <Header />
 <div className='flex flex-col xl:flex-row'>
          <div className='flex items-center justify-center w-full mt-12 lg:mt-20'>
          <a className='h-[329px] w-[300px] md:w-[456px] md:h-[499px] relative'>
          <Image src='/vero.webp'  alt='veronique-marganne' layout='fill' objectFit='fill' />
     </a>
       </div>
       <div className='flex items-center justify-center w-full'>
          <p className='text-lg m-4 md:m-8 lg:m-16 2xl:mr-[20%]'>Veronique Marganne is an Istanbul based French-Belgian Designer, illustrator and lecturer.<br/><br/>

She is creating fashion collections and illustrations for her own brand ‘’VERO MARGANNE creative studio ISTANBUL’’.<br/><br/>

She is cofounder of ‘’AYA fusion designs’’ with Akai Stephen Simples, a well-known Nigerian Designer, this collaboration is a fusion of souls and cultures inspired by their real passion for pre-colonial African arts and crafts.<br/><br/>

She is teaching fashion design, fashion illustration and fashion drawing technics in different international fashion schools.<br/><br/>

She is also a painter who has exhibited her works in Turkish and Belgian galleries.<br/><br/>

When she is not in a producer’s places controlling her creations or in classroom, Veronique can be found in her studio painting portraits or creating illustrations for her collections.</p>
       </div>
    </div>
 <Footer />
 </>
  )
}

export default About

