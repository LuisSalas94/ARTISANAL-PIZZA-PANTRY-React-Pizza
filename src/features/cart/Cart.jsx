import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import useCartHook from "./useCartHook";

const Cart = () => {
  const { cart, isCartEmpty, clearCartAndToast } = useCartHook();

  if (isCartEmpty) return <EmptyCart />;

  return (
    <div className="mx-auto max-w-3xl px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, Fernando</h2>

      <ul className=" mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={clearCartAndToast}>
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
