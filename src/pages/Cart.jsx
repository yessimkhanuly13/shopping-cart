import React, { useState } from 'react'
import CartItems from '../components/CartItems'

function Cart({items, removeFromCart}) {
  const [total, setTotal] = useState(0);
  const calcTotal = (price) =>{
    // setTotal(total + price)\
    console.log(total)
  }

  const rmTotal = (price) =>{
    // setTotal(total - price);
    console.log(total)
  }
  return (
    <div>
      <p>Total: {total}$</p>
      {
        items.map((e)=>(
          <CartItems data={e} removeFromCart={removeFromCart} calcTotal={calcTotal} rmTotal={rmTotal}/>
        ))
      }
    </div>
  )
}

export default Cart