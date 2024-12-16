import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IState {
  cart: any[];
  total: number;
  addToCart: (item: any, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
  getCartTotal: (cart: any[]) => number;
  setTotal: () => void;
}

export const useCart = create<IState>()(
  persist(
    (set, get) => ({
      cart: [],
      total: get()?.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0),
      setTotal: () => {
        set((state) => ({
          total: state.cart.reduce((acc, item) => {
            return acc + item.price * item.quantity;
          }, 0)
        }));
      },
      addToCart: (item, quantity) =>
        set((state) => {
          const index = state.cart.findIndex((i) => i.id === item.id);
          if (index !== -1) {
            state.cart[index].quantity += quantity;
            return { cart: state.cart };
          }

          return { cart: [...state.cart, { ...item, quantity }] };
        }),
      removeFromCart: (id) =>
        set((state) => {
          return { cart: state.cart.filter((i) => i.id !== id) };
        }),
      clearCart: () => set({ cart: [] }),
      updateQuantity: (id, quantity) =>
        set((state) => {
          const index = state.cart.findIndex((i) => i.id === id);
          if (index !== -1) {
            state.cart[index].quantity = quantity;
            return { cart: state.cart };
          }

          return { cart: state.cart };
        }),
      getCartTotal: (cart) => {
        return cart.reduce((acc, item) => {
            // console.log(`price ${item.price}, quantity ${item.quantity}`)
          return acc + item.price * item.quantity;
        }, 0);
      },
    }),
    {
      name: "cart-dekkeborde",
    }
  )
);

interface IOrderState {
  order: any;
  setOrder: (order: any) => void;
}

interface IOrderErrorsState {
  errors: boolean;
  setErrors: (value: boolean) => void;
}

interface ICustomerState {
  customer_id: number;
  setCustomerId: (id: number) => void;
}

export const useOrder = create<IOrderState>()(
  persist(
    (set) => ({
      order: {},
      setOrder: (order) => set({ order }),
    }),
    {
      name: "order-dekkeborde",
    }
  )
);

export const useOrderErrors = create<IOrderErrorsState>()(
  persist(
    (set) => ({
      errors: false,
      setErrors: (value: boolean) => set({ errors: value }),
    }),
    {
      name: "order-errors-dekkeborde",
    }
  )
);

export const useCustomer = create<ICustomerState>()(
persist(
  (set) => ({
    customer_id: 0,
    setCustomerId: (id) => set({ customer_id: id }),
  }),
  {
    name: "customer-dekkeborde",
  }
)
);

