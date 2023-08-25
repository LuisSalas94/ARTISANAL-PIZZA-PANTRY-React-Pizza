import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  customer: "",
  phone: "",
  priority: false,
  priorityPrice: 0,
  totalPrice: 0,
  cart: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(
      state,
      {
        payload: {
          id,
          customer,
          phone,
          priority,
          cart,
          priorityPrice,
          totalPrice,
        },
      },
    ) {
      //payload is the item we want to add
      /* state.cart.push(action.payload); */
      state.id = id;
      state.customer = customer;
      state.phone = phone;
      state.priority = priority;
      state.cart = cart;
      state.priorityPrice = priorityPrice;
      state.totalPrice = totalPrice;
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
