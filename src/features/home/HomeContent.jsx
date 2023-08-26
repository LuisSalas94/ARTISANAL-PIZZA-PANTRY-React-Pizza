import { FaPizzaSlice } from "react-icons/fa6";

const HomeContent = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-6 flex w-full flex-col md:mb-8 lg:flex-row lg:justify-between">
        <div className="group mb-5 flex items-center md:mb-6 lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
              <FaPizzaSlice className="h-10 w-10 text-purple-700 sm:h-10 sm:w-10" />
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="mb-2 inline-block">
              {" "}
              Discover Our Pizza Masterpieces
            </span>
            <div className="bg-deep-purple-accent-400 scale-x-30 ml-auto h-1 origin-left transform duration-300 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:max-w-md lg:text-sm">
          "Indulge in a culinary voyage that celebrates the art of pizza making
          at Artisanal Pizza Pantry. Each pizza is a canvas of creativity and
          flavor, carefully crafted to elevate your dining experience. From the
          whimsical to the classic, our selection of handcrafted pizzas reflects
          our dedication to blending tradition with innovation. Join us on a
          journey of taste and explore our diverse range of masterpieces, each
          telling a story through its carefully curated ingredients and
          harmonious flavors."
        </p>
      </div>
      <div className="row-gap-5 lg:row-gap-8 mb-8 grid gap-8 lg:grid-cols-3">
        <div>
          <img
            className="mb-6 h-56 w-full rounded object-cover shadow-lg md:h-64 xl:h-80"
            src="https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            A Culinary Adventure Awaits
          </p>
          <p className="text-gray-700">
            Embark on a tantalizing journey of flavors at Artisanal Pizza
            Pantry. Our menu is a testament to culinary exploration, where
            traditional recipes and innovative combinations come together to
            create a symphony of taste that will leave you craving for more.
          </p>
        </div>
        <div>
          <img
            className="mb-6 h-56 w-full rounded object-cover shadow-lg md:h-64 xl:h-80"
            src="https://images.unsplash.com/photo-1536090219743-b4d977a0d9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Crafting Pizza Excellence
          </p>
          <p className="text-gray-700">
            Witness the art of pizza-making at its finest. Artisanal Pizza
            Pantry meticulously crafts each pizza to perfection, using only the
            freshest ingredients and time-honored techniques. With every bite,
            you'll taste the dedication we pour into creating exceptional
            flavors.
          </p>
        </div>
        <div>
          <img
            className="mb-6 h-56 w-full rounded object-cover shadow-lg md:h-64 xl:h-80"
            src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Elevate Your Palate
          </p>
          <p className="text-gray-700">
            Elevate your dining experience with our exquisite pizzas. Artisanal
            Pizza Pantry is where flavor meets craftsmanship. From the rich
            aroma of our wood-fired oven to the carefully curated toppings, each
            pizza is a masterpiece that invites you to explore taste in a new
            light.
          </p>
        </div>
        <div>
          <img
            className="mb-6 h-56 w-full rounded object-cover shadow-lg md:h-64 xl:h-80"
            src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Pioneering Pizza Innovation
          </p>
          <p className="text-gray-700">
            At Artisanal Pizza Pantry, we're not just crafting pizzas; we're
            redefining the pizza experience. Prepare to be amazed by our
            inventive creations, where unexpected ingredients blend harmoniously
            to create culinary wonders that defy convention.
          </p>
        </div>
        <div>
          <img
            className="mb-6 h-56 w-full rounded object-cover shadow-lg md:h-64 xl:h-80"
            src="https://images.unsplash.com/photo-1600628421060-939639517883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            The Flavor Revolution
          </p>
          <p className="text-gray-700">
            Join the revolution of flavors at Artisanal Pizza Pantry. Our pizzas
            are a celebration of taste, blending traditional and modern
            influences to ignite your senses. Get ready to embark on a
            gastronomic adventure like no other.
          </p>
        </div>
        <div>
          <img
            className="mb-6 h-56 w-full rounded object-cover shadow-lg md:h-64 xl:h-80"
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            From Passion to Plate
          </p>
          <p className="text-gray-700">
            Passion fuels every aspect of Artisanal Pizza Pantry, from
            hand-selecting premium ingredients to the careful assembly of each
            pizza. Our dedication to creating exceptional culinary experiences
            shines through every slice, inviting you to savor the heart and soul
            we infuse into our creations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
