import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import { toast } from "react-toastify";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
    toast.info("Pizza was removed from cart");
  };

  return (
    <Button type="small" onClick={onDeleteItem}>
      Delete
    </Button>
  );
};

export default DeleteItem;
