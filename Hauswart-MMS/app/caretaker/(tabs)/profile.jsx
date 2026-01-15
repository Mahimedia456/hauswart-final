import React from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "@/shared/ScreenWrapper";
import useLanguage from "@/hooks/useLanguage";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

/* ---------------- Helpers ---------------- */

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.card}>{children}</View>
    </View>
  );
}

function Item({ label, icon, value, onPress, isLast }) {
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

        <View style={{ flex: 1 }}>
          <Text style={styles.itemText}>{label}</Text>
          {value ? <Text style={styles.itemValue}>{value}</Text> : null}
        </View>
      </View>

      <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
    </Pressable>
  );
}

/* ---------------- Screen ---------------- */

export default function CaretakerProfile() {
  const router = useRouter();
  const { t } = useLanguage();

  // ✅ SAFE FALLBACK (fixes missing language issue)
  const cp = t?.caretakerProfile ?? {};

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{cp.title ?? "Profile"}</Text>
          <Text style={styles.subtitle}>
            {cp.subtitle ?? "Manage your work settings & account"}
          </Text>
        </View>

        {/* Profile Summary */}
        <View style={styles.profileCard}>
          <View style={styles.avatarWrap}>
            <Image source={{ uri: "https://i.pravatar.cc/200?img=12" }} style={styles.avatar} />
            <View style={styles.onlineDot} />
          </View>

          <Text style={styles.name}>John Doe</Text>

          <View style={styles.rolePill}>
            <Text style={styles.roleText}>{cp.role ?? "Technician"}</Text>
          </View>

          <Text style={styles.email}>john.doe@hauswart.com</Text>
          <Text style={styles.meta}>{cp.location ?? "—"}</Text>
        </View>

        {/* ACCOUNT */}
        <Section title={cp.account ?? "Account"}>
          <Item
            label={cp.editProfile ?? "Edit Profile"}
            icon="person-outline"
            onPress={() => router.push("/caretaker/profile/edit")}
          />
          <Item
            label={cp.changePassword ?? "Change Password"}
            icon="lock-closed-outline"
            isLast
            onPress={() => router.push("/caretaker/profile/change-password")}
          />
        </Section>

        {/* WORK SETTINGS */}
        <Section title={cp.workSettings ?? "Work Settings"}>
          <Item
            label={cp.availability ?? "Availability Status"}
            icon="radio-outline"
            value={cp.online ?? "Online"}
            onPress={() => router.push("/caretaker/profile/availability")}
          />
          <Item
            label={cp.gps ?? "GPS Tracking Preferences"}
            icon="location-outline"
            onPress={() => router.push("/caretaker/profile/gps-preferences")}
          />
{/*           <Item */}
{/*             label={cp.defaultView ?? "Default Schedule View"} */}
{/*             icon="calendar-outline" */}
{/*             value={cp.dayView ?? "Day View"} */}
{/*             isLast */}
{/*             onPress={() => router.push("/caretaker/profile/default-view")} */}
{/*           /> */}
        </Section>

        {/* PREFERENCES */}
        <Section title={cp.preferences ?? "Preferences"}>
          <Item
            label={cp.notifications ?? "Notifications"}
            icon="notifications-outline"
            onPress={() => router.push("/caretaker/profile/notifications")}
          />
          <Item
            label={cp.language ?? "Language"}
            icon="language-outline"
            isLast
            onPress={() => router.push("/caretaker/profile/language")}
          />
        </Section>

        {/* SUPPORT */}
        <Section title={cp.support ?? "Support & Legal"}>
          <Item
            label={cp.help ?? "Help Center"}
            icon="help-circle-outline"
            onPress={() => router.push("/caretaker/profile/help-center")}
          />
          <Item
            label={cp.privacy ?? "Privacy Policy"}
            icon="shield-checkmark-outline"
            onPress={() => router.push("/caretaker/profile/privacy-policy")}
          />
          <Item
            label={cp.terms ?? "Terms & Conditions"}
            icon="document-text-outline"
            isLast
            onPress={() => router.push("/caretaker/profile/terms")}
          />
        </Section>

        {/* LOGOUT */}
        <View style={styles.logoutWrap}>
          <Pressable
            onPress={() => router.replace("/login")}
            style={({ pressed }) => [styles.logoutBtn, pressed && styles.pressed]}
          >
            <View style={styles.logoutLeft}>
              <View style={styles.logoutIcon}>
                <Ionicons name="log-out-outline" size={18} color={colors.error} />
              </View>
              <Text style={styles.logoutText}>{cp.logout ?? "Logout"}</Text>
            </View>
          </Pressable>

          <Text style={styles.version}>{cp.version ?? ""}</Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

/* ---------------- Styles (UNCHANGED) ---------------- */

const styles = StyleSheet.create({
  container: { paddingBottom: 140 },

  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  title: { fontSize: 22, fontWeight: "900" },
  subtitle: { marginTop: 6, fontSize: 12, fontWeight: "700", color: colors.textSecondary },

  profileCard: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: spacing.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatarWrap: { position: "relative" },
  avatar: { width: 90, height: 90, borderRadius: 45 },
  onlineDot: {
    position: "absolute",
    bottom: 4,
    right: 4,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.success,
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: { marginTop: 10, fontSize: 18, fontWeight: "900" },
  rolePill: {
    marginTop: 6,
    backgroundColor: colors.primary + "22",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
  },
  roleText: { fontSize: 11, fontWeight: "900", color: colors.primary },
  email: { marginTop: 8, fontSize: 13, fontWeight: "700", color: colors.textMuted },
  meta: { marginTop: 4, fontSize: 12, fontWeight: "700", color: colors.textMuted },

  section: { marginTop: spacing.lg, paddingHorizontal: spacing.lg },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "900",
    color: colors.textMuted,
    marginBottom: spacing.sm,
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },

  item: {
    padding: spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  itemLast: { borderBottomWidth: 0 },
  itemLeft: { flexDirection: "row", gap: 12, flex: 1 },
  itemIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.05)",
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: { fontSize: 14, fontWeight: "900" },
  itemValue: { fontSize: 11, fontWeight: "700", color: colors.primary },

  logoutWrap: { marginTop: spacing.xl, paddingHorizontal: spacing.lg },
  logoutBtn: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  logoutLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  logoutIcon: {
    width: 36,
    height: 36,
    borderRadius: 14,
    backgroundColor: "rgba(255,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: { color: colors.error, fontWeight: "900", fontSize: 14 },
  version: { marginTop: 12, textAlign: "center", fontSize: 11, color: colors.textMuted },

  pressed: { opacity: 0.96, transform: [{ scale: 0.99 }] },
});
