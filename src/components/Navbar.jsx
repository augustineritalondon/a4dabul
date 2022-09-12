import React, { useState } from 'react'
import image from '../assets/imgs/image'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='bg-white py-3 border-b hidden md:block relative z-10'>
                <div className='w-85 mx-auto flex justify-between'>
                    <ul className='flex self-center'>
                        <li><NavLink to='/' activeclassname="a-active" className='text-base mx-4'>Home</NavLink> </li>
                        <li><NavLink to='about' activeclassname="a-active" className='text-base mx-4'>About</NavLink></li>
                        <li><NavLink to='/services' activeclassname="a-active" className='text-base mx-4'>Services</NavLink></li>

                    </ul>
                    <div className=' w-15 self-center'><img src={image.logo} alt="" /></div>
                    <ul className='flex self-center'>
                        <li><NavLink to='/skin-care' activeclassname="a-active" className='text-base mx-4'>Skin Care</NavLink></li>
                        <li><NavLink to='/contact' activeclassname="a-active" className='text-base mx-4'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className='border-b md:hidden'>
                <div className='py-3 w-90 mx-auto flex justify-between'>
                    <div className=' w-1/4 self-center'><img src={image.logo} alt="" /></div>
                    <div onClick={()=>setIsOpen(!isOpen)}><img src="https://img.icons8.com/ios-filled/30/675D8C/menu--v1.png" /></div>
                </div>
                <div className='content_wrapper bg-primary h-90 w-full grid' style={isOpen ? { height: '90vh' } : { height: "0px" }}>
                    <ul className=' self-start text-right items-center'>
                        <li className=''>
                            <NavLink to='/' onClick={()=>setIsOpen(!isOpen)} className='my-10 flex justify-center text-lg text-white font-medium'>
                                <img src="https://img.icons8.com/material-rounded/25/ffffff/home.png" className='mr-5 h-fit' />
                                Home 
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/about' onClick={()=>setIsOpen(!isOpen)} className='text-lg my-10 text-white font-medium flex justify-center'>
                                <img src="https://img.icons8.com/ios-glyphs/25/ffffff/about.png" className='mr-5' /> 
                                About
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/services' onClick={()=>setIsOpen(!isOpen)} className='text-lg my-10 text-white font-medium flex justify-center'>
                                <img src="https://img.icons8.com/material-rounded/24/ffffff/ingredients-list.png" className='mr-5' /> 
                                Services
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/skin-care' onClick={()=>setIsOpen(!isOpen)} className='text-lg my-10 text-white font-medium flex justify-center'>
                                <img src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/25/ffffff/external-cream-health-beauty-and-fashion-smashingstocks-hand-drawn-black-smashing-stocks-3.png" className='mr-5' /> 
                                Skin Care
                            </NavLink>
                            </li>
                        <li className=''>
                            <NavLink to='/contact' onClick={()=>setIsOpen(!isOpen)} className='text-lg my-10 text-white font-medium flex justify-center' >
                                <img src="https://img.icons8.com/fluency-systems-filled/25/ffffff/duplicate-contacts.png" className='mr-5' /> 
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar