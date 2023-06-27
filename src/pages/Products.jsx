import React from 'react'
import { useEffect, useState} from 'react';
import Navbar from '../components/Navbar';

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
        {data.map((el)=>(
        <li>{el.price}</li>
      ))}
    </div>
  )
}

export default Products