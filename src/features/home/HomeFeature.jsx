import { FaPizzaSlice, FaKitchenSet, FaBowlFood } from "react-icons/fa6";

const HomeFeature = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-purple-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
            >
              <defs>
                <pattern
                  id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Where</span>
          </span>{" "}
          Every Slice Tells a Story
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Join us at Artisanal Pizza Pantry, where pizza isn't just food – it's
          an experience woven with flavors, aromas, and memories. Come share a
          slice of life with us.
        </p>
      </div>
      <div className="row-gap-8 grid gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:mx-auto sm:h-24 sm:w-24">
            <FaPizzaSlice className="h-10 w-10 text-purple-700 sm:h-12 sm:w-12" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">
            {" "}
            Experience Pizza Elevated
          </h6>
          <p className="mb-3 max-w-md text-sm text-gray-900 sm:mx-auto">
            Discover a menu inspired by tradition and elevated by innovation.
            From classic Margheritas to daring flavor fusions, our pizzas are a
            canvas of taste.
          </p>
        </div>
        <div className="sm:text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:mx-auto sm:h-24 sm:w-24">
            <FaKitchenSet className="h-10 w-10 text-purple-700 sm:h-12 sm:w-12" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Fired to Perfection</h6>
          <p className="mb-3 max-w-md text-sm text-gray-900 sm:mx-auto">
            Watch as our brick oven transforms dough and toppings into
            masterpieces. The perfect char, the ideal melt – it all happens in
            the heart of our kitchen.
          </p>
        </div>
        <div className="sm:text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:mx-auto sm:h-24 sm:w-24">
            <FaBowlFood className="h-10 w-10 text-purple-700 sm:h-12 sm:w-12" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">
            Ingredients with a Purpose
          </h6>
          <p className="mb-3 max-w-md text-sm text-gray-900 sm:mx-auto">
            We source locally and thoughtfully, ensuring each ingredient tells a
            story of its own. Because a great pizza begins with exceptional
            elements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
