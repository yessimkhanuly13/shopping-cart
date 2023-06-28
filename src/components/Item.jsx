import React from 'react'
import './style/item.css'

function Item({data, add}) {
  return (
    <div className='Item'>
      <div className='item-id'>
        <p>{data.title}</p>
        <p>{data.price}$</p>
        <img src={data.image} alt='img'/>
        <button onClick={()=>{add(data)}}>Add to cart</button>
      </div>
    </div>
  )
}

export default Item