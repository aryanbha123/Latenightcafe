export default function ShowCase() {
  const features = [
    {
      title: "Deliver All Over Mussoorie",
      desc: "Hot and fresh food delivered anywhere in Mussoorie with love.",
      bg: "bg-amber-100",
      hover: "group-hover:bg-amber-600",
      stroke: "stroke-amber-600",
      icon: (
        <path
          d="M3 12h18M3 12l3-3m-3 3l3 3m18 0h-3m3 0l-3-3m3 3l-3 3M6 6h12M6 18h12"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ),
    },
    {
      title: "Chicken Momos",
      desc: "Freshly steamed or fried momos made with authentic Himalayan flavors.",
      bg: "bg-red-100",
      hover: "group-hover:bg-red-600",
      stroke: "stroke-red-600",
      icon: (
        <circle cx="15" cy="15" r="9" strokeWidth="2" />
      ),
    },
    {
      title: "Burger",
      desc: "Juicy burgers crafted with fresh buns, crisp veggies & house sauces.",
      bg: "bg-green-100",
      hover: "group-hover:bg-green-600",
      stroke: "stroke-green-600",
      icon: (
        <path
          d="M4 15h22M4 12s1-7 12-7 12 7 12 7M4 18h22v3H4v-3z"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ),
    },
    {
      title: "Open 4 AM - 4 PM",
      desc: "Early mornings or lazy afternoons — we are always ready to serve.",
      bg: "bg-orange-100",
      hover: "group-hover:bg-orange-600",
      stroke: "stroke-orange-600",
      icon: (
        <path
          d="M12 6v6l4 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ),
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="py-1 px-4 bg-amber-200 rounded-full text-xs font-medium text-amber-700">
            Our Café Specials
          </span>

          <h2 className="text-4xl font-bold text-gray-900 py-5 dark:text-white">
            Fresh • Warm • Delivered
          </h2>

          <p className="text-lg font-normal text-gray-500 max-w-xl mx-auto">
            Taste the best of Mussoorie — handcrafted meals served with comfort and care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-10 lg:gap-y-0">
          
          {features.map((f, index) => (
            <div
              key={index}
              className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
            >
              <div
                className={`${f.bg} rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ${f.hover}`}
              >
                <svg
                  className={`${f.stroke} transition-all duration-500 group-hover:stroke-white`}
                  width="32"
                  height="32"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {f.icon}
                </svg>
              </div>

              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize dark:text-white">
                {f.title}
              </h4>

              <p className="text-sm font-normal text-gray-500">
                {f.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
