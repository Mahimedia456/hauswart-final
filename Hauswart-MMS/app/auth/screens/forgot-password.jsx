import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import PrimaryButton from "../../shared/PrimaryButton";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function ForgotPassword() {
  const { t } = useLanguage();
  const router = useRouter();

  const title = t?.forgotPassword?.title ?? "Forgot Password";
  const subtitle =
    t?.forgotPassword?.subtitle ??
    "Enter your email to receive a verification code.";
  const submit = t?.forgotPassword?.submit ?? "Send Code";
  const emailLabel = t?.login?.email ?? "Email / Username";

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.page}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* HERO */}
          <View style={styles.hero}>
            <View style={styles.heroGlowA} />
            <View style={styles.heroGlowB} />

            <View style={styles.heroTopRow}>
              <Pressable
                onPress={() => router.back()}
                style={({ pressed }) => [
                  styles.iconBtn,
                  pressed && styles.pressedMini,
                ]}
              >
                <Ionicons name="chevron-back" size={20} color="#fff" />
              </Pressable>

              <View style={styles.topPill}>
                <Ionicons name="key-outline" size={14} color="#fff" />
                <Text style={styles.topPillText}>
                  {t?.login?.secure ?? "Secure reset"}
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 26 }}>
              <Text style={styles.heroTitle}>{title}</Text>
              <Text style={styles.heroSub}>{subtitle}</Text>
            </View>
          </View>

          {/* SHEET */}
          <View style={styles.sheet}>
            <View style={styles.card}>
              <View style={styles.field}>
                <Text style={styles.label}>{emailLabel}</Text>

                <View style={styles.inputWrap}>
                  <Ionicons
                    name="mail-outline"
                    size={18}
                    color={colors.textMuted}
                  />
                  <TextInput
                    placeholder="name@example.com"
                    placeholderTextColor={colors.textMuted}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="done"
                  />
                </View>
              </View>

              <View style={{ marginTop: spacing.md }}>
                <PrimaryButton
                  title={submit}
                  onPress={() => router.push("/verify-otp")}
                />
              </View>

              <Text style={styles.footerText}>
                {t?.common?.backHint ?? "Remember your password?"}{" "}
                <Text
                  style={styles.footerLink}
                  onPress={() => router.back()}
                >
                  {t?.common?.goBack ?? "Go back"}
                </Text>
              </Text>
            </View>
          </View>

          <View style={{ height: 18 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingBottom: spacing.xl,
  },

  hero: {
    height: 270,
    backgroundColor: "#111",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    overflow: "hidden",
  },
  heroGlowA: {
    position: "absolute",
    left: -140,
    top: -140,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: colors.primary,
    opacity: 0.55,
  },
  heroGlowB: {
    position: "absolute",
    right: -170,
    top: -150,
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: colors.primary,
    opacity: 0.35,
  },

  heroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.14)",
    alignItems: "center",
    justifyContent: "center",
  },

  topPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.14)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
  },
  topPillText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 11,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 0.2,
  },
  heroSub: {
    marginTop: 8,
    color: "rgba(255,255,255,0.80)",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
    maxWidth: 290,
  },

  sheet: {
    marginTop: -70,
    paddingHorizontal: spacing.lg,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 14 },
    elevation: 3,
  },

  field: {
    marginBottom: spacing.md,
  },

  label: {
    fontSize: 12,
    fontWeight: "900",
    color: colors.textMuted,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.35,
  },

  inputWrap: {
    height: 54,
    borderRadius: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: "800",
    color: colors.textPrimary,
  },

  footerText: {
    marginTop: spacing.lg,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
  },
  footerLink: {
    color: colors.primary,
    fontWeight: "900",
  },

  pressedMini: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
