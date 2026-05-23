import * as Linking from "expo-linking";

const linking = {
  prefixes: ["foodapp://"],

  config: {
    screens: {
      Home: {
        screens: {
          HomeScreen: "home",

          RestaurantDetail: "restaurant/:id",

          Cart: "cart",
        },
      },
    },
  },
};

export default linking;
