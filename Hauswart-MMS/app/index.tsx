// app/index.tsx
import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const boot = async () => {
      const token = await AsyncStorage.getItem("hauswart_token");
      const role = await AsyncStorage.getItem("hauswart_role");

      if (!token || !role) {
        router.replace("/auth/screens/Onboarding");
        return;
      }

      if (role === "TENANT") {
        router.replace("/tenant/home");
        return;
      }

      if (role === "TECHNICIAN") {
        router.replace("/caretaker/dashboard");
        return;
      }

      // fallback safety
      await AsyncStorage.clear();
      router.replace("/auth/login");
    };

    boot();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
