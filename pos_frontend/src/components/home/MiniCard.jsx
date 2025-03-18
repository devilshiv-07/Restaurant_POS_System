import React from 'react'

const MiniCard = ({title, icon, number, footerNum}) => {
  return (
    <div className='bg-[#1a1a1a] py-4 px-5 rounded-lg w-[48%]'>
      <div className='flex items-start justify-between'>
        <h1 className='text-[#f5f5f5] text-md font-semibold tracking-wide'>{title}</h1>
        <button className={`${title === "Total Earning" ? "bg-[#02ca3a]" : "bg-[#f6b100]"} px-3 py-1.5 rounded-lg text-[#f5f5f5] text-xl`}>{icon}</button>
      </div>

      <div>
        <h1 className='text-[#f5f5f5] text-2xl font-bold mt-2'>{title === "Total Earning" ? `₹${number}` : number}</h1>
        <h1 className='text-[#f5f5f5] text-sm mt-1'><span className='text-[#02ca3a]'>{footerNum}</span> than yesterday</h1>
      </div>
    </div>
  )
}

export default MiniCard
