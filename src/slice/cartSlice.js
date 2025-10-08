import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")): []
  },


  reducers: {
    cartTotal: (state, actions) => {
      const findIndex = state.cartItems.findIndex((item) => item.id == actions.payload.id)
      if (findIndex >= 0) {
        state.cartItems[findIndex].cartQuantity += 1
      } else {
        state.cartItems.push({ ...actions.payload, cartQuantity: 1 })
      }
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems))


    },
    cartQuantity: (state,actions) =>{
      console.log(state);
      console.log(actions.payload);
      if (actions.payload.type == "increment"){
        state.cartItems[actions.payload.id].cartQuantity += 1
      }else{
        state.cartItems[actions.payload.id].cartQuantity -= 1
      }
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems))
    }
  }
});


export const { cartTotal, cartQuantity } = cartSlice.actions

export default cartSlice.reducer