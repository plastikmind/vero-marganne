import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import SarongsHero from '../../components/SarongsHero'
import Footer from '../../components/Footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
    
        <title>Vero on the Web</title>
        <meta name="description" content="Vero Marganne Web Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='flex flex-col overflow-hidden'>
      <Header />
      <Hero />
      <SarongsHero />
      <Footer />
    </div>
    </>
  )
}

