import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderList = () => {
  return (
    <div className='flex items-center gap-5 mb-4'>

      {/* user box */}
      <button className='bg-[#f6b100] p-1 text-md font-bold rounded-lg'>DS</button>

      {/* user Order */}
      <div className='flex items-center justify-between w-[100%]'>

        {/* user and it's item count */}
        <div className='flex flex-col items-start'>
            <h1 className='text-[#f5f5f5] text-sm font-semibold tracking-wide'>Devilshiv</h1>
            <p className='text-[#ababab] text-xs'>8 Items</p>
        </div>

        {/* Booked Table no. */}
        <div>
            <h1 className='text-[#f6b100] font-medium border border-[#f6b100] p-1 text-sm rounded-lg'>Table No: 3</h1>
        </div>

        {/* Item ready or not */}
        <div className='flex flex-col items-end'>
            <p className='text-green-600 text-sm'><FaCheckDouble className='inline mr-2 text-xs'/> Ready</p>
            <p className='text-[#ababab] text-xs'><FaCircle className='inline mr-2 text-xs text-green-600' /> Ready to serve</p>
        </div>
      </div>
    </div>
  )
}

export default OrderList
