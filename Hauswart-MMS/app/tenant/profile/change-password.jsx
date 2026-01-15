import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import useLanguage from "../../hooks/useLanguage";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

export default function ChangePassword() {
  const router = useRouter();
  const { t } = useLanguage();

  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <ScreenWrapper>
      <MobileHeader title={t.changePassword.title} onBack={() => router.back()} />

      <View style={styles.container}>
        <Field
          label={t.changePassword.current}
          placeholder={t.changePassword.currentPlaceholder}
          value={current}
          onChangeText={setCurrent}
          secure={!showCurrent}
          rightIcon={showCurrent ? "eye-off-outline" : "eye-outline"}
          onRightPress={() => setShowCurrent((s) => !s)}
        />

        <View style={{ marginTop: spacing.sm }} />

        <Field
          label={t.changePassword.new}
          placeholder={t.changePassword.newPlaceholder}
          value={next}
          onChangeText={setNext}
          secure={!showNext}
          rightIcon={showNext ? "eye-off-outline" : "eye-outline"}
          onRightPress={() => setShowNext((s) => !s)}
          helper={t.changePassword.hint}
        />

        <View style={{ marginTop: spacing.sm }} />

        <Field
          label={t.changePassword.confirm}
          placeholder={t.changePassword.confirmPlaceholder}
          value={confirm}
          onChangeText={setConfirm}
          secure={!showConfirm}
          rightIcon={showConfirm ? "eye-off-outline" : "eye-outline"}
          onRightPress={() => setShowConfirm((s) => !s)}
        />
      </View>

      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [styles.submitBtn, pressed && styles.pressedMini]}
          onPress={() => {
            // API call later
            router.back();
          }}
        >
          <Text style={styles.submitText}>{t.changePassword.submit}</Text>
          <Ionicons name="arrow-forward" size={16} color="#111" />
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

/* ------------------------------- */
/* Field Component                 */
/* ------------------------------- */

function Field({
  label,
  placeholder,
  value,
  onChangeText,
  secure,
  rightIcon,
  onRightPress,
  helper,
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputWrap}>
        <TextInput
          secureTextEntry={secure}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />

        <Pressable onPress={onRightPress} hitSlop={10} style={styles.eyeBtn}>
          <Ionicons name={rightIcon} size={18} color={colors.textMuted} />
        </Pressable>
      </View>

      {!!helper && <Text style={styles.hint}>{helper}</Text>}
    </View>
  );
}

/* ------------------------------- */
/* Styles                          */
/* ------------------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },

  field: {
    marginBottom: spacing.md,
  },

  label: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },

  inputWrap: {
    height: 54,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "rgba(0,0,0,0.04)",
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 13,
    fontWeight: "800",
    color: colors.textPrimary,
    padding: 0,
    margin: 0,
  },

  eyeBtn: {
    width: 36,
    height: 36,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  hint: {
    marginTop: 8,
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
    fontWeight: "700",
  },

  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  submitBtn: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  submitText: {
    color: "#111",
    fontWeight: "900",
    fontSize: 14,
  },

  pressedMini: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
