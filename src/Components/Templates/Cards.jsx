import React from 'react'
import { Link } from 'react-router-dom'
import download from '../../../public/download.png'

function Cards({data,title}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>
      {data.map((data,i) => 
        <Link 
          to={`/${data.media_type || title}/details/${data.id}`} 
          className='group relative overflow-hidden rounded-xl bg-gray-900 hover:scale-105 transition-all duration-300' 
          key={i}
        >
          <div className='aspect-[2/3] overflow-hidden'>
            <img 
              className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300' 
              src={data.backdrop_path || data.poster_path || data.profile_path ? 
                `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path || data.profile_path}`: 
                download
              }
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>
          
          <div className='absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
            <h1 className='text-lg font-medium text-white line-clamp-2'>
              {data.name || data.title || data.origial_name || data.original_title}
            </h1>
          </div>
           
          {data.vote_average > 0 && 
            <div className='absolute top-3 right-3 w-12 h-12 rounded-full bg-black/70 backdrop-blur-sm border-2 border-purple-500 text-white flex items-center justify-center font-medium'>
              {(data.vote_average*10).toFixed()}
              <span className="text-xs ml-[1px]">%</span>
            </div>
          }
        </Link>
      )}
    </div>
  )
}

export default Cards
