import LinkButton from "../../ui/LinkButton";

const EmptyOrder = () => {
  return (
    <div className="px4 mx-auto max-w-3xl py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-7 font-semibold">
        You don't have any order yet! Start adding some pizzas 🍕
      </p>
    </div>
  );
};

export default EmptyOrder;
