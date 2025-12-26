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

/* ------------------ DUMMY THREADS ------------------ */
const CHAT_THREADS = [
  {
    ticketId: "HSW-492",
    title: "HVAC Leak Repair",
    lastMessage: "Tenant shared photos of the leak.",
    time: "10:30 AM",
    unread: true,
  },
  {
    ticketId: "HSW-487",
    title: "Light replacement",
    lastMessage: "Task marked as completed.",
    time: "Yesterday",
    unread: false,
  },
];

/* ------------------ SCREEN ------------------ */
export default function CaretakerChatThreads() {
  const { t } = useLanguage();
  const router = useRouter();

  const cc = t?.chat ?? {};

  const [query, setQuery] = useState("");
  const [threads, setThreads] = useState(CHAT_THREADS);

  const unreadCount = useMemo(
    () => threads.filter((x) => x.unread).length,
    [threads]
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return threads;
    const q = query.toLowerCase();
    return threads.filter((t) =>
      `${t.ticketId} ${t.title} ${t.lastMessage}`.toLowerCase().includes(q)
    );
  }, [threads, query]);

  const toggleRead = (id) =>
    setThreads((prev) =>
      prev.map((x) => (x.ticketId === id ? { ...x, unread: !x.unread } : x))
    );

  const deleteThread = (id) =>
    setThreads((prev) => prev.filter((x) => x.ticketId !== id));

  const renderRightActions = (item) => (
    <View style={styles.actions}>
      <Pressable
        style={[styles.actionBtn, styles.readBtn]}
        onPress={() => toggleRead(item.ticketId)}
      >
        <Ionicons
          name={item.unread ? "mail-open-outline" : "mail-unread-outline"}
          size={18}
          color={colors.textPrimary}
        />
        <Text style={styles.actionText}>
          {item.unread ? "Read" : "Unread"}
        </Text>
      </Pressable>

      <Pressable
        style={[styles.actionBtn, styles.deleteBtn]}
        onPress={() => deleteThread(item.ticketId)}
      >
        <Ionicons name="trash-outline" size={18} color={colors.textPrimary} />
        <Text style={styles.actionText}>Delete</Text>
      </Pressable>
    </View>
  );

  return (
    <ScreenWrapper>
      <MobileHeader
        title={cc.title ?? "Task Messages"}
        onBack={() => router.back()}
        rightIcon="notifications-outline"
        rightBadgeCount={unreadCount}
      />

      {/* Search */}
      <View style={styles.searchWrap}>
        <View style={styles.search}>
          <Ionicons name="search-outline" size={18} color={colors.textMuted} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={cc.searchPlaceholder ?? "Search chats..."}
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {filtered.length === 0 ? (
          <EmptyState
            title={cc.emptyTitle ?? "No messages"}
            subtitle={cc.emptySubtitle ?? "Task conversations appear here"}
          />
        ) : (
          filtered.map((item) => (
            <Swipeable
              key={item.ticketId}
              renderRightActions={() => renderRightActions(item)}
            >
              <Pressable
                onPress={() =>
                  router.push(`/caretaker/chat/${item.ticketId}`)
                }
                style={styles.thread}
              >
                {item.unread && <View style={styles.unreadBar} />}
                <View style={styles.content}>
                  <Text style={styles.ticket}>#{item.ticketId}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.preview} numberOfLines={1}>
                    {item.lastMessage}
                  </Text>
                </View>
                <Text style={styles.time}>{item.time}</Text>
              </Pressable>
            </Swipeable>
          ))
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

/* ------------------ STYLES ------------------ */
const styles = StyleSheet.create({
  searchWrap: { paddingHorizontal: spacing.lg, marginTop: spacing.sm },
  search: {
    height: 46,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
  },
  searchInput: { flex: 1, fontWeight: "800" },

  container: { padding: spacing.lg, gap: spacing.md },

  thread: {
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: 18,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },

  unreadBar: {
    width: 3,
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 3,
  },

  content: { flex: 1 },
  ticket: { fontSize: 11, fontWeight: "900", color: colors.textMuted },
  title: { fontSize: 15, fontWeight: "900" },
  preview: { fontSize: 12, color: colors.textSecondary },

  time: { fontSize: 11, color: colors.textMuted },

  actions: { flexDirection: "row", gap: 10, padding: spacing.md },
  actionBtn: {
    width: 90,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderWidth: 1,
  },
  readBtn: { backgroundColor: colors.primary, borderColor: colors.primary },
  deleteBtn: {
    backgroundColor: "rgba(255,0,0,0.12)",
    borderColor: "rgba(255,0,0,0.18)",
  },
  actionText: { fontSize: 11, fontWeight: "900" },
});
