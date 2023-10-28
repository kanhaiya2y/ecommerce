
"use client"
import React, { useState, useEffect } from "react";
import { collection, deleteDoc, doc, getDocs,updateDoc } from "firebase/firestore";
 import { db } from "../../../firebase/firebase";

const Page = () => {
  const [addproduct, setAddProduct] = useState([]);

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

      setAddProduct(productDetails);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);


   const deletehandler = async(id)=>{
     const docref = doc(db,"product",id)
     await deleteDoc(docref)
     fetchDocs();

   }
    const onupdatehalder= async(id)=>{
       try {

        const docref = doc(db,"product",id)
         await updateDoc(docref,{
          price:"kanhaiydhgshya",
         })
          fetchDocs()
        
       } catch (error) {
        
       }
    }

  return (
    <div className="overflow-x-auto">
  <table className="min-w-full border border-5-slate-950 divide-y divide-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Price</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Brand</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Image</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">slug</th>

        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Description</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Weight</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Action</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {addproduct.map((productt) => {
        return (
          <tr key={productt.id}>
            <td className="px-6 py-4 text-sm text-gray-900">{productt.product}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{productt.price}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{productt.brand}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{productt.image}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{productt.slug}</td>

            <td className="px-6 py-4 text-sm text-gray-900">{productt.description}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{productt.weight}</td>
            <td className="px-6 py-4">
              <button
                onClick={() => deletehandler(productt.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none"
              >
                Delete
              </button>
            </td>
            <td className="px-6 py-4">
              <button
                onClick={() =>onupdatehalder(productt.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none"
              >
             Update
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

  );
};

export default Page;
