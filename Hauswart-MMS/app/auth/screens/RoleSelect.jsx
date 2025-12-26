import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  BackHandler,
} from "react-native";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import PrimaryButton from "../../shared/PrimaryButton";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import { radius } from "../../constants/radius";
import useLanguage from "../../hooks/useLanguage";

const ROLES = ["technician", "tenant"]; // ✅ dont change keys

export default function RoleSelect() {
  const { t } = useLanguage();
  const router = useRouter();

  const [selectedRole, setSelectedRole] = useState("technician"); // ✅ valid default (from ROLES)

  // safe fallbacks
  const title = t?.roleSelect?.title ?? "Select Your Role";
  const subtitle =
    t?.roleSelect?.subtitle ??
    "Choose how you will use the Hauswart app. Your role determines access.";
  const continueLabel = t?.roleSelect?.continue ?? "Continue";

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      router.replace("/onboarding");
      return true;
    });
    return () => backHandler.remove();
  }, []);

  const selectedMeta = useMemo(() => {
    const obj = t?.roleSelect?.[selectedRole];
    return {
      title: obj?.title ?? selectedRole,
      badge: obj?.badge ?? "",
    };
  }, [t, selectedRole]);

  return (
    <ScreenWrapper>
      <MobileHeader title={title} onBack={() => router.replace("/onboarding")} />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero / intro */}
        <View style={styles.hero}>
          <View style={styles.heroGlow} />
          <Text style={styles.heroTitle}>{title}</Text>
          <Text style={styles.heroDesc}>{subtitle}</Text>

          {!!selectedMeta.badge && (
            <View style={styles.heroPill}>
              <View style={styles.heroPillDot} />
              <Text style={styles.heroPillText}>{selectedMeta.badge}</Text>
            </View>
          )}
        </View>

        {/* Cards */}
        <View style={{ gap: spacing.md }}>
          {ROLES.map((role) => {
            const active = selectedRole === role;

            const meta = t?.roleSelect?.[role] ?? {
              title: role,
              description: "",
              badge: "",
            };

            return (
              <Pressable
                key={role}
                onPress={() => setSelectedRole(role)}
                style={({ pressed }) => [
                  styles.card,
                  active && styles.cardActive,
                  pressed && styles.pressed,
                ]}
              >
                {/* left icon bubble */}
                <View style={[styles.iconWrap, active && styles.iconWrapActive]}>
                  <Ionicons
                    name={role === "tenant" ? "person-outline" : "construct-outline"}
                    size={18}
                    color={colors.textPrimary}
                  />
                </View>

                {/* content */}
                <View style={styles.cardBody}>
                  <View style={styles.topRow}>
                    <Text style={styles.cardTitle}>{meta.title}</Text>

                    {active && (
                      <View style={styles.checkWrap}>
                        <Ionicons name="checkmark" size={14} color="#111" />
                      </View>
                    )}
                  </View>

                  {!!meta.description && (
                    <Text style={styles.cardDesc}>{meta.description}</Text>
                  )}

                  {!!meta.badge && (
                    <View style={[styles.badge, active && styles.badgeActive]}>
                      <Text style={[styles.badgeText, active && styles.badgeTextActive]}>
                        {meta.badge}
                      </Text>
                    </View>
                  )}
                </View>
              </Pressable>
            );
          })}
        </View>

        <View style={{ height: 18 }} />
      </ScrollView>

      {/* Footer CTA */}
      <View style={styles.footer}>
        <PrimaryButton
          title={continueLabel}
          onPress={() =>
            router.push({ pathname: "/login", params: { role: selectedRole } })
          }
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: 160,
  },

  // hero
  hero: {
    backgroundColor: "#111",
    borderRadius: 20,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    overflow: "hidden",
  },
  heroGlow: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    right: -70,
    top: -70,
    backgroundColor: colors.primary,
    opacity: 0.22,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 8,
  },
  heroDesc: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 20,
  },
  heroPill: {
    marginTop: spacing.md,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.10)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
  },
  heroPillDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  heroPillText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 11,
  },

  // role card
  card: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    padding: spacing.md,
    flexDirection: "row",
    gap: 12,

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },
  cardActive: {
    borderColor: colors.primary + "55",
  },

  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.05)",
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapActive: {
    backgroundColor: "rgba(243, 139, 20, 0.14)",
  },

  cardBody: {
    flex: 1,
    gap: 8,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  cardTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  checkWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  cardDesc: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
    lineHeight: 18,
  },

  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
  badgeActive: {
    borderColor: colors.primary + "33",
    backgroundColor: "rgba(243, 139, 20, 0.10)",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "900",
    color: colors.textSecondary,
  },
  badgeTextActive: {
    color: colors.textPrimary,
  },

  pressed: {
    opacity: 0.96,
    transform: [{ scale: 0.99 }],
  },

  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
});
