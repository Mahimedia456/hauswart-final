import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "@/shared/ScreenWrapper";
import TenantHeader from "@/shared/TenantHeader";
import TenantFab from "@/shared/TenantFab";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import useLanguage from "@/hooks/useLanguage";

/* -------------------------------------------------- */
/* DUMMY DATA                                         */
/* -------------------------------------------------- */

const TICKETS = { open: 3, inProgress: 1, completed: 12 };

const RECENT_UPDATES = [
  { id: "#4025", title: "Kitchen Sink Leak", status: "Technician assigned", statusColor: colors.info, time: "2h ago" },
  { id: "#3991", title: "Lobby Light Bulb", status: "Completed", statusColor: colors.success, time: "Yesterday" },
  { id: "#4028", title: "AC Noise", status: "Pending Review", statusColor: colors.primary, time: "Oct 29" },
];

const ANNOUNCEMENTS = [
  { id: 1, type: "NOTICE", title: "Water Shutoff Notice", date: "Oct 24", desc: "Please be advised that water will be unavailable between 10 AM and 2 PM for urgent repairs." },
  { id: 2, type: "EVENT", title: "Community BBQ", date: "Oct 30", desc: "Join your neighbors for a community BBQ this Saturday at the rooftop garden." },
];

/* -------------------------------------------------- */

