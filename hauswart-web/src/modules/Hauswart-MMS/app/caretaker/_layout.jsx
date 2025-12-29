    import React from "react";
    import { Stack } from "expo-router";
    import { TaskSessionProvider } from "./tasks/components/TaskSessionProvider";

    export default function CaretakerLayout() {
      return (
        <TaskSessionProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />

            {/* Scan Flow */}
            <Stack.Screen name="scan/index" />
            <Stack.Screen name="scan/camera" />

            {/* Task Details + Modals */}
            <Stack.Screen name="tasks/[id]/index" />
            <Stack.Screen
              name="tasks/[id]/hold"
              options={{ presentation: "transparentModal", animation: "fade" }}
            />
            <Stack.Screen
              name="tasks/[id]/resume"
              options={{ presentation: "transparentModal", animation: "fade" }}
            />
            <Stack.Screen
              name="tasks/[id]/complete"
              options={{ presentation: "transparentModal", animation: "fade" }}
            />
          </Stack>
        </TaskSessionProvider>
      );
    }
