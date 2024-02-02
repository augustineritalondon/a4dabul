import React from 'react'

const FormInput = ({ type, placeholder, name }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} name={name} className='appearance-none w- w-full rounded-full border border-grey text-e-14 py-3 focus:border-grey placeholder:text-grey my-2 bg-transparent px-5 focus:ring-0' />
        </>
    )
}

export default FormInput