import React from 'react'
import Item from '../components/Item'

function Cart({items}) {
  return (
    <div>
      {
        items.map((e)=>(
          <Item data={e}/>
        ))
      }
    </div>
  )
}

export default Cart