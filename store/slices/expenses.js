import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DUMMY_EXPENSES: [
    {
      id: 1,
      title: "Shopping cart",
      description: "Buy react native udemy course",
      amount: 11,
      date: new Date("2023-02-01"),
    },
    {
      id: 2,
      title: "Shopping cart",
      description: "Drink cold water",
      amount: 50,
      date: new Date("2023-01-29"),
    },
    {
      id: 3,
      title: "Shopping cart",
      description: "Lunch Food",
      amount: 100,
      date: new Date("2021-01-01"),
    },
    {
      id: 4,
      title: "Shopping cart",
      description: "Breakfast food ",
      amount: 100,
      date: new Date("2021-01-01"),
    },
  ],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addNewExpense: (state, payload) => {
      console.log(payload);
      state.DUMMY_EXPENSES.push(payload);
    },
    deleteExpense: (state, id) => {
      state.DUMMY_EXPENSES = state.DUMMY_EXPENSES.filter(
        (expense) => expense.id !== id
      );
    },
    updateExpense: (state, payload) => {},
  },
});

export const { addNewExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
