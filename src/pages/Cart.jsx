import React, { useEffect, useState } from 'react'
import CartItems from '../components/CartItems'

function Cart({items, removeFromCart}) {
  const [total, setTotal] = useState(0);
  const calcTotal = (items) =>{
    // setTotal(total + price)
    let sum = 0;
    for(let i = 0; i<items.length; i++){
      sum += items[i].quantity * items[i].price;
    }
    setTotal(sum);
  }

  useEffect(()=>{
    calcTotal(items)
  },[items])

  return (
    <div>
      <p>Total: {total}$</p>
      {
        items.map((e)=>(
          <CartItems data={e} removeFromCart={removeFromCart} setTotal={setTotal}/>
        ))
      }
    </div>
  )
}

export default Cart