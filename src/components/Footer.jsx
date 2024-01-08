import React from 'react'
import image from '../assets/imgs/image'
import { Button } from '../components/index'

const Footer = () => {
    return (
        <>
            <div className='relative '>
                <div className='absolute bg-black h-full w-full opacity-90'></div>
                <img src={image.footerImage} alt="" className='h-full w-full absolute -z-10' />
                <div className=' w-90 mx-auto relative z-10 py-10'>
                    <div className=' w-1/4 mx-auto self-center'><img src={image.logo} alt="" /></div>
                    <div className='grid md:grid-cols-4 gap-5 mt-10 text-center md:text-left'>
                        <div className='text-white'>
                            <h3 className='font-Montserrat text-lg lg:text-xl'>Call Today:</h3>
                            <ul className='text-borderColor'>
                                <li>09138987146</li>
                            </ul>
                        </div>
                        <div className='text-white'>
                            <h3 className='font-Montserrat text-lg lg:text-xl'>Email:</h3>
                            <ul className='text-borderColor'>
                                <li>a4dabul@gmail.com</li>
                            </ul>
                        </div>
                        <div className='text-white'>
                            <h3 className='font-Montserrat text-lg lg:text-xl'>Location:</h3>
                            <ul className='text-borderColor'>
                                <li>68 Lagos-Abeokuta expressway  Obada- oko, Abeokuta, Ogun State.</li>
                            </ul>
                        </div>
                        <div className='text-white'>
                            <h3 className='font-Montserrat text-lg lg:text-xl'>Opening Hours</h3>
                            <ul className='text-borderColor'>
                                <li>Mon - Fri: 9am - 6pm</li>
                                <li>Sat: 11am - 4pm</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='relative z-10'>
                    <hr className=' border-b-white' />
                    <p className='text-white text-center text-xs py-2'>Copyrights. All reserved | Designed by Ritalondon</p>
                </div>
            </div>
        </>
    )
}

export default Footer