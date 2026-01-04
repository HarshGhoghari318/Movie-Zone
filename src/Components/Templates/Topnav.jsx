import React, { useEffect, useState, useContext } from 'react'
import axios from '../../utils/axios'
import { Link } from 'react-router-dom'
import download from '../../../public/download.png'
import { MobileMenuContext } from '../../App'

function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const { setIsMobileMenuOpen } = useContext(MobileMenuContext);

  const getsearches = async () => {
    try {
        const {data} = await axios.get("/search/multi", {
          params: { query}
      });      
      setsearches(data.results); 
       
    } catch (error) {
        console.log("error:" , error);
    }
  }

useEffect(() =>{
    getsearches();
},[query])

  return (
    <div className='w-full h-[10vh] min-h-[60px] relative flex justify-start items-center lg:ml-[15%] px-4 sm:px-6 lg:px-0'>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className='lg:hidden mr-3 text-gray-400 hover:text-white text-2xl'
      >
        <i className="ri-menu-line"></i>
      </button>

      <div className='relative w-full lg:w-[60%] flex items-center'>
        <i className="absolute left-3 sm:left-4 text-xl sm:text-2xl text-gray-400 ri-search-line"></i>
        <input 
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className='w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2 sm:py-3 text-sm sm:text-lg bg-gray-800/50 text-gray-200 rounded-xl border border-gray-700/50 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300' 
          type="text" 
          placeholder='Search movies, shows...' 
        />
        {query.length > 0 && (
          <i onClick={() => setquery("")} 
             className="absolute right-3 sm:right-4 text-xl sm:text-2xl text-gray-400 hover:text-pink-500 cursor-pointer transition-colors ri-close-fill">
          </i>
        )}
      </div>

      {query.length > 0 && (
        <div className='z-[100] absolute w-[calc(100%-2rem)] lg:w-[60%] left-4 lg:left-0 max-h-[70vh] bg-gray-900/95 backdrop-blur-xl top-[100%] rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 overflow-y-auto'> 
          {searches.map((s,index) => (
            <Link 
              to={`/${s.media_type}/details/${s.id}`} 
              key={index} 
              onClick={() => setquery("")}
              className='flex items-center p-3 sm:p-4 hover:bg-gray-800/50 transition-colors duration-300 border-b border-gray-800/50 last:border-none'
            >
              <div className='w-[12vh] sm:w-[15vh] h-[6vh] sm:h-[8vh] overflow-hidden rounded-lg mr-3 sm:mr-4 flex-shrink-0'>
                <img 
                  className='w-full h-full object-cover'
                  src={s.backdrop_path || s.profile_path ? 
                    `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: 
                    download
                  }
                />
              </div>
              <div className='flex flex-col min-w-0 flex-1'>
                <span className='text-gray-100 font-medium text-sm sm:text-lg truncate'>
                  {s.name || s.title || s.origial_name || s.original_title}
                </span>
                <span className='text-gray-400 text-xs sm:text-sm capitalize'>
                  {s.media_type || 'Unknown type'}
                </span>
              </div>
            </Link> 
          ))}
        </div> 
      )}
       

    </div>
  )
}

export default Topnav
