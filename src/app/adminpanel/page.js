"use client";
import React from "react";

import { useState } from "react";
import { db } from "../../../firebase/firebase";

import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const page = () => {
  const [product, setproduct] = useState("");
  const [brand, setbrand] = useState("");
  const [price, setprice] = useState("");

  const [description, setdescption] = useState("");
  const [weight, setweight] = useState("");
  const [image, setimage] = useState("");
  const [slug, setslug] = useState("");
  const [category, setcategory] = useState("women");

 
  //  const addhandler = async (e) => {
  //     e.preventDefault();

  //     let details = {
  //       product,
  //       brand,
  //       price,
  //       description,
  //       weight,
  //       image,
  //       slug,
  //     };

  //     try {
  //       let collectioproduct = collection(db, "product");
  //       await addDoc(collectioproduct, details);
  //       console.log("Document written with ID: ");
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   };

  // For dynamic firebase id - setdoc
  const addhandler = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "product", slug), {
        product,
        brand,
        price,
        description,
        weight,
        image,
        slug,
        category,
      });
      console.log("Document written with ID: ");
      setRefresh(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="sm:col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=" "
                onChange={(e) => setproduct(e.target.value)}
              ></input>
            </div>

            
            <label
              for="CATEGORY"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an CATEGORY
            </label>
            <select
            value={category}
            onChange={(e)=>{setcategory(e.target.value)}}
              id="CATEGORY"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="women">women</option>
              <option value="men">men</option>
              <option value="jawallery">jawallery</option>
              <option value="perfume">perfume</option>
            </select>

            <div class="sm:col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                IMG URL
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Link"
                required=" "
                onChange={(e) => setimage(e.target.value)}
              ></input>{" "}
            </div>
            <div class="sm:col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                slug
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Link"
                required=" "
                onChange={(e) => setslug(e.target.value)}
              ></input>{" "}
            </div>
            <div class="w-full">
              <label
                for="brand"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand"
                required=""
                onChange={(e) => setbrand(e.target.value)}
              ></input>{" "}
            </div>
            <div class="w-full">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required=""
                onChange={(e) => setprice(e.target.value)}
              ></input>{" "}
            </div>
            {/* <div>
              <label
                for="item-weight"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Item Weight (kg)
              </label>
              <input
                type="number"
                name="item-weight"
                id="item-weight"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="12"
                required=""
                onChange={(e) => setweight(e.target.value)}
              ></input>{" "}
            </div> */}
            <div class="sm:col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="8"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
                onChange={(e) => setdescption(e.target.value)}
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            onClick={addhandler}
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
