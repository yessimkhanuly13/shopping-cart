import React from 'react'
import './style/sidebar.css'

function Sidebar({handleCategory}) {
  return (
    <div className='sidebar'>
            <li onClick={()=>{handleCategory("")}}>All</li>
            <li onClick={()=>{handleCategory("jewelery")}}>Jewelery</li>
            <li onClick={()=>{handleCategory("electronics")}}>Electronics</li>
            <li onClick={()=>{handleCategory("men's clothing")}}>Men's clothing</li>
            <li onClick={()=>{handleCategory("women's clothing")}}>Women's clothing</li>
    </div>
  )
}

export default Sidebar