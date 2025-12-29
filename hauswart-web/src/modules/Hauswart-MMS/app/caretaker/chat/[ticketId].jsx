import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "@/shared/ScreenWrapper";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import useLanguage from "@/hooks/useLanguage";

/* ------------------ DUMMY MESSAGES ------------------ */
const MESSAGES = [
  { id: 1, type: "system", text: "Task assigned to you" },
  {
    id: 2,
    type: "tenant",
    text: "Please check the leak urgently.",
    time: "10:05 AM",
  },
  {
    id: 3,
    type: "caretaker",
    text: "On my way. Will update shortly.",
    time: "10:08 AM",
  },
];

/* ------------------ SCREEN ------------------ */
export default function CaretakerChatThread() {
  const { ticketId } = useLocalSearchParams();
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <ScreenWrapper>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={22} color={colors.textPrimary} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Task #{ticketId}</Text>
          <Text style={styles.headerSub}>Conversation</Text>
        </View>

        <View style={{ width: 40 }} />
      </View>

      {/* Messages */}
      <ScrollView contentContainerStyle={styles.chat}>
        {MESSAGES.map((msg) => {
          if (msg.type === "system") {
            return (
              <View key={msg.id} style={styles.system}>
                <Text style={styles.systemText}>{msg.text}</Text>
              </View>
            );
          }

          const isMe = msg.type === "caretaker";

          return (
            <View
              key={msg.id}
              style={isMe ? styles.meWrap : styles.otherWrap}
            >
              <View style={isMe ? styles.meBubble : styles.otherBubble}>
                <Text style={styles.msgText}>{msg.text}</Text>
              </View>
              <Text style={styles.time}>{msg.time}</Text>
            </View>
          );
        })}
      </ScrollView>

      {/* Input */}
      <View style={styles.inputBar}>
        <TextInput
          placeholder="Type your message..."
          style={styles.input}
          multiline
        />
        <Pressable style={styles.sendBtn}>
          <Ionicons name="send" size={18} color="#111" />
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

/* ------------------ STYLES ------------------ */
const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.04)",
  },
  headerCenter: { flex: 1, alignItems: "center" },
  headerTitle: { fontSize: 15, fontWeight: "900" },
  headerSub: { fontSize: 11, color: colors.textMuted },

  chat: { padding: spacing.lg, gap: spacing.md },

  system: {
    alignItems: "center",
    marginVertical: spacing.sm,
  },
  systemText: {
    fontSize: 11,
    fontWeight: "800",
    color: colors.textMuted,
  },

  meWrap: { alignItems: "flex-end" },
  otherWrap: { alignItems: "flex-start" },

  meBubble: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    padding: spacing.sm,
    maxWidth: "80%",
  },
  otherBubble: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.sm,
    maxWidth: "80%",
    borderWidth: 1,
    borderColor: colors.border,
  },
  msgText: { fontSize: 13, fontWeight: "800" },

  time: {
    fontSize: 10,
    color: colors.textMuted,
    marginTop: 4,
  },

  inputBar: {
    flexDirection: "row",
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: "flex-end",
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.04)",
    padding: spacing.sm,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
