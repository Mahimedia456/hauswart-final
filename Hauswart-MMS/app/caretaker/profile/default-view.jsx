import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

const OPTIONS = [
  { key: "day", labelKey: "dayView" },
  { key: "week", labelKey: "weekView" },
  { key: "list", labelKey: "listView" },
];

export default function DefaultView() {
  const router = useRouter();
  const { t } = useLanguage();

  const [selected, setSelected] = useState("day");

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.defaultView.title}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        <Section title={t.defaultView.heading}>
          {OPTIONS.map((opt, index) => {
            const active = selected === opt.key;

            return (
              <Pressable
                key={opt.key}
                onPress={() => setSelected(opt.key)}
                style={[
                  styles.row,
                  index !== OPTIONS.length - 1 && styles.rowDivider,
                ]}
              >
                <Text style={styles.label}>
                  {t.defaultView[opt.labelKey]}
                </Text>

                <View style={active ? styles.dotActive : styles.dot} />
              </Pressable>
            );
          })}
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

    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,

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

  label: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.border,
  },

  dotActive: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.primary,
  },
});
