import React from 'react'
import icons from '../assets/icons/icons'

const Services = () => {
    return (
        <>
            <div className='py-16 text-center'>
                <h1 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat'>Our Services</h1>
                <p className='text-sm lg:text-base my-5 w-4/5 xl:w-3/4 mx-auto'>We offer variety of quality services which includes, our unisex saloon, skin care products, trainings, wedding planning and events, and our affordable beauty spa.</p>
                
                <div className='w-4/5 mx-auto mt-10 md:mt-20 lg:mt-32'>
                    <div className='mt-5 grid md:grid-cols-3 md:border-b md:border-b-borderColor border-opacity-60'>
                        <div className='md:border-r md:border-r-borderColor'>
                            <div className='pb-10 lg:pb-16 md:px-6'>
                                <img src={icons.saloon} alt="" className='mx-auto w-16 lg:w-20' />
                                <h3 className=' text-xl 2xl:text-22 font-Montserrat py-5 text-primary'>Unisex Saloon</h3>
                                <p className='text-sm lg:text-base'>We offer a full range of hairdressing services for men and women.</p>
                            </div>
                        </div>
                        <div className='md:border-r md:border-r-borderColor'>
                            <div className='pb-10 lg:pb-16 md:px-6'>
                                <img src={icons.skincare} alt="" className='mx-auto w-16 lg:w-20' />
                                <h3 className=' text-xl 2xl:text-22 font-Montserrat py-5 text-primary'>Skin Care</h3>
                                <p className='text-sm lg:text-base'> Entrust your beauty to professionals who really care about your style and look!.</p>
                            </div>
                        </div>
                        <div className='pb-10 lg:pb-16 md:px-6'>
                            <img src={icons.weddings} alt="" className='mx-auto w-16 lg:w-20' />
                            <h3 className=' text-xl 2xl:text-22 font-Montserrat py-5 text-primary'>Affordable Weddings</h3>
                            <p className='text-sm lg:text-base'>Get the best affordable wedding plan, with amazing thrift ideas!</p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 '>
                        <div className='md:border-r md:border-r-borderColor'>
                            <div className='md:pt-10 lg:pt-16 md:px-6'>
                                <img src={icons.trainings} alt="" className='mx-auto w-16 lg:w-20' />
                                <h3 className=' text-xl 2xl:text-22 font-Montserrat py-5 text-primary'>Trainings</h3>
                                <p className='text-sm lg:text-base'>You can also be a make your own products, we give extensive trainings.</p>
                            </div>
                        </div>
                        <div className='md:border-r md:border-r-borderColor'>
                            <div className='pt-10 lg:pt-16 md:px-6'>
                                <img src={icons.beautyspa} alt="" className='mx-auto w-16 lg:w-20' />
                                <h3 className=' text-xl 2xl:text-22 font-Montserrat py-5 text-primary'>Beauty Spa</h3>
                                <p className='text-sm lg:text-base'>Our various treatments includes message therapy, facials, etc.</p>
                            </div>
                        </div>
                        <div className='pt-10 lg:pt-16 md:px-6'>
                            <img src={icons.hospitality} alt="" className='mx-auto w-16 lg:w-20' />
                            <h3 className=' text-xl 2xl:text-22 font-Montserrat py-5 text-primary'>Hospitality</h3>
                            <p className='text-sm lg:text-base'>Improve your look with our professional haircut & hairstyling services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services