import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  BackHandler,
  ToastAndroid,
  Pressable,
} from "react-native";
import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import PrimaryButton from "../../shared/PrimaryButton";
import MobileHeader from "../../shared/MobileHeader";

import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import { radius } from "../../constants/radius";
import useLanguage from "../../hooks/useLanguage";
import { onboardingSlides } from "../data/onboardingSlides";

const { width } = Dimensions.get("window");

export default function Onboarding() {
  const { t } = useLanguage();
  const router = useRouter();

  const flatListRef = useRef(null);
  const lastBackPress = useRef(0);

  const [index, setIndex] = useState(0);
  const isLast = index === onboardingSlides.length - 1;

  // safe fallbacks
  const nextLabel = t?.onboarding?.next ?? "Next";
  const getStartedLabel = t?.onboarding?.getStarted ?? "Get Started";
  const skipLabel = t?.onboarding?.skip ?? "Skip";

  /* ------------------------------------------------------ */
  /* ANDROID BACK HANDLING                                  */
  /* ------------------------------------------------------ */
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (index > 0) {
          flatListRef.current?.scrollToIndex({
            index: index - 1,
            animated: true,
          });
          return true;
        }

        const now = Date.now();
        if (now - lastBackPress.current < 2000) {
          BackHandler.exitApp();
          return false;
        }

        lastBackPress.current = now;
        ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
        return true;
      }
    );

    return () => backHandler.remove();
  }, [index]);

  /* ------------------------------------------------------ */
  /* ACTIONS                                                */
  /* ------------------------------------------------------ */
  const goNext = () => {
    if (isLast) {
      router.replace("/role-select");
    } else {
      flatListRef.current?.scrollToIndex({
        index: index + 1,
        animated: true,
      });
    }
  };

  const goSkip = () => router.replace("/role-select");

  /* ------------------------------------------------------ */
  /* SLIDE RENDER                                           */
  /* ------------------------------------------------------ */
  const renderItem = useMemo(
    () =>
      ({ item }) => {
        const Icon = item.Icon;

        // ✅ safety (no crash)
        const slide = t?.onboarding?.[item.key] ?? { title: "", description: "" };

        return (
          <View style={styles.slide}>
            <View style={styles.iconCard}>
              <View style={styles.iconGlow} />
              <Icon />
            </View>

            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.desc}>{slide.description}</Text>
          </View>
        );
      },
    [t]
  );

  return (
    <ScreenWrapper>
      {/* Header (keep minimal) */}
      <View style={styles.topBar}>
        <MobileHeader title="" onBack={null} />

        <Pressable onPress={goSkip} hitSlop={10} style={styles.skipBtn}>
          <Text style={styles.skipText}>{skipLabel}</Text>
        </Pressable>
      </View>

      {/* Slides */}
      <View style={styles.content}>
        <FlatList
          ref={flatListRef}
          data={onboardingSlides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.listContent}
          onMomentumScrollEnd={(e) => {
            setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
          }}
          renderItem={renderItem}
        />
      </View>

      {/* Pagination */}
      <View style={styles.dots}>
        {onboardingSlides.map((_, i) => (
          <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
        ))}
      </View>

      {/* CTA */}
      <View style={styles.footer}>
        <PrimaryButton
          title={isLast ? getStartedLabel : nextLabel}
          onPress={goNext}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  topBar: {
    position: "relative",
  },
  skipBtn: {
    position: "absolute",
    right: spacing.lg,
    top: spacing.lg + 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "rgba(0,0,0,0.04)",
  },
  skipText: {
    fontSize: 12,
    fontWeight: "900",
    color: colors.textPrimary,
  },

  content: {
    flex: 1,
  },

  listContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  slide: {
    width,
    alignItems: "center",
    paddingHorizontal: spacing.xl,
  },

  iconCard: {
    width: 84,
    height: 84,
    borderRadius: 28,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xl,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.16,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  iconGlow: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.primary,
    opacity: 0.22,
    top: -40,
    right: -40,
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: spacing.sm,
  },

  desc: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: width * 0.8,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: spacing.md,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
    marginHorizontal: 4,
  },

  dotActive: {
    backgroundColor: colors.primary,
    width: 18,
    borderRadius: radius.md,
  },

  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
});
