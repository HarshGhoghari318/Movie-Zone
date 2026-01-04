import React from 'react'
import { Link } from 'react-router-dom'
import download from '../../../public/download.png'

function Horizoncard({data}) {
  return (
      <div className='w-full p-4 sm:p-6'>
        <div className='flex gap-4 sm:gap-6 overflow-x-auto pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          {data.length > 0 ? data.map((data,index) => 
              <Link 
                to={`/${data.media_type}/details/${data.id}`} 
                key={index} 
                className='group flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 border border-gray-800/50'
              >
                  <div className='relative aspect-video'>
                    <img 
                      className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300' 
                      src={data.backdrop_path || data.poster_path ? 
                        `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}` : 
                        download
                      } 
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
                  </div>
                  <div className='p-3 sm:p-4'>
                      <h1 className='text-base sm:text-lg font-medium text-gray-100 line-clamp-1 mb-2'>
                        {data.name || data.title || data.origial_name || data.original_title}
                      </h1>
                      <p className='text-xs sm:text-sm text-gray-400 line-clamp-2'>
                          {data.overview || 'No description available.'}
                      </p>
                      <div className='mt-3 inline-flex items-center text-xs font-medium text-purple-400 hover:text-pink-400 transition-colors'>
                        Read more
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                  </div>
              </Link>
          ): (
            <div className='w-full flex items-center justify-center py-12'>
              <h1 className='text-lg sm:text-xl text-gray-400 font-medium'>Nothing to show</h1>
            </div>
          )}
        </div>
      </div>
  )
}

export default Horizoncard