export default function TenantDashboard() {
  const { t, ready } = useLanguage();
  const router = useRouter();

  // ✅ safe text fallbacks (no crash)
  const td = t?.tenantDashboard || {};
  const c = t?.common || {};

  const issueTitle = td.issueTitle ?? "Something wrong?";
  const issueDesc = td.issueDesc ?? "Submit a maintenance request quickly and track its progress in real time.";
  const createTicket = td.createTicket ?? "Create Ticket";
  const myTickets = td.myTickets ?? "My Tickets";
  const recentUpdates = td.recentUpdates ?? "Recent Updates";
  const announcements = td.announcements ?? "Announcements";

  const viewAll = c.viewAll ?? "View all";
  const open = c.open ?? "Open";
  const inProgress = c.inProgress ?? "In Progress";
  const completed = c.completed ?? "Completed";

  return (
    <ScreenWrapper>
      <TenantHeader name="Aamir" property="Green Tower — Unit 3A" />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* HERO */}
        <View style={styles.hero}>
          <View style={styles.heroGlow} />
          <View style={styles.heroHeader}>
            <View style={styles.heroIcon}>
              <Ionicons name="sparkles-outline" size={18} color="#fff" />
            </View>
            <Text style={styles.heroTitle}>{issueTitle}</Text>
          </View>

          <Text style={styles.heroDesc}>{issueDesc}</Text>

          <Pressable
            style={({ pressed }) => [styles.heroBtn, pressed && styles.pressed]}
            onPress={() => router.push("/tenant/tickets/create")}
          >
            <Text style={styles.heroBtnText}>{createTicket}</Text>
            <Ionicons name="arrow-forward" size={16} color="#111" />
          </Pressable>
        </View>

        {/* MY TICKETS */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>{myTickets}</Text>
          <Pressable onPress={() => router.push("/tenant/tickets")}>
            <Text style={styles.link}>{viewAll}</Text>
          </Pressable>
        </View>

        <View style={styles.statsGrid}>
          <Pressable style={({ pressed }) => [styles.statCard, pressed && styles.pressed]} onPress={() => router.push("/tenant/tickets?status=open")}>
            <StatItem tone="open" count={TICKETS.open} label={open} />
          </Pressable>

          <Pressable style={({ pressed }) => [styles.statCard, pressed && styles.pressed]} onPress={() => router.push("/tenant/tickets?status=inProgress")}>
            <StatItem tone="progress" count={TICKETS.inProgress} label={inProgress} />
          </Pressable>

          <Pressable style={({ pressed }) => [styles.statCard, pressed && styles.pressed]} onPress={() => router.push("/tenant/tickets?status=completed")}>
            <StatItem tone="done" count={TICKETS.completed} label={completed} />
          </Pressable>
        </View>

        {/* RECENT UPDATES */}
        <View style={[styles.sectionRow, { marginTop: spacing.xl }]}>
          <Text style={styles.sectionTitle}>{recentUpdates}</Text>
        </View>

        {RECENT_UPDATES.map((item) => (
          <Pressable
            key={item.id}
            style={({ pressed }) => [styles.update, pressed && styles.pressed]}
            onPress={() => router.push(`/tenant/tickets/${item.id.replace("#", "")}`)}
          >
            <View style={styles.updateTop}>
              <View style={styles.updateMeta}>
                <Text style={styles.updateId}>{item.id}</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.updateTime}>{item.time}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </View>

            <Text style={styles.updateTitle}>{item.title}</Text>

            <View style={styles.statusRow}>
              <View style={[styles.statusPill, { borderColor: item.statusColor + "40" }]}>
                <View style={[styles.statusDot, { backgroundColor: item.statusColor }]} />
                <Text style={[styles.statusText, { color: item.statusColor }]}>{item.status}</Text>
              </View>
            </View>
          </Pressable>
        ))}

        {/* ANNOUNCEMENTS */}
        <View style={[styles.sectionRow, { marginTop: spacing.xl }]}>
          <Text style={styles.sectionTitle}>{announcements}</Text>
          <Text style={styles.link}>{viewAll}</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.announceRow}>
          {ANNOUNCEMENTS.map((a) => (
            <View key={a.id} style={styles.announceCard}>
              <View style={styles.announceTop}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{a.type}</Text>
                </View>
                <Text style={styles.announceDate}>{a.date}</Text>
              </View>

              <Text style={styles.announceTitle}>{a.title}</Text>
              <Text style={styles.announceDesc}>{a.desc}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      <TenantFab onPress={() => router.push("/tenant/tickets/create")} />
    </ScreenWrapper>
  );
}

/* -------------------------------------------------- */
/* COMPONENTS                                         */
/* -------------------------------------------------- */

function StatItem({ tone, count, label }) {
  const map = {
    open: { bg: "rgba(242, 201, 76, 0.18)", icon: "alert-circle-outline" },
    progress: { bg: "rgba(47, 128, 237, 0.14)", icon: "time-outline" },
    done: { bg: "rgba(39, 174, 96, 0.14)", icon: "checkmark-circle-outline" },
  };

  const meta = map[tone] || map.open;

  return (
    <View style={styles.statInner}>
      <View style={[styles.statIcon, { backgroundColor: meta.bg }]}>
        <Ionicons name={meta.icon} size={18} color={colors.textPrimary} />
      </View>
      <Text style={styles.statCount}>{count}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

/* -------------------------------------------------- */
/* STYLES                                             */
/* -------------------------------------------------- */

const styles = StyleSheet.create({
  container: { padding: spacing.lg, paddingBottom: 150 },

  hero: { backgroundColor: "#111111", borderRadius: 20, padding: spacing.lg, marginBottom: spacing.xl, overflow: "hidden" },
  heroGlow: { position: "absolute", right: -60, top: -60, width: 160, height: 160, borderRadius: 80, backgroundColor: colors.primary, opacity: 0.22 },
  heroHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: spacing.sm },
  heroIcon: { width: 34, height: 34, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.12)", alignItems: "center", justifyContent: "center" },
  heroTitle: { color: "#fff", fontSize: 18, fontWeight: "900", flex: 1 },
  heroDesc: { color: "rgba(255,255,255,0.78)", fontSize: 14, lineHeight: 22, marginBottom: spacing.lg },
  heroBtn: { backgroundColor: colors.primary, borderRadius: 14, paddingVertical: 13, paddingHorizontal: 16, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 8 },
  heroBtnText: { color: "#111", fontWeight: "900", fontSize: 14 },

  sectionRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", marginBottom: spacing.md },
  sectionTitle: { fontSize: 18, fontWeight: "900", color: colors.textPrimary },
  link: { color: colors.primary, fontSize: 13, fontWeight: "800" },

  statsGrid: { flexDirection: "row", gap: spacing.md },
  statCard: { flex: 1, backgroundColor: colors.white, borderRadius: 18, borderWidth: 1, borderColor: colors.border, padding: spacing.md, shadowColor: "#000", shadowOpacity: 0.03, shadowRadius: 14, shadowOffset: { width: 0, height: 8 }, elevation: 2 },
  statInner: { alignItems: "flex-start", gap: 6 },
  statIcon: { width: 34, height: 34, borderRadius: 12, alignItems: "center", justifyContent: "center", marginBottom: 2 },
  statCount: { fontSize: 22, fontWeight: "900", color: colors.textPrimary },
  statLabel: { fontSize: 12, color: colors.textSecondary, fontWeight: "700" },

  update: { backgroundColor: colors.white, borderRadius: 18, borderWidth: 1, borderColor: colors.border, padding: spacing.md, marginBottom: spacing.md },
  updateTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  updateMeta: { flexDirection: "row", alignItems: "center", gap: 6 },
  updateId: { fontSize: 12, color: colors.textMuted, fontWeight: "800" },
  dot: { fontSize: 12, color: colors.textMuted },
  updateTime: { fontSize: 12, color: colors.textMuted, fontWeight: "700" },
  updateTitle: { fontSize: 15, fontWeight: "900", color: colors.textPrimary, marginTop: 8, marginBottom: 10 },

  statusRow: { flexDirection: "row", alignItems: "center" },
  statusPill: { alignSelf: "flex-start", borderRadius: 999, paddingVertical: 6, paddingHorizontal: 10, borderWidth: 1, flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: "rgba(0,0,0,0.02)" },
  statusDot: { width: 8, height: 8, borderRadius: 4 },
  statusText: { fontSize: 12, fontWeight: "900" },

  announceRow: { gap: spacing.md, paddingBottom: spacing.xl },
  announceCard: { width: 275, backgroundColor: colors.white, borderRadius: 18, borderWidth: 1, borderColor: colors.border, padding: spacing.md },
  announceTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: spacing.sm },
  badge: { backgroundColor: "rgba(243,139,20,0.12)", borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6 },
  badgeText: { fontSize: 10, fontWeight: "900", color: colors.primary, letterSpacing: 0.4 },
  announceDate: { fontSize: 12, color: colors.textMuted, fontWeight: "700" },
  announceTitle: { fontSize: 15, fontWeight: "900", color: colors.textPrimary, marginBottom: 6 },
  announceDesc: { fontSize: 12, color: colors.textSecondary, lineHeight: 18 },

  pressed: { opacity: 0.95, transform: [{ scale: 0.99 }] },
});
