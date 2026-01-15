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

import ScreenWrapper from "../../shared/ScreenWrapper";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

/* -------------------------------------------------- */
/* DUMMY CHAT DATA                                    */
/* -------------------------------------------------- */

const MESSAGES = [
  { id: 1, type: "system", text: "Ticket created: Oct 24, 10:00 AM" },
  {
    id: 2,
    type: "tenant",
    text: "Hi, the leak is getting worse. Can you check it soon?",
    time: "10:05 AM",
  },
  {
    id: 3,
    type: "tenant-image",
    image: "https://via.placeholder.com/600x350",
    caption: "See photo attached.",
    time: "10:06 AM",
  },
  { id: 4, type: "system-badge", text: "Ticket assigned to technician" },
  {
    id: 5,
    type: "manager",
    sender: "Facility Manager",
    avatar: "https://i.pravatar.cc/80?img=12",
    text: "Thanks for the update. A plumber is dispatched and will arrive shortly.",
    time: "10:30 AM",
  },
];

/* -------------------------------------------------- */

export default function TenantChatThread() {
  const { ticketId } = useLocalSearchParams();
  const { t } = useLanguage();
  const router = useRouter();

  const tc = t?.chat ?? {};
  const title = tc?.ticket ?? "Ticket";
  const subtitle = tc?.subtitle ?? "Conversation";
  const placeholder = tc?.placeholder ?? "Type your message...";

  return (
    <ScreenWrapper>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [styles.iconBtn, pressed && styles.pressedMini]}
          hitSlop={10}
        >
          <Ionicons name="chevron-back" size={22} color={colors.textPrimary} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {title} #{ticketId}
          </Text>
          <Text style={styles.headerSub} numberOfLines={1}>
            {subtitle}
          </Text>
        </View>

        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [styles.iconBtn, pressed && styles.pressedMini]}
          hitSlop={10}
        >
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.textPrimary} />
        </Pressable>
      </View>

      {/* Messages */}
      <ScrollView
        style={styles.chat}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
      >
        {MESSAGES.map((msg) => {
          if (msg.type === "system") {
            return (
              <View key={msg.id} style={styles.systemRow}>
                <View style={styles.systemChip}>
                  <Text style={styles.systemText}>{msg.text}</Text>
                </View>
              </View>
            );
          }

          if (msg.type === "system-badge") {
            return (
              <View key={msg.id} style={styles.systemRow}>
                <View style={styles.systemBadge}>
                  <View style={styles.systemDot} />
                  <Text style={styles.systemBadgeText}>{msg.text}</Text>
                </View>
              </View>
            );
          }

          if (msg.type === "tenant") {
            return (
              <View key={msg.id} style={styles.tenantWrap}>
                <View style={styles.tenantBubble}>
                  <Text style={styles.tenantText}>{msg.text}</Text>
                </View>
                <Text style={styles.timeRight}>{msg.time}</Text>
              </View>
            );
          }

          if (msg.type === "tenant-image") {
            return (
              <View key={msg.id} style={styles.tenantWrap}>
                <View style={styles.imageBubble}>
                  <Image source={{ uri: msg.image }} style={styles.image} />
                  <Text style={styles.caption}>{msg.caption}</Text>
                </View>
                <Text style={styles.timeRight}>{msg.time}</Text>
              </View>
            );
          }

          if (msg.type === "manager") {
            return (
              <View key={msg.id} style={styles.managerWrap}>
                <Image source={{ uri: msg.avatar }} style={styles.avatar} />

                <View style={styles.managerBody}>
                  <Text style={styles.sender}>{msg.sender}</Text>

                  <View style={styles.managerBubble}>
                    <Text style={styles.managerText}>{msg.text}</Text>
                  </View>

                  <Text style={styles.timeLeft}>{msg.time}</Text>
                </View>
              </View>
            );
          }

          return null;
        })}
      </ScrollView>

      {/* Input */}
      <View style={styles.inputBar}>
        <Pressable
          style={({ pressed }) => [styles.attachBtn, pressed && styles.pressedMini]}
          hitSlop={10}
        >
          <Ionicons name="add" size={22} color={colors.textPrimary} />
        </Pressable>

        <View style={styles.inputWrap}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.textMuted}
            style={styles.input}
            multiline
          />
          <Pressable style={({ pressed }) => [styles.cameraBtn, pressed && styles.pressedMini]}>
            <Ionicons name="camera-outline" size={18} color={colors.textMuted} />
          </Pressable>
        </View>

        <Pressable
          style={({ pressed }) => [styles.sendBtn, pressed && styles.pressedMini]}
          hitSlop={10}
        >
          <Ionicons name="send" size={18} color={colors.textPrimary} />
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.04)",
    borderWidth: 1,
    borderColor: colors.border,
  },
  headerCenter: {
    flex: 1,
    paddingHorizontal: spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  headerSub: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: "800",
    color: colors.textMuted,
  },

  chat: { flex: 1 },
  chatContent: {
    padding: spacing.lg,
    paddingBottom: 120,
    gap: spacing.md,
  },

  systemRow: { alignItems: "center" },
  systemChip: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  systemText: {
    fontSize: 11,
    fontWeight: "800",
    color: colors.textMuted,
  },

  systemBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(243, 139, 20, 0.08)",
    borderRadius: 999,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.primary + "33",
  },
  systemDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  systemBadgeText: {
    fontSize: 11,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  tenantWrap: { alignItems: "flex-end" },
  tenantBubble: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 12,
    maxWidth: "82%",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  tenantText: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "800",
    lineHeight: 18,
  },

  imageBubble: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    padding: 8,
    maxWidth: "82%",
  },
  image: {
    width: 230,
    height: 145,
    borderRadius: 14,
  },
  caption: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "800",
    color: colors.textPrimary,
  },

  managerWrap: {
    flexDirection: "row",
    gap: spacing.sm,
    maxWidth: "88%",
    alignItems: "flex-end",
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.border,
  },
  managerBody: { flex: 1 },
  sender: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "800",
    marginBottom: 6,
  },
  managerBubble: {
    backgroundColor: colors.white,
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },
  managerText: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.textPrimary,
    lineHeight: 18,
  },

  timeRight: {
    fontSize: 10,
    color: colors.textMuted,
    fontWeight: "700",
    marginTop: 4,
    marginRight: 6,
  },
  timeLeft: {
    fontSize: 10,
    color: colors.textMuted,
    fontWeight: "700",
    marginTop: 4,
    marginLeft: 4,
  },

  inputBar: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.white,
    gap: spacing.sm,
  },

  attachBtn: {
    width: 44,
    height: 44,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.04)",
    borderWidth: 1,
    borderColor: colors.border,
  },

  inputWrap: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.04)",
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-end",
  },

  input: {
    flex: 1,
    fontSize: 13,
    fontWeight: "800",
    color: colors.textPrimary,
    padding: 0,
    margin: 0,
  },

  cameraBtn: {
    width: 34,
    height: 34,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  pressedMini: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
