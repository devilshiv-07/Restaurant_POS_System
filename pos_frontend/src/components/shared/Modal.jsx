import React from 'react'

const Modal = ({title, onClose, isOpen, children}) => {

    if (!isOpen) return null;

  return (
    // set background blur
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>

      {/* main div */}
      <div className='bg-[#1a1a1a] shadow-lg max-w-lg mx-4 rounded-lg py-2 px-4 w-[30vw]'>

        {/* Header */}
        <div className='flex justify-between items-center px-6 py-4 pb-6 border-b border-[#333]'>
            {/* title */}
            <h2 className='text-2xl text-[#f5f5f5] font-semibold'>{title}</h2>

            {/* close button */}
            <button className='text-gray-500 text-2xl hover:text-gray-300' onClick={onClose}>
                &times;
            </button>
        </div>

        {/* Content */}
        <div className='p-4'>
            {children}
        </div>

      </div>
    </div>
  )
}

export default Modal
