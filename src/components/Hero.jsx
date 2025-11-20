import React from 'react';

export default function Hero() {
  return (
    <div id=''>
      <section className="relative bg-[#fff7ed]">
        <div className="relative pt-16 pb-12 flex content-center items-center justify-center min-h-screen-75">
          
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1527168027773-7d45f7b6a7a8")`
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-70 bg-black"></span>
          </div>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-3 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold text-5xl">
                    Welcome to Late Night Café
                  </h1>

                  <p className="mt-4 text-lg" style={{ color: "#f1f1f1" }}>
                    Serving premium brews, cozy ambience, and delicious midnight bites — 
                    open till 3 AM for your late-night cravings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CURVE SVG */}
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        {/* 3 CARDS SECTION */}
        <section className="pb-10 bg-blueGray-200 -mt-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              
              {/* VISION -> OUR COFFEE */}
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-mug-hot"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Coffee</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Freshly brewed artisanal coffee crafted from premium beans,
                      perfect for your late-night conversations and productivity.
                    </p>
                  </div>
                </div>
              </div>

              {/* MISSION -> OUR MENU */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blue-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-utensils"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Menu</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      From classic espresso to signature cold brews, desserts, 
                      sandwiches & midnight snacks — all freshly made for you.
                    </p>
                  </div>
                </div>
              </div>

              {/* APPROACH -> OUR AMBIENCE */}
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-moon"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Ambience</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Cozy, dim-lit, and peaceful — a perfect spot for work, 
                      conversations, or simply enjoying a quiet caffeine break.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
