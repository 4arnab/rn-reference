import { View, Text, Pressable } from "react-native";
import React from "react";

import tw from "twrnc";

export default function Button({ children, color, flat, onPress }) {
  return (
    <View style={tw`m-1`}>
      <Pressable onPress={onPress}>
        <View
          style={tw`rounded px-4 py-2 ${
            flat === "flat" ? "border border-red-400" : color
          }`}
        >
          <Text style={tw`${flat === "flat" ? "text-red-400" : "text-white"}`}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
