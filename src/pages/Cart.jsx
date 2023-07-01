import React, { useEffect, useState } from 'react'
import CartItems from '../components/CartItems'
import './styles/cart.css'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

function Cart({items, removeFromCart}) {
  const [total, setTotal] = useState(0);
  const calcTotal = (items) =>{
    // setTotal(total + price)
    let sum = 0;
    for(let i = 0; i<items.length; i++){
      sum += items[i].quantity * items[i].price;
      
    }
    let roundedNumber = parseFloat(sum.toFixed(2))
    setTotal(roundedNumber);
  }

  useEffect(()=>{
    calcTotal(items)
  },[items])

  return (
    <div className='Cart'>
      {
        items.map((e)=>(
          <CartItems data={e} removeFromCart={removeFromCart} setTotal={setTotal}/>
        ))
      }
      <p className='total-price'>Total: ${total}</p>
      <Link to="/product"><FaLongArrowAltLeft/></Link>
    </div>
  )
}

export default Cart