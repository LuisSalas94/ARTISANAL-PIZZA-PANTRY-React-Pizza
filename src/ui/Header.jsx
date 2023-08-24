import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-purple-600 px-4 py-3 uppercase sm:px-6">
      <Link to="/">React Pizza</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
