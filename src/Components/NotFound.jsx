import React from 'react'
import notrailer from '../../public/404.gif'

function NotFound() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black p-4'>
      <img className='w-full max-w-[300px] sm:max-w-[400px] md:w-[30%] h-auto object-cover' src={notrailer} alt="404 Not Found" />
    </div>
  )
}

export default NotFound
