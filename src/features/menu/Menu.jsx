import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();

  return (
    <div className="mx-auto max-w-3xl">
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export const loader = async () => {
  const menu = await getMenu();
  return menu.data;
};

export default Menu;
