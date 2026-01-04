import React from "react";
import { useNavigate } from "react-router-dom";
import Sidenav from "./Templates/Sidenav";
import Topnav from "./Templates/Topnav";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Sidenav/>
      <div className="w-full lg:w-[80%] h-screen overflow-y-auto bg-zinc-900 text-white">
        <Topnav />
        
        <div className="w-full px-4 sm:px-6 lg:px-[3%] py-4 sm:py-[2%]">
          <div className="w-full flex items-center mb-4 sm:mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-zinc-400 flex items-center">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] cursor-pointer ri-arrow-left-line mr-2"
              ></i>
              About
            </h1>
          </div>

          <div className="flex justify-center px-4 sm:px-[5%] py-4 sm:py-[3%]">
            <div className="max-w-3xl w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6556CD]">Welcome to Movie World</h2>
              <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
                Movie World is your ultimate destination for discovering the best movies and TV shows.
                Whether you love action-packed blockbusters, binge-worthy TV series, or trending entertainment, we've got you covered!
              </p>
            
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">What We Offer</h3>
                <ul className="mt-3 space-y-3 text-sm sm:text-base text-gray-300">
                  <li>🎬 <span className="text-white font-semibold">Movies:</span> Explore a vast collection of the latest films, timeless classics, and hidden gems.</li>
                  <li>📺 <span className="text-white font-semibold">TV Shows:</span> Stay updated with the hottest series and must-watch originals.</li>
                  <li>🔥 <span className="text-white font-semibold">Trending Now:</span> Discover what's currently popular and making waves in entertainment.</li>
                  <li>🏆 <span className="text-white font-semibold">Popular Picks:</span> Get personalized recommendations based on audience ratings.</li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-base sm:text-lg text-gray-300">
                  Start exploring today and dive into the world of movies and TV like never before!
                </p>
                <button
                  onClick={() => navigate(-1)}
                  className="mt-4 bg-[#6556CD] hover:bg-[#4b3ca7] text-white px-5 sm:px-6 py-2 rounded-lg transition-all text-sm sm:text-base"
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
