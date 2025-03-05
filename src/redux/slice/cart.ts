import { createSlice } from "@reduxjs/toolkit";
import { ProductInt } from "../../type/type";

const initialState: ProductInt[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      console.log({ action });

      return [...state, action.payload];
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
