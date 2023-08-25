import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuloader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import CreateOrder from "./features/order/CreateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuloader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        /*  action: createOrderAction, */
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        /* loader: orderLoader, */
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
