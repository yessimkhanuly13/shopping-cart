import React from 'react'
import './style/navbar.css'
import cart from './assets/grocery-store.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='header'>
            <Link to='/'>Shopping Cart</Link>
        </div>
        <div className='links'>
            <Link to="/product">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to='/cart'><img src={cart} alt='cart'/></Link>
        </div>
    </div>
  )
}

export default Navbar