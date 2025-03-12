import React from 'react'
import logo from "../../assets/images/logo.png"
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa"

const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 px-8 bg-[#1a1a1a]'>

      {/* LOGO */}
      <div className='flex items-center gap-2'>
        <img src={logo} className='h-8 w-8' alt="restro logo" />
        <h1 className='text-lg font-semibold text-[#f5f5f5]'>Restro</h1>
      </div>

      {/* SEARCH */}
      <div className='flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-[500px]'>
        <FaSearch className="text-[#f5f5f5]" />
        <input 
          type="text"
          placeholder='Search'
          className='bg-[#1f1f1f] outline-none text-[#f5f5f5]'
        />
      </div>

      {/* LOGGED USER DETAILS  */}
      <div>
        <div>
          <FaBell className='text-[#f5f5f5] text-2xl' />
        </div>
        <div>
          <FaUserCircle className='text-[#f5f5f5] text-2xl ' />
          <div>
            <h1>Devilshiv</h1>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header
