import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import { WebView } from "react-native-webview";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import useLanguage from "../../hooks/useLanguage";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

export default function PrivacyPolicy() {
  const router = useRouter();
  const { t } = useLanguage();

  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  return (
    <ScreenWrapper>
      <MobileHeader title={t.legal.privacy} onBack={() => router.back()} />

      <View style={styles.container}>
        {/* Card shell */}
        <View style={styles.webCard}>
          <WebView
            source={{ uri: "https://hauswart.app/privacy-policy" }}
            onLoadStart={() => {
              setFailed(false);
              setLoading(true);
            }}
            onLoadEnd={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setFailed(true);
            }}
          />

          {/* Loading overlay */}
          {loading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator />
              <Text style={styles.loadingText}>Loading…</Text>
            </View>
          )}

          {/* Error overlay */}
          {failed && !loading && (
            <View style={styles.errorOverlay}>
              <View style={styles.errorIcon}>
                <Ionicons name="alert-circle-outline" size={18} color="#111" />
              </View>
              <Text style={styles.errorTitle}>Couldn’t load page</Text>
              <Text style={styles.errorDesc}>
                Please check your internet connection and try again.
              </Text>

              <Pressable
                onPress={() => {
                  setFailed(false);
                  setLoading(true);
                }}
                style={({ pressed }) => [styles.retryBtn, pressed && styles.pressedMini]}
              >
                <Text style={styles.retryText}>Retry</Text>
                <Ionicons name="refresh" size={16} color="#111" />
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    paddingBottom: 140,
  },

  webCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.90)",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  loadingText: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.textSecondary,
  },

  errorOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.96)",
    padding: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  errorIcon: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: "rgba(243, 139, 20, 0.14)",
    borderWidth: 1,
    borderColor: colors.primary + "33",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  errorTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.textPrimary,
  },
  errorDesc: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
    lineHeight: 18,
    textAlign: "center",
    marginBottom: spacing.lg,
  },

  retryBtn: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  retryText: {
    fontSize: 13,
    fontWeight: "900",
    color: "#111",
  },

  pressedMini: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
