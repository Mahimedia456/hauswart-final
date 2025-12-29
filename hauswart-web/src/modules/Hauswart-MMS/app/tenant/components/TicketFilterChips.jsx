import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

const FILTERS = [
  { key: "all", label: "All", icon: "apps-outline" },
  { key: "open", label: "Open", icon: "alert-circle-outline" },
  { key: "inProgress", label: "In Progress", icon: "time-outline" },
  { key: "completed", label: "Completed", icon: "checkmark-circle-outline" },
];

export default function TicketFilterChips({ onChange }) {
  const [active, setActive] = useState("all");

  const handlePress = (key) => {
    setActive(key);
    onChange?.(key);
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        {FILTERS.map((item) => {
          const isActive = active === item.key;

          return (
            <Pressable
              key={item.key}
              onPress={() => handlePress(item.key)}
              style={({ pressed }) => [
                styles.chip,
                isActive && styles.activeChip,
                pressed && styles.pressed,
              ]}
            >
              <Ionicons
                name={item.icon}
                size={16}
                color={isActive ? "#111" : colors.textMuted}
              />
              <Text style={[styles.text, isActive && styles.activeText]}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: spacing.lg,
  },
  container: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.sm,
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 1,
  },

  activeChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  text: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.textSecondary,
  },

  activeText: {
    color: "#111",
  },

  pressed: {
    opacity: 0.96,
    transform: [{ scale: 0.99 }],
  },
});
