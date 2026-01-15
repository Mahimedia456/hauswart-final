import React from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { spacing } from "@/constants/spacing";
import { colors } from "@/constants/colors";
import useLanguage from "@/hooks/useLanguage";
import ScreenWrapper from "@/shared/ScreenWrapper";

const NOTIFICATIONS = [
  {
    id: "1",
    type: "ticket",
    title: "Leaking Faucet #402",
    message: "Maintenance visit scheduled for tomorrow at 10:00 AM.",
    time: "2m ago",
    ticketId: "402",
    read: false,
  },
  {
    id: "2",
    type: "message",
    title: "Front Desk",
    message: "A package has arrived for you.",
    time: "1h ago",
    ticketId: "2045",
    read: false,
  },
  {
    id: "3",
    type: "announcement",
    title: "Elevator Maintenance",
    message: "Elevator B will be out of service.",
    time: "1d ago",
    read: true,
  },
];

export default function Notifications() {
  const router = useRouter();
  const { t } = useLanguage();

  // ✅ SAFE FALLBACKS (no crash even if notifications missing)
  const tn = t?.notifications ?? {};
  const screenTitle = tn?.title ?? "Alerts";
  const markAll = tn?.markAll ?? "Mark all as read";

  const labels = {
    ticket: tn?.ticketLabel ?? "Ticket",
    message: tn?.messageLabel ?? "Message",
    announcement: tn?.announcementLabel ?? "Announcement",
  };

  const handlePress = (item) => {
    if (item.type === "ticket") router.push(`/tenant/tickets/${item.ticketId}`);
    if (item.type === "message") router.push(`/tenant/chat/${item.ticketId}`);
  };

  const renderItem = ({ item }) => {
    const meta = getTypeMeta(item.type, labels);

    return (
      <Pressable
        onPress={() => handlePress(item)}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      >
        {!item.read && <View style={styles.unreadAccent} />}

        <View style={[styles.iconWrap, { backgroundColor: meta.soft }]}>
          <Ionicons name={meta.icon} size={18} color={colors.textPrimary} />
        </View>

        <View style={styles.content}>
          <View style={styles.topRow}>
            <Text style={styles.cardTitle} numberOfLines={1}>
              {item.title}
            </Text>

            <View style={styles.rightMeta}>
              {!item.read && <View style={styles.unreadDot} />}
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>

          <Text style={styles.cardDesc} numberOfLines={2}>
            {item.message}
          </Text>

          <View style={styles.bottomRow}>
            <View style={[styles.pill, { borderColor: meta.color + "33" }]}>
              <View style={[styles.pillDot, { backgroundColor: meta.color }]} />
              <Text style={[styles.pillText, { color: meta.color }]}>
                {meta.label}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={styles.title}>{screenTitle}</Text>

        <Pressable style={({ pressed }) => [pressed && styles.pressedMini]}>
          <Text style={styles.markRead}>{markAll}</Text>
        </Pressable>
      </View>

      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
}

function getTypeMeta(type, labels) {
  const map = {
    ticket: {
      label: labels.ticket,
      icon: "clipboard-outline",
      color: colors.info,
      soft: "rgba(47, 128, 237, 0.14)",
    },
    message: {
      label: labels.message,
      icon: "chatbubble-ellipses-outline",
      color: colors.primary,
      soft: "rgba(243, 139, 20, 0.14)",
    },
    announcement: {
      label: labels.announcement,
      icon: "megaphone-outline",
      color: colors.warning,
      soft: "rgba(242, 201, 76, 0.16)",
    },
  };

  return map[type] || map.announcement;
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  markRead: {
    color: colors.primary,
    fontWeight: "900",
    fontSize: 13,
  },

  list: {
    padding: spacing.lg,
    paddingBottom: 140,
    gap: spacing.md,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    flexDirection: "row",
    gap: 12,
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  unreadAccent: {
    position: "absolute",
    left: 0,
    top: 10,
    bottom: 10,
    width: 3,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },

  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    gap: 8,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  rightMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },

  cardTitle: {
    flex: 1,
    fontWeight: "900",
    fontSize: 14,
    color: colors.textPrimary,
  },

  cardDesc: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
    fontWeight: "700",
  },

  time: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "800",
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    backgroundColor: "rgba(0,0,0,0.02)",
  },

  pillDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  pillText: {
    fontSize: 11,
    fontWeight: "900",
  },

  pressed: {
    opacity: 0.96,
    transform: [{ scale: 0.99 }],
  },

  pressedMini: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
