import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Profile from './components/Profile'
import Products from './pages/Products'
import Cart from './pages/Cart'

function RouteSwitch() {
  
  const [items, setItems] = useState([]);
  
  const addToCart = (item) =>{
    setItems(...items, item);
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/profile'element={<Profile/>} />
            <Route path='/product'element={<Products add={addToCart}/>} />
            <Route path='/cart' element={<Cart items={items}/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch