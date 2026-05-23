import { View, Text, Button, FlatList } from "react-native";

const restaurants = [
  {
    id: "1",
    name: "Pizza Palace",
    price: 250,
  },
  {
    id: "2",
    name: "Burger Hub",
    price: 180,
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 20,
            margin: 10,
            backgroundColor: "#fff",
            borderRadius: 12,
            elevation: 3,
          }}
        >
          <Text>{item.name}</Text>

          <Text>₹{item.price}</Text>

          <Button
            title="View"
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurantName: item.name,
                price: item.price,
              })
            }
          />
        </View>
      )}
    />
  );
}
