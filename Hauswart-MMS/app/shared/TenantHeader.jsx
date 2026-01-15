import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { colors } from "../constants/colors";
import { spacing } from "../constants/spacing";

export default function TenantHeader({
  name = "Aamir",
  property = "Green Tower — Unit 3A",
}) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.greeting}>Good Morning,</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.unit}>{property}</Text>
      </View>

      <View style={styles.right}>
        {/* 🔔 Notifications → Alerts Tab */}
        <Pressable
          onPress={() => router.push("/tenant/(tabs)/alerts")}
          style={({ pressed }) => [styles.bell, pressed && styles.pressed]}
          android_ripple={{ color: "rgba(0,0,0,0.06)", borderless: true }}
        >
          <Ionicons
            name="notifications-outline"
            size={20}
            color={colors.textPrimary}
          />
          <View style={styles.dot} />
        </Pressable>

        {/* 👤 Avatar → Edit Profile */}
        <Pressable
          onPress={() => router.push("/tenant/profile/edit")}
          style={({ pressed }) => [styles.avatarRing, pressed && styles.pressed]}
          android_ripple={{ color: "rgba(0,0,0,0.06)", borderless: true }}
        >
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.avatar}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flex: 1,
    paddingRight: spacing.md,
  },

  greeting: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: "600",
  },
  name: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.textPrimary,
    marginTop: 2,
  },
  unit: {
    fontSize: 12,
    color: colors.primary,
    marginTop: 4,
    fontWeight: "800",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  bell: {
    width: 42,
    height: 42,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  dot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EB5757",
    borderWidth: 2,
    borderColor: colors.white,
  },

  avatarRing: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "rgba(243,139,20,0.35)",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },

  pressed: {
    opacity: 0.96,
    transform: [{ scale: 0.99 }],
  },
});
