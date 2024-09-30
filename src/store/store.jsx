import { create } from "zustand";

export const useStore = create((set) => ({
  cart: {
    totalPrice: 0,
    cart: [],
  },
  addToCart: (product) => set((state) => ({ bears: state.bears + 1 })),
  removeFromCard: (id) => set({ bears: 0 }),
}));
