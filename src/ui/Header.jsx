import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center border-b border-stone-200 bg-purple-700 px-4 py-5 uppercase sm:px-6 ">
      <Link to="/" className="text-xl text-slate-50">
        ARTISANAL PIZZA PANTRY
      </Link>
    </header>
  );
};

export default Header;
