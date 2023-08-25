import OrderItem from "./OrderItem";

import { formatCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";

const Order = () => {
  const order = useSelector((state) => state.order);

  console.log("Order", order);
  const { cart, customer, id, phone, priority, priorityPrice, totalPrice } =
    order;

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} </h2>
        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}

          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            preparing order
          </span>
        </div>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(totalPrice)}
        </p>
        {true && (
          <p className="text-sm font-medium text-stone-600">
            Price Priotity: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery:
          {formatCurrency(totalPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
};

export default Order;
