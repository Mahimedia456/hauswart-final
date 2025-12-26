import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/shared/ScreenWrapper";
import TechnicianHeader from "@/shared/TechnicianHeader";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import useLanguage from "@/hooks/useLanguage";

/* ------------------ dummy data ------------------ */
const SUMMARY = { assigned: 5, inProgress: 1, onHold: 2, completed: 3 };

const TASKS = [
  { id: "TSK-4092", priorityKey: "high", title: "Fix leaking pipe in Room 302", location: "Building A, Floor 3", time: "09:00 AM - 10:30 AM" },
  { id: "TSK-4095", priorityKey: "routine", title: "HVAC Filter Replacement", location: "Main Lobby, Central Unit", time: "11:00 AM - 12:00 PM" },
];

const UPCOMING = [
  { id: 1, dayLabel: "Tomorrow", day: "09", title: "Electrical Inspection", meta: "Building B • 09:00 AM" },
  { id: 2, dayLabel: "Tomorrow", day: "13", title: "Fire Safety Check", meta: "Warehouse • 01:00 PM" },
];

export default function Dashboard() {
  const router = useRouter();
  const { t } = useLanguage();

  const ct = t?.ctDashboard || {};
  const c = t?.common || {};

  const greeting = ct.greeting ?? "Good Morning";
  const role = ct.role ?? "Technician";

  const assigned = ct.assigned ?? "Assigned";
  const inProgress = ct.inProgress ?? "In Progress";
  const onHold = ct.onHold ?? "On Hold";
  const completed = ct.completed ?? "Completed";

  const startWork = ct.startWork ?? "Start Work";
  const startWorkDesc = ct.startWorkDesc ?? "Begin your assigned task and start time tracking automatically.";
  const startTask = ct.startTask ?? "Start Task";

  const myAssignedTasks = ct.myAssignedTasks ?? "My Assigned Tasks";
  const upcoming = ct.upcoming ?? "Upcoming";
  const quickActions = ct.quickActions ?? "Quick Actions";

  const viewAll = ct.viewAll ?? c.viewAll ?? "View All";
  const details = ct.details ?? "Details";

  return (
    <ScreenWrapper>
      <TechnicianHeader
        name="Umair"
        greeting={greeting}
        role={role}
        onBellPress={() => router.push("/caretaker/alerts")}
        onAvatarPress={() => router.push("/caretaker/(tabs)/profile")}
      />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* HERO (Tenant-style) */}
        <View style={styles.hero}>
          <View style={styles.heroGlow} />
          <View style={styles.heroHeader}>
            <View style={styles.heroIcon}>
              <Ionicons name="sparkles-outline" size={18} color="#fff" />
            </View>
            <Text style={styles.heroTitle}>{startWork}</Text>
          </View>

          <Text style={styles.heroDesc}>{startWorkDesc}</Text>

          <Pressable
            style={({ pressed }) => [styles.heroBtn, pressed && styles.pressed]}
            onPress={() => router.push("/caretaker/scan")}
          >
            <Text style={styles.heroBtnText}>{startTask}</Text>
            <Ionicons name="arrow-forward" size={16} color="#111" />
          </Pressable>
        </View>

       {/* SUMMARY SLIDER */}
       <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={styles.summaryRow}
       >
         <Pressable style={({ pressed }) => [styles.summaryCard, pressed && styles.pressed]}>
           <StatItem icon="clipboard-outline" tone="warn" count={SUMMARY.assigned} label={assigned} />
         </Pressable>

         <Pressable style={({ pressed }) => [styles.summaryCard, pressed && styles.pressed]}>
           <StatItem icon="time-outline" tone="info" count={SUMMARY.inProgress} label={inProgress} />
         </Pressable>

         <Pressable style={({ pressed }) => [styles.summaryCard, pressed && styles.pressed]}>
           <StatItem icon="pause-circle-outline" tone="muted" count={SUMMARY.onHold} label={onHold} />
         </Pressable>

         <Pressable style={({ pressed }) => [styles.summaryCard, pressed && styles.pressed]}>
           <StatItem icon="checkmark-circle-outline" tone="done" count={SUMMARY.completed} label={completed} />
         </Pressable>
       </ScrollView>


        {/* My Assigned Tasks */}
        <View style={[styles.sectionRow, { marginTop: spacing.xl }]}>
          <Text style={styles.sectionTitle}>{myAssignedTasks}</Text>
          <Pressable onPress={() => router.push("/caretaker/(tabs)/tasks")}>
            <Text style={styles.link}>{viewAll}</Text>
          </Pressable>
        </View>

        {TASKS.map((task) => (
          <Pressable
            key={task.id}
            onPress={() => router.push(`/caretaker/tasks/${task.id}`)}
            style={({ pressed }) => [styles.taskCard, pressed && styles.pressed]}
          >
            <View style={styles.taskTop}>
              <View style={styles.taskIdPill}>
                <Text style={styles.taskIdText}>#{task.id}</Text>
              </View>

              <PriorityPill
                tone={task.priorityKey}
                label={task.priorityKey === "high" ? "High Priority" : "Routine"}
              />
            </View>

            <Text style={styles.taskTitle}>{task.title}</Text>

            <View style={{ marginTop: 10, gap: 8 }}>
              <MetaRow icon="location-outline" text={task.location} />
              <MetaRow icon="time-outline" text={task.time} />
            </View>

            <View style={styles.taskBottom}>
              <Text style={styles.link}>{details}</Text>
              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </View>
          </Pressable>
        ))}

        {/* Upcoming */}
        <View style={[styles.sectionRow, { marginTop: spacing.xl }]}>
          <Text style={styles.sectionTitle}>{upcoming}</Text>
        </View>

        <View style={styles.upcomingCard}>
          {UPCOMING.map((u, idx) => (
            <Pressable
              key={u.id}
              style={({ pressed }) => [
                styles.upcomingItem,
                idx !== 0 && styles.upcomingDivider,
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.dateBox}>
                <Text style={styles.dateLabel}>{u.dayLabel}</Text>
                <Text style={styles.dateNum}>{u.day}</Text>
              </View>

              <View style={{ flex: 1, minWidth: 0 }}>
                <Text style={styles.upTitle} numberOfLines={1}>{u.title}</Text>
                <Text style={styles.upMeta} numberOfLines={1}>{u.meta}</Text>
              </View>

              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </Pressable>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={[styles.sectionRow, { marginTop: spacing.xl }]}>
          <Text style={styles.sectionTitle}>{quickActions}</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickRow}>
          <QuickAction label="View All Tasks" icon="clipboard-outline" onPress={() => router.push("/caretaker/(tabs)/tasks")} />
          <QuickAction label="Time Logs" icon="timer-outline" onPress={() => router.push("/caretaker/time-logs")} />
          <QuickAction label="Report Issue" icon="alert-circle-outline" onPress={() => router.push("/caretaker/report")} />
          <QuickAction label={t?.ctTabs?.chat ?? "Chat"} icon="chatbubble-ellipses-outline" onPress={() => router.push("/caretaker/(tabs)/chat")} />
        </ScrollView>

        <View style={{ height: 140 }} />
      </ScrollView>
    </ScreenWrapper>
  );
}

/* ------------------ small components ------------------ */

function StatItem({ icon, tone, count, label }) {
  const map = {
    warn: { bg: "rgba(242, 201, 76, 0.18)" },
    info: { bg: "rgba(47, 128, 237, 0.14)" },
    muted: { bg: "rgba(0,0,0,0.08)" },
    done: { bg: "rgba(39, 174, 96, 0.14)" },
  };
  const meta = map[tone] || map.warn;

  return (
    <View style={styles.statInner}>
      <View style={[styles.statIcon, { backgroundColor: meta.bg }]}>
        <Ionicons name={icon} size={18} color={colors.textPrimary} />
      </View>
      <Text style={styles.statCount}>{count}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function MetaRow({ icon, text }) {
  return (
    <View style={styles.metaRow}>
      <Ionicons name={icon} size={16} color={colors.textMuted} />
      <Text style={styles.metaText}>{text}</Text>
    </View>
  );
}

function PriorityPill({ tone, label }) {
  const map = {
    high: { bg: "rgba(235,87,87,0.10)", border: "rgba(235,87,87,0.25)", text: colors.danger },
    routine: { bg: "rgba(47,128,237,0.10)", border: "rgba(47,128,237,0.25)", text: colors.info },
  };
  const m = map[tone] || map.routine;

  return (
    <View style={[styles.priorityPill, { backgroundColor: m.bg, borderColor: m.border }]}>
      <Text style={[styles.priorityText, { color: m.text }]}>{label}</Text>
    </View>
  );
}

function QuickAction({ icon, label, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.quickBtn, pressed && styles.pressed]}>
      <Ionicons name={icon} size={18} color={colors.primary} />
      <Text style={styles.quickText}>{label}</Text>
    </Pressable>
  );
}

/* ------------------ styles ------------------ */

const styles = StyleSheet.create({
  container: { padding: spacing.lg, paddingBottom: 150 },

  // HERO (same as tenant)
  hero: {
    backgroundColor: "#111111",
    borderRadius: 20,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    overflow: "hidden",
  },
  heroGlow: {
    position: "absolute",
    right: -60,
    top: -60,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.primary,
    opacity: 0.22,
  },
  heroHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: spacing.sm },
  heroIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.12)",
    alignItems: "center",
    justifyContent: "center",
  },
  heroTitle: { color: "#fff", fontSize: 18, fontWeight: "900", flex: 1 },
  heroDesc: { color: "rgba(255,255,255,0.78)", fontSize: 14, lineHeight: 22, marginBottom: spacing.lg },
  heroBtn: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 13,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  heroBtnText: { color: "#111", fontWeight: "900", fontSize: 14 },

  // STAT CARDS (grid like tenant)
  statsGrid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.md },
  statCard: {
    width: "48%",
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  statInner: { alignItems: "flex-start", gap: 6 },
  statIcon: { width: 34, height: 34, borderRadius: 12, alignItems: "center", justifyContent: "center", marginBottom: 2 },
  statCount: { fontSize: 22, fontWeight: "900", color: colors.textPrimary },
  statLabel: { fontSize: 12, color: colors.textSecondary, fontWeight: "700" },

  sectionRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", marginBottom: spacing.md },
  sectionTitle: { fontSize: 18, fontWeight: "900", color: colors.textPrimary },
  link: { color: colors.primary, fontSize: 13, fontWeight: "800" },

  taskCard: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  taskTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  taskIdPill: { backgroundColor: "rgba(0,0,0,0.04)", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 },
  taskIdText: { fontSize: 11, fontWeight: "900", color: colors.textMuted },
  priorityPill: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, borderWidth: 1 },
  priorityText: { fontSize: 11, fontWeight: "900" },
  taskTitle: { marginTop: 10, fontSize: 15, fontWeight: "900", color: colors.textPrimary, lineHeight: 20 },

  metaRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  metaText: { fontSize: 13, color: colors.textMuted, fontWeight: "700" },

  taskBottom: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.06)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
  },

  upcomingCard: { backgroundColor: colors.white, borderRadius: 18, borderWidth: 1, borderColor: colors.border, overflow: "hidden" },
  upcomingItem: { padding: spacing.md, flexDirection: "row", alignItems: "center", gap: 12 },
  upcomingDivider: { borderTopWidth: 1, borderTopColor: "rgba(0,0,0,0.06)" },
  dateBox: { width: 58, borderRadius: 12, paddingVertical: 8, alignItems: "center", backgroundColor: "rgba(0,0,0,0.03)" },
  dateLabel: { fontSize: 10, fontWeight: "900", color: colors.textMuted },
  dateNum: { fontSize: 18, fontWeight: "900", color: colors.textPrimary, marginTop: 2 },
  upTitle: { fontSize: 13, fontWeight: "900", color: colors.textPrimary },
  upMeta: { fontSize: 12, fontWeight: "700", color: colors.textMuted, marginTop: 3 },

  quickRow: { gap: spacing.md, paddingBottom: spacing.sm },
  quickBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(243,139,20,0.35)",
    backgroundColor: "rgba(243,139,20,0.08)",
  },
  quickText: { fontSize: 12, fontWeight: "900", color: colors.primary },

  pressed: { opacity: 0.95, transform: [{ scale: 0.99 }] },
  summaryRow: { gap: spacing.md, paddingBottom: spacing.sm },
  summaryCard: {
    width: 150,
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
});
