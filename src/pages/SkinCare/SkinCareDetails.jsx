import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData, data } from '../../data/productData'
import { BreadcrumbBanner } from '../../components'
import { Product } from '../../components/index'

const SkinCareDetails = () => {

  const params = useParams()

  const product = data.filter(item => item.name === params.name)

  console.log('this', product)

  return (
    <>

      <BreadcrumbBanner name="Skin Care" />

      <div className='a4dbul-container product'>
        {
          product &&
          <>
            <div className='product-image bg-secondary p-2 h-fit'>
              <img src={product[0].image} alt="" />
            </div>
            <div className='product-content'>
              <h1 className=' text-2xl font-black text-primary font-Montserrat mt-5 md:mt-0'>{product[0].name}</h1>
              <p className='py-3'>{product[0].description}</p>

              <p><span className='text-primary mr-5 font'>Price:</span> ₦{parseInt(product[0].price).toLocaleString()}</p>

              <p className='text-primary font-medium py-3'>Ingredients:</p>
              <p>{product[0].ingredients}</p>

              <div className='mt-5 italic font-light'>
                <h5>To place an order for this product, please contact us on whatsApp or through a phone call with the number below!</h5>

                <div className='flex items-center mt-5'>
                  <p>Tel: +234 913 8487 146</p>
                  <a href='https://api.WhatsApp.com/send?phone=2349138487146&text=Hello, I am texting from your website A4dabul, I would love to find out more about ...'>
                    <button className=' bg-green-600 text-white rounded-full py-2 px-5 ml-5'>WhatsApp</button>
                  </a>
                </div>
              </div>
            </div>
          </>
        }
      </div>


      <div className='mt-10'>
        <div className='w-90 mx-auto py-10'>
          <h1 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat text-center my-10'>Featured Skin Products</h1>
          <div className='grid md:grid-cols-4 lg:grid-cols-4 gap-5'>
            {
              data &&
              data.filter((item, idx) => idx < 4)
                .map((item, idx) => {
                  return (
                    <Product key={idx} data={item} />
                  )
                })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SkinCareDetails