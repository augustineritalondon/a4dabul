import React, {useState } from 'react'
import { BreadcrumbBanner, Product, Navbar, Footer } from '../../components/index'
import { productData, data } from '../../data/productData'
import { useSelector } from 'react-redux'
import { capitalize } from '@mui/material'

const SkinCare = () => {

  const [category, setCategory] = useState(false)
  const handleCategory = () => setCategory(!category)

  
  const [active, setActive] = useState('face cream')

  const categories = useSelector(state => state.products.category)
  const products = useSelector(state => state.products.product)

  return (
    <>
      <Navbar />

      <BreadcrumbBanner name='Skin Care' />
      <div className='a4dbul-container !my-20'>
        <div className='md:flex justify-between'>
          <div className='bg-lightBanner w-full md:w-1/5 h-fit py-5 px-5 rounded-2xl text-primary text-sm md:text-base lg:text-lg font-Montserrat-Regular' onClick={()=>handleCategory()}>
            <h1 className='hidden md:block'>Products</h1>
            <h1 className='md:hidden cursoro-pointer'>Categories</h1>
            <ul className={`mt-5 px-2 md:block ${category ? 'block': 'hidden'}`}>

              {
                categories &&
                categories.map((item, idx) => {
                    return (
                      <li className={`my-3 cursor-pointer ${active == item.name ? 'bg-secondary py-2 px-3 rounded-md text-white': ' bg-transparent text-primary'}`} onClick={() => setActive(item.name)} key={idx}>{capitalize(item.name)}</li>
                    )
                  })
              }
            </ul>
          </div>
          <div className='w-full mt-10 md:mt-0 md:w-3/4 h-full'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
              {
                products &&
                  products.filter(item => item.category == active.toLowerCase())
                  .map((item, idx) => {
                    return(
                      <Product key={idx} data={item} />
                    )
                  })
              }
            </div>

            <div>
              {/* pagination */}
              {/* <div className='flex justify-center my-5'>
                <div>
                  <span className='mx-2  bg-primary p-2 px-3 text-white cursor-pointer rounded-full'>Prev</span>
                  <span className='mx-2  bg-primary p-2 px-3 text-white cursor-pointer rounded-full'>1</span>
                  <span className='mx-2  bg-primary p-2 px-3 text-white cursor-pointer rounded-full'>2</span>
                  <span className='mx-2  bg-primary p-2 px-3 text-white cursor-pointer rounded-full'>3</span>
                  <span className='mx-2  bg-primary p-2 px-3 text-white cursor-pointer rounded-full'>Next</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default SkinCare