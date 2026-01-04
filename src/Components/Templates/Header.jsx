import React from "react";
import { Link } from 'react-router-dom'
import { BiSolidTv } from "react-icons/bi";
import { BiSolidMoviePlay } from "react-icons/bi";

function Header({data}) {

  return (
    <div className='w-full h-[40vh] sm:h-[50vh] min-h-[300px] flex flex-col justify-end items-start px-4 sm:px-[4%] py-4 sm:py-[2%]'
     style={{background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
             backgroundPosition: "top 5%",
             backgroundSize: "cover",
    }}>
      <h1 className='w-full sm:w-[90%] lg:w-[70%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight'>{ data.name || data.title || data.origial_name || data.original_title}</h1>
      <p className='w-full sm:w-[90%] lg:w-[70%] mt-2 sm:mt-3 text-white text-sm sm:text-base line-clamp-2 sm:line-clamp-none'>
        {data.overview ? (
          <>
            <span className='hidden sm:inline'>{data.overview.slice(0, 220)}...</span>
            <span className='sm:hidden'>{data.overview.slice(0, 100)}...</span>
            <Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-500 hover:text-blue-400'> more</Link>
          </>
        ) : 'No overview available'}
      </p>

      <div className='text-white mt-2 sm:mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm'>
        <div className='flex items-center'>
          <i className='text-yellow-500 ri-megaphone-fill mr-1'></i>
          <span>{data.release_date || "No Information"}</span>
        </div>
        {data.media_type === 'tv' ? (
            <div className="flex items-center">
                <BiSolidTv className="text-yellow-500 ml-2" />
                <span className="text-white ml-1">TV</span>
            </div>
    ) : (
        <div className="flex items-center">
                <BiSolidMoviePlay className="text-yellow-500 ml-2" />
                <span className="text-white ml-1">MOVIE</span>
        </div>
    )}
      </div>

      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='mt-3 bg-[#6556CD] hover:bg-[#5545BD] px-4 py-2 sm:px-5 sm:py-2.5 rounded text-white text-sm sm:text-base transition-colors'>Watch Trailer</Link>

    </div>
  )
}

export default Header
