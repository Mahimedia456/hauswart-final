import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

/* -------------------------------------------------- */
/* DUMMY DATA                                         */
/* -------------------------------------------------- */

const TICKET = {
  id: "#8821",
  title: "Leaking Pipe",
  category: "Plumbing",
  priority: "High Priority",
  status: "In Progress",
  createdAt: "Oct 24, 10:30 AM",

  location: {
    property: "Sunset Apartments",
    unit: "4B",
    area: "Kitchen",
  },

  description:
    "The pipe under the sink has been dripping since last night. Water is pooling on the floor and I can't stop it. I’ve placed a bucket underneath but it fills every few hours.",

  attachments: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"],

  timeline: [
    { title: "Work in Progress", time: "Today, 10:00 AM", desc: "Technician arrived on site." },
    { title: "Assigned to Mario P.", time: "Oct 24, 4:00 PM" },
    { title: "Ticket Created", time: "Oct 24, 3:30 PM" },
  ],

  lastMessage: {
    sender: "Mario P.",
    time: "10:05 AM",
    text: "I'll be there in about 30 minutes. Please make sure the area is clear.",
  },
};

/* -------------------------------------------------- */

export default function TicketDetail() {
  const { id } = useLocalSearchParams(); // id from route: /tenant/tickets/[id]
  const router = useRouter();
  const { t } = useLanguage();

  // ✅ safe fallbacks (NO CRASH)
  const tt = t?.ticketDetail ?? {};
  const title = tt?.title ?? "Ticket Details";
  const openChat = tt?.openChat ?? "Open Chat";
  const locationLabel = tt?.location ?? "Location";
  const propertyLabel = tt?.property ?? "Property";
  const unitLabel = tt?.unit ?? "Unit";
  const areaLabel = tt?.area ?? "Area";
  const descLabel = tt?.description ?? "Description";
  const attachLabel = tt?.attachments ?? "Attachments";
  const progressLabel = tt?.progress ?? "Status & Progress";
  const messagesLabel = tt?.messages ?? "Messages";

  // ✅ chat thread route expects ticketId param
  const ticketIdForChat = (id ?? "").toString();

  return (
    <ScreenWrapper>
      {/* HEADER */}
      <MobileHeader title={title} onBack={() => router.back()} />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* STATUS ROW */}
        <View style={styles.topRow}>
          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>{TICKET.status}</Text>
          </View>

          <Text style={styles.metaRight}>{TICKET.createdAt}</Text>
        </View>

        {/* SUMMARY CARD */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.metaLeft}>{TICKET.id}</Text>

            <View style={styles.priorityPill}>
              <Ionicons name="warning-outline" size={14} color={colors.textPrimary} />
              <Text style={styles.priorityText}>{TICKET.priority}</Text>
            </View>
          </View>

          <Text style={styles.title}>{TICKET.title}</Text>

          <View style={styles.tagRow}>
            <View style={styles.tag}>
              <Ionicons name="pricetag-outline" size={13} color={colors.textPrimary} />
              <Text style={styles.tagText}>{TICKET.category}</Text>
            </View>

            <Pressable
              style={({ pressed }) => [styles.chatChip, pressed && styles.pressedMini]}
              onPress={() => router.push(`/tenant/chat/${ticketIdForChat}`)}
            >
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={13}
                color={colors.textPrimary}
              />
              <Text style={styles.chatChipText}>{openChat}</Text>
            </Pressable>
          </View>
        </View>

        {/* LOCATION */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>{locationLabel}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.kv}>
            <Text style={styles.label}>{propertyLabel}</Text>
            <Text style={styles.value}>{TICKET.location.property}</Text>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>{unitLabel}</Text>
              <Text style={styles.value}>{TICKET.location.unit}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>{areaLabel}</Text>
              <Text style={styles.value}>{TICKET.location.area}</Text>
            </View>
          </View>
        </View>

        {/* DESCRIPTION */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>{descLabel}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.desc}>{TICKET.description}</Text>
        </View>

        {/* ATTACHMENTS */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>{attachLabel}</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.attachRow}>
            {TICKET.attachments.map((img, i) => (
              <Pressable key={i} style={({ pressed }) => [pressed && styles.pressedMini]}>
                <Image source={{ uri: img }} style={styles.image} />
              </Pressable>
            ))}
          </View>
        </ScrollView>

        {/* TIMELINE */}
        <View style={[styles.sectionRow, { marginTop: spacing.lg }]}>
          <Text style={styles.sectionTitle}>{progressLabel}</Text>
        </View>

        <View style={styles.card}>
          {TICKET.timeline.map((step, i) => {
            const isLast = i === TICKET.timeline.length - 1;
            return (
              <View key={i} style={styles.timelineRow}>
                <View style={styles.timelineLeft}>
                  <View style={styles.tDot} />
                  {!isLast && <View style={styles.tLine} />}
                </View>

                <View style={{ flex: 1, gap: 4 }}>
                  <Text style={styles.timelineTitle}>{step.title}</Text>
                  <Text style={styles.timelineTime}>{step.time}</Text>
                  {!!step.desc && <Text style={styles.timelineDesc}>{step.desc}</Text>}
                </View>
              </View>
            );
          })}
        </View>

        {/* LAST MESSAGE */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>{messagesLabel}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.msgTop}>
            <View style={styles.msgAvatar}>
              <Ionicons name="person-outline" size={16} color={colors.textPrimary} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.msgName}>{TICKET.lastMessage.sender}</Text>
              <Text style={styles.msgTime}>{TICKET.lastMessage.time}</Text>
            </View>
          </View>

          <Text style={styles.msgText}>{TICKET.lastMessage.text}</Text>

          <Pressable
            style={({ pressed }) => [styles.primaryBtn, pressed && styles.pressedMini]}
            onPress={() => router.push(`/tenant/chat/${ticketIdForChat}`)}
          >
            <Text style={styles.primaryBtnText}>{openChat}</Text>
            <Ionicons name="chevron-forward" size={16} color={colors.textPrimary} />
          </Pressable>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: 140,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },

  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 999,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.primary + "33",
    backgroundColor: "rgba(0,0,0,0.02)",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  metaRight: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "800",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },

  metaLeft: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: "900",
  },

  title: {
    fontSize: 18,
    fontWeight: "900",
    color: colors.textPrimary,
    marginTop: 10,
    marginBottom: 12,
  },

  tagRow: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "center",
    flexWrap: "wrap",
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: "rgba(0,0,0,0.04)",
    borderWidth: 1,
    borderColor: colors.border,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.textPrimary,
  },

  priorityPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  priorityText: {
    fontSize: 12,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  chatChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  chatChipText: {
    fontSize: 12,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  kv: { marginBottom: spacing.md, gap: 4 },

  row: {
    flexDirection: "row",
    gap: spacing.md,
  },

  label: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "800",
  },
  value: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  desc: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.textSecondary,
    fontWeight: "700",
  },

  attachRow: {
    flexDirection: "row",
    gap: spacing.md,
    paddingBottom: spacing.md,
  },
  image: {
    width: 132,
    height: 132,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },

  timelineRow: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 8,
  },
  timelineLeft: {
    width: 18,
    alignItems: "center",
  },
  tDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginTop: 2,
  },
  tLine: {
    width: 2,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.08)",
    marginTop: 6,
    borderRadius: 2,
  },
  timelineTitle: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  timelineTime: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "800",
  },
  timelineDesc: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
    fontWeight: "700",
  },

  msgTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: spacing.sm,
  },
  msgAvatar: {
    width: 38,
    height: 38,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.04)",
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  msgName: {
    fontWeight: "900",
    color: colors.textPrimary,
    fontSize: 13,
  },
  msgTime: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "800",
  },
  msgText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 20,
    fontWeight: "700",
    marginBottom: spacing.md,
  },

  primaryBtn: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 13,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  primaryBtnText: {
    color: colors.textPrimary,
    fontWeight: "900",
    fontSize: 13,
  },

  pressedMini: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
