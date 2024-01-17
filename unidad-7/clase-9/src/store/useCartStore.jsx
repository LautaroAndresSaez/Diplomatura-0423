import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  amount: 0,
  addProduct: (product) =>
    set(({ cart }) => {
      const newCart = [...cart, product];
      return { cart: newCart, amount: newCart.length };
    }),

  deleteProduct: (index) => {
    set(({ cart }) => {
      const filteredCart = cart.filter((product, i) => i !== index);
      return { cart: filteredCart, amount: filteredCart.length };
    });
  },
}));
