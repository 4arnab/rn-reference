import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

import { Text } from "react-native";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerTintColor: "white",
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
          // borderRadius: 50,
          // marginBottom: 20,
          // paddingBottom: 30,
        },

        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarHideOnKeyboard: true,
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      }}
    >
      <BottomTabs.Screen
        options={{
          headerTitle: "Recent Expenses",
          tabBarLabel: "Recent",

          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="alarm"
              size={size}
              color={GlobalStyles.colors.error50}
            />
          ),
        }}
        name="RecentExpenses"
        component={RecentExpenses}
      />
      <BottomTabs.Screen
        options={{
          title: "All expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="exit"
              size={size}
              color={GlobalStyles.colors.error50}
            />
          ),
        }}
        name="AllExpense"
        component={AllExpenses}
      />
    </BottomTabs.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpensesOverView">
          <Stack.Screen
            name="ExpensesOverView"
            options={{ headerShown: false }}
            component={ExpensesOverview}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
