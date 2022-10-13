import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state) => {
      return state;
    },
    editItem: (state) => {
      return state;
    },
  },
});

const initialCart = {
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "carts",
  initialState: initialCart,
  reducers: {
    increase: (state) => {
      console.log(state);
      return state;
    },
    reduce: (state) => {
      return state;
    },
  },
});

const rootReducer = combineReducers({
  formValues: formSlice.reducer,
  carts: cartSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>; // add type of state when using useSelector

export default rootReducer;
