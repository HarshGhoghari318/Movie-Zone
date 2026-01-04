import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsFire } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { BiSolidTv } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { RiMovie2AiFill } from "react-icons/ri";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { MobileMenuContext } from '../../App';

function Sidenav() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MobileMenuContext);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static
        top-0 left-0
        w-[280px] sm:w-[300px] lg:w-[20%]
        h-screen
        bg-gradient-to-b from-gray-900 to-gray-800
        p-4 sm:p-6
        backdrop-blur-lg
        z-50
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            <i className="text-pink-500 ri-movie-fill mr-2 sm:mr-3"></i>
            <span className='hidden sm:inline'>MOVIES ZONE</span>
            <span className='sm:hidden'>MZ</span>
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className='lg:hidden text-gray-400 hover:text-white text-2xl'
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <nav className='mt-4 sm:mt-12 flex flex-col gap-3 sm:gap-4'>
          <h1 className='text-gray-200 font-bold text-sm sm:text-lg uppercase tracking-wider mb-2 sm:mb-4'>Discover</h1>
          <Link to={"/trending"} onClick={handleLinkClick} className='group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
            <BsFire className="text-lg sm:text-xl group-hover:text-pink-400" /> 
            <span className='font-medium text-sm sm:text-base'>Trending</span>
          </Link>
          <Link to={"/popular"} onClick={handleLinkClick} className='group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
            <FaStar className="text-lg sm:text-xl group-hover:text-purple-400" />
            <span className='font-medium text-sm sm:text-base'>Popular</span>
          </Link>
          <Link to={"/tvshows"} onClick={handleLinkClick} className='group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
            <BiSolidTv className="text-lg sm:text-xl group-hover:text-pink-400" />
            <span className='font-medium text-sm sm:text-base'>TV Shows</span>
          </Link>
          <Link to={"/movies"} onClick={handleLinkClick} className='group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
            <RiMovie2AiFill className="text-lg sm:text-xl group-hover:text-purple-400" />
            <span className='font-medium text-sm sm:text-base'>Movies</span>
          </Link>
          <Link to={"/people"} onClick={handleLinkClick} className='group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
            <IoMdPeople className="text-lg sm:text-xl group-hover:text-pink-400" />
            <span className='font-medium text-sm sm:text-base'>People</span>
          </Link>
        </nav>

        <div className='h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent my-6 sm:my-8'></div>

        <nav className='flex flex-col gap-3 sm:gap-4'>
          <h1 className='text-gray-200 font-bold text-sm sm:text-lg uppercase tracking-wider mb-2 sm:mb-4'>More</h1>
          <Link to={"/about"} onClick={handleLinkClick} className='group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
            <RiInformationFill className="text-lg sm:text-xl group-hover:text-purple-400" />
            <span className='font-medium text-sm sm:text-base'>About</span>
          </Link>
          <Link to={"/contact"} onClick={handleLinkClick} className='group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:text-white'>
            <IoMdCall className="text-lg sm:text-xl group-hover:text-pink-400" />
            <span className='font-medium text-sm sm:text-base'>Contact Us</span>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Sidenav
