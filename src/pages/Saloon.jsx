import React from 'react'
import { Banner, Button, Schedule, Navbar, Footer } from '../components'
import image from '../assets/imgs/image'

const Saloon = () => {
    return (
        <>
            <Navbar />
            {/* Affordable Hair Sallon */}
            <div>
                <Banner>
                    <div className='grid lg:grid-cols-2 gap-5 py-10'>
                        <div>
                            <h3 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat'>Affordable Hair Saloon Unisex</h3>
                            <p className='text-sm lg:text-base my-6'>We offer organic and cosmetic treatment and services for both gender including professional hair-cutting/barbing, styling, manicure and pedicure, make-up and makeovers, skincare, etc.</p>
                            <ul className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Hair cuts</li>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Coloring</li>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Fixing</li>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Manicure</li>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Pedicure</li>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Haircut</li>
                            </ul>

                            <div className='w-full lg:w-2/5 mt-6'>
                                <a href="https://api.WhatsApp.com/send?phone=2347040671352&text=Hello, I am texting from your website A4dabul, I would love to find out more about ...">
                                    <Button>Contact Us</Button>
                                </a>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-3 mt-5 lg:mt-0'>
                            <div className="grid grid-row-2 gap-3 xl:gap-5">
                                <img src={image.saloonImage2} alt="" className=' w-60 h-28 md:w-309 md:h-200 shadow-a-shadow' />
                                <img src={image.saloonImage3} alt="" className=' w-60 h-28 md:w-309 md:h-200 shadow-a-shadow' />
                            </div>
                            <img src={image.saloonImage1} alt="" className=' w-52 h-60 md:w-313 md:h-431 shadow-a-shadow' />
                        </div>
                    </div>
                </Banner>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-0'>
                    <img src={image.saloonImage1} alt="" className=' w-64 h-40 xl:h-52' />
                    <img src={image.saloonImage4} alt="" className=' w-64 h-40 xl:h-52' />
                    <img src={image.saloonImage3} alt="" className=' w-64 h-40 xl:h-52' />
                    <img src={image.saloonImage5} alt="" className=' w-64 h-40 xl:h-52' />
                    <img src={image.saloonImage6} alt="" className=' w-64 h-40 xl:h-52' />
                    <img src={image.saloonImage5} alt="" className=' w-64 h-40 xl:h-52' />
                </div>
            </div>

            <Schedule image={image.saloonImage1} service='saloon' />

            <Footer />
        </>
    )
}

export default Saloon