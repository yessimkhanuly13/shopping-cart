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
    const itemIndex = items.findIndex((i) => i.id === item.id);
    if(itemIndex !== -1){
      const updatedItems = [...items];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity + 1
      }
      setItems(updatedItems);
      setCount((prevCount)=>prevCount+1);
    }else{
      const updatedItem = {...item, quantity:1}
      setItems((prevItems)=>[...prevItems, updatedItem]);
      setCount((prevCount)=>prevCount+1);
    }    
  }

  const removeFromCart = (item) =>{
      const arr = items.filter((el) => el.id !== item.id);
      console.log(arr);
      setItems(arr)
  }

  useEffect(()=>{
 
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