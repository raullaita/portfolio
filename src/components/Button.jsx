import React from 'react'

function Button ({ onClick, children }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='bg-color1 hover:bg-color1/80 px-8 py-2 rounded-full text-color5 font-bold shadow-md shadow-color3'
    >
      {children}
    </button>
  )
}

export default Button
