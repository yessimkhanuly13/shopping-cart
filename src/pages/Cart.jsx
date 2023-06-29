import React from 'react'
import CartItems from '../components/CartItems'

function Cart({items}) {
  return (
    <div>
      <p>Total:</p>
      {
        items.map((e)=>(
          <CartItems data={e}/>
        ))
      }
    </div>
  )
}

export default Cart