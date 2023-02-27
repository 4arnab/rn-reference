import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/Ui/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  const pressHandler = () => {};
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerTintColor: "white",
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerRight: () => (
          <IconButton
            onPress={() => {
              navigation.navigate("ManageExpenses");
            }}
            icon="add"
            color="white"
            size={24}
          />
        ),
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarHideOnKeyboard: true,
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      })}
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
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ExpensesOverView">
            <Stack.Screen
              name="ExpensesOverView"
              options={{
                headerShown: false,
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary500,
                },
              }}
              component={ExpensesOverview}
            />
            <Stack.Screen
              name="ManageExpenses"
              options={{
                presentation: "modal",
                headerTintColor: "white",
                title: "Manage Expenses",
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary500,
                },
              }}
              component={ManageExpenses}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
