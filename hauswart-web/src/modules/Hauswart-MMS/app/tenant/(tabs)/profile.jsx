import React from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "@/shared/ScreenWrapper";
import useLanguage from "@/hooks/useLanguage";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

/* ---------------------------------- */
/* Reusable UI Helpers                */
/* ---------------------------------- */
function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.card}>{children}</View>
    </View>
  );
}

function Item({ label, icon, onPress, isLast }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.item,
        isLast && styles.itemLast,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.itemLeft}>
        <View style={styles.itemIconWrap}>
          <Ionicons name={icon} size={18} color={colors.textPrimary} />
        </View>
        <Text style={styles.itemText}>{label}</Text>
      </View>

      <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
    </Pressable>
  );
}

/* ---------------------------------- */
/* Main Screen                        */
/* ---------------------------------- */
export default function Profile() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{t.profile.title}</Text>
          <Text style={styles.subtitle}>Manage your account, preferences & support</Text>
        </View>

        {/* ACCOUNT */}
        <Section title={t.profile.account}>
          <Item
            label={t.profile.edit}
            icon="person-outline"
            onPress={() => router.push("/tenant/profile/edit")}
          />
          <Item
            label={t.profile.password}
            icon="lock-closed-outline"
            onPress={() => router.push("/tenant/profile/change-password")}
          />
          <Item
            label={t.profile.unit}
            icon="home-outline"
            onPress={() => router.push("/tenant/profile/unit-info")}
          />
          <Item
            label={t.profile.emergency}
            icon="call-outline"
            isLast
onPress={() => router.push("/tenant/profile/emergency-contact")}
          />
        </Section>

        {/* PREFERENCES */}
        <Section title={t.profile.preferences}>
          <Item
            label={t.profile.language}
            icon="language-outline"
            onPress={() => router.push("/tenant/profile/language")}
          />
          <Item
            label={t.profile.notifications}
            icon="notifications-outline"
            isLast
            onPress={() => router.push("/tenant/profile/notifications")}
          />
        </Section>

        {/* SUPPORT & LEGAL */}
        <Section title={t.profile.support}>
          <Item
            label={t.profile.help}
            icon="help-circle-outline"
            onPress={() => router.push("/tenant/profile/help-center")}
          />
          <Item
            label={t.profile.privacy}
            icon="shield-checkmark-outline"
            onPress={() => router.push("/tenant/profile/privacy-policy")}
          />
          <Item
            label={t.profile.terms}
            icon="document-text-outline"
            isLast
            onPress={() => router.push("/tenant/profile/terms")}
          />
        </Section>

        {/* LOGOUT (always visible with padding) */}
        <View style={styles.logoutCard}>
          <Pressable
            onPress={() => router.replace("/login")}
            style={({ pressed }) => [styles.logoutBtn, pressed && styles.pressed]}
          >
            <View style={styles.logoutLeft}>
              <View style={styles.logoutIconWrap}>
                <Ionicons name="log-out-outline" size={18} color={colors.error} />
              </View>
              <Text style={styles.logoutText}>{t.profile.logout}</Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </Pressable>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Styles                             */
/* ---------------------------------- */
const styles = StyleSheet.create({
  container: {
    paddingBottom: 140, // ✅ so logout never hides behind tab bar
  },

  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  subtitle: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
    lineHeight: 18,
  },

  section: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: "900",
    color: colors.textMuted,
    marginBottom: spacing.sm,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  item: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemLast: {
    borderBottomWidth: 0,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },

  itemIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.05)",
    alignItems: "center",
    justifyContent: "center",
  },

  itemText: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  logoutCard: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },

  logoutBtn: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  logoutLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  logoutIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 14,
    backgroundColor: "rgba(255,0,0,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },

  logoutText: {
    color: colors.error,
    fontWeight: "900",
    fontSize: 14,
  },

  pressed: {
    opacity: 0.96,
    transform: [{ scale: 0.99 }],
  },
});
