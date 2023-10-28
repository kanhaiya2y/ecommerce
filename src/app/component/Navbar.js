import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black flex items-center justify-between flex-wrap p-4 text-4xl">
  <ul className="flex flex-wrap space-x-8 text-white">
    <li className=" text-opacity-10">
      <Link href="/" className="hover:text-yellow-700">
        HOME
      </Link>
    </li>

    <li>
      <Link href="/Catogery" className=" hover:text-red-700">
        CATEGORY'S
      </Link>
    </li>

    <li>
      <Link href="/women" className=" hover:text-green-700">
        WOMEN
      </Link>
    </li>
    <li>
      <Link href="/man" className=" hover:text-cyan-400">
        MEN
      </Link>
    </li>

    <li>
      <Link href="/jelewery" className=" hover:text-blue-700">
        JELEWERY
      </Link>
    </li>

    <li>
      <Link href="/perfum" className=" hover:text-red-700">
        PERFUM
      </Link>
    </li>

    <li>
      <Link href="/blog" className=" hover:text-orange-500">
        BLOG
      </Link>
    </li>

    <li>
      <Link href="/login" className=" hover:text-teal-700">
        SINGIN/LOGIN
      </Link>
    </li>
  </ul>
</div>

  );
};

export default Navbar;
