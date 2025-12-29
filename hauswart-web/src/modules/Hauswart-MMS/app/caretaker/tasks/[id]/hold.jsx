import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

import ScreenWrapper from "@/shared/ScreenWrapper";
import BottomSheet from "../components/BottomSheet";
import TaskContextCard from "../components/TaskContextCard";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import useLanguage from "@/hooks/useLanguage";
import { useTaskSession } from "../components/TaskSessionProvider";

export default function HoldTask() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const taskId = String(id);

  const { t } = useLanguage();
  const ct = t?.ctTaskHold || {};

  const { hold } = useTaskSession();
  const [notes, setNotes] = useState("");

  const task = useMemo(
    () => ({
      id: taskId,
      title: "HVAC Leak Repair",
      location: "Building A, Floor 3",
      time: "Time tracking will pause",
    }),
    [taskId]
  );

  const onSubmit = () => {
    hold({ reason: "manual", notes });
    router.back();
  };

  return (
    <ScreenWrapper>
      <BottomSheet visible onClose={() => router.back()} height={640}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.closeBtn}>
            <Ionicons name="close" size={22} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.title}>{ct.title ?? "Put Task on Hold"}</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView contentContainerStyle={styles.body}>
          <TaskContextCard task={task} statusLabel={ct.status ?? "In Progress"} />

          <View style={styles.notice}>
            <Ionicons name="information-circle" size={20} color={colors.primary} />
            <Text style={styles.noticeText}>
              {ct.notice ??
                "Putting this task on hold will pause time tracking until resumed."}
            </Text>
          </View>

          <TextInput
            value={notes}
            onChangeText={setNotes}
            placeholder={ct.placeholder ?? "Optional hold notes"}
            placeholderTextColor={colors.textMuted}
            multiline
            style={styles.input}
          />
        </ScrollView>

        <View style={styles.footer}>
          <Pressable onPress={onSubmit} style={styles.primaryBtn}>
            <Ionicons name="pause" size={18} color="#fff" />
            <Text style={styles.primaryText}>{ct.submit ?? "Put on Hold"}</Text>
          </Pressable>
        </View>
      </BottomSheet>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: spacing.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  closeBtn: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 16, fontWeight: "900" },
  body: { padding: spacing.lg, gap: spacing.lg },
  notice: {
    backgroundColor: "rgba(243,139,20,0.10)",
    borderRadius: 14,
    padding: spacing.md,
  },
  noticeText: { fontSize: 12, fontWeight: "700", color: colors.textMuted },
  input: {
    minHeight: 90,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.04)",
    padding: 12,
  },
  footer: { padding: spacing.lg },
  primaryBtn: {
    height: 52,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  primaryText: { color: "#fff", fontWeight: "900" },
});
