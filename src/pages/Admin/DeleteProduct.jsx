import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../state/productSlice'
import { deleteProducts } from '../../../service'
import { toast } from 'react-toastify';
import { getProducts } from '../../../service';


const DeleteProduct = () => {

    const products = useSelector(state => state.products.product)
    const categories = useSelector(state => state.products.category)
    const dispatch = useDispatch()

    const [cat, setCat] = useState()
    const [id, setId] = useState()

    const catList = products.filter(item => item.category == cat)


    const deleteProduct = (e) => {
        e.preventDefault()

        deleteProducts(id).then(() => {
            toast('Successfully Deleted!', { hideProgressBar: true, autoClose: 3000, type: 'success' })
            getProducts().then((res) => {
                const productsArray = [];
                res.forEach((doc) => {
                    productsArray.push(doc.data());
                });
                dispatch(addProduct(productsArray));
            });
        })

    }

    return (
        <div className='md:w-90 bg-lightPrimary p-8 rounded-2xl mx-auto'>
            <h1 className='font-bold text-2xl'>Delete Product</h1>
            <form onSubmit={(e) => deleteProduct(e)}>

                <div className='grid md:grid-cols-2 gap-5 my-4'>
                    <select id="category" name="category" onChange={(e) => setCat(e.target.value)} autoComplete="category" placeholder='Product Category' className="appearnce-none w-full rounded-full bg-white border-gray-300 py-3 text-gray-500 focus:border-gray-300 focus:ring-0 my-2 bg-transparent px-5 ">
                        <option>Product Category</option>
                        {
                            categories.map((item, idx) => (
                                <option key={idx}>{item.name}</option>
                            ))
                        }
                    </select>
                    <select id="category" name="category" onChange={(e) => setId(e.target.value)} autoComplete="category" placeholder='Product Category' className="appearnce-none w-full rounded-full bg-white border-gray-300 py-3 text-gray-500 focus:border-gray-300 focus:ring-0 my-2 bg-transparent px-5 ">
                        <option >Product Name</option>
                        {
                            catList.map((item, idx) => (
                                <option key={idx} value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>


                <div className=' md:flex md:justify-end'>
                    <button className='w-full md:w-auto p-2 bg-primary px-10 rounded-3xl text-white mt-5'>Delete Product</button>
                </div>

            </form>
        </div>
    )
}

export default DeleteProduct