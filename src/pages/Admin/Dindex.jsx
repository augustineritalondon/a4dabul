import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { capitalize } from '../../utils/helper'

const Dindex = () => {

    const products = useSelector(state => state.products.product)
    const categories = useSelector(state => state.products.category)
    
    const navigate = useNavigate()
    const viewProducts = (cat) => {
        localStorage.setItem('category', cat)
        navigate(`/admin/dashboard/all-products`)
    }


    return (
        <div className='w-90 mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    categories.map((item, idx) => (
                        <div key={idx} className='bg-lightPrimary p-5 rounded-2xl text-center'>
                            <h1 className='font-bold text-3xl'>{products.filter(cat => cat.category === item.name).length}</h1>
                            <p className=' text-lg text-gray-500 my-2'>{capitalize(item.name)}</p>
                            <button className='bg-primary text-white p-1 px-5 rounded-full cursor-pointer hover:bg-white hover:text-primary' onClick={()=> viewProducts(item.name)}>View all</button>
                        </div>
                    ))
                }
            </div>

            <div className='mt-8 bg-primary p-5 rounded-xl text-white'>
                <h1 className=' text-xl'>To view number of people that accessed your website in the past week, please click on the link below:</h1>
                <div className='my-4'>
                    <a href="https://analytics.google.com/analytics/web/#/p376272007/reports/intelligenthome" target='_blank' className=' bg-lightPrimary p-2 px-5 text-primary border-0 rounded-xl cursor-pointer'>Visit here</a>
                </div>
                <div>
                    <h1 className=' underline italic'>Login Details:</h1>
                    <p>Email: a4dabul@gmail.com</p>
                    <p>Password: a4dabul.com</p>
                </div>
            </div>
        </div>
    )
}

export default Dindex