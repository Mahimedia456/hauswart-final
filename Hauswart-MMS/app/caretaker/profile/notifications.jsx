import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function NotificationPreferences() {
  const router = useRouter();
  const { t } = useLanguage();

  const [settings, setSettings] = useState({
    newTask: true,
    statusChanged: true,
    onHold: false,
    approvedRejected: true,

    chatMessages: true,
    fmReplies: true,

    reminders: true,
    scheduleChanges: true,
    overdue: true,

    push: true,
    sound: false,
    vibration: true,
  });

  const setKey = (key, value) =>
    setSettings((p) => ({ ...p, [key]: value }));

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.notifications.title}
        onBack={() => router.back()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* TASK UPDATES */}
        <Section title={t.notifications.taskUpdates}>
          <ToggleRow
            label={t.notifications.newTask}
            value={settings.newTask}
            onValueChange={(v) => setKey("newTask", v)}
          />
          <ToggleRow
            label={t.notifications.statusChanged}
            value={settings.statusChanged}
            onValueChange={(v) => setKey("statusChanged", v)}
          />
          <ToggleRow
            label={t.notifications.onHold}
            value={settings.onHold}
            onValueChange={(v) => setKey("onHold", v)}
          />
          <ToggleRow
            label={t.notifications.approvedRejected}
            value={settings.approvedRejected}
            onValueChange={(v) => setKey("approvedRejected", v)}
            isLast
          />
        </Section>

        {/* COMMUNICATION */}
        <Section title={t.notifications.communication}>
          <ToggleRow
            label={t.notifications.chatMessages}
            value={settings.chatMessages}
            onValueChange={(v) => setKey("chatMessages", v)}
          />
          <ToggleRow
            label={t.notifications.fmReplies}
            value={settings.fmReplies}
            onValueChange={(v) => setKey("fmReplies", v)}
          />
          <DisabledRow
            label={t.notifications.mentions}
            hint={t.notifications.comingSoon}
            isLast
          />
        </Section>

        {/* SCHEDULE & REMINDERS */}
        <Section title={t.notifications.schedule}>
          <ToggleRow
            label={t.notifications.reminders}
            value={settings.reminders}
            onValueChange={(v) => setKey("reminders", v)}
          />

          <ToggleRow
            label={t.notifications.overdue}
            value={settings.overdue}
            onValueChange={(v) => setKey("overdue", v)}
            isLast
          />
        </Section>

        {/* DELIVERY CHANNELS */}
        <Section title={t.notifications.channels}>
          <ToggleRow
            label={t.notifications.push}
            value={settings.push}
            onValueChange={(v) => setKey("push", v)}
          />
          <ToggleRow
            label={t.notifications.sound}
            value={settings.sound}
            onValueChange={(v) => setKey("sound", v)}
          />
          <ToggleRow
            label={t.notifications.vibration}
            value={settings.vibration}
            onValueChange={(v) => setKey("vibration", v)}
            isLast
          />
        </Section>
      </ScrollView>
    </ScreenWrapper>
  );
}

/* ---------------- Reusable ---------------- */

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
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "rgba(0,0,0,0.12)", true: colors.primary }}
        thumbColor={colors.white}
      />
    </View>
  );
}

function DisabledRow({ label, hint, isLast }) {
  return (
    <View
      style={[
        styles.row,
        !isLast && styles.rowDivider,
        { opacity: 0.5 },
      ]}
    >
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.subLabel}>{hint}</Text>
      </View>
      <Switch value={false} disabled />
    </View>
  );
}

/* ---------------- Styles ---------------- */

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
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },

  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
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
    marginTop: 2,
  },
});
