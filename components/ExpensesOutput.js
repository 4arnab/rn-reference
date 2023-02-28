import { View, Text, FlatList } from "react-native";
import React from "react";

import ExpensesList from "./ExpensesList";
import tw from "twrnc";

import { useSelector } from "react-redux";

export default function ExpensesOutput({ periodName }) {
  const { DUMMY_EXPENSES } = useSelector((state) => state.expenses);
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
