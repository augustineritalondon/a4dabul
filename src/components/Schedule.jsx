import React from 'react'
import image from '../assets/imgs/image'
import { Button } from './index'

const Schedule = ({ image, service }) => {
    return (
        <>
            <div className='grid lg:grid-cols-3 w-90 mx-auto my-16'>
                <div className='border border-secondary lg:border-r-0 p-10 h-fit self-center lg:-mr-5 lg:ml-auto lg:w-4/5'>
                    <h1 className='font-Montserrat text-primary text-2xl lg:text-3xl 2xl:text-4xl uppercase'>Schedule</h1>
                    <ul>
                        <li className='my-1 2xl:my-5'>
                            <p className=' text-lg lg:text-xl 2xl:text-22 font-Montserrat'>Monday - Friday</p>
                            <span className='text-borderColor text-sm'>8AM - 5:30PM</span>
                        </li>
                        <li className='my-1 2xl:my-5'>
                            <p className=' text-lg lg:text-xl 2xl:text-22 font-Montserrat'>Saturday</p>
                            <span className='text-borderColor text-sm'>10AM - 4PM</span>
                        </li>
                        <li className='my-1 2xl:my-5'>
                            <p className=' text-lg lg:text-xl 2xl:text-22 font-Montserrat'>Sunday</p>
                            <span className='text-borderColor text-sm'>CLOSED</span>
                        </li>
                    </ul>
                    <p className='text-borderColor mb-5'>We will be glad to see you anytime at our salon.</p>

                    <a href="https://api.WhatsApp.com/send?phone=2349138487146&text=Hello, I am texting from your website A4dabul, I would love to find out more about ...">
                        <Button>Book Appointment</Button>
                    </a>
                </div>
                <div className='relative z-10 hidden lg:block'>
                    <img src={image} alt="" />
                </div>

                {
                    service == 'saloon' &&
                    <div className='bg-secondary px-10 py-5 2xl:p-10 h-fit self-center lg:-ml-5 lg:mr-auto lg:w-4/5'>
                        <h1 className='font-Montserrat text-white text-2xl lg:text-3xl 2xl:text-4xl uppercase'>Pricing</h1>
                        <ul className='mt-5'>
                            <li className='my-1 2xl:my-3'>
                                <p className='text-lg lg:text-xl 2xl:text-22 font-Montserrat text-primary'>Skin Care</p>
                                <span className='text-white text-sm'>#8,000</span>
                            </li>
                            <li className='my-1 2xl:my-3'>
                                <p className='text-lg lg:text-xl 2xl:text-22 font-Montserrat text-primary'>Spa</p>
                                <span className='text-white text-sm'>#8,000</span>
                            </li>
                            <li className='my-1 2xl:my-3'>
                                <p className='text-lg xl:text-xl 2xl:text-22 font-Montserrat text-primary'>Unisex Beauty Saloon</p>
                                <span className='text-white text-sm'>#8,000</span>
                            </li>
                            <li className='my-1 2xl:my-3'>
                                <p className='text-lg lg:text-xl 2xl:text-22 font-Montserrat text-primary'>Weddings</p>
                                <span className='text-white text-sm'>#8,000</span>
                            </li>
                            <li className='my-1 2xl:my-3'>
                                <p className='text-lg lg:text-xl 2xl:text-22 font-Montserrat text-primary'>Trainings</p>
                                <span className='text-white text-sm'>#8,000</span>
                            </li>
                        </ul>
                    </div>
                }

                {
                    service == 'spa' &&
                    <div className='bg-secondary px-10 py-5 2xl:p-10 h-fit self-center lg:-ml-5 lg:mr-auto lg:w-4/5'>
                        <h1 className='font-Montserrat text-white text-2xl lg:text-3xl 2xl:text-4xl uppercase'>Services</h1>
                        <ul className='mt-5'>
                            <li className='my-1 2xl:my-5'>
                                <p className='text-lg lg:text-xl 2xl:text-22 font-Montserrat text-primary'>Body Wash</p>
                                {/* <span className='text-white text-sm'>#8,000</span> */}
                            </li>
                            <li className='my-1 2xl:my-5'>
                                <p className='text-lg lg:text-xl 2xl:text-22 font-Montserrat text-primary'>Facials</p>
                                {/* <span className='text-white text-sm'>#8,000</span> */}
                            </li>
                            <li className='my-1 2xl:my-5'>
                                <p className='text-lg xl:text-xl 2xl:text-22 font-Montserrat text-primary'>Massage</p>
                                {/* <span className='text-white text-sm'>#8,000</span> */}
                            </li>
                            <li className='my-1 2xl:my-5'>
                                <p className='text-lg lg:text-xl 2xl:text-22 font-Montserrat text-primary'>Waxing</p>
                                {/* <span className='text-white text-sm'>#8,000</span> */}
                            </li>
                            <li className='my-1 2xl:my-5'>
                                <p className='text-lg lg:text-xl 2xl:text-22 font-Montserrat text-primary'>Pedicure</p>
                                {/* <span className='text-white text-sm'>#8,000</span> */}
                            </li>
                            <li className='my-1 2xl:my-5'>
                                <p className='text-lg lg:text-xl 2xl:text-22 font-Montserrat text-primary'>Cosmetics</p>
                                {/* <span className='text-white text-sm'>#8,000</span> */}
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default Schedule