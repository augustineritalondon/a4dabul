import React from 'react'
import { Breadcrumb, Navbar,Footer } from './components/index'
import { Home, About } from './pages/index'
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Breadcrumb />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
