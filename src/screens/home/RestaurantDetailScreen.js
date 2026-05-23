import { useContext } from "react";

import { View, Text, Button } from "react-native";

import { CartContext } from "../../context/CartContext";

export default function RestaurantDetailScreen({ route, navigation }) {
  const { restaurantName, price } = route.params;

  const restaurantId = route.params?.id;

  const { addToCart } = useContext(CartContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{restaurantName}</Text>

      <Text>₹{price}</Text>

      <Text>Restaurant ID: {restaurantId}</Text>

      <Button
        title="Add To Cart"
        onPress={() =>
          addToCart({
            restaurantName,
            price,
          })
        }
      />

      <Button title="Go To Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
}
