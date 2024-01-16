import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addProduct: (product) => set(({ cart }) => ({ cart: [...cart, product] })),
  deleteProduct: (index) => {
    set(({ cart }) => {
      const filteredCart = cart.filter((product, i) => i !== index);
      return { cart: filteredCart };
    });
  },
}));
