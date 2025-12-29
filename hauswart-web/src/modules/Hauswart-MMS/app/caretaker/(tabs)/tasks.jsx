import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/shared/ScreenWrapper";
import TechnicianHeader from "@/shared/TechnicianHeader"; // ✅ keep same
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import useLanguage from "@/hooks/useLanguage";

/* ------------------ dummy data ------------------ */
const TASKS = [
  {
    id: "TSK-4921",
    title: "HVAC Maintenance - Unit 4B",
    location: "Skyline Tower, Floor 4",
    time: "10:00 AM - 11:00 AM",
    status: "inProgress", // todo | inProgress | onHold | overdue | completed
    priority: "high", // high | routine
    dateLabel: "Today, Oct 24",
  },
  {
    id: "TSK-4925",
    title: "Leaking Faucet Repair",
    location: "Riverside Complex, Apt 102",
    time: "12:30 PM - 01:30 PM",
    status: "todo",
    priority: "routine",
    dateLabel: "Today, Oct 24",
  },
  {
    id: "TSK-4899",
    title: "Emergency Generator Check",
    location: "Central Hub, Basement",
    time: "Yesterday, 4:00 PM",
    status: "overdue",
    priority: "high",
    dateLabel: "Today, Oct 24",
  },
  {
    id: "TSK-4930",
    title: "Lobby Lighting Upgrade",
    location: "Skyline Tower, Lobby",
    time: "Tomorrow, 09:00 AM",
    status: "onHold",
    priority: "routine",
    dateLabel: "Today, Oct 24",
  },
];

const FILTERS = ["all", "todo", "inProgress", "onHold", "completed", "overdue"];

export default function TasksTab() {
  const router = useRouter();
  const { t } = useLanguage();

  const ct = t?.ctTasks || {};
  const common = t?.common || {};

  const [active, setActive] = useState("all");

  const labels = useMemo(
    () => ({
      title: ct.title ?? "My Tasks",
      all: ct.filters?.all ?? "All",
      todo: ct.filters?.todo ?? "To Do",
      inProgress: ct.filters?.inProgress ?? "In Progress",
      onHold: ct.filters?.onHold ?? "On Hold",
      completed: ct.filters?.completed ?? "Completed",
      overdue: ct.filters?.overdue ?? "Overdue",
      today: ct.today ?? "Today, Oct 24",
      sortByPriority: ct.sortByPriority ?? "Sort by Priority",
      startTask: ct.startTask ?? "Start Task",
      assignedToYou: ct.assignedToYou ?? "Assigned to you",
      estimated: ct.estimated ?? "Estimated",
      actionRequired: ct.actionRequired ?? "Action Required",
      viewAll: common.viewAll ?? "View all",
    }),
    [ct, common]
  );

  const filtered = useMemo(() => {
    if (active === "all") return TASKS;
    return TASKS.filter((x) => x.status === active);
  }, [active]);

  return (
    <ScreenWrapper>
      <TechnicianHeader
        name="Umair"
        greeting={t?.ctDashboard?.greeting ?? "Good Morning"}
        role={t?.ctDashboard?.role ?? "Technician"}
        onBellPress={() => router.push("/caretaker/alerts")}
        onAvatarPress={() => router.push("/caretaker/(tabs)/profile")}
      />

      {/* Sticky-ish header row (inside screen) */}
      <View style={styles.topBar}>
        <Text style={styles.h1}>{labels.title}</Text>

        <View style={styles.iconRow}>
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
          >
            <Ionicons name="search-outline" size={20} color={colors.textPrimary} />
          </Pressable>

          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
          >
            <Ionicons name="options-outline" size={20} color={colors.textPrimary} />
            <View style={styles.dotBadge} />
          </Pressable>
        </View>
      </View>

      {/* Filter Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsRow}
      >
        {FILTERS.map((key) => {
          const label = labels[key] ?? key;
          const isOn = active === key;

          return (
            <Pressable
              key={key}
              onPress={() => setActive(key)}
              style={({ pressed }) => [
                styles.chip,
                isOn ? styles.chipOn : styles.chipOff,
                pressed && styles.pressed,
              ]}
            >
              <Text style={[styles.chipText, isOn ? styles.chipTextOn : styles.chipTextOff]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        {/* Date + sort */}
        <View style={styles.metaRow}>
          <Text style={styles.metaUpper}>{labels.today}</Text>

          <Pressable onPress={() => {}} style={({ pressed }) => [styles.sortBtn, pressed && styles.pressed]}>
            <Text style={styles.sortText}>{labels.sortByPriority}</Text>
            <Ionicons name="chevron-down" size={16} color={colors.primary} />
          </Pressable>
        </View>

        {filtered.map((task) => (
          <Pressable
            key={task.id}
            onPress={() => router.push(`/caretaker/tasks/${task.id}`)}
            style={({ pressed }) => [styles.card, pressed && styles.pressed]}
          >
            <View style={styles.cardTop}>
              <View style={styles.idRow}>
                <View style={styles.idPill}>
                  <Text style={styles.idText}>#{task.id}</Text>
                </View>

                {task.priority === "high" ? (
                  <View style={styles.priorityHigh}>
                    <Ionicons name="alert-circle" size={14} color={colors.danger} />
                    <Text style={styles.priorityHighText}>
                      {ct.priority?.high ?? "High"}
                    </Text>
                  </View>
                ) : null}
              </View>

              <Pressable
                onPress={() => {}}
                style={({ pressed }) => [styles.moreBtn, pressed && styles.pressed]}
              >
                <Ionicons name="ellipsis-horizontal" size={18} color={colors.textMuted} />
              </Pressable>
            </View>

            <Text style={styles.cardTitle}>{task.title}</Text>

            <View style={{ marginTop: 10, gap: 8 }}>
              <InfoLine icon="location-outline" text={task.location} />
              <InfoLine icon="time-outline" text={task.time} />
            </View>

            <View style={styles.cardBottom}>
              <View style={styles.assignedRow}>
                <View style={styles.avatarMock} />
                <Text style={styles.assignedText}>{labels.assignedToYou}</Text>
              </View>

              <StatusPill status={task.status} t={t} />
            </View>
          </Pressable>
        ))}

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* FAB Start Task */}
      <Pressable
        onPress={() => router.push("/caretaker/scan")}
        style={({ pressed }) => [styles.fab, pressed && styles.pressed]}
      >
        <Ionicons name="play" size={18} color="#fff" />
        <Text style={styles.fabText}>{labels.startTask}</Text>
      </Pressable>
    </ScreenWrapper>
  );
}

