import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Footer from "../features/footer/Footer";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div>
        <Outlet />
      </div>
      <CartOverview />
      <Footer />
    </div>
  );
};

export default AppLayout;
