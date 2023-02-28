import { View, Text, TextInput } from "react-native";
import React from "react";

export default function Input({ label, textInput }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInput} />
    </View>
  );
}
