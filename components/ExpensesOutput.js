import { View, Text, FlatList } from "react-native";
import React from "react";

import ExpensesList from "./ExpensesList";
import tw from "twrnc";

const DUMMY_EXPENSES = [
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
];

export default function ExpensesOutput({ expenses, periodName }) {
  const expensesSum = DUMMY_EXPENSES.reduce(
    (current, expense) => current + expense.amount,
    0
  );
  return (
    <View style={tw`p-6 flex-1`}>
      <View
        style={tw`bg-blue-400 rounded-full items-center mb-3s flex-row justify-between px-4 py-2`}
      >
        <Text style={tw`text-sm text-white`}>{periodName}</Text>
        <Text style={tw`bg-blue-500 px-3 py-1 text-white rounded-full`}>
          $ {expensesSum.toFixed(2)}
        </Text>
      </View>

      {/* list of expenses */}
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
