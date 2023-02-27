import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({ item }) {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("ManageExpenses", { expenseId: item.id });
  };
  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => (pressed ? { opacity: 0.65 } : "")}
    >
      <View style={tw`bg-white mb-2 p-4  rounded-md flex-row justify-between`}>
        <View>
          <Text style={tw`font-bold text-[16px] `}>{item.title}</Text>
          <Text style={tw`text-[16px] mb-2 `}>{item.description}</Text>
          <Text style={tw``}>{item.date.toDateString()}</Text>
        </View>
        <View>
          <Text
            style={tw`font-bold bg-blue-400 px-3 py-1 rounded-full text-white`}
          >
            ${item.amount}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
