import React, { useContext } from 'react'
import './style/cartitems.css'
import { Count, SetCount } from '../RouteSwitch';

function CartItems({data, removeFromCart, setTotal}) {
    const setCount = useContext(SetCount)
    const count = useContext(Count)
    const increment = () =>{
        // setTotal((prevTotal)=>prevTotal - amount * data.price)
        setCount(count+1);
        setTotal((prevTotal)=> prevTotal + data.price)
        data.quantity++;
        // calcTotal(data.price);
        console.log(data.quantity)
    }
    const decrement = () =>{
        if(data.quantity > 1){
            setCount(count-1);
            data.quantity--;
            // rmTotal(data.price)
        }
        if(data.quantity === 1){
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
            <p>{data.quantity}</p>
            <button onClick={()=>{decrement()}}>remove</button>
        </div>
    </div>
  )
}

export default CartItems