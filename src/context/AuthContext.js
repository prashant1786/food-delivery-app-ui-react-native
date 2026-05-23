import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem("auth");

    if (token === "true") {
      setIsAuthenticated(true);
    }

    setLoading(false);
  };

  const login = async () => {
    await AsyncStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
