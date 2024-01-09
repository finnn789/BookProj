import Image from 'next/image'
import Navbar from './posts/navbars/navbar'
import Circle from './components/background/Circle'
import HomePage from './components/container/homepage'
import ImageGallery from './components/dashboard/image-gallery/image'
export default function Home() {
  return (
    <>

      <div className="bg-cream-500 ">
          <Navbar />
          <HomePage />
          <ImageGallery/>
      </div>
      





    </>
  )
}
