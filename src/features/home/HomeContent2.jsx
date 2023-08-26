import { FaPizzaSlice } from "react-icons/fa6";
const HomeContent2 = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-400">
            <FaPizzaSlice className="h-10 w-10 text-teal-900 sm:h-10 sm:w-10" />
          </div>
          <div className="mb-6 max-w-xl">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Crafting Culinary Excellence
              <br className="hidden md:block" />
              One Slice at a{" "}
              <span className="inline-block text-purple-700">Time</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              At Artisanal Pizza Pantry, our journey is defined by a commitment
              to crafting culinary excellence with every slice we serve. With
              meticulous attention to detail and a passion for flavor
              innovation, we've created a haven where pizza isn't just a dish;
              it's an art form. Our dedication to sourcing the finest
              ingredients and perfecting techniques ensures that each bite is a
              symphony of taste that lingers long after the meal.
            </p>
          </div>
        </div>
        <div className="-mx-4 flex items-center justify-center lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="mb-6 h-28 w-28 rounded object-cover shadow-lg sm:h-48 sm:w-48 xl:h-56 xl:w-56"
              src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <img
              className="h-20 w-20 rounded object-cover shadow-lg sm:h-32 sm:w-32 xl:h-40 xl:w-40"
              src="https://images.unsplash.com/photo-1625218753558-a631580142c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="h-40 w-40 rounded object-cover shadow-lg sm:h-64 sm:w-64 xl:h-80 xl:w-80"
              src="https://images.unsplash.com/photo-1622495966349-2857f74777a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent2;
