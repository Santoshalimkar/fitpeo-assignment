import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"

const Navbar = () => {
  return (
    <nav className='h-12 w-full flex p-1 lg:p-8 items-center justify-between sticky top-0 z-50 bg-white'>
        <div>
          <p className='text-xs lg:text-base font-semibold'> Hello, Santosh </p>
        </div>
        <div className='bg-white rounded-md flex items-center gap-2 p-1 '>
         <AiOutlineSearch/>
         <input className='outline-none p-1 rounded-md ' placeholder='Search'/>
        </div>
    </nav>
  )
}

export default Navbar