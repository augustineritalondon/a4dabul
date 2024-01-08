import React, {useEffect} from 'react'
import { Breadcrumb } from './components/index'
import { Home, About, ServicesPage, Contact, SkinCare, SkinCareDetails, Dashboard, Login, Dindex, 
          AddProduct, DeleteProduct, UpdateProduct, AllProducts, ProductDetails, NotFound } from './pages/index'
import { Routes, Route } from 'react-router-dom';
import { addProduct, addCategory } from './state/productSlice'
import { getProducts, getCategories } from '../service'
import { useDispatch } from 'react-redux';
import PrivateRoute from './Private';


function App() {

  const dispatch = useDispatch()

  const token = sessionStorage.getItem('token')

  useEffect(() => {
    getProducts().then((res) => {
      const productsArray = [];
      res.forEach((doc) => {
        productsArray.push({id:doc.id, ...doc.data()});
      });
      dispatch(addProduct(productsArray));
      console.log(productsArray)
    });

    getCategories().then((res) => {
      const categoryArray = [];
      res.forEach((doc) => {
        categoryArray.push(doc.data());
      });
      dispatch(addCategory(categoryArray));
    })
  }, [])

  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<ServicesPage />} />
        <Route exact path='/skin-care' element={<SkinCare />} />
        <Route exact path='/skin-care/:name' element={<SkinCareDetails />} />
        <Route exact path='/contact' element={<Contact />} />


        {/* dashboard pages */}
        <Route exact path="/admin/login" element={<Login />} />

        {/* <Route path="/superadmin-home" element={<ProtectedRoute isAllowed={!!loggedIn}  > <SuperAdminHome /> </ProtectedRoute>}></Route> */}

        <Route path='/admin/dashboard' element={<PrivateRoute token> <Dashboard /> </PrivateRoute> }>
          <Route index element={<Dindex />} />
          <Route path="home" element={<Dindex />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="delete-product" element={<DeleteProduct />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="all-products/:name" element={<ProductDetails />} />
          <Route path="update-product" element={<UpdateProduct />} />
        </Route>


        <Route component={NotFound} />
      </Routes>
    </>
  )
}

export default App
