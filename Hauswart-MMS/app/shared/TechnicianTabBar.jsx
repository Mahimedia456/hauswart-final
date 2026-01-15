import React, { useMemo } from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import useLanguage from "@/hooks/useLanguage";

export default function TechnicianTabBar(props) {
  const { state, navigation } = props || {}; // ✅ safe
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { t } = useLanguage();

  const ctTabs = t?.ctTabs || {};
  const labels = useMemo(
    () => ({
      home: ctTabs.dashboard ?? "Dashboard",
      tasks: ctTabs.tasks ?? "Tasks",
      chat: ctTabs.chat ?? "Chat",
      profile: ctTabs.profile ?? "Profile",
      scan: ctTabs.scan ?? "Scan",
    }),
    [ctTabs]
  );

  const onScan = () => router.push("/caretaker/scan");

  // ✅ if somehow rendered without Tabs props, don't crash
  const activeIndex = state?.index ?? 0;
  const go = (name) => {
    if (navigation?.navigate) navigation.navigate(name);
    else router.push(`/caretaker/(tabs)/${name}`);
  };

  return (
    <View style={[styles.wrap, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      <View style={styles.bar}>
        <TabItem label={labels.home} icon="grid-outline" isActive={activeIndex === 0} onPress={() => go("home")} />
        <TabItem label={labels.tasks} icon="clipboard-outline" isActive={activeIndex === 1} onPress={() => go("tasks")} />

        <View style={styles.fabSlot}>
          <Pressable
            onPress={onScan}
            style={({ pressed }) => [styles.fab, pressed && { opacity: 0.95, transform: [{ scale: 0.98 }] }]}
          >
            <Ionicons name="qr-code-outline" size={22} color="#111" />
            <Text style={styles.fabText}>{labels.scan}</Text>
          </Pressable>
        </View>

        <TabItem label={labels.chat} icon="chatbubble-ellipses-outline" isActive={activeIndex === 2} onPress={() => go("chat")} />
        <TabItem label={labels.profile} icon="person-outline" isActive={activeIndex === 3} onPress={() => go("profile")} />
      </View>
    </View>
  );
}

function TabItem({ label, icon, isActive, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
      <Ionicons name={icon} size={22} color={isActive ? colors.primary : colors.textMuted} />
      <Text style={[styles.label, { color: isActive ? colors.primary : colors.textMuted }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { position: "absolute", left: 0, right: 0, bottom: 0, backgroundColor: "transparent" },
  bar: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    borderRadius: 22,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  item: { flex: 1, alignItems: "center", justifyContent: "center", gap: 4, paddingVertical: 6 },
  label: { fontSize: 10, fontWeight: "800" },
  pressed: { opacity: 0.9 },

  fabSlot: { width: 86, alignItems: "center", justifyContent: "center", marginTop: -28 },
  fab: {
    width: 78,
    height: 78,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderWidth: 4,
    borderColor: colors.white,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
  fabText: { fontSize: 10, fontWeight: "900", color: "#111", marginTop: Platform.OS === "android" ? -2 : 0 },
});
