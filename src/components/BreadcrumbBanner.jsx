import React from 'react'

const BreadcrumbBanner = ({name}) => {
  return (
    <div className='bg-lightBanner py-5 lg:py-12 2xl:py-14 relative overflow-hidden'>
        <div className='bg-secondary w-20 h-20 lg:w-40 lg:h-40 xl:w-195 xl:h-195 rounded-full absolute -top-20-a xl:-top-3/4 left-1/2'></div>
        <div className='bg-secondary w-32 h-32 lg:w-80 lg:h-80 xl:w-445 xl:h-445 rounded-full absolute'></div>
        <h1 className='relative z-10 text-center font-Montserrat text-primary text-3xl xl:text-4xl'>{name}</h1>
    </div>
  )
}

export default BreadcrumbBanner