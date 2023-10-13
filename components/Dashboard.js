import React from 'react'
import {VscDashboard} from "react-icons/vsc"
import {AiOutlineRight} from "react-icons/ai"
import {RxDashboard} from "react-icons/rx"
import Image from 'next/image'
import pic from "../public/perpic.jpeg"

const Dashboard = () => {
  return (
    <aside className='hidden h-screen sticky top-0 bg-indigo-950 p-4 w-12 lg:w-60 lg:flex lg:flex-col justify-between'>
       <div className='flex flex-col gap-8 p-1 lg:p-2 '>
          <div className='flex gap-2 items-center '>
           <RxDashboard className='text-white '/>
           <p className='hidden lg:flex text-lg text-gray-200 font-semibold'> Dashboard</p>
          </div>
         <div className='flex flex-col gap-2 text-white'>
            <div className='flex justify-between  items-center bg-indigo-500  p-1 lg:p-2 rounded-md'>
               <div className='flex items-center gap-2'>
                <VscDashboard /> 
                <p className=' text-xs font-medium'>Dashboard</p>
               </div>
            <AiOutlineRight className='font-medium text-xs'/>
            </div>
            <div className='flex justify-between  items-center  p-2 rounded-md'>
               <div className='flex items-center gap-2'>
                <VscDashboard /> 
                <p className='font-medium text-xs'>Products</p>
               </div>
            <AiOutlineRight className='text-xs'/>
            </div>
            <div className='flex justify-between  items-center  p-2 rounded-md'>
               <div className='flex items-center gap-2'>
                <VscDashboard /> 
                <p className='font-medium text-xs'>Customers</p>
               </div>
            <AiOutlineRight className='text-xs'/>
            </div>
           
            <div className='flex justify-between  items-center  p-2 rounded-md'>
               <div className='flex items-center gap-2'>
                <VscDashboard /> 
                <p className='text-xs font-medium'>Income</p>
               </div>
            <AiOutlineRight className='text-xs'/>
            </div>
            <div className='flex justify-between  items-center  p-2 rounded-md'>
               <div className='flex items-center gap-2'>
                <VscDashboard /> 
                <p className='text-xs font-medium'>Promote</p>
               </div>
            <AiOutlineRight className='text-xs'/>
            </div>
            <div className='flex justify-between  items-center  p-2 rounded-md'>
               <div className='flex items-center gap-2'>
                <VscDashboard  /> 
                <p className='text-xs font-medium'>Help</p>
               </div>
            <AiOutlineRight className='text-xs'/>
            </div>
           
         </div>
       </div>
       <div className='flex items-center justify-between bg-indigo-500 p-2 rounded-md'>
        <div className='flex items-center gap-2'>
          <Image src={pic} className='h-8 w-8 rounded-full'/>
          <div className='flex flex-col items-start justify-start '>
            <span className='text-xs text-white font-semibold'>Santosh </span>
            <span className='text-xs text-gray-300'>developer</span>
          </div>
        </div>
        <AiOutlineRight className='text-xs text-white'/>
       </div>
    </aside>
  )
}

export default Dashboard