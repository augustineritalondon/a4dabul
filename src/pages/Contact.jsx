import React from 'react'
import { BreadcrumbBanner, FormInput, Button } from '../components'

import {Navbar, Footer} from '../components/index'

const Contact = () => {
  return (
    <>
      <Navbar />

      <BreadcrumbBanner name='Contact' />
      <div className='a4dbul-container !my-20'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <h1 className='text-primary font-Montserrat text-xl md:text-2xl xl:text-3xl'>Contact Us</h1>
            <p className='my-3'>You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our salon personally.</p>

            <form action="">
              <div className='grid grid-cols-2 gap-3'>
                <FormInput type='text' placeholder='First Name' name='firstName' />
                <FormInput type='text' placeholder='Last Name' name='lastName' />
                <FormInput type='text' placeholder='name' name='name' />
                <FormInput type='text' placeholder='name' name='name' />
              </div>
              <textarea name="" id="" className='appearance-none w-full rounded-3xl border border-grey text-e-14 py-3 focus:border-grey placeholder:text-grey my-2 bg-transparent px-5 focus:ring-0' cols="20" rows="5"></textarea>

              <div className='mt-5'>
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
          <div className=''>
            <div className='border-b border-b-primary pb-6'>
              <h1 className='text-primary font-Montserrat text-lg xl:text-xl'>Address:</h1>
              <div className='flex mt-3'>
                <img src="https://img.icons8.com/material/24/675D8C/map--v1.png" className='h-fit mx-5'/>
                <p className=''>68 Lagos-Abeokuta expressway  Obada- oko, Abeokuta, Ogun State.</p>
              </div>
            </div>

            <div className='border-b border-b-primary mt-5 pb-6'>
              <h1 className='text-primary font-Montserrat text-lg xl:text-xl'>Phones:</h1>
              <div className='flex mt-3'>
                <img src="https://img.icons8.com/material/24/675D8C/ringer-volume.png" className='h-fit mx-5'/>
                <p className=''> 09138987146</p>
              </div>
            </div>

            <div className='border-b border-b-primary mt-5 pb-6'>
              <h1 className='text-primary font-Montserrat text-lg xl:text-xl'>Email:</h1>
              <div className='flex mt-3'>
                <img src="https://img.icons8.com/material/24/675D8C/mail.png" className='h-fit mx-5'/>
                <p className=''>a4dabul@gmail.com</p>
              </div>
            </div>

            <div className=' mt-5'>
              <h1 className='text-primary font-Montserrat text-lg xl:text-xl'>Open Hours:</h1>
              <div className='flex mt-3'>
                <img src="https://img.icons8.com/material/24/675D8C/retro-alarm-clock.png" className='h-fit mx-5'/>
                <ul className='h-full'>
                  <li>Mon-Fri: 8:00am – 5:30pm</li>
                  <li>Saturday: 10am – 4pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default Contact