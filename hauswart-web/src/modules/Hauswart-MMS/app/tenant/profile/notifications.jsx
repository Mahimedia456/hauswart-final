import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function NotificationPreferences() {
  const router = useRouter();
  const { t } = useLanguage();

  // Local UI state (replace later with real settings store)
  const [settings, setSettings] = useState({
    ticketUpdates: true,
    chatMessages: true,
    announcements: true,
    reminders: false,
    push: true,
    email: false,
  });

  const setKey = (key, value) => setSettings((p) => ({ ...p, [key]: value }));

  return (
    <ScreenWrapper>
      <MobileHeader title={t.notifications.title} onBack={() => router.back()} />

      <View style={styles.container}>
        <Section title={t.notifications.options}>
          <ToggleRow
            label={t.notifications.ticketUpdates}
            value={settings.ticketUpdates}
            onValueChange={(v) => setKey("ticketUpdates", v)}
          />
          <ToggleRow
            label={t.notifications.chatMessages}
            value={settings.chatMessages}
            onValueChange={(v) => setKey("chatMessages", v)}
          />
          <ToggleRow
            label={t.notifications.announcements}
            value={settings.announcements}
            onValueChange={(v) => setKey("announcements", v)}
          />
          <ToggleRow
            label={t.notifications.reminders}
            value={settings.reminders}
            onValueChange={(v) => setKey("reminders", v)}
            isLast
          />
        </Section>

        <Section title={t.notifications.channels}>
          <ToggleRow
            label={t.notifications.push}
            value={settings.push}
            onValueChange={(v) => setKey("push", v)}
          />
          <ToggleRow
            label={t.notifications.email}
            value={settings.email}
            onValueChange={(v) => setKey("email", v)}
            isLast
          />
        </Section>
      </View>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Reusable Components                */
/* ---------------------------------- */

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.card}>{children}</View>
    </View>
  );
}

function ToggleRow({ label, value, onValueChange, isLast }) {
  return (
    <View style={[styles.row, !isLast && styles.rowDivider]}>
      <View style={styles.rowLeft}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.subLabel}>{" "}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "rgba(0,0,0,0.12)", true: colors.primary }}
        thumbColor={colors.white}
      />
    </View>
  );
}

/* ---------------------------------- */
/* Styles                             */
/* ---------------------------------- */

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: 140,
  },

  section: {
    marginBottom: spacing.xl,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "900",
    color: colors.textMuted,
    textTransform: "uppercase",
    marginBottom: spacing.sm,
    paddingLeft: spacing.xs,
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

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },

  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  rowLeft: {
    flex: 1,
    paddingRight: 10,
  },

  label: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  subLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.textMuted,
    marginTop: 3,
  },
});
