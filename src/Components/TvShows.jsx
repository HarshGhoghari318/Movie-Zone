import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from 'react-router-dom'
import Dropdown from './Templates/Dropdown';
import Topnav from './Templates/Topnav';
import Cards from './Templates/Cards';
import Sidenav from './Templates/Sidenav';


function TvShows() {
    document.title = 'MOVIES WORLD | Tvshows'
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tvshows, settvshows] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const gettvshows = async () => {
        try {
            const {data} = await axios.get(`/tv/${category}?page=${page}`);   

            if(data.results.length > 0){
                settvshows((prev) => [...prev, ...data.results]); 
                setpage(page + 1)
            }else{
                sethasMore(false)
            }       
        } catch (error) {
            console.log("error:" , error);
        }
      } 

      const refreshhandler = () => {
        if(tvshows.length == 0){
            gettvshows()
        }else{
            settvshows([])
            setpage(1)
            gettvshows()
        }
      }
      
      useEffect(() => {
        refreshhandler();
      }, [category])

 return tvshows.length > 0 ? (
        <>
          <Sidenav/>
          <div className='w-full lg:w-[80%] h-screen overflow-y-auto'>
            <Topnav />
            
            <div className='w-full px-4 sm:px-6 lg:px-[3%] py-4'>
              <div className='w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4'>
                <h1 className='text-xl sm:text-2xl font-semibold text-zinc-400 flex items-center'>
                    <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-2 cursor-pointer"></i>
                    TvShows<small className='text-xs sm:text-sm ml-2 text-zinc-600'>({category})</small>
                </h1>
        
                <div className='flex-1'></div>
                <Dropdown title="Category" option={["on_the_air","top_rated","popular","airing_today"]} func={(e) => setcategory(e.target.value)} /> 
              </div>
        
              <InfiniteScroll 
                  dataLength={tvshows.length}
                  next={gettvshows()}
                  hasMore={hasMore}
                  loader={<Loader/>}
              >
                  <Cards data={tvshows} title="tv"/>
              </InfiniteScroll>
            </div>
          </div>
        </>
    
      ) : (<Loader/>)
}

export default TvShows
