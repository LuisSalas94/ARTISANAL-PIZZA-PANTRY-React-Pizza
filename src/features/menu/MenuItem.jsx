import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  console.log("Pizza", pizza);

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className="h-24" />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm text-teal-500">{formatCurrency(unitPrice)}</p>
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
