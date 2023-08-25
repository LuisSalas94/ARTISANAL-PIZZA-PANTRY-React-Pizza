import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload is the item we want to add
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      // payload is the id of the item we want to delete
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
