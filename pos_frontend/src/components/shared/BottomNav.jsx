import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder } from 'react-icons/md'
import { MdTableBar } from 'react-icons/md'
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around'>
      <button className='flex justify-center items-center text-[#f5f5f5] w-[200px] rounded-[25px] bg-[#343434]'><FaHome className='inline mr-4' size={30}/> <p>Home</p></button>
      <button className='flex justify-center items-center text-[#f5f5f5] w-[200px] rounded-[25px]'><MdOutlineReorder className='inline mr-4' size={30}/> <p>Orders</p></button>
      <button className='flex justify-center items-center text-[#f5f5f5] w-[200px] rounded-[25px]'><MdTableBar className='inline mr-4' size={30}/> <p>Tables</p></button>
      <button className='flex justify-center items-center text-[#f5f5f5] w-[200px] rounded-[25px]'><CiCircleMore className='inline mr-4' size={30}/> <p>More</p></button>

      <button className='absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3'>
        <BiSolidDish size={30}/>
      </button>
    </div>
  )
}

export default BottomNav