const HomeStats = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-28">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <div>
          <p className="mb-4 inline-block rounded-full bg-teal-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
            ARTISANAL PIZZA PANTRY
          </p>
        </div>
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-slate-200 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
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
            <span className="relative">Our</span>
          </span>{" "}
          Pizza Journey in Numbers
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Artisanal Pizza Pantry has been on a journey to delight taste buds and
          create unforgettable experiences. Here's a glimpse into our pizza
          adventure by the numbers:
        </p>
      </div>
      <div className="row-gap-8 grid gap-10 lg:grid-cols-3">
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold text-purple-700 md:text-5xl">
              20K
            </h6>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-400">
              <svg
                className="h-7 w-7 text-teal-900"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg"> Pizza Lovers Served</p>
          <p className="text-gray-700">
            From the bustling streets to cozy family gatherings, we've had the
            honor of serving 20,000 pizza lovers who have walked through our
            doors. Each number is a testament to the smiles we've shared, the
            taste experiences we've crafted, and the moments we've been a part
            of. We're truly grateful to have been a part of your culinary
            journey.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold text-purple-700 md:text-5xl">
              100
            </h6>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-400">
              <svg
                className="h-7 w-7 text-teal-900"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Toppings Explored</p>
          <p className="text-gray-700">
            With 100 unique topping combinations meticulously crafted and
            savored, we're on a perpetual quest for the perfect balance of
            flavors. Every topping tells a story – from the classic to the
            unexpected – as we strive to create pizzas that ignite taste
            sensations. We believe that every bite is a chance to explore new
            horizons of taste, and our journey is only beginning.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold text-purple-700 md:text-5xl">
              1M
            </h6>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-400">
              <svg
                className="h-7 w-7 text-teal-900"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg"> Miles of Dough Rolled</p>
          <p className="text-gray-700">
            It's been an incredible journey of rolling, kneading, and crafting.
            Over the course of our culinary endeavors, we've proudly rolled an
            astonishing 10 million miles of dough. Each mile is a promise to
            deliver a crispy, perfectly textured crust that provides the canvas
            for our artistry. This number encapsulates our dedication to the
            craft and the love we pour into every pie
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
