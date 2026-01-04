import React, { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import  {useDispatch, useSelector}  from 'react-redux';
import { asyncloadtv, removetv } from '../Store/Action/TvActions';
import Loader from './Loader';
import Horizoncard from './Templates/Horizoncard';

function Tvshowdetails() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {id} = useParams();
  const {info} = useSelector(state => state.tv)
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(asyncloadtv(id))
     return() => {
        dispatch(removetv())
     }
  }, [id])
  
  return info ? (
    <div style={{background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover", 
              }}
        className='relative w-full min-h-screen px-4 sm:px-6 md:px-[10%] py-4 sm:py-6'>

      <nav className='h-[10vh] min-h-[60px] w-full flex items-center text-zinc-100 text-lg sm:text-xl gap-4 sm:gap-8 flex-wrap'>
        <Link> <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"></i></Link>
        {info.detail.homepage && (
          <a target='_blank' rel="noopener noreferrer" href={info.detail.homepage} className='hover:text-[#6556CD] transition-colors'><i className="ri-earth-line"></i></a>
        )}
        {info.externalid?.wikidata_id && (
          <a target='_blank' rel="noopener noreferrer" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} className='hover:text-[#6556CD] transition-colors'><i className="ri-external-link-line"></i></a>
        )}
        {info.externalid?.imdb_id && (
          <a target='_blank' rel="noopener noreferrer" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`} className='hover:text-[#6556CD] transition-colors text-sm sm:text-base'>imdb</a>
        )}
      </nav>
      
      <div className='w-full flex flex-col md:flex-row gap-4 md:gap-0 mt-4'>
        <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-full md:w-auto md:h-[50vh] object-cover rounded-lg md:rounded-none' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}  />
        
        <div className='md:ml-[5%] text-white w-full md:w-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-black leading-tight'>
            {info.detail.name || info.detail.title || info.detail.origial_name || info.detail.original_title}
            {info.detail.first_air_date && (
              <small className='text-lg sm:text-xl md:text-2xl text-zinc-200 font-bold block sm:inline sm:ml-2'>({info.detail.first_air_date.split("-")[0]})</small>
            )}
          </h1>

          <div className='flex flex-wrap gap-3 sm:gap-x-5 items-center mt-3 mb-3 text-sm sm:text-base'>
            <div className='w-[40px] h-[40px] sm:w-[5vh] sm:h-[5vh] rounded-full bg-[#6556CD] text-white flex justify-center items-center text-xs sm:text-sm font-bold' >
            {(info.detail.vote_average*10).toFixed()}{"%"}
            </div>
            {info.detail.first_air_date && <h1>{info.detail.first_air_date}</h1>}
            {info.detail.genres && info.detail.genres.length > 0 && (
              <h1 className='text-xs sm:text-sm'>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            )}
          </div>

          {info.detail.tagline && (
            <h1 className='text-base sm:text-lg md:text-xl font-semibold italic text-zinc-100 mb-3'>{info.detail.tagline}</h1>
          )}

          <h1 className='text-lg sm:text-xl font-semibold mb-2'>Overview</h1>
          <p className='text-sm sm:text-base leading-relaxed'>{info.detail.overview}</p>

          {info?.translations && info.translations.length > 0 && (
            <>
              <h1 className='text-lg sm:text-xl font-semibold mt-4 mb-2'>Tv Translated</h1>
              <p className='text-sm sm:text-base mb-7'>{info.translations.join(", ")}</p>
            </>
          )}

          <Link className='inline-flex items-center px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-[#6556CD] hover:bg-[#5545BD] text-sm sm:text-base transition-colors mt-4' to={`${pathname}/trailer`}>
           <i className='ri-play-fill mr-1 text-lg sm:text-xl'></i>Play Trailer
          </Link>
        </div>

      </div>
      

      <div className='w-full md:w-[80%] flex flex-col gap-y-4 sm:gap-y-5 mt-5'>
        {info.watchproviders && info.watchproviders.flatrate && 
        <div className='flex flex-wrap gap-3 sm:gap-x-5 items-center text-white'>
          <h1 className='text-sm sm:text-base font-semibold w-full sm:w-auto mb-2 sm:mb-0'>Available on Platforms</h1>
          {info.watchproviders.flatrate.map((w,i) =>   
            <img key={i} title={w.provider_name} className='w-[50px] h-[50px] sm:w-[7vh] sm:h-[7vh] rounded-md object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt={w.provider_name} />)}
        </div>
      }
       {info.watchproviders && info.watchproviders.rent && 
        <div className='flex flex-wrap gap-3 sm:gap-x-5 items-center text-white'>
          <h1 className='text-sm sm:text-base font-semibold w-full sm:w-auto mb-2 sm:mb-0'>Available on Rent</h1>
          {info.watchproviders.rent.map((w,i) =>   
            <img key={i} title={w.provider_name} className='w-[50px] h-[50px] sm:w-[7vh] sm:h-[7vh] rounded-md object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt={w.provider_name} />)}
        </div>
      }
       {info.watchproviders && info.watchproviders.buy && 
        <div className='flex flex-wrap gap-3 sm:gap-x-5 items-center text-white'>
          <h1 className='text-sm sm:text-base font-semibold w-full sm:w-auto mb-2 sm:mb-0'>Available to Buy</h1>
          {info.watchproviders.buy.map((w,i) =>   
            <img key={i} title={w.provider_name} className='w-[50px] h-[50px] sm:w-[7vh] sm:h-[7vh] rounded-md object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt={w.provider_name} />)}
        </div>
      }
      </div>

      <hr className='mt-8 sm:mt-10 mb-5 border-none h-[1px] bg-zinc-300' />
      <h1 className='text-white text-xl sm:text-2xl font-bold mt-5 mb-4'>Seasons</h1>
      <div className='w-full flex overflow-x-auto gap-4 sm:gap-6 mb-5 p-4 sm:p-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        {info.detail.seasons && info.detail.seasons.length > 0 ? info.detail.seasons.map((s,i) => (
          <div key={i} className='flex-shrink-0 w-[200px] sm:w-[250px]'>
           <img  className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-full h-[300px] sm:h-[40vh] object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original/${s.poster_path}`} alt={s.name} />
           <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-2'>{s.name}</h1>
          </div>
        )):<h1 className='text-lg sm:text-xl text-white font-black text-center mt-5 w-full'>Nothing to Show</h1>
        }
      </div>

      <hr className='mt-8 sm:mt-10 mb-5 border-none h-[1px] bg-zinc-300' />
      <h1 className='text-white text-xl sm:text-2xl font-bold mt-5 mb-4'>Recommendations & Similar</h1>
      <Horizoncard data={
        info.recommendations.length > 0 ? info.recommendations : info.similar 
      } />

      <Outlet/>

  </div>
  ): ( <Loader/>)
}

export default Tvshowdetails
