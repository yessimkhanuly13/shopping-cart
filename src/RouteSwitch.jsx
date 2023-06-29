import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function RouteSwitch() {
  
  const [items, setItems] = useState([]);
  
  const addToCart = (item) =>{
    const a = items.filter((e)=> e.id === item.id);

    if(a.length !== 0){
      console.log(a)
    }else{
      setItems((prevItems)=>[...prevItems, item]);
    }
    
  }

  useEffect(()=>{
    console.log(items)
  },[items])

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<App/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/product'element={<Products add={addToCart}/>} />
              <Route path='/cart' element={<Cart items={items}/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteSwitch