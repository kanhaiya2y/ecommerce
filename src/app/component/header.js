import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Header = () => {
  
    return (
      <div className="bg-rose-400 w-full mt-1 p-4 sm:p-8 lg:p-12"> {/* Added responsive padding */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 items-center text-5xl rounded-xl">
          <div className="flex space-x-4 sm:space-x-11"> {/* Adjusted spacing for different screen sizes */}
            <Link href="https://www.instagram.com/kanhaiyaverma4y/"><BsFacebook /></Link>
            <Link href=""><BsInstagram /></Link>
            <Link href="https://www.linkedin.com/in/kanhaiya-verma-ba514b265"><BsLinkedin /></Link>
          </div>
          <div className="w-full sm:w-9/12 rounded-xl text-center text-5xl"> {/* Center text and adjust width for small screens */}
            <h1>Sale !! Big Billion Days Flipkart !!</h1>
          </div>
          <div className="inline-flex items-end ml-4 sm:ml-0 space-x-4 text-5xl"> {/* Adjusted spacing and alignment */}
            {/* Your select and option elements can be added back here if needed */}
          </div>
        </div>
      </div>
    );
    
  

  
}

export default Header;
