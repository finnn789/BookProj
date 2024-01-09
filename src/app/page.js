import Image from 'next/image'
import Navbar from './posts/navbars/navbar'
import Circle from './components/background/Circle'
import HomePage from './components/container/homepage'
export default function Home() {
  return (
    <>

      <div className="bg-cream-500 ">
          <Navbar />
          <HomePage />
      </div>





    </>
  )
}