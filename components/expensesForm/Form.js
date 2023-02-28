import { View, Text } from "react-native";
import React from "react";
import Input from "./Input";

export default function Form() {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <View>
      <Input
        textInput={{
          keyboardType: "decimal-pad",
          onChangeText: handleChange,
          placeholder: "enter amount",
        }}
        label="Amount"
      />
    </View>
  );
}
