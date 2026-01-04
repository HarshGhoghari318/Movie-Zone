import React from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Templates/Topnav';
import Dropdown from './Templates/Dropdown';
import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Cards from './Templates/Cards';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";
import Sidenav from './Templates/Sidenav';

function Trending() {
    document.title = 'MOVIES WORLD | Trending Page'
    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const gettrending = async () => {
        try {
            const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);   

            if(data.results.length > 0){
                settrending((prev) => [...prev, ...data.results]); 
                setpage(page + 1)
            }else{
                sethasMore(false)
            }        
        } catch (error) {
            console.log("error:" , error);
        }
      } 

      const refreshhandler = () => {
        if(trending.length == 0){
            gettrending()
        }else{
            settrending([])
            setpage(1)
            gettrending()
        }
      }
      
      useEffect(() => {
        refreshhandler();
      }, [category, duration])

  return trending.length > 0 ? (
    <>
      <Sidenav/>
      <div className='w-full lg:w-[80%] h-screen overflow-y-auto'>
        <Topnav />
        
        <div className='w-full px-4 sm:px-6 lg:px-[3%] py-4'>
          <div className='w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 flex-wrap'>
            <h1 className='text-xl sm:text-2xl font-semibold text-zinc-400 flex items-center'>
                <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-2 cursor-pointer"></i>
                Trending
            </h1>

            <div className='flex-1'></div>
            <div className='flex gap-3 flex-wrap'>
              <Dropdown title="Category" option={["tv","movie","all"]} func={(e) => setcategory(e.target.value)} /> 
              <Dropdown title="Duration" option={["day","week"]} func={(e) => setduration(e.target.value)} /> 
            </div>
          </div>

          <InfiniteScroll 
              dataLength={trending.length}
              next={gettrending()}
              hasMore={hasMore}
              loader={<Loader/>}
          >
              <Cards data={trending} title={category}/>
          </InfiniteScroll>
        </div>
      </div>
    </>

  ) : (<Loader/>)
}

export default Trending
