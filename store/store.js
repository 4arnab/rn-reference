import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";
import expenses from "./slices/expenses";

export const store = configureStore({
  reducer: {
    counter: counter,
    expenses: expenses,
  },
});
