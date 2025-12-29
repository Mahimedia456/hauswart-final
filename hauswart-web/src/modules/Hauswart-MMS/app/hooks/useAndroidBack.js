import { BackHandler } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function useAndroidBack(fallback = "/") {
  const router = useRouter();

  useEffect(() => {
    const onBack = () => {
      router.replace(fallback);
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", onBack);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBack);
  }, []);
}
