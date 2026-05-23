import { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../context/AuthContext";

import AuthNavigator from "./AuthNavigator";

import AppTabs from "./AppTabs";

import linking from "./linking";

import LoadingScreen from "../screens/LoadingScreen";

export default function RootNavigator() {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer linking={linking}>
      {isAuthenticated ? <AppTabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
