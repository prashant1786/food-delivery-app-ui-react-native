import { View, Text, Button } from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        Food Delivery App
      </Text>

      <Button title="Get Started" onPress={() => navigation.replace("Login")} />
    </View>
  );
}
