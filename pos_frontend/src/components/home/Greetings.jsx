import React, { useEffect, useState } from 'react'
import { formatDate } from '../../utils'

const Greetings = () => {

    const [dataTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => 
        `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')}`;

  return (
    <div className='flex justify-between items-center px-8 mt-8'>
      {/* Greet */}
      <div>
        <h1 className='text-[#f5f5f5] text-[22px] font-semibold tracking-wide'>Good Morning, Devishiv</h1>
        <p className='text-[#ababab] text-sm'>Give your best services for the customers 😊</p>
      </div>

      {/* Time */}
      <div>
        <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wide w-[130px]'>{formatTime(dataTime)}</h1>
        <p className='text-[#ababab] text-xs'>{formatDate(dataTime)}</p>
      </div>
    </div>
  )
}

export default Greetings
