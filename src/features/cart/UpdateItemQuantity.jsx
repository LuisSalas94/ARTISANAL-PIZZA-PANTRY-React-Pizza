import Button from "../../ui/Button";

const UpdateItemQuantity = () => {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round">-</Button>
      <span className="text-sm font-medium">Quantity</span>
      <Button type="round">+</Button>
    </div>
  );
};

export default UpdateItemQuantity;
