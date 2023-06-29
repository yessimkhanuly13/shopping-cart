import React from 'react'
import './style/sidebar.css'

function Sidebar({handleCategory}) {
  return (
    <div className='sidebar'>
            categories
            <li onClick={()=>{handleCategory("")}}>all</li>
              <li onClick={()=>{handleCategory("jewelery")}}>jewelery</li>
              <li onClick={()=>{handleCategory("electronics")}}>electronics</li>
              <li onClick={()=>{handleCategory("men's clothing")}}>men's clothing</li>
              <li onClick={()=>{handleCategory("women's clothing")}}>women's clothing</li>
              price range
              <input type="range" />
    </div>
  )
}

export default Sidebar