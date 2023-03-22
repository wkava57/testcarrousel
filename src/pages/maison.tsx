import Head from 'next/head'
import { Inter } from 'next/font/google'

// import styles from '@/styles/Home.module.css'
import Image from 'next/image'


import avant from '/public/avant.png'
import apres from '../public/images/apres.png'
// import image1 from '../public/images/renova.png'
// import image2 from '../public/images/renovb.png'
// import image3 from '../public/images/renovc.png'
// import image4 from '../public/images/renovd.png'
// import image5 from '../public/images/renove.png'
// import image6 from '../public/images/renovf.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="title py-12 text-center bg-blue-200">
          <h1 className='w-[100%] text-5xl font-bold uppercase'>Travaux de renovation</h1>

        </div>
        <div className="avant">
          <div className="before w-[70%] h-[60%] m-auto shadow-[10px_10px_101px_0_rgb(0,0,0)] rounded-2xl
            xl:w-1/5">
            <Image className='rounded-2xl ' 
            src={ avant }alt="une pièce avant la renovation"></Image>
          </div>
          <br />
          <h3 className='w-3/4 text-center text-center bg-blue-500 text-white m-auto
            xl:w-1/5'>
            Avant
          </h3>                
          <br />
        </div>
        



        
        <div className="avant">
          <div className="before w-[70%] h-[60%] m-auto shadow-[10px_10px_101px_0_rgb(0,0,0)] rounded-2xl
            xl:w-1/5">
            <Image className='rounded-2xl ' 
            src={ apres } alt="une pièce avant la renovation"></Image>
          </div>
          <br />
          <h3 className='w-3/4 text-center text-center bg-blue-500 text-white m-auto
            xl:w-1/5'>
            Avant
          </h3>                
          <br />
        </div>
        <div>

        </div>
        

      </main>  
      
    </>
  )
}
