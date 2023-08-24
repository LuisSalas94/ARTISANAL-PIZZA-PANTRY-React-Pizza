import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="relative flex flex-col py-16 lg:flex-col lg:pb-0 lg:pt-0">
      <div className="mx-auto flex w-full max-w-xl flex-col items-start px-4 lg:max-w-screen-xl lg:px-8">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="mb-6 max-w-xl">
            <div>
              <p className="mb-4 inline-block rounded-full bg-teal-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
                Artisanal Pizza Pantry
              </p>
            </div>
            <h2 className="mx-1 mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <span className="mr-1">The best pizza</span>
              <br className=" hidden md:block" />
              straight out of the oven{" "}
              <span className="inline-block text-purple-400">
                straight to you.
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Indulge in a culinary journey that celebrates the art of pizza
              making. At Artisanal Pizza Pantry, we go beyond the ordinary,
              crafting each pizza with passion and precision. Our handpicked
              ingredients, artisanal techniques, and a dash of creativity come
              together to create a symphony of flavors in every bite.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/menu"
              className="hover:bg-deep-purple-accent-700 focus:shadow-outline mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-purple-700 px-6 font-medium tracking-wide text-purple-50 shadow-md transition duration-200 focus:outline-none md:mb-0 md:mr-4 md:w-auto"
            >
              Continue ordering, Fernando
            </Link>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 mx-auto w-full max-w-xl px-4 lg:absolute lg:mx-0 lg:mb-0 lg:w-1/2 lg:max-w-full lg:pl-8 lg:pr-0 xl:px-0">
        <img
          className="h-56 w-full rounded object-cover shadow-lg sm:h-96 lg:h-full lg:rounded-none lg:shadow-none"
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeHeader;
