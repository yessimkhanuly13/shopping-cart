import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

export const Count = createContext();
export const SetCount = createContext();

function RouteSwitch() {
  
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  
  const addToCart = (item) =>{
    
    if(items.includes(item)){

    }else{
      setItems((prevItems)=>[...prevItems, item]);
      setCount(items.length+1);
    }    
  }

  const removeFromCart = (item) =>{
      const arr = items.filter((el) => el.id !== item.id);
      setCount(items.length-1);
      setItems(arr)
  }

  useEffect(()=>{
    console.log(items)
  },[items])

  return (
    <>
    <SetCount.Provider value={setCount}>
      <Count.Provider value={count}>
        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/product'element={<Products add={addToCart}/>} />
                <Route path='/cart' element={<Cart items={items} removeFromCart={removeFromCart}/>}/>
            </Routes>
        </BrowserRouter>
      </Count.Provider>
      </SetCount.Provider>
    </>
  )
}

export default RouteSwitch