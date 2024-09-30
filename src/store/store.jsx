import { create } from "zustand";

export const useStoreCart = create((set) => ({
  totalPrice: 0,
  cart: [],

  //   addToCart: (product) => set((state) => ({ bears: state.bears + 1 })),
  addToCart: (product) => {
    return set((state) => {
      console.log("state.cart", state.cart);
      console.log("product", product);
      const index = state.cart.indexOf((p) => p.id === product.id);
      // console.log("findIndex", findIndex);
      if (index === -1) {
        return { cart: [...state.cart, { ...product, quntity: 1 }] };
      } else if (index > 0) {
        const getProduct = state.cart[index];
        console.log("getProduct", getProduct);
        // state.cart[findIndex] = getProduct.quntity++;;
        return {};
      }
    });
  },

  removeFromCard: (id) => set({ bears: 0 }),
}));
