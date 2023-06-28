import React from 'react'
import Navbar from '../components/Navbar'
import Item from '../components/Item'

function Cart({items}) {
  return (
    <div>
      <Navbar/>
      {
        items.map((e)=>(
          <Item data={e}/>
        ))
      }
    </div>
  )
}

export default Cart