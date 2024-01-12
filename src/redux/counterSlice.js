import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 70,
    name:"counter77777"
  },
  reducers: {
    Adding: (state) => {
      state.value += 1;
    },
  },
});
export const { Adding } = counterSlice.actions;
export default counterSlice.reducer;
