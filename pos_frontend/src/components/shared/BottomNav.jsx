import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder } from 'react-icons/md'
import { MdTableBar } from 'react-icons/md'
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

const BottomNav = () => {

  const navigate = useNavigate();

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-12 flex justify-around'>

      {/* Home Button */}
      <button onClick={() => navigate("/")} className='flex justify-center text-sm items-center text-[#f5f5f5] w-[150px] rounded-[25px] bg-[#343434]'><FaHome className='inline mr-4' size={20}/><p>Home</p></button>

      {/* Order Page */}
      <button onClick={() => navigate("/orders")} className='flex justify-center text-sm items-center text-[#f5f5f5] w-[200px] rounded-[25px]'><MdOutlineReorder className='inline mr-4' size={20}/><p>Orders</p></button>

      {/* Tables Page */}
      <button onClick={() => navigate("/tables")} className='flex justify-center text-sm items-center text-[#f5f5f5] w-[200px] rounded-[25px]'><MdTableBar className='inline mr-4' size={20}/><p>Tables</p></button>
      
      {/* More Option */}
      <button className='flex justify-center text-sm items-center text-[#f5f5f5] w-[200px] rounded-[25px]'><CiCircleMore className='inline mr-4' size={20}/><p>More</p></button>

      {/* Order Button */}
      <button className='absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-2'>
        <BiSolidDish size={20}/>
      </button>
    </div>
  )
}

export default BottomNav