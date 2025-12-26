import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

const LANGUAGES = [
  { code: "en", label: "English (US)" },
  { code: "de", label: "Deutsch" },
];

export default function LanguageSelector() {
  const router = useRouter();
  const { t, lang, setLang } = useLanguage();

  const handleSelect = async (code) => {
    await setLang(code);   // ✅ persist + rerender
    router.back();
  };

  const title = t?.language?.title ?? "Language";
  const heading = t?.language?.heading ?? "Select your language";
  const subtitle =
    t?.language?.subtitle ?? "Choose the language you want to use in the app.";

  return (
    <ScreenWrapper>
      <MobileHeader title={title} onBack={() => router.back()} />

      <View style={styles.container}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.list}>
          {LANGUAGES.map((item) => {
            const isActive = lang === item.code;

            return (
              <Pressable
                key={item.code}
                onPress={() => handleSelect(item.code)}
                style={({ pressed }) => [
                  styles.item,
                  isActive && styles.itemActive,
                  pressed && styles.pressed,
                ]}
              >
                {/* Left orange bar only when active */}
                {isActive && <View style={styles.activeBar} />}

                <Text style={styles.label}>{item.label}</Text>

                {/* Right dot only when active */}
                {isActive ? <View style={styles.dot} /> : <View style={styles.dotGhost} />}
              </Pressable>
            );
          })}
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  heading: {
    fontSize: 30,
    fontWeight: "900",
    marginBottom: spacing.sm,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textSecondary,
    marginBottom: spacing.xl,
    lineHeight: 20,
  },

  list: { gap: spacing.md },

  item: {
    height: 62,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  itemActive: {
    borderColor: colors.primary,      // ✅ no grey fill
    backgroundColor: colors.white,
  },

  activeBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: colors.primary,  // ✅ orange only
  },

  label: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },

  dotGhost: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "transparent",
  },

  pressed: {
    opacity: 0.96,
    transform: [{ scale: 0.99 }],
  },
});
