import React from 'react'

const Button = ({children}) => {
  return (
    <div className='bg-primary rounded-full px-3 py-2 text-white text-base text-center font-medium'>{children}</div>
  )
}

export default Button