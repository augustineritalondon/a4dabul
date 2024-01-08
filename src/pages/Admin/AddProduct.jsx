import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { addProduct } from '../../state/productSlice'
import { addNProducts, getProducts } from '../../../service'
import { toast } from 'react-toastify';


const AddProduct = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const category = useSelector(state => state.products.category)
  const products = useSelector(state => state.products.product)
  const dispatch = useDispatch()

  const addProducts = (data) => {

    addNProducts(data).then((res) => {
      if (res) {
        toast('Successfully Added!', { hideProgressBar: true, autoClose: 3000, type: 'success' })
        getProducts().then((res) => {
          const productsArray = [];
          res.forEach((doc) => {
            productsArray.push(doc.data());
          });
          dispatch(addProduct(productsArray));
        });
      }
      else toast('Error while Added!', { hideProgressBar: true, autoClose: 3000, type: 'error' })
    })

    console.log('rita london is a fine girl')
  }


  return (
    <div className='md:w-90 bg-lightPrimary p-8 rounded-2xl mx-auto'>
      <h1 className='font-bold text-2xl'>Add Products</h1>
      <form onSubmit={handleSubmit(addProducts)}>
        <div className='grid md:grid-cols-2 gap-5 my-4'>
          <div>
            <select id="category" name="category" autoComplete="category" placeholder='Product Category'
              className="appearnce-none w-full rounded-full bg-white border-gray-300 py-3 text-gray-500 focus:border-gray-300 focus:ring-0 my-2 bg-transparent px-5 "
              {...register('category', { required: true })} aria-invalid={errors.category ? 'true' : 'false'}
            >
              <option disabled>Product Category</option>
              {
                category.map((item, idx) => (
                  <option key={idx}>{item.name}</option>
                ))
              }
            </select>
            {errors.category?.type === "required" && (<p role="alert" className=' text-red-500 font-light text-sm p-0 mb-5 px-2'>Category is required</p>)}
          </div>

          <div>
            <input
              type='text'
              placeholder='Product Name'
              name='name'
              className='appearance-none w-full rounded-full bg-white border-gray-300 text-e-14 py-3 focus:border-gray-300 placeholder:text-grey my-2 bg-transparent px-5 focus:ring-0 '
              {...register('name', { required: true })} aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name?.type === "required" && (<p role="alert" className=' text-red-500 font-light text-sm p-0 mb-5 px-2'>Product Name is required</p>)}
          </div>
        </div>

        <div className="my-4">
          <textarea
            id="about"
            name="about"
            rows="4"
            placeholder='Product Description'
            className="appearance-none w-full rounded-3xl border-gray-300 py-3 text-gray-500 shadow-sm placeholder:text-gray-400 px-5 focus:ring-0"
            {...register('description', { required: true })} aria-invalid={errors.description ? 'true' : 'false'}
          ></textarea>
          {errors.description?.type === "required" && (<p role="alert" className=' text-red-500 font-light text-sm p-0 mb-5 px-2'>Description is required</p>)}
        </div>

        <div className='grid md:grid-cols-2 gap-5 my-4'>
          <div>
            <input
              type='text'
              placeholder='Product Price'
              name='name'
              className='appearance-none w-full rounded-full bg-white border-gray-300 text-e-14 py-3 focus:border-gray-300 placeholder:text-grey my-2 bg-transparent px-5 focus:ring-0 '
              {...register('price', { required: true })} aria-invalid={errors.price ? 'true' : 'false'}
            />
            {errors.price?.type === "required" && (<p role="alert" className=' text-red-500 font-light text-sm p-0 mb-5 px-2'>Product Price is required</p>)}
          </div>

          <div>
            <input
              type='text'
              placeholder='Product Image'
              name='name'
              className=' cursor-pointer appearance-none w-full rounded-full bg-white border-gray-300 text-e-14 py-3 focus:border-gray-300 placeholder:text-grey my-2 bg-transparent px-5 focus:ring-0 '
              {...register('image', { required: true })} aria-invalid={errors.image ? 'true' : 'false'}
            />
            {errors.image?.type === "required" && (<p role="alert" className=' text-red-500 font-light text-sm p-0 mb-5 px-2'>Product Price is required</p>)}
          </div>
        </div>

        <div className="my-4">
          <textarea
            id="about"
            name="about"
            rows="4"
            placeholder='Product Ingredients'
            className="appearance-none w-full rounded-3xl border-gray-300 py-3 text-gray-500 shadow-sm placeholder:text-gray-400 px-5 focus:ring-0"
            {...register('ingredients', { required: true })} aria-invalid={errors.ingredients ? 'true' : 'false'}
          ></textarea>
          {errors.ingredients?.type === "required" && (<p role="alert" className=' text-red-500 font-light text-sm p-0 mb-5 px-2'>Product Price is required</p>)}
        </div>

        <div className='flex md:justify-end'>
          <button className='w-full md:w-auto p-2 bg-primary px-10 rounded-3xl text-white mt-5'>Save Product</button>
        </div>

      </form>
    </div>
  )
}

export default AddProduct