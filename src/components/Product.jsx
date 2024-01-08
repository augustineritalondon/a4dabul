import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/imgs/image'

const Product = ({data}) => {

  return (
    <>
        <div className='border border-secondary mb-10'>
          <Link to={`/skin-care/${data.name}`}>
              <div className=' bg-secondary w-full h-fit p-3'>
                  <img src={data.image} className='mx-auto' alt="" />
              </div>
              <div className='py-5 lg:py-10 text-center'>
                  <h3 className='text-lg xl:text-22 font-Montserrat text-primary'>{data.name}</h3>
                  <p>₦{parseInt(data.price).toLocaleString()}</p>
              </div>
          </Link>
        </div>
    </>
  )
}

export default Product