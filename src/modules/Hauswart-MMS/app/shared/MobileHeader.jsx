import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../constants/colors";
import { spacing } from "../constants/spacing";
import BackIcon from "./icons/BackIcon"; // SVG

export default function MobileHeader({
  title,
  onBack,
  rightIcon,
  rightBadgeCount = 0,
  onRightPress,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable onPress={onBack} style={styles.back} hitSlop={10}>
          <BackIcon width={22} height={22} color={colors.textPrimary} />
        </Pressable>

        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {rightIcon ? (
        <Pressable
          onPress={onRightPress}
          style={({ pressed }) => [styles.rightBtn, pressed && styles.pressed]}
          hitSlop={10}
        >
          <Ionicons name={rightIcon} size={22} color={colors.textPrimary} />

          {rightBadgeCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {rightBadgeCount > 99 ? "99+" : rightBadgeCount}
              </Text>
            </View>
          )}
        </Pressable>
      ) : (
        <View style={{ width: 40 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  back: {
    marginRight: spacing.md,
  },

  title: {
    fontSize: 18,
    fontWeight: "900",
    color: colors.textPrimary,
    flex: 1,
  },

  rightBtn: {
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.04)",
    borderWidth: 1,
    borderColor: colors.border,
  },

  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: colors.white,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "900",
    color: "#111",
  },

  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
