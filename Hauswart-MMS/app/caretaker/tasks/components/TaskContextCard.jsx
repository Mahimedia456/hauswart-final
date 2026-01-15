import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

export default function TaskContextCard({ task, statusLabel }) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View>
          <Text style={styles.id}>#{task.id}</Text>
          <Text style={styles.title}>{task.title}</Text>
        </View>

        <View style={styles.statusPill}>
          <Text style={styles.statusText}>{statusLabel}</Text>
        </View>
      </View>

      <View style={styles.hr} />

      <View style={{ gap: 10 }}>
        <Row icon="location-outline" text={task.location ?? "Building A, Floor 3"} />
        <Row icon="time-outline" text={task.time ?? "01:15:30 elapsed"} tone="primary" />
      </View>
    </View>
  );
}

function Row({ icon, text, tone }) {
  return (
    <View style={styles.row}>
      <Ionicons
        name={icon}
        size={18}
        color={tone === "primary" ? colors.primary : colors.textMuted}
      />
      <Text style={styles.rowText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0,0,0,0.03)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 10 },
  id: { fontSize: 11, fontWeight: "900", color: colors.textMuted, letterSpacing: 0.6 },
  title: { marginTop: 4, fontSize: 15, fontWeight: "900", color: colors.textPrimary },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: "rgba(47,128,237,0.14)",
    borderWidth: 1,
    borderColor: "rgba(47,128,237,0.22)",
  },
  statusText: { fontSize: 11, fontWeight: "900", color: colors.info },
  hr: { height: 1, backgroundColor: "rgba(0,0,0,0.06)", marginVertical: 12 },
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  rowText: { fontSize: 13, fontWeight: "800", color: colors.textMuted },
});
