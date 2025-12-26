import { View, Text, Pressable, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/shared/ScreenWrapper";
import { colors } from "@/constants/colors";

export default function ScanCamera() {
  const router = useRouter();

  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (!permission) requestPermission();
  }, [permission]);

  /* ---------------- permission guard ---------------- */
  if (!permission?.granted) {
    return (
      <ScreenWrapper>
        <View style={styles.center}>
          <Text style={styles.text}>Camera permission required</Text>
        </View>
      </ScreenWrapper>
    );
  }

  /* ---------------- ✅ FIXED SCAN HANDLER ---------------- */
  const completeScan = (taskId) => {
    if (scanned) return;
    setScanned(true);

    // ✅ CORRECT: object-based navigation (Expo Router requirement)
    router.replace({
      pathname: "/caretaker/tasks/[id]",
      params: {
        id: taskId,
        fromScan: "1",
      },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {!scanned && (
        <CameraView
          style={{ flex: 1 }}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={({ data }) => completeScan(data)}
        />
      )}

      {/* Overlay */}
      <View style={styles.overlay}>
        <Text style={styles.hint}>Align QR code</Text>
      </View>

      {/* DEV TEST */}
      <Pressable
        onPress={() => completeScan("HSW-492")}
        style={styles.testBtn}
      >
        <Text style={styles.testText}>Simulate Scan</Text>
      </Pressable>
    </View>
  );
}

/* ---------------- styles ---------------- */

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textMuted,
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  hint: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  testBtn: {
    position: "absolute",
    top: 60,
    right: 16,
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
  },
  testText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#111",
  },
});
