import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../cart/cartSlice";

const useMenuItemHook = ({ pizza }) => {
  const dispatch = useDispatch();

  const { id, name, unitPrice } = pizza;

  const currentQuantity = useSelector(
    (state) =>
      state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0,
  );

  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    toast.success(`${name} Pizza was added to cart!`);
    dispatch(addItem(newItem));
  };

  return {
    isInCart,
    handleAddToCart,
    currentQuantity,
  };
};

export default useMenuItemHook;
