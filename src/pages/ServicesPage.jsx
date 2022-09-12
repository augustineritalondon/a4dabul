import React from 'react'
import { BreadcrumbBanner, Services, Banner, Schedule } from '../components'
import image from '../assets/imgs/image'

const ServicesPage = () => {
  return (
    <>
        <BreadcrumbBanner name="Services" />
        <div className='!my-10'>
            <div className='a4dbul-container grid grid-cols-2 gap-10'>
                <div>
                    <h1 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat'>Why Our Customers Choose Us</h1>
                    <p className='text-borderColor py-3'>In ante sapien, dapibus luctus aliquet a, accumsan sit amet dolor. Mauris id facilisis dolor. Donec malesuada, est eu dignissim eleifend, est nulla dignissim nisl. Fusce turpis massa, mattis sit.</p>
                </div>
                <div></div>
            </div>

            <Banner>
              <Services />
            </Banner>

            <Schedule image={image.spaSchedule}/>
        </div>
    </>
  )
}

export default ServicesPage