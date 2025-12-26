import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import PrimaryButton from "../../shared/PrimaryButton";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function Login() {
  const { t } = useLanguage();
  const router = useRouter();
  const { role } = useLocalSearchParams();

  // ✅ fallbacks
  const title = t?.login?.title ?? "Welcome Back";
  const subtitle = t?.login?.subtitle ?? "Enter your details below.";
  const emailLabel = t?.login?.email ?? "Email Address";
  const passLabel = t?.login?.password ?? "Password";
  const forgot = t?.login?.forgot ?? "Forgot your password?";
  const submit = t?.login?.submit ?? "Sign in";
  const noAccount = t?.login?.noAccount ?? "Don't have an account?";
  const register = t?.login?.register ?? "Get Started";

  const handleLogin = () => {
    if (role === "tenant") return router.replace("/tenant/home");
    if (role === "facilityManager") return router.replace("/fm/dashboard");
    if (role === "technician") return router.replace("/caretaker/dashboard");
    if (role === "serviceProvider") return router.replace("/serviceProvider/dashboard");
    router.replace("/tenant/home");
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.page}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* HERO (same glow style you liked) */}
          <View style={styles.hero}>
            <View style={styles.heroGlowA} />
            <View style={styles.heroGlowB} />

            <View style={styles.heroTopRow}>
              <Pressable
                onPress={() => router.back()}
                style={({ pressed }) => [styles.iconBtn, pressed && styles.pressedMini]}
              >
                <Ionicons name="chevron-back" size={20} color="#fff" />
              </Pressable>

              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/register",
                    params: { role },
                  })
                }
                style={({ pressed }) => [styles.pillBtn, pressed && styles.pressedMini]}
              >
                <Text style={styles.pillText}>{register}</Text>
              </Pressable>
            </View>

            {/* Hero text (like Jobsly) */}
            <View style={{ marginTop: 34 }}>
              <Text style={styles.brand}>Hauswart</Text>
              <Text style={styles.heroHint}>
                {subtitle}
              </Text>
            </View>
          </View>

          {/* White shape + Card (Jobsly-style overlap) */}
          <View style={styles.sheet}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardSub}>{subtitle}</Text>

              {/* EMAIL */}
              <View style={styles.field}>
                <Text style={styles.label}>{emailLabel}</Text>
                <View style={styles.inputWrap}>
                  <Ionicons name="mail-outline" size={18} color={colors.textMuted} />
                  <TextInput
                    placeholder="user@company.com"
                    placeholderTextColor={colors.textMuted}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                  />
                </View>
              </View>

              {/* PASSWORD */}
              <View style={styles.field}>
                <Text style={styles.label}>{passLabel}</Text>
                <View style={styles.inputWrap}>
                  <Ionicons name="key-outline" size={18} color={colors.textMuted} />
                  <TextInput
                    placeholder="••••••••"
                    placeholderTextColor={colors.textMuted}
                    secureTextEntry
                    style={styles.input}
                    returnKeyType="done"
                  />
                </View>
              </View>

              {/* CTA (Jobsly like wide button) */}
              <View style={{ marginTop: spacing.sm }}>
                <PrimaryButton title={submit} onPress={handleLogin} />
              </View>

              {/* Forgot */}
              <Pressable
                onPress={() => router.push("/forgot-password")}
                style={({ pressed }) => [styles.forgotBtn, pressed && styles.pressedMini]}
              >
                <Text style={styles.forgotText}>{forgot}</Text>
              </Pressable>

              {/* Footer register */}
              <Text style={styles.footerText}>
                {noAccount}{" "}
                <Text
                  style={styles.footerLink}
                  onPress={() =>
                    router.push({
                      pathname: "/register",
                      params: { role },
                    })
                  }
                >
                  {t?.login?.register ?? "Register"}
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

  /* HERO */
  hero: {
    height: 300,
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
    top: -140,
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
  pillBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.14)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
  },
  pillText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 12,
  },
  brand: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: 0.3,
  },
  heroHint: {
    marginTop: 8,
    color: "rgba(255,255,255,0.80)",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
    maxWidth: 280,
  },

  /* SHEET SHAPE (Jobsly overlap) */
  sheet: {
    marginTop: -70,
    paddingHorizontal: spacing.lg,
  },

  card: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
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

  cardTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.textPrimary,
    textAlign: "center",
  },
  cardSub: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "700",
    color: colors.textSecondary,
    lineHeight: 18,
    textAlign: "center",
    marginBottom: spacing.lg,
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
    backgroundColor: colors.white, // ✅ no grey
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

  forgotBtn: {
    alignSelf: "center",
    marginTop: spacing.md,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  forgotText: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "800",
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
