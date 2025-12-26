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

    export default function ResumeTask() {
      const router = useRouter();
      const params = useLocalSearchParams();
      const id = String(params?.id ?? "TSK-8821");

      const { t } = useLanguage();
      const ct = t?.ctTaskResume || {};

      const { session, ensureTask, resume } = useTaskSession();

      React.useEffect(() => {
        ensureTask(id, { status: "onHold", elapsed: session?.elapsed ?? 45 * 60 + 12 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id]);

      const task = useMemo(
        () => ({
          id,
          title: "HVAC Maintenance",
          location: "Building B, Floor 3 • Mechanical Room 302",
          time: "2h 15m logged • Hold",
        }),
        [id]
      );

      const [notes, setNotes] = useState("");

      const onSubmit = () => {
        resume({ notes });
        router.back();
      };

      return (
        <ScreenWrapper>
          <BottomSheet visible onClose={() => router.back()} height={640}>
            <View style={styles.header}>
              <Pressable onPress={() => router.back()} style={({ pressed }) => [styles.closeBtn, pressed && styles.pressed]}>
                <Ionicons name="close" size={22} color={colors.textPrimary} />
              </Pressable>
              <Text style={styles.title}>{ct.title ?? "Resume Task"}</Text>
              <View style={{ width: 40 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.body}>
              <TaskContextCard task={task} statusLabel={ct.status ?? "On Hold"} />

              <View style={styles.notice}>
                <Ionicons name="information-circle" size={20} color={colors.success} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.noticeTitle}>{ct.noticeTitle ?? "Resume Notice"}</Text>
                  <Text style={styles.noticeText}>
                    {ct.notice ??
                      "Resuming this task will restart time tracking and GPS logging. Make sure you are ready to continue work."}
                  </Text>
                </View>
              </View>

              <View style={{ gap: 8 }}>
                <Text style={styles.label}>
                  {ct.notes ?? "Resume Notes"} <Text style={styles.opt}>({ct.optional ?? "Optional"})</Text>
                </Text>
                <TextInput
                  value={notes}
                  onChangeText={setNotes}
                  placeholder={ct.placeholder ?? "Add notes about restarting..."}
                  placeholderTextColor={colors.textMuted}
                  multiline
                  style={styles.input}
                />
              </View>
            </ScrollView>

            <View style={styles.footer}>
              <Pressable onPress={onSubmit} style={({ pressed }) => [styles.primaryBtn, pressed && styles.pressed]}>
                <Ionicons name="play" size={18} color="#fff" />
                <Text style={styles.primaryText}>{ct.submit ?? "Resume Task"}</Text>
              </Pressable>

              <Pressable onPress={() => router.back()} style={({ pressed }) => [styles.cancelBtn, pressed && styles.pressed]}>
                <Text style={styles.cancelText}>{ct.cancel ?? "Cancel"}</Text>
              </Pressable>
            </View>
          </BottomSheet>
        </ScreenWrapper>
      );
    }

    const styles = StyleSheet.create({
      header: {
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.06)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      closeBtn: { width: 40, height: 40, borderRadius: 999, alignItems: "center", justifyContent: "center" },
      title: { fontSize: 16, fontWeight: "900", color: colors.textPrimary },
      body: { padding: spacing.lg, gap: spacing.lg },
      notice: {
        flexDirection: "row",
        gap: 10,
        padding: spacing.md,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "rgba(39,174,96,0.22)",
        backgroundColor: "rgba(39,174,96,0.10)",
        alignItems: "flex-start",
      },
      noticeTitle: { fontSize: 13, fontWeight: "900", color: colors.textPrimary },
      noticeText: { marginTop: 4, fontSize: 12, fontWeight: "700", color: colors.textMuted, lineHeight: 18 },
      label: { fontSize: 13, fontWeight: "900", color: colors.textPrimary },
      opt: { color: colors.textMuted, fontWeight: "800" },
      input: {
        minHeight: 90,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: "rgba(0,0,0,0.03)",
        padding: 12,
        color: colors.textPrimary,
        fontWeight: "700",
        textAlignVertical: "top",
      },
      footer: { padding: spacing.lg, borderTopWidth: 1, borderTopColor: "rgba(0,0,0,0.06)", gap: 10 },
      primaryBtn: {
        height: 52,
        borderRadius: 14,
        backgroundColor: colors.success,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
      },
      primaryText: { color: "#fff", fontWeight: "900", fontSize: 14 },
      cancelBtn: { height: 46, borderRadius: 14, alignItems: "center", justifyContent: "center" },
      cancelText: { color: colors.textMuted, fontWeight: "900", fontSize: 13 },
      pressed: { opacity: 0.95, transform: [{ scale: 0.99 }] },
    });
