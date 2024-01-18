import React from 'react'
import { Button, Navbar, Footer } from '../components'
import image from '../assets/imgs/image'

const Weddings = () => {
    return (
        <>
            <Navbar />
            {/* affordable wedding */}
            <div>
                <div className='bg-banner relative'>
                    <img src={image.weddingImage1} alt='' className='absolute h-full w-full' />
                    <div className='relative z-10 grid grid-cols-2'>
                        <div className='py-10 pl-3 lg:pl-10'>
                            <h1 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat mb-5'>Affordable Wedding</h1>
                            <span className='text-primary text-3xl xl:text-4xl italic'>Plan and Book your Wedding.</span>
                            <p className='text-sm lg:text-base my-5 hidden md:block'>In ante sapien, dapibus luctus aliquet a, accumsan sit amet dolor. Mauris id facilisis dolor. Donec malesuada, est eu dignissim eleifend, est nulla dignissim nisl. Fusce turpis massa, mattis sit.:</p>

                            <div className='w-full lg:w-2/5 mt-6 cursor-pointer'>
                                <a href='https://api.WhatsApp.com/send?phone=2347040671352&text=Hello, I am texting from your website A4dabul, I would love to find out more about ...'>
                                    <Button>Contact Us</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-0'>
                    <img src={image.weddingImage2} alt="" className=' w-64 h-40 xl:h-52' />
                    <img src={image.weddingImage3} alt="" className=' w-64 h-40 xl:h-52' />
                    <img src={image.weddingImage4} alt="" className=' w-64 h-40 xl:h-52' />
                    <img src={image.weddingImage5} alt="" className=' w-64 h-40 xl:h-52' />
                    <img src={image.weddingImage2} alt="" className=' w-64 h-40 xl:h-52' />
                    <img src={image.weddingImage3} alt="" className=' w-64 h-40 xl:h-52' />
                </div>
            </div>

            {/* our Advantages */}
            <div className='w-90 mx-auto my-20'>
                <h1 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat text-center my-5'>Our Advantages</h1>
                <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='text-center bg-lightBanner p-5'>
                        <div className='bg-primary h-16 w-16 mx-auto rounded-full'></div>
                        <h3 className='mt-5 text-base lg:text-lg font-Montserrat'>Save Time</h3>
                        <p className='text-borderColor'>The services provided by our wedding planners can save you a lot of time.</p>
                    </div>
                    <div className='text-center bg-lightBanner p-5'>
                        <div className='bg-primary h-16 w-16 mx-auto rounded-full'></div>
                        <h3 className='mt-5 text-base lg:text-lg font-Montserrat'>Professional Approach</h3>
                        <p className='text-borderColor'>We will thoroughly plan every element of your wedding.</p>
                    </div>
                    <div className='text-center bg-lightBanner p-5'>
                        <div className='bg-primary h-16 w-16 mx-auto rounded-full'></div>
                        <h3 className='mt-5 text-base lg:text-lg font-Montserrat'>Team of Wedding Experts</h3>
                        <p className='text-borderColor'>Perfect Day employs the best wedding experts in Nigeria.</p>
                    </div>
                    <div className='text-center bg-lightBanner p-5'>
                        <div className='bg-primary h-16 w-16 mx-auto rounded-full'></div>
                        <h3 className='mt-5 text-base lg:text-lg font-Montserrat'>Affordable Prices</h3>
                        <p className='text-borderColor'>Our clients value our affordable pricing policy and great service.</p>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Weddings