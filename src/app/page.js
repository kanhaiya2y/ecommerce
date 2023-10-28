
"use client"
import React, { useState, useEffect } from "react";
import Headeradd from './component/Headeradd';
import Slider from './component/Slider';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Link from "next/link";

const Page = () => {
  const [addproduct, setAddProduct] = useState([]); // Define and initialize addproduct state as an array

  const fetchDocs = async () => {
    try {
      const productCollection = collection(db, "product");
      const querySnapshot = await getDocs(productCollection);
      const productDetails = [];

      querySnapshot.forEach((doc) => {
        productDetails.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setAddProduct(productDetails); // Set the state with fetched data
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  console.log(addproduct);

  return (
    <main>
      <Headeradd />
      <Slider />
      <div className="text-4xl bg-black">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Products
          </span>{" "}
          <span className="text-emerald-600">Affordable Price</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {addproduct.map((item) => (
          <Link key={item.id} href={`/${item.slug}`}>
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img src={item.image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                 
                  <p className="text-lg font-bold text-black truncate block capitalize">Product: {item.product}</p>
                  <p className="text-lg font-bold text-black truncate block capitalize">Weight: {item.weight}</p>
                  <p className="text-lg font-bold text-black truncate block capitalize">Brand: {item.brand}</p>
                  <p className="text-lg font-bold text-black truncate block capitalize">Price: {item.price}</p>
                  <p className="text-lg font-bold text-black truncate block capitalize">Description: {item.description}</p>
                  <div className="flex items-center">
                   
                    
                  </div>
                </div>
              </a>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
