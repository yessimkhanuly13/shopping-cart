import React, { useContext } from 'react'
import './style/cartitems.css'
import { Count, SetCount } from '../RouteSwitch';
import { FaMinus, FaPlus } from 'react-icons/fa'

function CartItems({data, removeFromCart, setTotal}) {
    const setCount = useContext(SetCount)
    const count = useContext(Count)
    const increment = () =>{
        // setTotal((prevTotal)=>prevTotal - amount * data.price)
        setCount(count+1);
        setTotal((prevTotal)=> prevTotal + data.price)
        data.quantity++;
        // calcTotal(data.price);
    }
    const decrement = () =>{
        if(data.quantity >= 1){
            setCount(count-1);
            data.quantity--;
            console.log(data.quantity)
            setTotal((prevTotal)=>prevTotal - data.price)
        }
        if(data.quantity < 1){
            removeFromCart(data)
        }
    }

  return (
    <div className='cartitems'>
        <p>{data.title}</p>
        <p>${data.price}</p>
        <img src={data.image} alt="" />
        <div className='bot-block'>
            <button className='btn-inc-dec' onClick={()=>{increment()}}><FaPlus/></button>
            <p>{data.quantity}</p>
            <button className='btn-inc-dec' onClick={()=>{decrement()}}><FaMinus/></button>
        </div>
    </div>
  )
}

export default CartItems