import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
]

const PricingList = [
    { tipe: 'Artict Rose', price: '90.000', imageUrl: 'https://cdn.kadio.id/upload/products1643635798_Arctic%20Rose.jpg' },
    { tipe: 'Poppy Dream', price: '90.000', imageUrl: 'https://cdn.kadio.id/upload/products1649514434_kdo20.png' },
    { tipe: 'Ocean Rose', price: '90.000', imageUrl: 'https://cdn.kadio.id/upload/products1643635782_Ocean%20Rose.jpg' },
    { tipe: 'Iris Lotus', price: '90.000', imageUrl: 'https://cdn.kadio.id/upload/products1643635766_Iris%20Lotus.jpg' },
]

export default function Price() {
    return (
        
        <div data-aos="fade-up" className="bg-white py-24 sm:py-32 animate__fadeInDown animate__slow">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pricing List</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        
                    </p>
                </div>

                <div className="flex flex-wrap justify-center">
                    {PricingList.map((item, index) => (
                        <div key={index} className=" -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-gray-50 py-6 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8">
                                <div className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold text-gray-600">{item.tipe}</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Rp</span>
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">{item.price}</span>
                                    </p>
                                    <Image src={item.imageUrl} className='rounded-3xl p-2' width={300} height={300} />
                                    <Link href="/" className="mt-10 block w-full rounded-md  bg-slate-900 px-3 py-2 text-center text-sm font-semibold transition-all duration-800 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >GET DESIGN</Link>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>


  
    )
}
