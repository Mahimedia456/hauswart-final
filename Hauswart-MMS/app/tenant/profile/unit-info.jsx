import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function UnitInformation() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <ScreenWrapper>
      <MobileHeader title={t.unit.title} onBack={() => router.back()} />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Unit Details */}
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <View style={styles.headIcon}>
              <Ionicons name="home-outline" size={18} color={colors.textPrimary} />
            </View>
            <Text style={styles.cardTitle}>{t.unit.details}</Text>
          </View>

          <InfoRow label={t.unit.property} value="Highland Towers" />
          <InfoRow label={t.unit.building} value="Block A" />
          <InfoRow label={t.unit.unit} value="402" />
          <InfoRow label={t.unit.floor} value="4th" />
          <InfoRow label={t.unit.type} value="2 Bed Standard" />
        </View>

        {/* Facility Manager */}
        <Text style={styles.sectionTitle}>{t.unit.facilityManagement}</Text>

        <View style={styles.card}>
          <View style={styles.managerRow}>
            <View style={styles.avatar}>
              <Ionicons name="person-outline" size={18} color={colors.textPrimary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.managerName}>Hans Müller</Text>
              <Text style={styles.managerRole}>{t.unit.facilityManager}</Text>
            </View>

            <View style={styles.pill}>
              <View style={styles.pillDot} />
              <Text style={styles.pillText}>Online</Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <Pressable style={({ pressed }) => [styles.actionBtn, pressed && styles.pressedMini]}>
              <Ionicons name="call-outline" size={16} color="#111" />
              <Text style={styles.actionText}>{t.common.call}</Text>
            </Pressable>

            <Pressable style={({ pressed }) => [styles.actionBtn, pressed && styles.pressedMini]}>
              <Ionicons name="mail-outline" size={16} color="#111" />
              <Text style={styles.actionText}>{t.common.email}</Text>
            </Pressable>
          </View>
        </View>

        {/* Info Notice */}
        <View style={styles.notice}>
          <View style={styles.noticeTop}>
            <Ionicons name="information-circle-outline" size={18} color="#111" />
            <Text style={styles.noticeTitle}>{t.unit.noticeTitle ?? "Note"}</Text>
          </View>
          <Text style={styles.noticeText}>{t.unit.notice}</Text>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Components                          */
/* ---------------------------------- */

function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

/* ---------------------------------- */
/* Styles                              */
/* ---------------------------------- */

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: 140,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.lg,

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  cardHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: spacing.md,
  },
  headIcon: {
    width: 38,
    height: 38,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.04)",
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  label: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: "800",
  },

  value: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },

  managerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: spacing.lg,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 18,
    backgroundColor: "rgba(243, 139, 20, 0.14)",
    borderWidth: 1,
    borderColor: colors.primary + "33",
    alignItems: "center",
    justifyContent: "center",
  },

  managerName: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  managerRole: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "700",
    marginTop: 2,
  },

  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.primary + "33",
    backgroundColor: "rgba(243, 139, 20, 0.10)",
  },
  pillDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  pillText: {
    fontSize: 11,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  actionRow: {
    flexDirection: "row",
    gap: spacing.md,
  },

  actionBtn: {
    flex: 1,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  actionText: {
    color: "#111",
    fontWeight: "900",
    fontSize: 13,
  },

  notice: {
    borderRadius: 18,
    padding: spacing.md,
    backgroundColor: "rgba(243, 139, 20, 0.10)",
    borderWidth: 1,
    borderColor: colors.primary + "33",
  },

  noticeTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },

  noticeTitle: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  noticeText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
    lineHeight: 18,
  },

  pressedMini: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
