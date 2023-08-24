import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Footer from "../features/footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <CartOverview />
      <Footer />
    </div>
  );
};

export default AppLayout;
