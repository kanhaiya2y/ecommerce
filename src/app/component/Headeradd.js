import React from 'react'
 
import { BiUser ,BiHeart} from 'react-icons/bi'
import { HiOutlineShoppingBag} from 'react-icons/hi'


const headeradd = () => {
  return (

    <div className="bg-gray-400 p-3 flex justify-center items-center">
      
      <img
                        className="
                         bg-red-400 h-30 w-40 rounded-full"
                        src="aa.png"
                        alt="image slide 3"
                    />
      
    <form action="/search" className="justify-between w-full px-5">
        <div >
            <input type="text" name="q" className="w-full text-center border-black  shadow p-3  rounded-full text-4xl mr-18" placeholder="search your product"></input>
            <button type="submit">
                
        </button>
        </div>
    </form>


    <div className='ml-5 text-5xl flex space-x-9'>
    <BiUser/>
    
  <  BiHeart/>
  <HiOutlineShoppingBag/>
  </div>
    
</div>



  )
}

export default headeradd