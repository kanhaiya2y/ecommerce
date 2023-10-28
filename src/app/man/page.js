

 import Link from 'next/link';
import React from 'react'
 
 const page = async() => {
   async  function productlist(){
     let response= await fetch("https://fakestoreapi.com/products")
      response = await response.json()
       return response
   }
  
       const data = await productlist()
       console.log(data);
    
       return (
        <div  > <h1 class="mb-4 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl bg-gray-500"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-cente">Men </span> Products.</h1>

        
        
    <div className='grid grid-col-1  lg:grid-cols-4 gap-4 mb-5'>
          {data.map((item) => (
             <Link href={`/${item.id}`}  >  

            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 hover:text-red-700">
              <img src={item.image} className='w-full h-auto' />
            
              
         <h1>{item.title}</h1>
              </div>
         </Link>
    
           
          ))}
        </div>
        </div>
      );
    };
 export default page