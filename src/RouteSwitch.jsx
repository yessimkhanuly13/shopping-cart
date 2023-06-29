import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

export const Count = createContext();

function RouteSwitch() {
  
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  
  const addToCart = (item) =>{
    
    setItems((prevItems)=>[...prevItems, item]);
    setCount(items.length+1);
    
  }

  useEffect(()=>{
    console.log(items)
  },[items])

  return (
    <>
    <Count.Provider value={count}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<App/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/product'element={<Products add={addToCart}/>} />
              <Route path='/cart' element={<Cart items={items}/>}/>
          </Routes>
      </BrowserRouter>
      </Count.Provider>
    </>
  )
}

export default RouteSwitch