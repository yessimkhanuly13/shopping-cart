import React from 'react'
import './style/item.css'

function Item({data, add}) {
  return (
    <div className='Item'>
      <div className='item-id'>
        <p>{data.title}</p>
        <img src={data.image} alt='img'/>
      </div>
      <div>
      <p>{data.price}$</p>
      <button onClick={()=>{add(data)}}>Add to cart</button>
      </div>
    </div>
  )
}

export default Item