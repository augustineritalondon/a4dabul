import React from 'react'

const Banner = ({children}) => {
  return (
    <div className="bg-banner py-10">
        <div className='w-90 mx-auto'>
            {children}
        </div>
    </div>
  )
}

export default Banner