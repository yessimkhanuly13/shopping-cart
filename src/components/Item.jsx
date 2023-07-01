import React from 'react'
import './style/item.css'
import { FaCartPlus } from 'react-icons/fa'

function Item({data, add}) {
  return (
    <div className='Item'>
      <div className='item-top'>
        <p>{data.title}</p>
        <img src={data.image} alt='img'/>
      </div>
      <div className='item-bot'>
      <p>${data.price}</p>
      <button className="cartadd" onClick={()=>{add(data)}}><FaCartPlus/></button>
      </div>
    </div>
  )
}

export default Item