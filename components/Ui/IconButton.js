import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "twrnc";
export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? { opacity: 0.75 } : {})}
      onPress={onPress}
    >
      <View style={tw`mr-2`}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}
