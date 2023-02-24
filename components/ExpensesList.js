import { FlatList, Pressable, Text, View } from "react-native";
import tw from "twrnc";

function renderItem({ item }) {
  return (
    <Pressable>
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
