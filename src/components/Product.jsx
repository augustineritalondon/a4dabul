import React from 'react'
import image from '../assets/imgs/image'

const Product = () => {
  return (
    <>
        <div className='border border-secondary mb-10'>
            <div className=' bg-secondary w-full h-fit p-3'>
                <img src={image.ProductImage1} className='mx-auto' alt="" />
            </div>
            <div className='py-5 lg:py-10 text-center'>
                <h3 className='text-lg xl:text-22 font-Montserrat text-primary'>Skin Care Product</h3>
                <p>#4,500</p>
            </div>
        </div>
    </>
  )
}

export default Product