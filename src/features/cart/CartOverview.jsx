import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

const CartOverview = () => {
  const totalCartQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  );

  const totalCartPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
  );

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between rounded-md bg-zinc-800 p-3 px-3 py-2 text-sm uppercase text-stone-200 sm:px-4 md:fixed md:top-1/3 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>

      <Link className="ml-4" to="/cart">
        {" "}
        Open Cart &rarr;
      </Link>
    </div>
  );
};

export default CartOverview;
