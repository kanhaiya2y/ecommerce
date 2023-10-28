
"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Api = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
     
        const response = await fetch("https://fakestoreapi.com/products");
        
          const data = await response.json();
          setProducts(data);
        
         
        
      
    }

    fetchData();
  }, []); 

  console.log(products);

  return (
    <div  className='mt-4'>
    
<div className='grid grid-col-1  lg:grid-cols-4 gap-4 bg-orange-500'>
      {products.map((item) => (
        <Link href={`/${item.id}`}>
        <div key={item.id} className="bg-white rounded-lg  text-2xlshadow-md p-4 hover:text-cyan-300">
        
          <img src={item.image} className='w-full h-auto' />
        
          
          <h1>{item.title}</h1>
          </div>

          </Link>
      ))}
    </div>
    </div>
  );
};

export default Api;
