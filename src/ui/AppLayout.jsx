import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Footer from "../features/footer/Footer";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
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
