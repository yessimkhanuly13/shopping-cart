import React from 'react'
import { useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Item from '../components/Item';
import './styles/products.css'

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
        <Navbar/>
        <div className="Productsgrid">
          <div className='sidebar'>
            categories
              <li>jewelery</li>
              <li>electronics</li>
              <li>men's clothing</li>
              <li>women's clothing</li>
              price range
              <input type="range" />
            </div>
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