import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

export default function RecentUpdateCard({ id, title, status, statusColor, time }) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.meta}>
          <Text style={styles.id}>{id}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.time}>{time}</Text>
        </View>

        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.bottom}>
        <View style={[styles.pill, { borderColor: statusColor + "33" }]}>
          <View style={[styles.pillDot, { backgroundColor: statusColor }]} />
          <Text style={[styles.pillText, { color: statusColor }]}>{status}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  id: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: "800",
  },
  dot: {
    fontSize: 12,
    color: colors.textMuted,
  },
  time: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: "700",
  },
  title: {
    fontSize: 15,
    fontWeight: "900",
    color: colors.textPrimary,
    marginTop: 10,
    marginBottom: 10,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
  },
  pill: {
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
  pillDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  pillText: {
    fontSize: 12,
    fontWeight: "900",
  },
});
