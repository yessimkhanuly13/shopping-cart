import React, { useContext } from 'react'
import './style/navbar.css'
import cart from './assets/grocery-store.png'
import { Link } from 'react-router-dom'
import { Count } from '../RouteSwitch'


function Navbar() {
  const count = useContext(Count);
  return (
    <div className='Navbar'>
        <div className='header'>
            <Link to='/'>Shopping Cart</Link>
        </div>
        <div className='links'>
            <Link to="/product">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to='/cart' className='cart'><div>
              <img src={cart} alt='cart'/>
              <div className='count'>{count}</div>  
            </div></Link>
        </div>
    </div>
  )
}

export default Navbar