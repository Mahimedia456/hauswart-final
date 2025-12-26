import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import PrimaryButton from "../../shared/PrimaryButton";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function Register() {
  const { t } = useLanguage();
  const router = useRouter();
  const { role = "tenant" } = useLocalSearchParams();
  const isTenant = role === "tenant";

  // ✅ fallbacks
  const title = t?.register?.title ?? "Create Account";
  const subtitle =
    t?.register?.subtitle ??
    "Create your account to start managing tickets.";
  const registeringAs = t?.register?.registeringAs ?? "Registering as";
  const roleLabel = t?.roles?.[role] ?? role;

  const nameLabel = t?.register?.name ?? "Full Name";
  const emailLabel = t?.register?.email ?? "Email";
  const phoneLabel = t?.register?.phone ?? "Phone";
  const passLabel = t?.register?.password ?? "Password";
  const passHint = t?.register?.passwordHint ?? "Must contain at least 8 characters";

  const propertyLabel = t?.register?.property ?? "Property / Unit Code";
  const propertyHint =
    t?.register?.propertyHint ??
    "Found on your lease agreement or welcome packet.";

  const submit = t?.register?.submit ?? "Create Account";

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
          {/* HERO */}
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

              <View style={styles.rolePill}>
                <View style={styles.roleDot} />
                <Text style={styles.roleText}>
                  {registeringAs} {roleLabel}
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 26 }}>
              <Text style={styles.heroTitle}>{title}</Text>
              <Text style={styles.heroSub}>{subtitle}</Text>
            </View>
          </View>

          {/* SHEET (Jobsly style overlap) */}
          <View style={styles.sheet}>
            <View style={styles.card}>
              {/* Fields inside card -> scroll feel, not full screen */}
              <Field
                label={nameLabel}
                placeholder="Jane Doe"
                icon="person-outline"
              />

              <Field
                label={emailLabel}
                placeholder="jane@example.com"
                icon="mail-outline"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Field
                label={phoneLabel}
                placeholder="(555) 000-0000"
                icon="call-outline"
                keyboardType="phone-pad"
              />

              <Field
                label={passLabel}
                placeholder="Min. 8 characters"
                icon="lock-closed-outline"
                secure
                helper={passHint}
              />

              {isTenant && (
                <>
                  <View style={styles.divider} />
                  <Field
                    label={propertyLabel}
                    placeholder="BLDG-101"
                    icon="home-outline"
                    helper={propertyHint}
                  />
                </>
              )}

              <View style={{ marginTop: spacing.md }}>
                <PrimaryButton title={submit} onPress={() => {}} />
              </View>

              <Text style={styles.footerText}>
                {t?.login?.title ? "" : ""}{" "}
                <Text style={styles.footerLink} onPress={() => router.back()}>
                  {t?.common?.back ?? "Back to login"}
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

/* ---------------------------- */
/* Reusable Field               */
/* ---------------------------- */
function Field({
  label,
  placeholder,
  secure,
  helper,
  icon,
  keyboardType,
  autoCapitalize,
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputWrap}>
        <Ionicons name={icon} size={18} color={colors.textMuted} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          secureTextEntry={secure}
          style={styles.input}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
        />
      </View>

      {helper ? <Text style={styles.helper}>{helper}</Text> : null}
    </View>
  );
}

/* ---------------------------- */
/* Styles                       */
/* ---------------------------- */
const styles = StyleSheet.create({
  page: {
    paddingBottom: spacing.xl,
  },

  hero: {
    height: 280,
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

  rolePill: {
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
  roleDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  roleText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 12,
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
    maxWidth: 280,
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

  helper: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
    lineHeight: 18,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
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
