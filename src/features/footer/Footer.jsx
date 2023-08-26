import {
  FaLinkedin,
  FaSquareGithub,
  FaMedium,
  FaArrowRight,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="relative mt-16 bg-zinc-800">
      <div className="mx-auto px-4 pt-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="row-gap-10 mb-8 grid gap-16 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-teal-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold uppercase tracking-wide text-gray-100">
                ARTISANAL PIZZA PANTRY
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-100">
                Artisanal Pizza Pantry is more than a restaurant; it's a
                sanctuary for food enthusiasts seeking the finest in pizza
                craftsmanship. Our commitment to blending premium ingredients,
                time-honored techniques, and innovative flavors has culminated
                in a menu that redefines pizza as an art form.
              </p>
            </div>
          </div>
        </div>
        <div className="border-deep-purple-accent-200 flex flex-col justify-between border-t pb-10 pt-5 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2023 | Fernando Salas | Browse Through My Projects{" "}
            <FaArrowRight className="ml-3 inline text-xl text-gray-100" />
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            <a
              href="https://www.linkedin.com/in/luisfernandosalasgave/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-gray-100" />
            </a>
            <a
              href="https://github.com/LuisSalas94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub className="text-2xl text-gray-100" />
            </a>
            <a
              href="https://medium.com/@luisfernandosalasg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium className="text-2xl text-gray-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
