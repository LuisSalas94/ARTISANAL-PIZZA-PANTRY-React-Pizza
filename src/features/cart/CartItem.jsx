import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

const CartItem = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  let currentQuantity = 0;
  const cartItems = useSelector((state) => state.cart.cart);
  const foundCartItem = cartItems.find((item) => item.pizzaId === pizzaId);
  if (foundCartItem) currentQuantity = foundCartItem.quantity;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;
