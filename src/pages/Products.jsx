import React from 'react'
import { useEffect, useState} from 'react';
import Item from '../components/Item';
import './styles/products.css'
import Sidebar from '../components/Sidebar';

function Products({add}) {
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
    <>
        <div className="Productsgrid">
          <Sidebar data={data}/>
          <div className='Products'>
              {data.map((el)=>(
                  <Item data={el} add={add}/>
              ))}
          </div>
        </div>
    </>
  )
}

export default Products