import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    cartTotal: (state, actions) => {
      console.log(state.cartItems,"state");
      console.log(actions.payload,"actions");
      state.cartItems.push(actions.payload)
      
    },
  }
});

export const { cartTotal} = cartSlice.actions

export default cartSlice.reducer