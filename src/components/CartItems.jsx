import React, { useContext, useState } from 'react'
import './style/cartitems.css'
import { Count, SetCount } from '../RouteSwitch';

function CartItems({data, removeFromCart, calcTotal, rmTotal}) {
    const [amount, setAmount] = useState(1);
    const setCount = useContext(SetCount)
    const count = useContext(Count)
    // calcTotal(data.price);
    const increment = () =>{
        setAmount(amount + 1);
        setCount(count+1);
        // calcTotal(data.price);
    }
    const decrement = () =>{
        if(amount > 1){
            setAmount(amount - 1)
            setCount(count-1);
            // rmTotal(data.price)
        }
        if(amount === 1){
            // rmTotal(data.price)
            removeFromCart(data)
        }
    }

  return (
    <div className='cartitems'>
        <p>{data.title}</p>
        <p>{data.price}$</p>
        {/* <img src="" alt="" /> */}
        <div className='bot-block'>
            <button onClick={()=>{increment()}}>add</button>
            <p>{amount}</p>
            <button onClick={()=>{decrement()}}>remove</button>
        </div>
    </div>
  )
}

export default CartItems