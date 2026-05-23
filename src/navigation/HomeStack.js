import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home/HomeScreen";

import RestaurantDetailScreen from "../screens/home/RestaurantDetailScreen";

import CartScreen from "../screens/home/CartScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff6347",
        },

        headerTintColor: "#fff",

        headerBackTitle: "Back",

        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Restaurants",
        }}
      />

      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{
          title: "Restaurant Details",
        }}
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Your Cart",
        }}
      />
    </Stack.Navigator>
  );
}
