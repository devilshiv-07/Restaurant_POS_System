import React from 'react'
import logo from "../../assets/images/logo.png"
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { IoLogOut } from "react-icons/io5"
import { useMutation } from '@tanstack/react-query'
import { logout } from '../../https'
import { removeUser } from '../../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate("/auth");
    },
    onError: (error) => {
      console.log(error);
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate();
  }

  return (
    <header className='flex justify-between items-center py-3 px-8 bg-[#1a1a1a] h-[8vh]'>

      {/* LOGO */}
      <div className='flex items-center gap-2'>
        <img src={logo} className='h-8 w-8' alt="restro logo" />
        <h1 className='text-xl font-semibold text-[#f5f5f5]'>Restro</h1>
      </div>

      {/* SEARCH */}
      <div className='flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-1.5 w-[500px]'>
        <FaSearch className="text-[#f5f5f5]" />
        <input 
          type="text"
          placeholder='Search'
          className='bg-[#1f1f1f] w-full outline-none text-[#f5f5f5]'
        />
      </div>

      {/* LOGGED USER DETAILS  */}
      <div className='flex items-center gap-4'>
        <div className='bg-[#1f1f1f] rounded-full p-2 cursor-pointer'>
          <FaBell className='text-[#f5f5f5] text-lg' />
        </div>
        <div className='flex items-center gap-3 cursor-pointer'>
          <FaUserCircle className='text-[#f5f5f5] text-2xl ' />
          <div className='flex flex-col items-start'>
            <h1 className='text-sm text-[#f5f5f5]  font-semibold'>{userData.name}</h1>
            <p className='text-xs text-[#ababab] font-medium'>{userData.role}</p>
          </div>
          <IoLogOut onClick={handleLogout} className="text-[#f5f5f5] ml-2" size={35} />
        </div>
      </div>

    </header>
  )
}

export default Header
