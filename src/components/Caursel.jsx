import cau2 from '../assets/cau1.png';
export default function FeatureSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-800/50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            strokeWidth="0"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        
        {/* Left Title Section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-400">
                Deploy faster
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                A better workflow
              </h1>
              <p className="mt-6 text-xl/8 text-gray-300">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
                At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
                vitae feugiat egestas.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="-mt-12 -ml-6 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src={cau2}
            alt="Screenshot"
            className="w-xl h-[700px] max-w-none rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sm:w-228"
          />
        </div>

        {/* Bottom Details */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                enim...
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-400">
                {[
                  {
                    title: "Push to deploy.",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
                    icon: (
                      <path
                        d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765..."
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    ),
                  },
                  {
                    title: "SSL certificates.",
                    text: "Anim aute id magna aliqua ad ad non deserunt sunt...",
                    icon: (
                      <path
                        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2..."
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    ),
                  },
                  {
                    title: "Database backups.",
                    text: "Ac tincidunt sapien vehicula erat auctor pellentesque...",
                    icon: (
                      <>
                        <path d="M4.632 3.533A2 2 0..." />
                        <path
                          d="M4 13a2 2 0 1 0 0 4h12a2 2..."
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-x-3">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-1 size-5 flex-none text-indigo-400"
                    >
                      {item.icon}
                    </svg>
                    <span>
                      <strong className="font-semibold text-white">
                        {item.title}
                      </strong>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo...
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                No server? No problem.
              </h2>

              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in...
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
