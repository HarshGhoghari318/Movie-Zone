import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from 'react-router-dom'
import Dropdown from './Templates/Dropdown';
import Topnav from './Templates/Topnav';
import Cards from './Templates/Cards';
import Sidenav from './Templates/Sidenav';


function People() {
    document.title = 'MOVIES WORLD | Person '
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const getperson = async () => {
        try {
            const {data} = await axios.get(`/person/${category}?page=${page}`);   

            if(data.results.length > 0){
                setperson((prev) => [...prev, ...data.results]); 
                setpage(page + 1)
            }else{
                sethasMore(false)
            }       
        } catch (error) {
            console.log("error:" , error);
        }
      } 

      const refreshhandler = () => {
        if(person.length == 0){
            getperson()
        }else{
            setperson([])
            setpage(1)
            getperson()
        }
      }
      
      useEffect(() => {
        refreshhandler();
      }, [category])

 return person.length > 0 ? (
        <>
          <Sidenav/>
          <div className='w-full lg:w-[80%] h-screen overflow-y-auto'>
            <Topnav />
            
            <div className='w-full px-4 sm:px-6 lg:px-[3%] py-4'>
              <div className='w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4'>
                <h1 className='text-xl sm:text-2xl font-semibold text-zinc-400 flex items-center'>
                    <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-2 cursor-pointer"></i>
                    Person
                </h1>
              </div>
        
              <InfiniteScroll 
                  dataLength={person.length}
                  next={getperson()}
                  hasMore={hasMore}
                  loader={<Loader/>}
              >
                  <Cards data={person} title="person"/>
              </InfiniteScroll>
            </div>
          </div>
        </>
    
      ) : (<Loader/>)
}

export default People
