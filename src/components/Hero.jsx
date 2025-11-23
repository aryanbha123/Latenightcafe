import React from "react";

export default function CafeHero({ imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHARfb6rqQvx1iqDk0Z9ZehG0S_6_vStVHOA&s", onPlay }) {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl ">
            Designed for you to get more <span className="text-blue-600">simple</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Build your business here. Take it anywhere.</p>
        </div>

        <div className="mt-10 relative max-w-5xl mx-auto">
          {/* Background image block (keeps aspect & cover) */}
          <div
            className="w-full object-cover h-96 sm:h-120 bg-no-repeat bg-center bg-cover rounded-xl"
            style={{ backgroundImage: `url('${imageUrl}')` }}
            role="img"
            aria-label="Cafe ambience"
          />

          {/* Centered play button overlay */}
          <div className="absolute inset-0 w-full h-full">
            <div className="flex flex-col justify-center items-center w-full h-full">
              {/* <a
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (onPlay) onPlay();
                }}
                aria-label="Play overview video"
              >
                <svg className="shrink-0 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>Play the overview</span>
              </a> */}
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute bottom-12 -left-20 -z-1 w-48 h-48 bg-linear-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
            <div className="bg-white w-48 h-48 rounded-lg dark:bg-neutral-900" />
          </div>

          <div className="absolute -top-12 -right-20 -z-1 w-48 h-48 bg-linear-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div className="bg-white w-48 h-48 rounded-full dark:bg-neutral-900" />
          </div>
        </div>
      </div>
    </div>
  );
}
