import { CartItemType } from "@/interface/common.interface";
import { Tables } from "@/types/supabase";
import { create } from "zustand";

type cartStoreState = { cartItems: CartItemType[]; cartCount: number };

type PositionStoreActions = {
  addToCart: (item: Tables<"products">) => void;
  removeFromCart: (itemId: number) => void;
  incrementCartItemQuantity: (itemId: number) => void;
  decrementCartItemQuantity: (itemId: number) => void;
  clearCart: () => void;
  updateCartCount: (count: number) => void;
};

type PositionStore = cartStoreState & PositionStoreActions;

export const useCartStore = create<PositionStore>((set) => ({
  cartCount: 0,
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      let cartItems = [...state.cartItems];
      const ifItemExists = state.cartItems.some(
        (cartItem) => cartItem.id === item.id
      );
      if (ifItemExists) {
        cartItems = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      } else {
        cartItems.push({ ...item, quantity: 1 });
      }
      return {
        cartItems,
        cartCount: state.cartCount + 1,
      };
    }),
  incrementCartItemQuantity: (itemId: number) =>
    set((state) => {
      const cartItems = state.cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { cartItems, cartCount: state.cartCount + 1 };
    }),
  decrementCartItemQuantity: (itemId: number) =>
    set((state) => {
      const cartItems = state.cartItems.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return { cartItems, cartCount: state.cartCount - 1 };
    }),
  removeFromCart: (itemId: number) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
      cartCount: state.cartCount - 1,
    })),
  clearCart: () => set({ cartItems: [] }),
  updateCartCount: (count: number) => set({ cartCount: count }),
}));
