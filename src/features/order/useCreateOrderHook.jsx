import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { addOrder } from "./orderSlice";

const useCreateOrderHook = () => {
  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [withPriority, setWithPriority] = useState(false);
  const navigation2 = useNavigate();

  const cart = useSelector((state) => state.cart.cart);
  const randomId = String(
    Math.random().toString(36).substr(2, 9),
  ).toUpperCase();

  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  /* Form */
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  /* Redux */
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    e.preventDefault();
    const newOrder = {
      id: randomId,
      customer: customer,
      phone: phone,
      priority: withPriority,
      priorityPrice: priorityPrice,
      totalPrice: totalPrice,
      cart: cart,
    };
    dispatch(addOrder(newOrder));
    navigation2("/order/" + randomId);
  };

  return {
    customer,
    setCustomer,
    phone,
    setPhone,
    address,
    setAddress,
    withPriority,
    setWithPriority,
    cart,
    randomId,
    totalCartPrice,
    priorityPrice,
    totalPrice,
    navigation2,
    navigation,
    isSubmitting,
    dispatch,
    handleOrder,
  };
};

export default useCreateOrderHook;
