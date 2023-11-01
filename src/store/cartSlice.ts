import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';

export interface cartItemObject {
  productId: string;
  id: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

const cartItemJSON = getCookie('cart');
const cartItem = cartItemJSON ? JSON.parse(cartItemJSON) : null;

const initialState: { cartItems: cartItemObject[] } = {
  cartItems: cartItem ? [...cartItem] : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{
        productId: string;
        color: string;
        size: string;
        quantity: number;
        price: number;
      }>
    ) => {
      const { productId, color, size, quantity, price } = action.payload;
      const hasSameItem = state.cartItems.find((item) => {
        return (
          item.productId === productId &&
          item.color === color &&
          item.size === size
        );
      });

      if (hasSameItem) {
        hasSameItem.quantity++;
      } else {
        const newItem = {
          productId,
          color,
          size,
          quantity,
          price,
          id: state.cartItems.length.toString().padStart(3, '0'),
        };
        state.cartItems.push(newItem);
      }
    },
    editItem: (state, action: PayloadAction<cartItemObject>) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.cartItems[itemIndex] = action.payload;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const newItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
      state.cartItems = newItems;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
