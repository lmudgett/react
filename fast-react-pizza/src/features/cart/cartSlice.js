import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      let i = state.items.find((i) => i.pizzaId === action.payload.pizzaId);
      if (!i) {
        state.items.push(action.payload);
      } else {
        i.quantity++;
        i.totalPrice += i.unitPrice;
      }
    },
    deleteItem(state, action) {
      let i = state.items.find((i) => i.pizzaId === action.payload);
      if (!i) return; //no item found
      if (i.quantity === 1) {
        state.items = state.items.filter((i) => i.pizzaId !== action.payload);
      } else {
        i.totalPrice -= i.unitPrice;
        i.quantity--;
      }
    },
    deleteItems(state, action) {
      state.items = state.items.filter(
        (item) => item.pizzaId !== action.payload
      );
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, clearCart, deleteItems } =
  cartSlice.actions;
export default cartSlice.reducer;

//NOTE: look into reselector for performance improvement
export const getCartQuantityTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const getCartPriceTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCart = (state) => state.cart.items;
export const getCartItemExists = (pizzaId) => (state) => {
  return state.cart.items.find((item) => item.pizzaId === pizzaId) ?? false;
};
export const getItemQuantity = (pizzaId) => (state) => {
  return (
    state.cart.items.find((item) => item.pizzaId === pizzaId)?.quantity ?? 0
  );
};
