import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import useLanguage from "../../hooks/useLanguage";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

export default function EditProfile() {
  const router = useRouter();
  const { t } = useLanguage();

  const [name, setName] = useState("Jonathan Davis");
  const [phone, setPhone] = useState("+1 (555) 019-2834");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      router.back();
    }, 1000);
  };

  return (
    <ScreenWrapper>
      <MobileHeader title={t.editProfile.title} onBack={() => router.back()} />

      {saved && (
        <View style={styles.toast}>
          <Ionicons name="checkmark-circle" size={16} color="#111" />
          <Text style={styles.toastText}>{t.editProfile.success}</Text>
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar Card */}
        <View style={styles.avatarCard}>
          <View style={styles.avatar}>
            <Image
              source={{
                uri:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXWiMhcHIu8z9TT3F8478y2Tl4MbdeQduB80fWjZLAF2xcrYycIQkjqgKBxC0FXt5J7WYM4vSp9lt3qoB2P1klY692kJkTPS-miVB6w3V_t3wGNF75hp5hnCdTDHQxxKuoSlcsLCLmeQtA2lgzii-hmSYlx1zCwHIr7Z_vE-Wf1A2o7pnrXHCeUnFJQZDLinjQj59dRRL9J6_e_02iMuTJ9sDiQQzg-Cdrk8GBmXUA4LKVuChxg9Q9ET6n58NnEwX2z3MtrNFpQ8V1",
              }}
              style={styles.avatarImg}
            />
          </View>

          <Pressable style={({ pressed }) => [styles.changeBtn, pressed && styles.pressedMini]}>
            <Ionicons name="camera-outline" size={16} color="#111" />
            <Text style={styles.changePhoto}>{t.editProfile.changePhoto}</Text>
          </Pressable>
        </View>

        <Field label={t.editProfile.fullName} value={name} onChangeText={setName} />

        <Field
          label={t.editProfile.email}
          value="jonathan.davis@hauswart.com"
          editable={false}
        />

        <Field
          label={t.editProfile.phone}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [styles.saveBtn, pressed && styles.pressedMini]}
          onPress={handleSave}
        >
          <Text style={styles.saveText}>{t.editProfile.save}</Text>
          <Ionicons name="arrow-forward" size={16} color="#111" />
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Reusable Field                     */
/* ---------------------------------- */

function Field({ label, value, onChangeText, editable = true, keyboardType }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputWrap, !editable && styles.inputWrapDisabled]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          keyboardType={keyboardType}
          style={[styles.input, !editable && styles.inputDisabled]}
        />
        {!editable && (
          <Ionicons name="lock-closed-outline" size={16} color={colors.textMuted} />
        )}
      </View>
    </View>
  );
}

/* ---------------------------------- */
/* Styles                             */
/* ---------------------------------- */

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: 170,
  },

  toast: {
    position: "absolute",
    top: 72,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 999,
    zIndex: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  toastText: {
    color: "#111",
    fontWeight: "900",
    fontSize: 12,
  },

  avatarCard: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    alignItems: "center",
    marginBottom: spacing.xl,

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    overflow: "hidden",
    backgroundColor: colors.border,
    borderWidth: 2,
    borderColor: "rgba(243,139,20,0.35)",
    marginBottom: spacing.md,
  },
  avatarImg: {
    width: "100%",
    height: "100%",
  },

  changeBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
  },
  changePhoto: {
    color: "#111",
    fontWeight: "900",
    fontSize: 12,
  },

  field: {
    marginBottom: spacing.lg,
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
  inputWrapDisabled: {
    backgroundColor: "rgba(0,0,0,0.03)",
  },

  input: {
    flex: 1,
    fontSize: 13,
    fontWeight: "800",
    color: colors.textPrimary,
    padding: 0,
    margin: 0,
  },
  inputDisabled: {
    color: colors.textMuted,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  saveBtn: {
    backgroundColor: colors.primary,
    height: 54,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  saveText: {
    color: "#111",
    fontSize: 14,
    fontWeight: "900",
  },

  pressedMini: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
