import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

export default function TicketSummaryCard({ tone = "open", count, label }) {
  const map = {
    open: {
      icon: "alert-circle-outline",
      accent: colors.warning,
      soft: "rgba(242, 201, 76, 0.16)",
    },
    progress: {
      icon: "time-outline",
      accent: colors.info,
      soft: "rgba(47, 128, 237, 0.14)",
    },
    done: {
      icon: "checkmark-circle-outline",
      accent: colors.success,
      soft: "rgba(39, 174, 96, 0.14)",
    },
  };

  const meta = map[tone] || map.open;

  return (
    <View style={styles.card}>
      <View style={[styles.accentBar, { backgroundColor: meta.accent }]} />

      <View style={styles.topRow}>
        <View style={[styles.iconWrap, { backgroundColor: meta.soft }]}>
          <Ionicons name={meta.icon} size={18} color={colors.textPrimary} />
        </View>

        <View style={styles.countWrap}>
          <Text style={styles.count}>{count}</Text>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={[styles.pill, { backgroundColor: meta.soft }]}>
          <View style={[styles.dot, { backgroundColor: meta.accent }]} />
          <Text style={[styles.pillText, { color: meta.accent }]}>
            {tone === "open" ? "Active" : tone === "progress" ? "Running" : "Closed"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },
  accentBar: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 4,
    height: "100%",
    opacity: 0.9,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  countWrap: { flex: 1 },
  count: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.textPrimary,
    lineHeight: 26,
  },
  label: {
    marginTop: 2,
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "700",
  },
  footer: {
    marginTop: spacing.md,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  pillText: {
    fontSize: 11,
    fontWeight: "900",
  },
});
