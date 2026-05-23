import { useContext } from "react";

import { View, Text, Button, FlatList } from "react-native";

import { CartContext } from "../../context/CartContext";

export default function CartScreen({ navigation }) {
  const { cartItems } = useContext(CartContext);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 20,
              margin: 10,
              backgroundColor: "#fff",
              borderRadius: 12,
            }}
          >
            <Text>{item.restaurantName}</Text>

            <Text>₹{item.price}</Text>
          </View>
        )}
      />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
