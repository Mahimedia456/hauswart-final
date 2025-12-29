import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

export default function TicketCardMobile({ ticket }) {
  const meta = getStatusMeta(ticket.status);

  return (
    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.idWrap}>
          <Text style={styles.id}>#{ticket.id}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.date}>{ticket.date}</Text>
        </View>

        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </View>

      {/* Title */}
      <Text style={styles.title} numberOfLines={2}>
        {ticket.title}
      </Text>

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        {/* Category badge */}
        <View style={styles.categoryPill}>
          <Ionicons name="pricetag-outline" size={14} color={colors.textMuted} />
          <Text style={styles.categoryText}>{ticket.category}</Text>
        </View>

        {/* Status pill */}
        <View style={[styles.statusPill, { borderColor: meta.color + "33" }]}>
          <View style={[styles.statusDot, { backgroundColor: meta.color }]} />
          <Text style={[styles.statusText, { color: meta.color }]}>
            {meta.label}
          </Text>
        </View>
      </View>
    </View>
  );
}

function getStatusMeta(status) {
  const map = {
    open: { label: "Open", color: colors.warning },
    inProgress: { label: "In Progress", color: colors.info },
    onHold: { label: "On Hold", color: colors.textMuted },
    completed: { label: "Completed", color: colors.success },
  };

  return map[status] || { label: status, color: colors.primary };
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  idWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  id: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: "900",
  },

  dot: {
    fontSize: 12,
    color: colors.textMuted,
  },

  date: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: "700",
  },

  title: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "900",
    color: colors.textPrimary,
    lineHeight: 20,
  },

  bottomRow: {
    marginTop: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,
  },

  categoryPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: "rgba(0,0,0,0.04)",
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.textSecondary,
  },

  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    backgroundColor: "rgba(0,0,0,0.02)",
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "900",
  },
});
