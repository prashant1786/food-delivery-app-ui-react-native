import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileScreen from "../screens/tabs/ProfileScreen";

import MyOrdersScreen from "../screens/drawer/MyOrdersScreen";

import SettingsScreen from "../screens/drawer/SettingsScreen";

import HelpScreen from "../screens/drawer/HelpScreen";

import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function ProfileDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="ProfileHome"
        component={ProfileScreen}
        options={{
          title: "Profile",
        }}
      />

      <Drawer.Screen name="My Orders" component={MyOrdersScreen} />

      <Drawer.Screen name="Settings" component={SettingsScreen} />

      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
}
