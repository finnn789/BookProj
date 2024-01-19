
'use client'
import Image from 'next/image'

import Circle from './components/background/Circle'
import HomePage from './components/container/homepage'
import CardGrid from './components/dashboard/image-gallery/image'
import Navbar from './components/Nav/Navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Price from './components/pricing/price.jsx';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



const data = [
  { title: 'Eva & Raffi', description: 'Description 1', imageUrl: 'https://cdn.idntimes.com/content-images/community/2019/03/50254794-317576575548112-8171081241153824536-n-b32d4694ff3ab3baeca687150bdac182.jpg' },
  { title: 'Rey & Dinda', description: 'Description 2', imageUrl: 'https://asset-2.tstatic.net/tribunnews/foto/bank/images/dinda-hauw-disebut-tak-bisa-masak-rey-mbayang-bela-sang-istri.jpg' },
  { title: 'Ammar Zonni & Irish Bella', description: 'Description 3', imageUrl: 'https://media.suara.com/pictures/original/2019/04/22/39484-irish-bella-dan-ammar-zoni-prewedding-bergaya-bollywood-diera-bachir.jpg' },
  { title: 'Card 4', description: 'Description 4', imageUrl: 'https://placekitten.com/300/203' },
  // Add more data as needed
];
export default function Home({ Component, pageProps }) {
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
        once: false,
      }
    ), [];
  })
  return (


    <>

      <div className="container bg-white h-[100vh] ">
        <Navbar />
        <HomePage />
        <CardGrid data={data} />
        <Price />
        <Footer />
      </div>
    </>
  )
}
