import React from 'react'
import { Link } from 'react-router-dom'
import { BsFire } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { BiSolidTv } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { RiMovie2AiFill } from "react-icons/ri";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
function Sidenav() {
  return (
    <div className='w-[20%] h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6 backdrop-blur-lg'>
       <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
        <i className="text-pink-500 ri-movie-fill mr-3"></i>
        <span>MOVIES ZONE</span>
       </h1>

       <nav className='mt-12 flex flex-col gap-4'>
        <h1 className='text-gray-200 font-bold text-lg uppercase tracking-wider mb-4'>Discover</h1>
        <Link to={"/trending"} className='group flex items-center gap-3 px-4 py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
          <BsFire className="text-xl group-hover:text-pink-400" /> 
          <span className='font-medium'>Trending</span>
        </Link>
        <Link to={"/popular"} className='group flex items-center gap-3 px-4 py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
          <FaStar className="text-xl group-hover:text-purple-400" />
          <span className='font-medium'>Popular</span>
        </Link>
        <Link to={"/tvshows"} className='group flex items-center gap-3 px-4 py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
          <BiSolidTv className="text-xl group-hover:text-pink-400" />
          <span className='font-medium'>TV Shows</span>
        </Link>
        <Link to={"/movies"} className='group flex items-center gap-3 px-4 py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
          <RiMovie2AiFill className="text-xl group-hover:text-purple-400" />
          <span className='font-medium'>Movies</span>
        </Link>
        <Link to={"/people"} className='group flex items-center gap-3 px-4 py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
          <IoMdPeople className="text-xl group-hover:text-pink-400" />
          <span className='font-medium'>People</span>
        </Link>
       </nav>

       <div className='h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent my-8'></div>

       <nav className='flex flex-col gap-4'>
        <h1 className='text-gray-200 font-bold text-lg uppercase tracking-wider mb-4'>More</h1>
        <Link to={"/about"} className='group flex items-center gap-3 px-4 py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
          <RiInformationFill className="text-xl group-hover:text-purple-400" />
          <span className='font-medium'>About</span>
        </Link>
        <Link to={"/contact"} className='group flex items-center gap-3 px-4 py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
          <IoMdCall className="text-xl group-hover:text-pink-400" />
          <span className='font-medium'>Contact Us</span>
        </Link>
       </nav>
       
    </div>
  )
}

export default Sidenav
