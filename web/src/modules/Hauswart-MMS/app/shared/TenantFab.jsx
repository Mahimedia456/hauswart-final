import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";

export default function TenantFab({ onPress }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      pointerEvents="box-none"
      style={[
        styles.wrap,
        { bottom: Math.max(insets.bottom, 12) + 86 }, // ✅ above your tab bar
      ]}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.fab, pressed && styles.pressed]}
        android_ripple={{ color: "rgba(255,255,255,0.18)", borderless: true }}
      >
        <Ionicons name="add" size={26} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    right: 18,
    zIndex: 999,
    elevation: 20,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: colors.primary, // Hauswart orange
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.22,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 18,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.95,
  },
});
