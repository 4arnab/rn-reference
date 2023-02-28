import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";

import tw from "twrnc";
import IconButton from "../components/Ui/IconButton";
import Button from "../components/Ui/Button";
import Form from "../components/expensesForm/Form";

export default function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add Expense",
    });
  }, [isEditing]);

  const pressHandler = () => {
    console.log("ahmed arnab");
  };

  const closeModel = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <Form />
      <View style={tw`flex-row justify-center items-center m-4`}>
        <Button onPress={closeModel} color="bg-blue-400">
          {isEditing ? "Edit" : "Add new expense"}
        </Button>
        <Button onPress={closeModel} flat="flat" color="bg-red-400">
          close window
        </Button>
      </View>
      {isEditing && (
        <IconButton
          onPress={closeModel}
          size={24}
          icon="trash"
          color={"blue"}
        />
      )}
    </View>
  );
}
