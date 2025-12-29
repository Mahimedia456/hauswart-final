import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import LanguageProvider from "@/providers/LanguageProvider";
import { safeActivateKeepAwake, safeDeactivateKeepAwake } from "./shared/safeKeepAwake";

export default function RootLayout() {
  useEffect(() => {
    if (__DEV__) safeActivateKeepAwake();
    return () => {
      if (__DEV__) safeDeactivateKeepAwake();
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <LanguageProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </LanguageProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
