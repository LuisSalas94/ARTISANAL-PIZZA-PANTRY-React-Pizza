const HomeStats = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <div>
          <p className="mb-4 inline-block rounded-full bg-teal-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
            Brand new
          </p>
        </div>
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-purple-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
            >
              <defs>
                <pattern
                  id="d5589eeb-3fca-4f01-ac3e-983224745704"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Our </span>
          </span>{" "}
          Pizza Journey in Numbers
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Artisanal Pizza Pantry has been on a journey to delight taste buds and
          create unforgettable experiences. Here's a glimpse into our pizza
          adventure by the numbers:
        </p>
      </div>
      <div className="group relative mx-auto mb-4 w-full overflow-hidden rounded border p-px transition-shadow duration-300 hover:shadow-xl lg:mb-8 lg:max-w-4xl">
        <div className="bg-deep-purple-accent-400 absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform duration-300 group-hover:scale-x-100" />
        <div className="bg-deep-purple-accent-400 absolute bottom-0 left-0 h-full w-1 origin-bottom scale-y-0 transform duration-300 group-hover:scale-y-100" />
        <div className="bg-deep-purple-accent-400 absolute left-0 top-0 h-1 w-full origin-right scale-x-0 transform duration-300 group-hover:scale-x-100" />
        <div className="bg-deep-purple-accent-400 absolute bottom-0 right-0 h-full w-1 origin-top scale-y-0 transform duration-300 group-hover:scale-y-100" />
        <div className="transition-color relative flex h-full flex-col items-center rounded-sm bg-white py-10 duration-300 sm:flex-row sm:items-stretch">
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-purple-700 sm:text-5xl">
              92%
            </h6>
            <p className="text-center md:text-base">
              Customer Satisfaction Rate
            </p>
          </div>
          <div className="group-hover:bg-deep-purple-accent-400 h-1 w-56 transform rounded-full bg-gray-300 transition duration-300 group-hover:scale-110 sm:h-auto sm:w-1" />
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-purple-700 sm:text-5xl">
              5000+
            </h6>
            <p className="text-center md:text-base">Served with a Smile</p>
          </div>
        </div>
      </div>
      <p className="mx-auto mb-4 text-gray-600 sm:text-center md:px-16 lg:mb-6 lg:max-w-2xl">
        In just a short span, we've achieved a 90% customer satisfaction rate, a
        testament to our commitment to quality and flavor. With over 5000 happy
        clients served, our pizzas have become more than just food – they're a
        source of joy that brings people together. Join our culinary voyage and
        be a part of the growing family of satisfied pizza enthusiasts.
      </p>
    </div>
    /*  <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <div>
          <p className="mb-4 inline-block rounded-full bg-teal-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
            Artisanal Pizza Pantry
          </p>
        </div>
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-violet-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
            >
              <defs>
                <pattern
                  id="d5589eeb-3fca-4f01-ac3e-983224745704"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Our </span>
          </span>{" "}
          Pizza Journey in Numbers
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Artisanal Pizza Pantry has been on a journey to delight taste buds and
          create unforgettable experiences. Here's a glimpse into our pizza
          adventure by the numbers:
        </p>
      </div>
      <div className="group relative mx-auto mb-4 w-full overflow-hidden rounded border p-px transition-shadow duration-300 hover:shadow-xl lg:mb-8 lg:max-w-4xl">
        <div className="bg-deep-purple-accent-400 absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform duration-300 group-hover:scale-x-100" />
        <div className="bg-deep-purple-accent-400 absolute bottom-0 left-0 h-full w-1 origin-bottom scale-y-0 transform duration-300 group-hover:scale-y-100" />
        <div className="bg-deep-purple-accent-400 absolute left-0 top-0 h-1 w-full origin-right scale-x-0 transform duration-300 group-hover:scale-x-100" />
        <div className="bg-deep-purple-accent-400 absolute bottom-0 right-0 h-full w-1 origin-top scale-y-0 transform duration-300 group-hover:scale-y-100" />
        <div className="transition-color relative flex h-full flex-col items-center rounded-sm bg-white py-10 duration-300 sm:flex-row sm:items-stretch">
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-purple-700 sm:text-5xl">
              92%
            </h6>
            <p className="text-center md:text-base">
              Customer Satisfaction Rate
            </p>
          </div>
          <div className="group-hover:bg-deep-purple-accent-400 h-1 w-56 transform rounded-full bg-gray-300 transition duration-300 group-hover:scale-110 sm:h-auto sm:w-1" />
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-purple-700 sm:text-5xl">
              5K
            </h6>
            <p className="text-center md:text-base">Served with a Smile</p>
          </div>
        </div>
      </div>
      <p className="mx-auto mb-4 text-gray-600 sm:text-center md:px-16 lg:mb-6 lg:max-w-2xl">
        In just a short span, we've achieved a 92% customer satisfaction rate, a
        testament to our commitment to quality and flavor. With over 5000 happy
        clients served, our pizzas have become more than just food – they're a
        source of joy that brings people together. Join our culinary voyage and
        be a part of the growing family of satisfied pizza enthusiasts.
      </p>
    </div> */
  );
};

export default HomeStats;
