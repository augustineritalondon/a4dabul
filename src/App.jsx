import React from 'react'
import { Breadcrumb, Navbar,Footer } from './components/index'
import { Home, About, ServicesPage, Contact, SkinCare } from './pages/index'
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Breadcrumb />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<ServicesPage />} />
        <Route exact path='/skin-care' element={<SkinCare />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
