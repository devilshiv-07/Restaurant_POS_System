import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className='bg-[rgb(27,96,175)] text-white p-1.5 font-bold rounded-full'>
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton
