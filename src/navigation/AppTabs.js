import { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeStack from "./HomeStack";

import SearchScreen from "../screens/tabs/SearchScreen";

import OrdersScreen from "../screens/tabs/OrdersScreen";

import ProfileDrawer from "./ProfileDrawer";

import { CartContext } from "../context/CartContext";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const { cartItems } = useContext(CartContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),

          tabBarStyle: (() => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";

            if (routeName === "RestaurantDetail" || routeName === "Cart") {
              return { display: "none" };
            }

            return;
          })(),
        })}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarBadge: cartItems.length > 0 ? cartItems.length : null,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileDrawer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
