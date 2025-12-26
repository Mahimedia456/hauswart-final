import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Animated,
  BackHandler,
} from "react-native";
import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";
import HauswartLogoSvg from "../../shared/HauswartLogoSvg";

export default function Splash() {
  const { t } = useLanguage();
  const router = useRouter();

  const scaleAnim = useRef(new Animated.Value(0.92)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 🚫 Disable Android back on splash
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );

    const animation = Animated.sequence([
      Animated.parallel([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 520,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 7,
          tension: 90,
          useNativeDriver: true,
        }),
      ]),

      // soft glow pulse (premium feel)
      Animated.loop(
        Animated.sequence([
          Animated.timing(glowAnim, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true,
          }),
          Animated.timing(glowAnim, {
            toValue: 0,
            duration: 900,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 2 }
      ),

      Animated.delay(1800),
    ]);

    animation.start(() => {
      router.replace("/onboarding");
    });

    return () => {
      backHandler.remove();
      animation.stop();
    };
  }, []);

  const glowStyle = {
    opacity: glowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.12, 0.22],
    }),
    transform: [
      {
        scale: glowAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.08],
        }),
      },
    ],
  };

  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        {/* Center Block */}
        <View style={styles.centerBlock}>
          {/* Glow */}
          <Animated.View style={[styles.glow, glowStyle]} />

          {/* Logo */}
          <Animated.View
            style={[
              styles.logoBox,
              {
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          >
            <HauswartLogoSvg size={34} color={"#111"} />
          </Animated.View>

          {/* Brand */}
          <Animated.Text style={[styles.appName, { opacity: opacityAnim }]}>
            {t?.appName ?? "Hauswart"}
          </Animated.Text>

          <Animated.Text style={[styles.tagline, { opacity: opacityAnim }]}>
            Facility Management
          </Animated.Text>
        </View>

        {/* Bottom area */}
        <View style={styles.bottom}>
          <ActivityIndicator size="small" color={colors.primary} />
          <Text style={styles.version}>{t?.version ?? "Version"} 1.0.0</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.xl,
  },

  centerBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xl,
  },

  glow: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: colors.primary,
  },

  logoBox: {
    width: 76,
    height: 76,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,

    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },

  appName: {
    marginTop: spacing.lg,
    fontSize: 22,
    fontWeight: "900",
    color: colors.textPrimary,
    letterSpacing: 0.3,
  },

  tagline: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "800",
    color: colors.textSecondary,
  },

  bottom: {
    alignItems: "center",
    gap: 10,
    paddingBottom: spacing.lg,
  },

  version: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textMuted,
  },
});
