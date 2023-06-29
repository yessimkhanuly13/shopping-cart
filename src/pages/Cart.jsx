import React from 'react'
import CartItems from '../components/CartItems'

function Cart({items}) {
  return (
    <div>
      {
        items.map((e)=>(
          <CartItems data={e}/>
        ))
      }
    </div>
  )
}

export default Cart