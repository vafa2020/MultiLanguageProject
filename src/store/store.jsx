import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useStoreCart = create(
  persist((set) => ({
    totalPrice: 0,
    cart: [],
    count: 0,

    //   addToCart: (product) => set((state) => ({ bears: state.bears + 1 })),
    addToCart: (product) => {
      return set((state) => {
        state.count++;
        const index = state.cart.findIndex((p) => p.id === product.id);
        if (index === -1) {
          state.totalPrice += product.price;
          return { cart: [...state.cart, { ...product, quntity: 1 }], totalPrice: state.totalPrice };
        } else if (index !== -1) {
          const getProduct = state.cart[index];
          getProduct.quntity++;
          state.cart[index] = getProduct;
          state.totalPrice += getProduct.price;
          return { cart: state.cart, totalPrice: state.totalPrice };
        }
      });
    },

    removeFromCard: (id) => {
      return set((state) => {
        state.count--;
        const index = state.cart.findIndex((p) => p.id === id);
        const getProduct = state.cart[index];
        if (getProduct.quntity > 1) {
          getProduct.quntity--;
          state.cart[index] = getProduct;
          state.totalPrice -= getProduct.price;
          return { cart: state.cart, totalPrice: state.totalPrice };
        } else if (getProduct.quntity === 1) {
          const remove = state.cart.filter((p) => p.id !== id);
          state.totalPrice -= getProduct.price;
          return { cart: remove, totalPrice: state.totalPrice };
        }
      });
    },
  })),
  {
    name: "product-car", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
  }
);
