import React from 'react'

const Button = ({children}) => {
  return (
    <button type='submit' className='bg-primary w-full rounded-full px-3 py-2 text-white text-base text-center font-medium cursor-pointer'>{children}</button>
  )
}

export default Button