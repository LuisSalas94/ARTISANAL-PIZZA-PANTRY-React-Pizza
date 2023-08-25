import { useSelector } from "react-redux";

const useCartItemHook = ({ item }) => {
  const { pizzaId } = item;

  const cartItems = useSelector((state) => state.cart.cart);
  const foundCartItem = cartItems.find((item) => item.pizzaId === pizzaId);

  let currentQuantity = 0;
  if (foundCartItem) {
    currentQuantity = foundCartItem.quantity;
  }

  return { currentQuantity };
};

export default useCartItemHook;
