import React, { useRef, useState } from "react";
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

export default function VerifyOtp() {
  const { t } = useLanguage();
  const router = useRouter();

  const title = t?.verifyOtp?.title ?? "Verify OTP";
  const subtitle =
    t?.verifyOtp?.subtitle ?? "Enter the verification code sent to your email.";
  const submit = t?.verifyOtp?.submit ?? "Verify";

  const inputs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const setDigit = (index, value) => {
    const v = value?.replace(/[^0-9]/g, "").slice(-1) ?? "";
    const next = [...otp];
    next[index] = v;
    setOtp(next);

    if (v && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const onKeyPress = (index, e) => {
    if (e.nativeEvent.key === "Backspace") {
      if (otp[index]) {
        const next = [...otp];
        next[index] = "";
        setOtp(next);
        return;
      }
      if (index > 0) {
        inputs.current[index - 1]?.focus();
        const next = [...otp];
        next[index - 1] = "";
        setOtp(next);
      }
    }
  };

  const handleVerify = () => {
    // TODO: verify API later
    router.push("/reset-password");
  };

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
                <Ionicons
                  name="shield-checkmark-outline"
                  size={14}
                  color="#fff"
                />
                <Text style={styles.topPillText}>
                  {t?.login?.secure ?? "Secure verification"}
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
              <Text style={styles.cardTitle}>
                {t?.verifyOtp?.enter ?? "Enter Code"}
              </Text>
              <Text style={styles.cardSub}>
                {t?.verifyOtp?.hint ??
                  "Please enter the 6-digit code to continue."}
              </Text>

              <View style={styles.otpRow}>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <TextInput
                    key={i}
                    ref={(el) => (inputs.current[i] = el)}
                    value={otp[i]}
                    style={[
                      styles.otpInput,
                      otp[i] ? styles.otpFilled : null,
                    ]}
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={(v) => setDigit(i, v)}
                    onKeyPress={(e) => onKeyPress(i, e)}
                    returnKeyType={i === 5 ? "done" : "next"}
                    textContentType="oneTimeCode"
                    autoFocus={i === 0}
                  />
                ))}
              </View>

              <View style={{ marginTop: spacing.lg }}>
                <PrimaryButton title={submit} onPress={handleVerify} />
              </View>

              <View style={styles.bottomRow}>
                <Text style={styles.bottomText}>
                  {t?.verifyOtp?.noCode ?? "Didn’t receive a code?"}
                </Text>

                <Pressable
                  onPress={() => {
                    // TODO: resend API later
                  }}
                  style={({ pressed }) => [
                    styles.resendPill,
                    pressed && styles.pressedMini,
                  ]}
                >
                  <Text style={styles.resendText}>
                    {t?.verifyOtp?.resend ?? "Resend"}
                  </Text>
                </Pressable>
              </View>
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
    height: 290,
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
    maxWidth: 320,
  },

  sheet: {
    marginTop: -75,
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

  cardTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  cardSub: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
    lineHeight: 18,
  },

  otpRow: {
    marginTop: spacing.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  otpInput: {
    flex: 1,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  otpFilled: {
    borderColor: colors.primary,
    backgroundColor: "rgba(243,139,20,0.08)",
  },

  bottomRow: {
    marginTop: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  bottomText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
  },

  resendPill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "rgba(243, 139, 20, 0.12)",
    borderWidth: 1,
    borderColor: colors.primary + "33",
  },
  resendText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "900",
  },

  pressedMini: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
