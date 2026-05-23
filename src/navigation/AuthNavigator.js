import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "../screens/auth/OnboardingScreen";

import LoginScreen from "../screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />

      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
