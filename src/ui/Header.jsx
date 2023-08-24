import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <header>
      <Link to="/">React Pizza</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
