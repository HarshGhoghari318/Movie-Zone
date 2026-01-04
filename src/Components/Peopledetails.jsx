import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom';
import  {useDispatch, useSelector}  from 'react-redux';
import { asyncloadperson, removeperson } from '../Store/Action/PersonActions';
import Loader from './Loader';
import Horizoncard from './Templates/Horizoncard';
import Dropdown from './Templates/Dropdown';

function Peopledetails() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {info} = useSelector(state => state.person)
    const dispatch = useDispatch();
    const [category, setcategory] = useState("movie");
  
    useEffect(() => {
       dispatch(asyncloadperson(id))
       return() => {
          dispatch(removeperson())
       }
    }, [id])
    
  return info ? (
    <div className='px-4 sm:px-6 md:px-[5%] w-screen min-h-screen py-4 sm:py-6'>

      <nav className='h-[10vh] min-h-[60px] w-full flex items-center text-zinc-100 text-lg sm:text-xl mb-4'>
        <Link> <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-2 cursor-pointer"></i></Link>      
      </nav>

      <div className='w-full flex flex-col md:flex-row gap-6 md:gap-0'>
          <div className='w-full md:w-[20%] flex-shrink-0'>
            <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-full md:w-auto h-[300px] md:h-[40vh] object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt={info.detail.name} />

            <hr className='mt-6 md:mt-10 mb-5 border-none h-[1px] bg-zinc-300' />

            <div className='text-lg sm:text-xl text-white flex gap-x-4 sm:gap-x-5 flex-wrap'>
              {info.externalid?.wikidata_id && (
                <a target='_blank' rel="noopener noreferrer" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} className='hover:text-[#6556CD] transition-colors'><i className="ri-earth-line"></i></a>
              )}
              {info.externalid?.facebook_id && (
                <a target='_blank' rel="noopener noreferrer" href={`https://www.facebook.com/${info.externalid.facebook_id}`} className='hover:text-[#6556CD] transition-colors'><i className="ri-facebook-circle-fill"></i></a>
              )}
              {info.externalid?.instagram_id && (
                <a target='_blank' rel="noopener noreferrer" href={`https://www.instagram.com/${info.externalid.instagram_id}`} className='hover:text-[#6556CD] transition-colors'><i className="ri-instagram-fill"></i></a>
              )}
              {info.externalid?.twitter_id && (
                <a target='_blank' rel="noopener noreferrer" href={`https://twitter.com/${info.externalid.twitter_id}`} className='hover:text-[#6556CD] transition-colors'><i className="ri-twitter-x-fill"></i></a>
              )}
            </div>

            <h1 className='text-xl sm:text-2xl text-zinc-400 font-semibold my-4'>Personal Info</h1>

            <h1 className='text-base sm:text-lg text-zinc-400 '>Known For</h1>
            <h1 className='text-sm sm:text-base text-zinc-400 '>{info.detail.known_for_department}</h1>

            <h1 className='text-base sm:text-lg text-zinc-400 mt-3'>Gender</h1>
            <h1 className='text-sm sm:text-base text-zinc-400 '>{info.detail.gender === 2 ? "Male" : "Female"}</h1>

            <h1 className='text-base sm:text-lg text-zinc-400 mt-3'>Birthday</h1>
            <h1 className='text-sm sm:text-base text-zinc-400 '>{info.detail.birthday || "N/A"}</h1>

            <h1 className='text-base sm:text-lg text-zinc-400 mt-3'>Deathday</h1>
            <h1 className='text-sm sm:text-base text-zinc-400 '>{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h1>

            <h1 className='text-base sm:text-lg text-zinc-400 mt-3'>Place of Birth</h1>
            <h1 className='text-sm sm:text-base text-zinc-400 '>{info.detail.place_of_birth || "N/A"}</h1>

            {info.detail.also_known_as && info.detail.also_known_as.length > 0 && (
            <div>
              <h1 className='text-base sm:text-lg text-zinc-400 mt-3'>Also Known as</h1>
              <h1 className='text-sm sm:text-base text-zinc-400'>{info.detail.also_known_as.join(", ")}</h1>
            </div>
            )}
          </div>
    
      <div className='w-full md:w-[80%] md:ml-[5%]'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-zinc-400 font-black mb-4 sm:mb-5'>{info.detail.name}</h1>

        <h1 className='text-lg sm:text-xl font-semibold text-zinc-400 mb-2'>Biography</h1>
        <p className='text-sm sm:text-base text-zinc-400 leading-relaxed'>{info.detail.biography || "No biography available."}</p>

        <h1 className='text-lg sm:text-xl mt-5 font-semibold text-zinc-400 mb-4'>Known For</h1>
        <Horizoncard data={info.combinedcredits?.cast || []} />

        <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-5'>
          <h1 className='text-lg sm:text-xl font-semibold text-zinc-400'>Acting</h1> 
          <Dropdown title={category} option={["tv", "movie"]} func={(e) => setcategory(e.target.value)} />
        </div>

        <div className='list-disc text-zinc-400 w-full h-[300px] sm:h-[45vh] mt-5 overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-4 sm:p-5 rounded-lg'>
            {info[category + "credits"]?.cast && info[category + "credits"].cast.length > 0 ? (
              info[category + "credits"].cast.map((c,i) => (
                <li key={i} className='hover:text-white p-3 sm:p-5 rounded hover:bg-[#19191D] duration-300 cursor-pointer mb-2'>
                  <Link to={`/${category}/details/${c.id}`}>
                    <span className='text-sm sm:text-base'>
                    {c.name || c.title || c.origial_name || c.original_title}
                    </span>
                    {c.character && (
                      <span className='block ml-3 sm:ml-5 mt-2 text-xs sm:text-sm'>{`Character Name: ${c.character}`}</span>
                    )}
                  </Link>
                </li>
              ))
            ) : (
              <p className='text-zinc-400 text-center py-8'>No credits available</p>
            )}
        </div>

      </div>
    </div>
    
  </div>
  ) : <Loader />
}

export default Peopledetails
