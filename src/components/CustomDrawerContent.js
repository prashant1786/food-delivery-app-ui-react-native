import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { View, Text, Image } from "react-native";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export default function CustomDrawerContent(props) {
  const { logout } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://i.pravatar.cc/100",
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
          }}
        />

        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
          }}
        >
          John Doe
        </Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem label="Logout" onPress={logout} />
    </DrawerContentScrollView>
  );
}
