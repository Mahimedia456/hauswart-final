import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "@/shared/ScreenWrapper";
import TenantHeader from "@/shared/TenantHeader";
import TicketCard from "@/shared/TicketCardMobile";
import TicketFilterChips from "@/tenant/components/TicketFilterChips";
import EmptyState from "@/tenant/components/EmptyState";
import TenantFab from "@/shared/TenantFab";

import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import useLanguage from "@/hooks/useLanguage";

/* -------------------------------------------------- */
/* DUMMY DATA                                         */
/* -------------------------------------------------- */

const TICKETS = [
  {
    id: "4921",
    title: "Leaking faucet in master bathroom",
    category: "Plumbing",
    status: "inProgress",
    date: "Oct 24, 2023",
  },
  {
    id: "4890",
    title: "AC unit making loud rattling noise",
    category: "HVAC",
    status: "open",
    date: "Oct 20, 2023",
  },
  {
    id: "4812",
    title: "Lobby door lock jammed",
    category: "Security",
    status: "onHold",
    date: "Oct 15, 2023",
  },
  {
    id: "4755",
    title: "Light bulb replacement in hallway",
    category: "Electrical",
    status: "completed",
    date: "Sep 30, 2023",
  },
];

/* -------------------------------------------------- */

export default function TenantTickets() {
  const { t } = useLanguage();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("active"); // active | history

  const filteredTickets =
    activeTab === "active"
      ? TICKETS.filter((t) => t.status !== "completed")
      : TICKETS.filter((t) => t.status === "completed");

  return (
    <ScreenWrapper>
      {/* HEADER */}
      <TenantHeader title={t.tickets.title} />

      {/* TABS */}
      <View style={styles.tabsWrap}>
        <View style={styles.tabs}>
          <Pressable
            style={({ pressed }) => [
              styles.tab,
              activeTab === "active" && styles.tabActive,
              pressed && styles.pressedTab,
            ]}
            onPress={() => setActiveTab("active")}
          >
            <View style={styles.tabInner}>
              <Ionicons
                name="flash-outline"
                size={16}
                color={activeTab === "active" ? "#111" : colors.textMuted}
              />
              <Text
                style={[
                  styles.tabText,
                  activeTab === "active" && styles.tabTextActive,
                ]}
              >
                {t.tickets.myTickets}
              </Text>
            </View>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.tab,
              activeTab === "history" && styles.tabActive,
              pressed && styles.pressedTab,
            ]}
            onPress={() => setActiveTab("history")}
          >
            <View style={styles.tabInner}>
              <Ionicons
                name="time-outline"
                size={16}
                color={activeTab === "history" ? "#111" : colors.textMuted}
              />
              <Text
                style={[
                  styles.tabText,
                  activeTab === "history" && styles.tabTextActive,
                ]}
              >
                {t.tickets.history}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>

      {/* FILTERS */}
      <View style={styles.filters}>
        {activeTab === "active" ? (
          <TicketFilterChips />
        ) : (
          <Pressable
            style={({ pressed }) => [
              styles.calendarFilter,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.calendarInner}>
              <Ionicons name="calendar-outline" size={16} color={colors.textMuted} />
              <Text style={styles.calendarText}>{t.tickets.filterByDate}</Text>
            </View>
          </Pressable>
        )}
      </View>

      {/* LIST */}
      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      >
        {filteredTickets.length === 0 ? (
          <EmptyState title={t.tickets.emptyTitle} subtitle={t.tickets.emptyDesc} />
        ) : (
          filteredTickets.map((ticket) => (
            <Pressable
              key={ticket.id}
              style={({ pressed }) => [pressed && styles.pressed]}
              onPress={() => router.push(`/tenant/tickets/${ticket.id}`)}
            >
              <TicketCard ticket={ticket} />
            </Pressable>
          ))
        )}
      </ScrollView>

      {/* FAB – CREATE TICKET (ONLY ACTIVE TAB) */}
      {activeTab === "active" && (
        <TenantFab onPress={() => router.push("/tenant/tickets/create")} />
      )}
    </ScreenWrapper>
  );
}

/* -------------------------------------------------- */
/* STYLES                                             */
/* -------------------------------------------------- */

const styles = StyleSheet.create({
  tabsWrap: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },

  tabs: {
    flexDirection: "row",
    gap: spacing.sm,
    backgroundColor: colors.white,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 6,

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  tab: {
    flex: 1,
    height: 40,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },

  tabActive: {
    backgroundColor: colors.primary,
  },

  tabInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  tabText: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.textSecondary,
  },

  tabTextActive: {
    color: "#111",
  },

  pressedTab: {
    opacity: 0.95,
    transform: [{ scale: 0.99 }],
  },

  filters: {
    marginTop: spacing.md,
    paddingHorizontal: spacing.lg,
  },

  calendarFilter: {
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 1,
  },

  calendarInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  calendarText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: "800",
  },

  list: {
    padding: spacing.lg,
    paddingBottom: 140,
    gap: spacing.md,
  },

  pressed: {
    opacity: 0.96,
    transform: [{ scale: 0.99 }],
  },
});
