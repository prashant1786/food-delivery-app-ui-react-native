import "react-native-gesture-handler";
import RootNavigator from "./src/navigation/RootNavigator";
import { AuthProvider } from "./src/context/AuthContext";
import { CartProvider } from "./src/context/CartContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RootNavigator />
      </CartProvider>
    </AuthProvider>
  );
}
