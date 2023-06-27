import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Profile from './components/Profile'
import Products from './pages/Products'

function RouteSwitch() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/profile'element={<Profile/>} />
            <Route path='/product'element={<Products/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch