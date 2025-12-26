import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  Platform,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ScreenWrapper from "@/shared/ScreenWrapper";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import useLanguage from "@/hooks/useLanguage";
import { useTaskSession } from "../components/TaskSessionProvider";

/* ------------------ dummy task (replace with API later) ------------------ */
const DUMMY_TASK = {
  id: "TSK-2023-89",
  status: "inProgress", // inProgress | onHold | completed
  priority: "high",
  title: "HVAC Leak Repair",
  category: "Maintenance",
  type: "Electrical",
  scheduled: "Oct 24, 10:00 AM",
  distance: "1.2 mi",
  property: "Sunshine Towers",
  building: "Main Building, Floor 3",
  unit: "Unit 304 (Server Room)",
  description:
    "Reported Issue: AC unit is leaking water onto the server room floor. Requires immediate attention to prevent equipment damage. Please check drainage pipes and insulation.",
  attachments: [
    "https://images.unsplash.com/photo-1581579186989-114a4cb25150?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=60",
  ],
  checklist: [
    { id: "c1", text: "Isolate power supply to AC unit", done: true },
    { id: "c2", text: "Inspect drainage pipe for blockages", done: false },
    { id: "c3", text: "Verify insulation integrity", done: false },
  ],
  activity: [
    { id: "a1", title: "Task Started", meta: "10:05 AM • You", tone: "primary" },
    { id: "a2", title: "Task Assigned", meta: "09:00 AM • System", tone: "muted" },
  ],
};

/* ------------------ helpers ------------------ */
function pad2(n) {
  const x = Math.max(0, Math.floor(n));
  return x < 10 ? `0${x}` : `${x}`;
}
function formatElapsed(sec) {
  const s = Math.max(0, sec);
  const hh = Math.floor(s / 3600);
  const mm = Math.floor((s % 3600) / 60);
  const ss = Math.floor(s % 60);
  return `${pad2(hh)}:${pad2(mm)}:${pad2(ss)}`;
}

/* ------------------ screen ------------------ */
export default function TaskDetails() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams();

  const id = String(params?.id ?? DUMMY_TASK.id);

  // ✅ detect coming from scan
  const fromScan = String(params?.fromScan ?? "") === "1";

  const { t } = useLanguage();
  const ct = t?.ctTaskDetails || {};

  const task = useMemo(() => ({ ...DUMMY_TASK, id }), [id]);

  const { session, ensureTask } = useTaskSession();

  // ✅ This means: provider has an active session for THIS task id
  const isStartedForThisTask = session?.taskId === id;

  // ✅ If coming from scan AND not started → show ONLY Start Task
  const showStartOnly = fromScan && !isStartedForThisTask;

  // ✅ Normal entry (not from scan): auto-bind/start session
  useEffect(() => {
    if (!fromScan) {
      ensureTask(id, { status: task.status, elapsed: 45 * 60 + 12 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, fromScan]);

  // ✅ After pressing Start Task (from scan) we start session manually
  const onStartTask = () => {
    ensureTask(id, { status: "inProgress", elapsed: 0 });

    // optional: clean URL (remove fromScan) so back behaves normal
    router.replace({ pathname: "/caretaker/tasks/[id]", params: { id } });
  };

  const isOnHold = session.status === "onHold";
  const running = session.running;
  const elapsed = session.elapsed;

  const statusMap = useMemo(
    () => ({
      inProgress:
        ct.status?.inProgress ??
        (t?.ctTasks?.status?.inProgress ?? "In Progress"),
      onHold:
        ct.status?.onHold ?? (t?.ctTasks?.status?.onHold ?? "On Hold"),
      completed:
        ct.status?.completed ?? (t?.ctTasks?.status?.completed ?? "Completed"),
    }),
    [ct, t]
  );

  const priorityLabel =
    task.priority === "high"
      ? ct.priority?.high ?? "High Priority"
      : ct.priority?.routine ?? "Routine";

  const [checklist, setChecklist] = useState(task.checklist);
  const doneCount = checklist.filter((x) => x.done).length;
  const totalCount = checklist.length;

  const [notes, setNotes] = useState("");
  const autosave = ct.autosaved ?? "Autosaved 2m ago";

  const onToggleChecklist = (cid) => {
    setChecklist((prev) =>
      prev.map((x) => (x.id === cid ? { ...x, done: !x.done } : x))
    );
  };

  /* ------------------ ✅ bottom sheet navigation ------------------ */
  const goHold = () =>
    router.push({ pathname: "/caretaker/tasks/[id]/hold", params: { id } });

  const goResume = () =>
    router.push({ pathname: "/caretaker/tasks/[id]/resume", params: { id } });

  const goComplete = () =>
    router.push({ pathname: "/caretaker/tasks/[id]/complete", params: { id } });

  /* ------------------ button logic ------------------ */
  const leftBtnLabel = isOnHold
    ? ct.resume ?? "Resume Task"
    : ct.putOnHold ?? "Put on Hold";

  const leftBtnIcon = isOnHold ? "play" : "pause";

  const onLeftAction = () => (isOnHold ? goResume() : goHold());

  return (
    <ScreenWrapper>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 10) }]}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [styles.headerBtn, pressed && styles.pressed]}
        >
          <Ionicons name="arrow-back" size={20} color={colors.textPrimary} />
        </Pressable>

        <Text style={styles.headerTitle}>{ct.title ?? "Task Details"}</Text>

        <View style={{ width: 90, alignItems: "flex-end" }}>
          <StatusPill
            label={statusMap[session.status] ?? statusMap.inProgress}
            tone={session.status}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.container,
          { paddingBottom: 40 + insets.bottom },
        ]}
      >
        {/* Summary */}
        <View style={styles.card}>
          <View style={styles.summaryTop}>
            <Text style={styles.taskId}>#{task.id}</Text>

            {task.priority === "high" ? (
              <View style={styles.priorityPill}>
                <Ionicons name="alert-circle" size={14} color={colors.danger} />
                <Text style={styles.priorityText}>{priorityLabel}</Text>
              </View>
            ) : null}
          </View>

          <Text style={styles.h1}>{task.title}</Text>

          <View style={styles.metaLine}>
            <Ionicons name="snow-outline" size={16} color={colors.textMuted} />
            <Text style={styles.metaText}>
              {task.category} • {task.type}
            </Text>
          </View>

          <View style={styles.hr} />

          <View style={styles.metaLine}>
            <Ionicons name="calendar-outline" size={16} color={colors.primary} />
            <Text
              style={[
                styles.metaText,
                { color: colors.textPrimary, fontWeight: "800" },
              ]}
            >
              {ct.scheduled ?? "Scheduled"}: {task.scheduled}
            </Text>
          </View>
        </View>

        {/* ✅ START TASK ONLY (Scan Entry) */}
        {showStartOnly ? (
          <Pressable
            onPress={onStartTask}
            style={({ pressed }) => [styles.startBtn, pressed && styles.pressed]}
          >
            <Ionicons name="play" size={18} color={colors.textPrimary} />
            <Text style={styles.startBtnText}>
              {ct.startTask ?? "Start Task"}
            </Text>
          </Pressable>
        ) : (
          /* ✅ Existing Timer Card (unchanged design) */
          <View style={styles.card}>
            <Text style={styles.subTitle}>{ct.timeElapsed ?? "Time Elapsed"}</Text>
            <Text style={styles.timer}>{formatElapsed(elapsed)}</Text>

            <View style={styles.runningRow}>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: colors.primary, opacity: running ? 1 : 0.35 },
                ]}
              />
              <Text style={styles.runningText}>
                {running ? (ct.running ?? "RUNNING") : (ct.paused ?? "PAUSED")}
              </Text>
            </View>

            <View style={styles.btnRow}>
              <Pressable
                onPress={onLeftAction}
                style={({ pressed }) => [styles.outlineBtn, pressed && styles.pressed]}
              >
                <Ionicons name={leftBtnIcon} size={18} color={colors.primary} />
                <Text style={styles.outlineBtnText}>{leftBtnLabel}</Text>
              </Pressable>

              <Pressable
                onPress={goComplete}
                style={({ pressed }) => [styles.primaryBtn, pressed && styles.pressed]}
              >
                <Ionicons name="checkmark-circle" size={18} color="#fff" />
                <Text style={styles.primaryBtnText}>
                  {ct.complete ?? "Complete"}
                </Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* Location */}
        <View style={[styles.card, { padding: 0, overflow: "hidden" }]}>
          <View style={styles.mapMock}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1533106418989-88406c7cc8b2?auto=format&fit=crop&w=1200&q=60",
              }}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
            />
            <View style={styles.mapOverlay} />
            <View style={styles.distancePill}>
              <Ionicons name="navigate" size={14} color={colors.textPrimary} />
              <Text style={styles.distanceText}>{task.distance}</Text>
            </View>
          </View>

          <View style={{ padding: spacing.md, gap: spacing.md }}>
            <InfoRow
              icon="business-outline"
              label={ct.property ?? "Property"}
              value={task.property}
            />
            <InfoRow
              icon="layers-outline"
              label={ct.buildingFloor ?? "Building / Floor"}
              value={task.building}
            />
            <InfoRow
              icon="home-outline"
              label={ct.unitArea ?? "Unit / Area"}
              value={task.unit}
            />
          </View>
        </View>

        {/* Description */}
        <View style={styles.card}>
          <View style={styles.sectionTitleRow}>
            <Ionicons
              name="document-text-outline"
              size={18}
              color={colors.primary}
            />
            <Text style={styles.sectionTitle}>
              {ct.description ?? "Description"}
            </Text>
          </View>
          <Text style={styles.p}>{task.description}</Text>
        </View>

        {/* Checklist */}
        <View style={[styles.card, { padding: 0, overflow: "hidden" }]}>
          <View style={styles.checkHeader}>
            <Text style={styles.sectionTitle}>{ct.checklist ?? "Checklist"}</Text>
            <View style={styles.donePill}>
              <Text style={styles.donePillText}>
                {doneCount}/{totalCount} {ct.done ?? "Done"}
              </Text>
            </View>
          </View>

          {checklist.map((item, idx) => (
            <Pressable
              key={item.id}
              onPress={() => onToggleChecklist(item.id)}
              style={({ pressed }) => [
                styles.checkRow,
                idx !== 0 && styles.checkDivider,
                pressed && styles.pressed,
              ]}
            >
              <View style={[styles.checkbox, item.done && styles.checkboxOn]}>
                {item.done ? (
                  <Ionicons name="checkmark" size={16} color="#fff" />
                ) : null}
              </View>
              <Text style={[styles.checkText, item.done && styles.checkTextDone]}>
                {item.text}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Work Notes */}
        <View style={styles.card}>
          <View style={styles.notesTop}>
            <Text style={styles.sectionTitle}>{ct.workNotes ?? "Work Notes"}</Text>
            <Text style={styles.autosave}>{autosave}</Text>
          </View>

          <TextInput
            value={notes}
            onChangeText={setNotes}
            placeholder={ct.typeNotes ?? "Type your notes here..."}
            placeholderTextColor={colors.textMuted}
            multiline
            style={styles.notesInput}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

/* ------------------ sub components ------------------ */

function StatusPill({ label, tone }) {
  const map = {
    inProgress: {
      bg: "rgba(243,139,20,0.14)",
      text: "#B35A00",
      border: "rgba(243,139,20,0.24)",
    },
    onHold: {
      bg: "rgba(242,201,76,0.16)",
      text: "#9A6B00",
      border: "rgba(242,201,76,0.25)",
    },
    completed: {
      bg: "rgba(39,174,96,0.14)",
      text: colors.success,
      border: "rgba(39,174,96,0.22)",
    },
  };
  const m = map[tone] || map.inProgress;

  return (
    <View style={[styles.statusPill, { backgroundColor: m.bg, borderColor: m.border }]}>
      <Text style={[styles.statusPillText, { color: m.text }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoIcon}>
        <Ionicons name={icon} size={18} color={colors.primary} />
      </View>
      <View style={{ flex: 1, minWidth: 0 }}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue} numberOfLines={1}>
          {value}
        </Text>
      </View>
    </View>
  );
}

/* ------------------ styles ------------------ */
const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.lg },

  header: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.textPrimary,
    flex: 1,
    textAlign: "center",
  },

  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    maxWidth: 90,
  },
  statusPillText: { fontSize: 11, fontWeight: "900" },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },

  summaryTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  taskId: { fontSize: 11, fontWeight: "900", color: colors.textMuted, letterSpacing: 0.7 },

  priorityPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(235,87,87,0.22)",
    backgroundColor: "rgba(235,87,87,0.10)",
  },
  priorityText: { fontSize: 11, fontWeight: "900", color: colors.danger },

  h1: { marginTop: 10, fontSize: 20, fontWeight: "900", color: colors.textPrimary },
  metaLine: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 8 },
  metaText: { fontSize: 13, fontWeight: "700", color: colors.textMuted },
  hr: { height: 1, backgroundColor: "rgba(0,0,0,0.06)", marginTop: 14 },

  subTitle: { fontSize: 13, fontWeight: "800", color: colors.textMuted, textAlign: "center" },
  timer: {
    marginTop: 10,
    fontSize: 44,
    fontWeight: "900",
    color: colors.textPrimary,
    letterSpacing: Platform.OS === "android" ? 2 : 1.2,
    textAlign: "center",
    fontVariant: ["tabular-nums"],
  },

  runningRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  dot: { width: 8, height: 8, borderRadius: 4 },
  runningText: { fontSize: 11, fontWeight: "900", color: colors.primary, letterSpacing: 0.8 },

  btnRow: { flexDirection: "row", gap: spacing.md, marginTop: spacing.md },
  outlineBtn: {
    flex: 1,
    height: 50,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  outlineBtnText: { fontSize: 13, fontWeight: "900", color: colors.primary },

  primaryBtn: {
    flex: 1,
    height: 50,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  primaryBtnText: { fontSize: 14, fontWeight: "900", color: "#fff" },

  // ✅ start button (same style language)
  startBtn: {
    height: 52,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: "rgba(243,139,20,0.10)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  startBtnText: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  mapMock: { height: 110, backgroundColor: "rgba(0,0,0,0.10)" },
  mapOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.10)" },

  distancePill: {
    position: "absolute",
    right: 12,
    bottom: 12,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  distanceText: { fontSize: 11, fontWeight: "900", color: colors.textPrimary },

  infoRow: { flexDirection: "row", alignItems: "flex-start", gap: 10 },
  infoIcon: {
    width: 36,
    height: 36,
    borderRadius: 14,
    backgroundColor: "rgba(243,139,20,0.10)",
    alignItems: "center",
    justifyContent: "center",
  },
  infoLabel: { fontSize: 11, fontWeight: "800", color: colors.textMuted },
  infoValue: { marginTop: 2, fontSize: 13, fontWeight: "900", color: colors.textPrimary },

  sectionTitleRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 10 },
  sectionTitle: { fontSize: 14, fontWeight: "900", color: colors.textPrimary },
  p: { fontSize: 13, fontWeight: "700", color: colors.textMuted, lineHeight: 20 },

  checkHeader: {
    padding: spacing.md,
    backgroundColor: "rgba(0,0,0,0.03)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.06)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  donePill: {
    backgroundColor: "rgba(243,139,20,0.10)",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "rgba(243,139,20,0.20)",
  },
  donePillText: { fontSize: 11, fontWeight: "900", color: colors.primary },

  checkRow: { padding: spacing.md, flexDirection: "row", alignItems: "flex-start", gap: 12 },
  checkDivider: { borderTopWidth: 1, borderTopColor: "rgba(0,0,0,0.06)" },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.18)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  checkboxOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  checkText: { flex: 1, fontSize: 13, fontWeight: "800", color: colors.textPrimary, lineHeight: 18 },
  checkTextDone: { color: colors.textMuted, textDecorationLine: "line-through" },

  notesTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  autosave: { fontSize: 10, fontWeight: "700", color: colors.textMuted, fontStyle: "italic" },
  notesInput: {
    borderRadius: 16,
    padding: 12,
    minHeight: 110,
    backgroundColor: "rgba(0,0,0,0.03)",
    color: colors.textPrimary,
    fontWeight: "700",
    textAlignVertical: "top",
  },

  pressed: { opacity: 0.95, transform: [{ scale: 0.99 }] },
});
