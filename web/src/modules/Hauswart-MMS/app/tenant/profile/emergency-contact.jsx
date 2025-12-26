import React from "react";
import { View, Text, StyleSheet, Pressable, Linking, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function EmergencyContact() {
  const router = useRouter();
  const { t } = useLanguage();

  const call = (number) => Linking.openURL(`tel:${number}`);
  const email = (address) => Linking.openURL(`mailto:${address}`);

  return (
    <ScreenWrapper>
      <MobileHeader title={t.emergency.title} onBack={() => router.back()} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Emergency Services */}
        <Text style={styles.sectionTitle}>{t.emergency.services}</Text>

        <ServiceCard
          icon="flame-outline"
          label={t.emergency.fire}
          number="112"
          tone="danger"
          onPress={() => call("112")}
        />

        <ServiceCard
          icon="shield-checkmark-outline"
          label={t.emergency.police}
          number="110"
          tone="info"
          onPress={() => call("110")}
        />

        <ServiceCard
          icon="medical-outline"
          label={t.emergency.medical}
          number="112"
          tone="success"
          onPress={() => call("112")}
        />

        {/* Property Management */}
        <Text style={[styles.sectionTitle, { marginTop: spacing.xl }]}>
          {t.emergency.propertyManagement}
        </Text>

        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.pmIcon}>
              <Ionicons name="business-outline" size={18} color={colors.textPrimary} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{t.emergency.facilityContact}</Text>
              <Text style={styles.cardSubtitle}>{t.emergency.facilityHint}</Text>
            </View>
          </View>

          <View style={styles.manager}>
            <Text style={styles.managerName}>John Doe</Text>
            <Text style={styles.managerRole}>{t.emergency.propertyManager}</Text>
          </View>

          <Pressable
            style={({ pressed }) => [styles.actionRow, pressed && styles.pressedMini]}
            onPress={() => call("+15551234567")}
          >
            <View style={styles.actionLeft}>
              <Ionicons name="call-outline" size={16} color={colors.textPrimary} />
              <Text style={styles.actionLabel}>+1 (555) 123-4567</Text>
            </View>
            <Text style={styles.actionHint}>{t.common.tapToCall}</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.actionRow, pressed && styles.pressedMini]}
            onPress={() => email("emergency@hauswart.com")}
          >
            <View style={styles.actionLeft}>
              <Ionicons name="mail-outline" size={16} color={colors.textPrimary} />
              <Text style={styles.actionLabel}>emergency@hauswart.com</Text>
            </View>
            <Text style={styles.actionHint}>{t.common.tapToEmail}</Text>
          </Pressable>
        </View>

        {/* Notice */}
        <View style={styles.notice}>
          <View style={styles.noticeTop}>
            <Ionicons name="alert-circle-outline" size={18} color="#111" />
            <Text style={styles.noticeTitle}>{t.emergency.noticeTitle ?? "Important"}</Text>
          </View>
          <Text style={styles.noticeText}>{t.emergency.notice}</Text>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Components                          */
/* ---------------------------------- */

function ServiceCard({ icon, label, number, onPress, tone }) {
  const toneMap = {
    danger: { color: colors.error, soft: "rgba(255,0,0,0.10)" },
    info: { color: colors.info, soft: "rgba(47,128,237,0.12)" },
    success: { color: colors.success, soft: "rgba(39,174,96,0.12)" },
  };

  const meta = toneMap[tone] || toneMap.info;

  return (
    <View style={styles.serviceCard}>
      <View style={styles.serviceLeft}>
        <View style={[styles.serviceIcon, { backgroundColor: meta.soft }]}>
          <Ionicons name={icon} size={18} color={colors.textPrimary} />
        </View>
        <View>
          <Text style={styles.serviceLabel}>{label}</Text>
          <Text style={styles.serviceNumber}>{number}</Text>
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.callBtn,
          { borderColor: meta.color + "33", backgroundColor: meta.soft },
          pressed && styles.pressedMini,
        ]}
        onPress={onPress}
      >
        <Text style={[styles.callText, { color: meta.color }]}>Call</Text>
        <Ionicons name="call" size={14} color={meta.color} />
      </Pressable>
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

  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  serviceCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  serviceLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  serviceIcon: {
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  serviceLabel: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  serviceNumber: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
    fontWeight: "700",
  },

  callBtn: {
    height: 40,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  callText: {
    fontWeight: "900",
    fontSize: 12,
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

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: spacing.md,
  },

  pmIcon: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.04)",
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  cardSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
    fontWeight: "700",
    lineHeight: 18,
  },

  manager: {
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },

  managerName: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  managerRole: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "800",
    marginTop: 2,
  },

  actionRow: {
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  actionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },

  actionLabel: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  actionHint: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "800",
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
    fontWeight: "900",
    color: colors.textPrimary,
    fontSize: 13,
  },

  noticeText: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
    fontWeight: "700",
  },

  pressedMini: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
