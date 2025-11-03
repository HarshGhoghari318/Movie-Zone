import React, { useEffect,useState } from 'react'
import axios from '../../utils/axios'
import { Link } from 'react-router-dom'
import download from '../../../public/download.png'

function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const getsearches = async () => {
    try {
        const {data} = await axios.get("/search/multi", {  // `/search/multi/query=${query}`
          params: { query} //dynamic
      });      
      setsearches(data.results); 
      // console.log(data.results); 
       
    } catch (error) {
        console.log("error:" , error);
    }
  }

useEffect(() =>{
    getsearches();
},[query])

  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[15%]'>
      <div className='relative w-[60%] flex items-center'>
        <i className="absolute left-4 text-2xl text-gray-400 ri-search-line"></i>
        <input 
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className='w-full pl-12 pr-4 py-3 text-lg bg-gray-800/50 text-gray-200 rounded-xl border border-gray-700/50 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300' 
          type="text" 
          placeholder='Search movies, shows and people...' 
        />
        {query.length > 0 && (
          <i onClick={() => setquery("")} 
             className="absolute right-4 text-2xl text-gray-400 hover:text-pink-500 cursor-pointer transition-colors ri-close-fill">
          </i>
        )}
      </div>

      {query.length > 0 && (
        <div className='z-[100] absolute w-[60%] max-h-[70vh] bg-gray-900/95 backdrop-blur-xl top-[100%] rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50'> 
          {searches.map((s,index) => (
            <Link 
              to={`/${s.media_type}/details/${s.id}`} 
              key={index} 
              className='flex items-center p-4 hover:bg-gray-800/50 transition-colors duration-300 border-b border-gray-800/50 last:border-none'
            >
              <div className='w-[15vh] h-[8vh] overflow-hidden rounded-lg mr-4 flex-shrink-0'>
                <img 
                  className='w-full h-full object-cover'
                  src={s.backdrop_path || s.profile_path ? 
                    `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: 
                    download
                  }
                />
              </div>
              <div className='flex flex-col'>
                <span className='text-gray-100 font-medium text-lg'>
                  {s.name || s.title || s.origial_name || s.original_title}
                </span>
                <span className='text-gray-400 text-sm capitalize'>
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
