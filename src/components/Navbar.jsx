import React from 'react'
import './style/navbar.css'
import cart from './assets/grocery-store.png'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='header'>
            <a href='/'>Shopping Cart</a>
        </div>
        <div className='links'>
            <a href='/'>Home</a>
            <a href='/'>Products</a>
            <a href='/'>Contact</a>
            <a href='/profile'><img src={cart} alt='cart'/></a>
        </div>
    </div>
  )
}

export default Navbar