import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const all_products = useSelector(state => state.products.product)
    const { name } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        // if (name) setProduct(all_products.filter(item => item.name == name))
        if (name) {
            const filteredProducts = all_products.filter(item => item.name === name);
            const productObject = filteredProducts.length > 0 ? filteredProducts[0] : null;
            setProduct(productObject);
        }
    }, [])


    return (
        <>
            {
                product &&
                <>
                    <div className=' w-2/5 border-2 border-primary shadow-sm'>
                        <img src={product.image} />
                    </div>

                    <div>
                        <h1 className=' text-2xl pt-4 font-bold text-primary'>{product.name}</h1>
                        <p className='pt-2 text-xl'>₦{(parseInt(product.price)).toLocaleString()}</p>

                        <div className='mt-4'>
                            <p className='text-primary text-xl'>Description:</p>
                            <p className=' text-lg'>{product.description}</p>
                        </div>

                        <div className='mt-5 bg-lightPrimary p-3 rounded-lg'>
                            <p>Ingredients:</p>
                            <p>{product.ingredients}</p>
                        </div>
                    </div>

                </>
            }
        </>
    )
}

export default ProductDetails