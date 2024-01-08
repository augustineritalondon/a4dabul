import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../state/productSlice'
import { updateProducts, getProducts } from '../../../service'
import { toast } from 'react-toastify';


const UpdateProducts = () => {

    const dispatch = useDispatch()

    const all_products = useSelector(state => state.products.product)
    const categories = useSelector(state => state.products.category)

    const [cat, setCat] = useState()
    const [product, setProduct] = useState()


    const categoryList = all_products.filter(item => item.category == cat)

    const [valueToUpdate, setValueToUpdate] = useState()

    useEffect(() => {

        const filteredProduct = all_products.find(item => item.name === product);
        const objectResult = { ...(filteredProduct || {}) };

        setValueToUpdate(objectResult)
    }, [product])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValueToUpdate({ ...valueToUpdate, [name]: value })

    };

    const updateProduct = (e) => {
        e.preventDefault()

        updateProducts(valueToUpdate).then((res) => {
            if (res) {
                toast('Successfully Updated!', { hideProgressBar: true, autoClose: 3000, type: 'success' })
                getProducts().then((res) => {
                    const productsArray = [];
                    res.forEach((doc) => {
                        productsArray.push(doc.data());
                    });
                    dispatch(addProduct(productsArray));
                });
            }
        })
    }

    return (
        <div className='md:w-90 bg-lightPrimary p-8 rounded-2xl mx-auto'>
            <h1 className='font-bold text-2xl'>Update Product</h1>

            <form>
                <div className='grid md:grid-cols-2 gap-5 my-4'>
                    <select id="category" name="category" autoComplete="category" placeholder='Product Category' className="appearnce-none w-full rounded-full bg-white border-gray-300 py-3 text-gray-500 focus:border-gray-300 focus:ring-0 my-2 bg-transparent px-5 "
                        onChange={(e) => setCat(e.target.value)}
                    >
                        <option>Select Product Category</option>
                        {
                            categories.map((item, idx) => (
                                <option key={idx}>{item.name}</option>
                            ))
                        }
                    </select>
                    <select id="category" name="category" autoComplete="category" placeholder='Product Category' className="appearnce-none w-full rounded-full bg-white border-gray-300 py-3 text-gray-500 focus:border-gray-300 focus:ring-0 my-2 bg-transparent px-5 "
                        onChange={(e) => setProduct(e.target.value)}
                    >
                        <option>Select Product Name</option>
                        {
                            categoryList.map((item, idx) => (
                                <option key={idx}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
            </form>

            <hr className='w-full border' />

            <form onSubmit={(e) => updateProduct(e)}>
                {
                    valueToUpdate &&
                    <>
                        <input type='text' placeholder='Product Name' value={valueToUpdate?.name} onChange={(e) => handleInputChange(e)} name='name' className='appearance-none w-full rounded-full bg-white border-gray-300 text-e-14 py-3 focus:border-gray-300 placeholder:text-grey my-2 bg-transparent px-5 focus:ring-0 ' />

                        <div className="my-4">
                            <textarea value={valueToUpdate?.description} onChange={(e) => handleInputChange(e)} name="description" rows="4" placeholder='Product Description' className="appearance-none w-full rounded-3xl border-gray-300 py-3 text-gray-500 shadow-sm placeholder:text-gray-400 px-5 focus:ring-0"></textarea>
                        </div>

                        <div className='grid md:grid-cols-2 gap-5 my-4'>
                            <input type='text' value={valueToUpdate?.price} onChange={(e) => handleInputChange(e)} placeholder='Product Price' name='price' className='appearance-none w-full rounded-full bg-white border-gray-300 text-e-14 py-3 focus:border-gray-300 placeholder:text-grey my-2 bg-transparent px-5 focus:ring-0 ' />

                            <input type='text' placeholder='Product Image' value={valueToUpdate?.image} onChange={(e) => handleInputChange(e)} name='image' className=' cursor-pointer appearance-none w-full rounded-full bg-white border-gray-300 text-e-14 py-3 focus:border-gray-300 placeholder:text-grey my-2 bg-transparent px-5 focus:ring-0 ' />
                        </div>

                        <div className="my-4">
                            <textarea name="ingredients" rows="4" value={valueToUpdate?.ingredients} onChange={(e) => handleInputChange(e)} placeholder='Product Description' className="appearance-none w-full rounded-3xl border-gray-300 py-3 text-gray-500 shadow-sm placeholder:text-gray-400 px-5 focus:ring-0"></textarea>
                        </div>

                        <div className='flex justify-end'>
                            <button className='w-full md:w-auto p-2 bg-primary px-10 rounded-3xl text-white mt-5'>Update Product</button>
                        </div>
                    </>
                }

            </form>
        </div>
    )
}

export default UpdateProducts