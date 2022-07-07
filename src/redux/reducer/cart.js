import axios from 'axios';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  items: [],
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.items = action.payload;
    },
    incrementQuantitySuccess: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      const updateIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      let updateData = state.items[updateIndex];
      updateData = { ...updateData, quantity: updateData.quantity + 1 };
      state.items[updateIndex] = updateData;
    },
    decrementQuantitySuccess: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      const updateIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      let updateData = state.items[updateIndex];
      updateData = { ...updateData, quantity: updateData.quantity - 1 };
      state.items[updateIndex] = updateData;
    },
  },
});

export const { addToCart } = cartReducer.actions;

export function incrementQuantity({ id, quantity }) {
  return async (dispatch) => {
    try {
      console.log('ke sini');
      await axios.put(`http://localhost:3000/pub/product/${id}`, {
        quantity: quantity + 1,
      });
      dispatch(cartReducer.actions.incrementQuantitySuccess({ id }));
    } catch (error) {
      console.log(error);
    }
  };
}

export function decrementQuantity({ id, quantity }) {
  return async (dispatch) => {
    try {
      console.log('ke sini');
      await axios.put(`http://localhost:3000/pub/product/${id}`, {
        quantity: quantity - 1,
      });
      dispatch(cartReducer.actions.incrementQuantitySuccess({ id }));
    } catch (error) {
      console.log(error);
    }
  };
}

export default cartReducer.reducer;
