import React from 'react'
import { useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Item from '../components/Item';
import './styles/products.css'

function Products() {
    const [data, setData] = useState([]);

  const fetchData = async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const resData = await res.json();
    console.log(resData);
    setData(resData)
  }

  useEffect(()=>{

    fetchData();

  },[])

  return (
    <div>
        <Navbar/>
        <div className='Products'>
            {data.map((el)=>(
                <Item data={el}/>
            ))}
        </div>
    </div>
  )
}

export default Products