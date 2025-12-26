import React from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/shared/ScreenWrapper";
import useLanguage from "@/hooks/useLanguage";
import { colors } from "@/constants/colors";
import { useTaskSession } from "../tasks/components/TaskSessionProvider";

export default function CaretakerScan() {
  const router = useRouter();
  const { t } = useLanguage();
  const scan = t?.scan || {};

  const { session } = useTaskSession();
  const activeTaskId = session.taskId;

  return (
    <ScreenWrapper>
      <View style={{
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderColor: colors.border,
      }}>
        <Text style={{ fontSize: 18, fontWeight: "800" }}>
          {scan.title ?? "Scan"}
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        {activeTaskId ? (
          <Pressable
            onPress={() => router.push(`/caretaker/tasks/${activeTaskId}`)}
            style={{
              backgroundColor: "#fff",
              borderRadius: 14,
              padding: 16,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text style={{ fontWeight: "700" }}>#{activeTaskId}</Text>
            <Text style={{ color: colors.textMuted, marginTop: 4 }}>
              Resume active task
            </Text>
          </Pressable>
        ) : (
          <>
            <Text style={{ color: colors.textMuted, marginBottom: 16 }}>
              Scan QR to start a task
            </Text>

            <Pressable
              onPress={() => router.push("/caretaker/scan/camera")}
              style={{
                backgroundColor: colors.primary,
                paddingVertical: 14,
                borderRadius: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "800", color: "#111" }}>
                Scan New Task
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </ScreenWrapper>
  );
}
