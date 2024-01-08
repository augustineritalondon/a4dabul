import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { capitalize } from '../../utils/helper'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  
  const all_products = useSelector(state => state.products.product)
  const category = useSelector(state => state.products.category)

  const [currentProducts, setCurrentProducts] = useState(all_products)
  const [currentCat, sestCurrentCat] = useState(category)

  const changeProductByCategory = (e) => {
    const currentCategory = localStorage.getItem('category') || e.target.value
    const productsByCat = all_products.filter(item => item.category == currentCategory)
    setCurrentProducts(productsByCat)
  }

  useEffect(()=> {
    const cat = localStorage.getItem('category')
    if(cat) {
      changeProductByCategory()
      localStorage.removeItem('category');
    }
  },[])

  console.log(all_products)

  return (
    <div className='md:w-90 bg-lightPrimary p-4 md:p-8 rounded-2xl mx-auto h-80'>
      <h1 className='font-bold text-2xl'>All Product</h1>

      <form>
        <div className='grid md:grid-cols-2 gap-5 my-4'>
          <select id="category" name="category" autoComplete="category" placeholder='Product Category' className="appearnce-none w-full rounded-full bg-white border-gray-300 py-3 text-gray-500 focus:border-gray-300 focus:ring-0 my-2 bg-transparent px-5 "
          onChange={(e)=> changeProductByCategory(e)}
          >
            <option >Select Category</option>
          {
            currentCat.map((item, idx) => (   
              <option key={idx}>{item.name}</option>
            ))
          }
          </select>
          
        </div>
      </form>

      <hr className='w-full border' />

      <div className="table-auto ">
        <div className='flex bg-primary text-white p-3 sticky'>
          <div className='w-5 md:w-15'>S/N</div>
          <div className='w-30 md:w-3/5'>Product Name</div>
          <div className='w-30 md:w-30'>Category</div>
          <div className='w-1/4 md:w-1/5'>Product Price</div>
          <div className=' md:w-15'>Action</div>
        </div>
        <div className='h-50 overflow-y-scroll scrollbar-hide'>
          {
            currentProducts.map((item, idx) => (
              <div className='flex p-3 bg-slate-50 border-b border-b-slate-200' key={idx}>
                <div className='w-5 md:w-15'>{idx + 1}</div>
                <div className='w-30 md:w-3/5'>{item.name}</div>
                <div className='w-30 md:w-30'>{capitalize(item.category)}</div>
                <div className='w-1/4 md:w-1/5'>₦{(parseInt(item.price)).toLocaleString()}</div>
                <div className='w-15 md:w-15 bg-primary text-center rounded-xl text-white text-sm cursor-pointer'><Link className='' to={`/admin/dashboard/all-products/${item.name}`}>View</Link></div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AllProducts