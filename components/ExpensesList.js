import { FlatList, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import ExpenseItem from "./ExpenseItem";

function renderItem({ item }) {
  return <ExpenseItem item={item} />;
}
export default function ExpensesList({ expenses }) {
  return (
    <View>
      <FlatList
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
