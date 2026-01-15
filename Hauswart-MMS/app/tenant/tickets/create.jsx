import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function CreateTicket() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <ScreenWrapper>
      <MobileHeader title={t.createTicket.title} onBack={() => router.back()} />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* PRIORITY NOTE */}
        <View style={styles.noteBox}>
          <View style={styles.noteTop}>
            <View style={styles.noteIcon}>
              <Ionicons name="information-circle-outline" size={18} color="#111" />
            </View>
            <Text style={styles.noteTitle}>{t.createTicket.priorityNote}</Text>
          </View>

          <Text style={styles.noteDesc}>{t.createTicket.priorityDesc}</Text>
        </View>

        {/* ISSUE CATEGORY */}
        <Field
          label={t.createTicket.category}
          required
          placeholder={t.createTicket.selectCategory}
        />

        {/* ISSUE TITLE */}
        <Field
          label={t.createTicket.titleLabel}
          required
          placeholder={t.createTicket.titlePlaceholder}
          counter="0/80"
        />

        {/* DESCRIPTION */}
        <Field
          label={t.createTicket.description}
          required
          placeholder={t.createTicket.descPlaceholder}
          multiline
          counter="0/500"
          height={130}
        />

        {/* LOCATION */}
        <Text style={styles.sectionTitle}>{t.createTicket.location}</Text>

        <View style={styles.locationRow}>
          <View style={styles.disabledField}>
            <Text style={styles.disabledLabel}>{t.createTicket.property}</Text>
            <Text style={styles.disabledValue}>Sunset Towers</Text>
          </View>

          <View style={styles.disabledField}>
            <Text style={styles.disabledLabel}>{t.createTicket.unit}</Text>
            <Text style={styles.disabledValue}>Unit 402</Text>
          </View>
        </View>

        {/* AREA */}
        <Field
          label={t.createTicket.area}
          placeholder={t.createTicket.selectArea}
          optional="Optional"
        />

        {/* ATTACHMENTS */}
        <Text style={styles.sectionTitle}>{t.createTicket.attachments}</Text>
        <Text style={styles.subText}>{t.createTicket.attachmentsHint}</Text>

        <View style={styles.attachmentRow}>
          <AttachmentButton icon="image-outline" label={t.createTicket.addPhoto} />
          <AttachmentButton icon="videocam-outline" label={t.createTicket.addVideo} />
        </View>
      </ScrollView>

      {/* SUBMIT */}
      <View style={styles.submitBar}>
        <Pressable style={({ pressed }) => [styles.submitBtn, pressed && styles.pressedMini]}>
          <Text style={styles.submitText}>{t.createTicket.submit}</Text>
          <Ionicons name="arrow-forward" size={16} color="#111" />
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

/* -------------------------------------------------- */
/* COMPONENTS                                         */
/* -------------------------------------------------- */

function Field({
  label,
  placeholder,
  required,
  optional,
  multiline,
  counter,
  height = 52,
}) {
  return (
    <View style={{ marginBottom: spacing.lg }}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>
          {label} {required && <Text style={styles.required}>*</Text>}
          {optional && <Text style={styles.optional}> ({optional})</Text>}
        </Text>

        {counter && <Text style={styles.counter}>{counter}</Text>}
      </View>

      <View style={[styles.inputWrap, multiline && { height }]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          style={[styles.input, multiline && { height, textAlignVertical: "top" }]}
          multiline={multiline}
        />
        {!multiline && (
          <Ionicons name="chevron-down" size={18} color={colors.textMuted} />
        )}
      </View>
    </View>
  );
}

function AttachmentButton({ icon, label }) {
  return (
    <Pressable style={({ pressed }) => [styles.attachmentBtn, pressed && styles.pressedMini]}>
      <View style={styles.attachIcon}>
        <Ionicons name={icon} size={18} color="#111" />
      </View>
      <Text style={styles.attachmentText}>{label}</Text>
    </Pressable>
  );
}

/* -------------------------------------------------- */
/* STYLES                                             */
/* -------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: 220,
  },

  noteBox: {
    borderRadius: 18,
    padding: spacing.md,
    marginBottom: spacing.lg,
    backgroundColor: "rgba(243, 139, 20, 0.10)",
    borderWidth: 1,
    borderColor: colors.primary + "33",
  },
  noteTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
  },
  noteIcon: {
    width: 34,
    height: 34,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  noteTitle: {
    fontWeight: "900",
    color: colors.textPrimary,
    fontSize: 14,
    flex: 1,
  },
  noteDesc: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
    fontWeight: "700",
  },

  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  required: { color: colors.primary },
  optional: { fontWeight: "700", color: colors.textMuted },
  counter: { fontSize: 11, color: colors.textMuted, fontWeight: "800" },

  inputWrap: {
    height: 52,
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

  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },

  locationRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  disabledField: {
    flex: 1,
    borderRadius: 16,
    padding: spacing.md,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  disabledLabel: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "800",
    marginBottom: 4,
  },
  disabledValue: {
    fontWeight: "900",
    color: colors.textPrimary,
  },

  subText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },

  attachmentRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  attachmentBtn: {
    flex: 1,
    height: 92,
    borderRadius: 18,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.border,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  attachIcon: {
    width: 38,
    height: 38,
    borderRadius: 16,
    backgroundColor: "rgba(243, 139, 20, 0.14)",
    alignItems: "center",
    justifyContent: "center",
  },
  attachmentText: {
    color: colors.textPrimary,
    fontWeight: "900",
    fontSize: 12,
  },

  submitBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: spacing.lg,
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