function InfoLine({ icon, text }) {
  return (
    <View style={styles.infoLine}>
      <Ionicons name={icon} size={16} color={colors.textMuted} />
      <Text style={styles.infoText} numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
}

function StatusPill({ status, t }) {
  const ct = t?.ctTasks || {};
  const map = {
    inProgress: { bg: "rgba(47,128,237,0.12)", border: "rgba(47,128,237,0.22)", text: colors.info, label: ct.status?.inProgress ?? "In Progress" },
    todo: { bg: "rgba(0,0,0,0.06)", border: "rgba(0,0,0,0.12)", text: colors.textMuted, label: ct.status?.todo ?? "To Do" },
    onHold: { bg: "rgba(242,201,76,0.16)", border: "rgba(242,201,76,0.25)", text: "#9A6B00", label: ct.status?.onHold ?? "On Hold" },
    completed: { bg: "rgba(39,174,96,0.14)", border: "rgba(39,174,96,0.22)", text: colors.success, label: ct.status?.completed ?? "Completed" },
    overdue: { bg: "rgba(235,87,87,0.10)", border: "rgba(235,87,87,0.22)", text: colors.danger, label: ct.status?.overdue ?? "Action Required" },
  };
  const m = map[status] || map.todo;

  return (
    <View style={[styles.statusPill, { backgroundColor: m.bg, borderColor: m.border }]}>
      <Text style={[styles.statusText, { color: m.text }]}>{m.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, paddingBottom: 180 },

  topBar: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  h1: { fontSize: 22, fontWeight: "900", color: colors.textPrimary },
  iconRow: { flexDirection: "row", gap: 10 },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  dotBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.white,
  },

  chipsRow: { paddingHorizontal: spacing.lg, gap: 10, paddingBottom: spacing.sm },
  chip: { height: 38, paddingHorizontal: 14, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  chipOn: { backgroundColor: colors.primary },
  chipOff: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border },
  chipText: { fontSize: 12, fontWeight: "900" },
  chipTextOn: { color: "#fff" },
  chipTextOff: { color: colors.textMuted },

  metaRow: { flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", marginBottom: spacing.sm },
  metaUpper: { fontSize: 12, fontWeight: "900", color: colors.textMuted, letterSpacing: 0.8, textTransform: "uppercase" },
  sortBtn: { flexDirection: "row", alignItems: "center", gap: 4 },
  sortText: { fontSize: 12, fontWeight: "900", color: colors.primary },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  cardTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  idRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  idPill: { backgroundColor: "rgba(0,0,0,0.04)", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 },
  idText: { fontSize: 11, fontWeight: "900", color: colors.textMuted, letterSpacing: 0.3 },
  priorityHigh: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(235,87,87,0.22)",
    backgroundColor: "rgba(235,87,87,0.10)",
  },
  priorityHighText: { fontSize: 11, fontWeight: "900", color: colors.danger, textTransform: "uppercase" },
  moreBtn: { width: 34, height: 34, borderRadius: 999, alignItems: "center", justifyContent: "center" },

  cardTitle: { marginTop: 10, fontSize: 16, fontWeight: "900", color: colors.textPrimary, lineHeight: 21 },

  infoLine: { flexDirection: "row", alignItems: "center", gap: 8 },
  infoText: { flex: 1, fontSize: 13, fontWeight: "700", color: colors.textMuted },

  cardBottom: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.06)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  assignedRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  avatarMock: { width: 26, height: 26, borderRadius: 13, backgroundColor: "rgba(0,0,0,0.10)" },
  assignedText: { fontSize: 12, fontWeight: "800", color: colors.textMuted },

  statusPill: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 999, borderWidth: 1 },
  statusText: { fontSize: 11, fontWeight: "900" },

  fab: {
    position: "absolute",
    right: spacing.lg,
    bottom: 92,
    height: 56,
    borderRadius: 18,
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  fabText: { color: "#fff", fontWeight: "900", fontSize: 14 },

  pressed: { opacity: 0.95, transform: [{ scale: 0.99 }] },
});
