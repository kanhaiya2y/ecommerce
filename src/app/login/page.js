"use client";
import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

const Pages = () => {
  const [email, setemail] = useState(null);
  const [passward, setpassward] = useState(null);

  const loginhandler = async (e) => {
    if (!email || !passward) return;
    {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          passward
        );
        console.log(user);
      } catch (error) {
        console.log("Error", error);
      }
    }
    let userdetails = {
      email,
      passward,
    };

    try {
      let collectionpath = collection(db, "users");
      await addDoc(collectionpath, userdetails);

      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const googlhandler = async () => {
    const user = await signInWithPopup(auth, provider);
    console.log(user);

    let userdetails = {
      email,
      passward,
    };

    try {
      let collectionpath = collection(db, "users");
      await addDoc(collectionpath, userdetails);

      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div class="flex flex-wrap">
      <div class="flex w-full flex-col md:w-1/2">
        <div class="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
          <a
            href="https://www.instagram.com/kanhaiyaverma4y/"
            class="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900"
          >
            {" "}
            Touch with us{" "}
          </a>
        </div>
        <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p class="text-left text-3xl font-bold">Welcome back</p>
          <p class="mt-2 text-left text-gray-500">
            Welcome back, please enter your details.
          </p>
          <button
            class="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"
            onClick={googlhandler}
          >
            <img
              class="mr-2 h-5"
              src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
              alt
            />{" "}
            Log in with Google
          </button>
          <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div class="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
              or
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            class="flex flex-col pt-3 md:pt-8"
          >
            <div class="flex flex-col pt-4">
              <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="email"
                  id="login-email"
                  class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email required"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
            </div>
            <div class="mb-12 flex flex-col pt-4">
              <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="password"
                  id="login-password"
                  class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                  onChange={(e) => setpassward(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              class="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
              onClick={loginhandler}
            >
              Log in
            </button>
          </form>
          <div class="py-12 text-center">
            <p class="whitespace-nowrap text-gray-600">
              Don't have an account?
              <a
                href="#"
                class="underline-offset-4 font-semibold text-gray-900 underline"
              >
                Sign up for free.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <img
          class="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
          src="aa.png"
        />
      </div>
    </div>
  );
};

export default Pages;
