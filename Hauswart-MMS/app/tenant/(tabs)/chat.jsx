import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

import EmptyState from "@/tenant/components/EmptyState";
import { spacing } from "@/constants/spacing";
import { colors } from "@/constants/colors";
import useLanguage from "@/hooks/useLanguage";
import ScreenWrapper from "@/shared/ScreenWrapper";
import MobileHeader from "@/shared/MobileHeader";

/* -------------------------------------------------- */
/* DUMMY CHAT THREADS                                 */
/* -------------------------------------------------- */

const CHAT_THREADS = [
  {
    ticketId: "TK-2045",
    title: "Leaking pipe in kitchen",
    lastMessage: "A plumber is dispatched and will arrive shortly.",
    time: "10:30 AM",
    unread: true,
  },
  {
    ticketId: "TK-1998",
    title: "AC noise in bedroom",
    lastMessage: "Issue marked as In Progress.",
    time: "Yesterday",
    unread: false,
  },
  {
    ticketId: "TK-1874",
    title: "Light bulb replacement",
    lastMessage: "Ticket completed successfully.",
    time: "Sep 30",
    unread: false,
  },
];

/* -------------------------------------------------- */

export default function TenantChatThreads() {
  const { t } = useLanguage();
  const router = useRouter();

  const tc = t?.chat ?? {};
  const headerTitle = tc?.title ?? "Messages";
  const emptyTitle = tc?.emptyTitle ?? "No messages yet";
  const emptySubtitle = tc?.emptySubtitle ?? "Messages related to your tickets will appear here.";
  const searchPlaceholder = tc?.searchPlaceholder ?? "Search chats...";
  const readText = tc?.markRead ?? "Read";
  const unreadText = tc?.markUnread ?? "Unread";
  const deleteText = tc?.delete ?? "Delete";

  const [query, setQuery] = useState("");
  const [threads, setThreads] = useState(CHAT_THREADS);

  const unreadCount = useMemo(
    () => threads.filter((x) => x.unread).length,
    [threads]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return threads;

    return threads.filter((item) => {
      const hay = `${item.ticketId} ${item.title} ${item.lastMessage}`.toLowerCase();
      return hay.includes(q);
    });
  }, [threads, query]);

  const toggleRead = (ticketId) => {
    setThreads((prev) =>
      prev.map((x) => (x.ticketId === ticketId ? { ...x, unread: !x.unread } : x))
    );
  };

  const deleteThread = (ticketId) => {
    setThreads((prev) => prev.filter((x) => x.ticketId !== ticketId));
  };

  const renderRightActions = (item) => (
    <View style={styles.actions}>
      <Pressable
        style={({ pressed }) => [
          styles.actionBtn,
          styles.actionRead,
          pressed && styles.actionPressed,
        ]}
        onPress={() => toggleRead(item.ticketId)}
      >
        <Ionicons
          name={item.unread ? "mail-open-outline" : "mail-unread-outline"}
          size={18}
          color={colors.textPrimary}
        />
        <Text style={styles.actionText}>{item.unread ? readText : unreadText}</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.actionBtn,
          styles.actionDelete,
          pressed && styles.actionPressed,
        ]}
        onPress={() => deleteThread(item.ticketId)}
      >
        <Ionicons name="trash-outline" size={18} color={colors.textPrimary} />
        <Text style={styles.actionText}>{deleteText}</Text>
      </Pressable>
    </View>
  );

  return (
    <ScreenWrapper>
      <MobileHeader
        title={headerTitle}
        onBack={() => router.back()}
        rightIcon="notifications-outline"
        rightBadgeCount={unreadCount}
        onRightPress={() => router.push("/tenant/notifications")}
      />

      {/* Search */}
      <View style={styles.searchWrap}>
        <View style={styles.search}>
          <Ionicons name="search-outline" size={18} color={colors.textMuted} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={searchPlaceholder}
            placeholderTextColor={colors.textMuted}
            style={styles.searchInput}
            returnKeyType="search"
          />
          {!!query && (
            <Pressable onPress={() => setQuery("")} hitSlop={10}>
              <Ionicons name="close-circle" size={18} color={colors.textMuted} />
            </Pressable>
          )}
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {filtered.length === 0 ? (
          <EmptyState title={emptyTitle} subtitle={emptySubtitle} />
        ) : (
          filtered.map((item) => (
            <Swipeable
              key={item.ticketId}
              renderRightActions={() => renderRightActions(item)}
              overshootRight={false}
            >
              <Pressable
                onPress={() => router.push(`/tenant/chat/${item.ticketId}`)}
                style={({ pressed }) => [
                  styles.threadCard,
                  pressed && styles.pressed,
                ]}
              >
                {item.unread && <View style={styles.unreadAccent} />}

                <View style={styles.iconWrap}>
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={18}
                    color={colors.textPrimary}
                  />
                </View>

                <View style={styles.content}>
                  <View style={styles.rowTop}>
                    <View style={styles.metaLeft}>
                      <Text style={styles.ticketId}>#{item.ticketId}</Text>
                      {item.unread && <View style={styles.unreadDot} />}
                    </View>

                    <Text style={styles.time}>{item.time}</Text>
                  </View>

                  <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                  </Text>

                  <View style={styles.rowBottom}>
                    <Text
                      style={[styles.preview, item.unread && styles.previewUnread]}
                      numberOfLines={1}
                    >
                      {item.lastMessage}
                    </Text>

                    <Ionicons
                      name="chevron-forward"
                      size={18}
                      color={colors.textMuted}
                    />
                  </View>
                </View>
              </Pressable>
            </Swipeable>
          ))
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  searchWrap: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },
  search: {
    height: 46,
    borderRadius: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    fontWeight: "800",
    color: colors.textPrimary,
  },

  container: {
    padding: spacing.lg,
    paddingBottom: 140,
    gap: spacing.md,
  },

  threadCard: {
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
    backgroundColor: "rgba(0,0,0,0.05)",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    gap: 8,
  },

  rowTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  metaLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  ticketId: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: "900",
  },

  time: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "800",
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },

  title: {
    fontSize: 15,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  rowBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  preview: {
    fontSize: 12,
    color: colors.textSecondary,
    flex: 1,
    lineHeight: 18,
  },

  previewUnread: {
    color: colors.textPrimary,
    fontWeight: "800",
  },

  pressed: {
    opacity: 0.96,
    transform: [{ scale: 0.99 }],
  },

  actions: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: 10,
    paddingRight: spacing.lg,
    paddingVertical: 6,
  },
  actionBtn: {
    width: 90,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderWidth: 1,
  },
  actionRead: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  actionDelete: {
    backgroundColor: "rgba(255,0,0,0.12)",
    borderColor: "rgba(255,0,0,0.18)",
  },
  actionText: {
    fontSize: 11,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  actionPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
