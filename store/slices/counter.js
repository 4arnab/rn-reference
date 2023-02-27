import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
});

export default counter.reducer;
