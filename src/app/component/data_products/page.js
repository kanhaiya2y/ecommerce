
"use client"
import React, { useState, useEffect } from 'react';

const  Data_products= () => {
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
        <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
        
          <img src={item.image} className='w-full h-auto' />
        
          
          <h1>{item.title}</h1>
          </div>

       
      ))}
    </div>
    </div>
  );
};

export default Data_products;
