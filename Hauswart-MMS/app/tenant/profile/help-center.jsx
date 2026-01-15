import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function HelpCenter() {
  const router = useRouter();
  const { t } = useLanguage();

  // ✅ SAFE FALLBACKS (avoid undefined crash)
  const title = t?.help?.title ?? "Help Center";
  const heading = t?.help?.heading ?? "How can we help?";
  const subtitle =
    t?.help?.subtitle ?? "Browse FAQs or contact support from your ticket chat.";
  const faqs = Array.isArray(t?.help?.faqs) ? t.help.faqs : [];

  return (
    <ScreenWrapper>
      <MobileHeader title={title} onBack={() => router.back()} />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Top hint / quick actions */}
        <View style={styles.note}>
          <View style={styles.noteIcon}>
            <Ionicons name="help-circle-outline" size={18} color="#111" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.noteTitle}>{heading}</Text>
            <Text style={styles.noteDesc}>{subtitle}</Text>
          </View>
        </View>

        {/* FAQ list */}
        <View style={{ gap: spacing.md }}>
          {faqs.length === 0 ? (
            <View style={styles.card}>
              <View style={styles.qRow}>
                <View style={styles.qDot} />
                <Text style={styles.question}>No FAQs found</Text>
              </View>
              <Text style={styles.answer}>
                Please add translations for: t.help.faqs
              </Text>
            </View>
          ) : (
            faqs.map((item, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.qRow}>
                  <View style={styles.qDot} />
                  <Text style={styles.question}>
                    {item?.q ?? "—"}
                  </Text>
                </View>
                <Text style={styles.answer}>{item?.a ?? ""}</Text>
              </View>
            ))
          )}
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: 140,
  },

  note: {
    borderRadius: 18,
    padding: spacing.md,
    backgroundColor: "rgba(243, 139, 20, 0.10)",
    borderWidth: 1,
    borderColor: colors.primary + "33",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: spacing.lg,
  },
  noteIcon: {
    width: 38,
    height: 38,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  noteTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  noteDesc: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
    lineHeight: 18,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  qRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 8,
  },
  qDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginTop: 6,
  },
  question: {
    flex: 1,
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
    lineHeight: 20,
  },
  answer: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
    lineHeight: 19,
  },
});
