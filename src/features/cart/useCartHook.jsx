import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearCart } from "./cartSlice";

const useCartHook = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const isCartEmpty = cart.length === 0;

  const clearCartAndToast = () => {
    dispatch(clearCart());
    toast.success("Cart was cleared");
  };

  return {
    cart,
    isCartEmpty,
    clearCartAndToast,
  };
};

export default useCartHook;
