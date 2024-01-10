import { create } from "zustand";

export const useCartStore = create((set) => ({
  products: [],
  addProduct(product) {
    set((state) => ({ products: [...state.products, product] }));
  },
}));
