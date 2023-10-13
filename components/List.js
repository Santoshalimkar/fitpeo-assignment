import React from 'react'
import { RiArrowDropDownLine} from "react-icons/ri"
import { AiOutlineSearch} from "react-icons/ai"
import pic from "../public/perpic.jpeg"
import Image from 'next/image'

const List = () => {
  return (
<div className="flex p-2 mt-4 ">
        <div className="bg-white lg:w-[97%] w-full mx-auto h-auto rounded-md p-1 lg:p-3">
          <div className=" flex justify-between items-center ">
             <p className='capitalize font-bold textl-lg'>Product sell</p>
             <div className='flex items-center justify-between lg:gap-16 gap-4'>
                 <div className="flex items-center p-1 gap-2 justify-center">
                   <AiOutlineSearch className='text-sm'/>
                  <input className="outline-none  w-20 h-6 rounded-md placeholder:text-sm" placeholder="search"/>
                 </div>
                <div className="flex items-center justify-center text-xs text-gray-500 gap-1">last 30 days<RiArrowDropDownLine/>
                </div>
             </div>
          </div>
          <div className=" flex justify-between items-center text-gray-500 text-sm pt-2 pb-2 border-b">
          <p className='capitalize '>product name</p>
             <div className='flex  justify-between items-center gap-5 lg:gap-14'>
                <span>Stock</span>
                <span>Prize</span>
                <span>Sales</span>
             </div>
          </div>
          <div className=" flex justify-between items-center text-gray-500 text-sm pt-2 pb-2 ">
          <div className='flex justify-evenly gap-2 items-center'>
              <Image alt='pic' src={pic} className='w-16 h-8 rounded-md ' />
              <div className='flex flex-col'>
                <span className='font-bold text-sm text-black'>image1</span>
                <span className='text-xs font-medium text-gray-500'>description</span>
              </div> 
          </div>
             <div className='flex  justify-between items-start lg:gap-16 gap-8 p-2'>
                <span> 32 in stock</span>
                <span className='text-black font-bold'>$4.8</span>
                <span>20</span>
             </div>
          </div>
          <div className=" flex justify-between items-center text-gray-500 text-sm pt-2 pb-2 ">
          <div className='flex justify-evenly gap-2 items-center'>
              <Image alt='pic' src={pic} className='w-16 h-8 rounded-md ' />
              <div className='flex flex-col'>
                <span className='font-bold text-sm text-black'>image1</span>
                <span className='text-xs font-medium text-gray-500'>description</span>
              </div> 
          </div>
             <div className='flex  justify-between items-start lg:gap-16 gap-8 p-2'>
                <span> 32 in stock</span>
                <span className='text-black font-bold'>$4.8</span>
                <span>20</span>
             </div>
          </div>
          <div className=" flex justify-between items-center text-gray-500 text-sm pt-2 pb-2 ">
          <div className='flex justify-evenly gap-2 items-center'>
              <Image alt='pic' src={pic} className='w-16 h-8 rounded-md ' />
              <div className='flex flex-col'>
                <span className='font-bold text-sm text-black'>image1</span>
                <span className='text-xs font-medium text-gray-500'>description</span>
              </div> 
          </div>
             <div className='flex  justify-between items-start lg:gap-16 gap-8 p-2'>
                <span> 32 in stock</span>
                <span className='text-black font-bold'>$4.8</span>
                <span>20</span>
             </div>
          </div>
          <div className=" flex justify-between items-center text-gray-500 text-sm pt-2 pb-2 ">
          <div className='flex justify-evenly gap-2 items-center'>
              <Image alt='pic' src={pic} className='w-16 h-8 rounded-md ' />
              <div className='flex flex-col'>
                <span className='font-bold text-sm text-black'>image1</span>
                <span className='text-xs font-medium text-gray-500'>description</span>
              </div> 
          </div>
             <div className='flex  justify-between items-start lg:gap-16 gap-8 p-2'>
                <span> 32 in stock</span>
                <span className='text-black font-bold'>$4.8</span>
                <span>20</span>
             </div>
          </div>
          
        </div>
      </div>  )
}

export default List