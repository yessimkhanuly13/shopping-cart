import React from 'react'
import './style/sidebar.css'

function Sidebar({data}) {
  return (
    <div className='sidebar'>
            categories
              <li onClick={()=>{console.log(data[1].category)}}>jewelery</li>
              <li>electronics</li>
              <li>men's clothing</li>
              <li>women's clothing</li>
              price range
              <input type="range" />
    </div>
  )
}

export default Sidebar