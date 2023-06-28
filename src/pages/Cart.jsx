import React from 'react'
import Navbar from '../components/Navbar'

function Cart({items}) {
  return (
    <div>
      <Navbar/>
      {
        items.map((e)=>(
          <li>{e.title}</li>
        ))
      }
      <button onClick={()=>{console.log(items)}}>click</button>
    </div>
  )
}

export default Cart