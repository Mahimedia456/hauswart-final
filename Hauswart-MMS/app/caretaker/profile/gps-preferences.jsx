import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function GPSPreferences() {
  const router = useRouter();
  const { t } = useLanguage();

  const [gpsEnabled, setGpsEnabled] = useState(true);
  const [backgroundTracking, setBackgroundTracking] = useState(true);

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.gps.title}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        <Section title={t.gps.permissions}>
          <ToggleRow
            label={t.gps.enableTracking}
            value={gpsEnabled}
            onValueChange={setGpsEnabled}
          />
          <ToggleRow
            label={t.gps.backgroundTracking}
            value={backgroundTracking}
            onValueChange={setBackgroundTracking}
            isLast
          />
        </Section>
      </View>
    </ScreenWrapper>
  );
}

/* ---------------- Components ---------------- */

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
});
