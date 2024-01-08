import React, { useState, useEffect } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOutAuth } from '../../../service'

const Dashboard = () => {

  const dispatch = useDispatch()



  const navigate = useNavigate()
  const [active, setActive] = useState('dashboard')

  const handleRoute = (name, url) => {
    setActive(name)
    navigate(url)
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleListClick = (name, url) => {
    handleRoute(name, url)
    setMenuOpen(false)
  }

  const handleSignOut = () => {
    signOutAuth().then(()=> {
      navigate('/admin/login')
    })
  }

  return (
    <div className='h-screen'>
      <div className='bg-white text-primary border-b border-primary py-5'>
        <div className='text-center'>
          <h2 className='text-xl'>A4dabul</h2>
        </div>
      </div>

      <div className='lg:hidden p-4 text-primary cursor-pointer' onClick={handleToggleMenu}>
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/150/menu--v1.png" alt="menu--v1" />
      </div>

      <div className='main w-full lg:flex'>
        <div className={`side h-screen lg:w-1/5 bg-primary p-5 flex ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className='w-full '>
            <li className={`bg-white my-8 p-3 border-none rounded-3xl text-center cursor-pointer text-primary font-bold ${active == 'dashboard' && 'bg-purple-200 !text-yellow'} `} onClick={() => handleListClick('dashboard', 'home')}>Dashboard</li>
            <li className={`bg-white my-8 p-3 border-none rounded-3xl text-center cursor-pointer text-primary font-bold ${active == 'add-product' && 'bg-purple-200 !text-yellow'} `} onClick={() => handleListClick('add-product', 'add-product')}>Add Product</li>
            <li className={`bg-white my-8 p-3 border-none rounded-3xl text-center cursor-pointer text-primary font-bold ${active == 'delete-product' && 'bg-purple-200 !text-yellow'} `} onClick={() => handleListClick('delete-product', 'delete-product')}>Delete Product</li>
            <li className={`bg-white my-8 p-3 border-none rounded-3xl text-center cursor-pointer text-primary font-bold ${active == 'all-products' && 'bg-purple-200 !text-yellow'} `} onClick={() => handleListClick('all-products', 'all-products')}>View All Products</li>
            <li className={`bg-white my-8 p-3 border-none rounded-3xl text-center cursor-pointer text-primary font-bold ${active == 'update-product' && 'bg-purple-200 !text-yellow'} `} onClick={() => handleListClick('update-product', 'update-product')}>Update products</li>
            <li className={`bg-white my-8 p-3 border-none rounded-3xl text-center cursor-pointer text-primary font-bold `} onClick={handleSignOut}>Logout</li>
          </ul>
        </div>
        <div className='content p-4 md:p-8 lg:w-4/5'>
          <Outlet />
        </div>
      </div>


    </div>
  )
}

export default Dashboard