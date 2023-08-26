import { useSelector } from "react-redux";

const userOrderHook = () => {
  const order = useSelector((state) => state.order);

  const orderPrice = order.cart.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);

  const { cart, customer, id, priority, priorityPrice } = order;

  const isCartEmpty = cart.length === 0;

  return {
    order,
    orderPrice,
    cart,
    customer,
    id,
    priority,
    priorityPrice,
    isCartEmpty,
  };
};

export default userOrderHook;
