import React, { useEffect, useMemo } from "react";
import { View, Pressable, StyleSheet, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from "react-native-reanimated";

import { Home, Ticket, MessageCircle, Bell, User } from "lucide-react-native";

const { width } = Dimensions.get("window");

// --- Tuned UI constants (match your screenshot style) ---
const BAR_WIDTH = width * 0.90;
const BAR_HEIGHT = 72;
const BAR_RADIUS = 28;

const BUMP_SIZE = 58;
const ICON_SIZE = 24;

const ORANGE = "#F38B14";
const BLACK = "#111111";
const INACTIVE = "rgba(255,255,255,0.55)";

const ICONS = {
  home: Home,
  tickets: Ticket,
  chat: MessageCircle,
  alerts: Bell,
  profile: User,
};

function TabItem({ route, index, activeIndex, onPress }) {
  const focused = activeIndex === index;
  const Icon = ICONS[route.name] || Home;

  const focusSV = useSharedValue(focused ? 1 : 0);

  useEffect(() => {
    focusSV.value = withSpring(focused ? 1 : 0, {
      damping: 16,
      stiffness: 180,
    });
  }, [focused]);

  const iconAnim = useAnimatedStyle(() => {
    // ✅ ACTIVE ICON UP (more lift)
    // inactive 0px, active -18px (adjust to -16 / -20 if you want)
    const lift = interpolate(focusSV.value, [0, 1], [0, -22]);

    // ✅ slight scale on active
    const scale = interpolate(focusSV.value, [0, 1], [1, 1.18]);

    // ✅ keep inactive a bit softer
    const opacity = interpolate(focusSV.value, [0, 1], [0.7, 1]);

    return {
      transform: [{ translateY: lift }, { scale }],
      opacity,
    };
  });

  return (
    <Pressable
      onPress={onPress}
      style={styles.tab}
      android_ripple={{ color: "rgba(255,255,255,0.06)", borderless: true }}
    >
      <Animated.View style={iconAnim}>
        <Icon
          size={ICON_SIZE}
          strokeWidth={2.2}
          color={focused ? "#FFFFFF" : INACTIVE}
        />
      </Animated.View>
    </Pressable>
  );
}

export default function TenantTabBar({ state, navigation }) {
  const insets = useSafeAreaInsets();
  const tabCount = state.routes.length;

  const H_PADDING = 14;
  const usableWidth = BAR_WIDTH - H_PADDING * 2;
  const step = usableWidth / tabCount;

  const bumpX = useSharedValue(0);

  useEffect(() => {
    const x = H_PADDING + state.index * step + step / 2 - BUMP_SIZE / 2;
    bumpX.value = withSpring(x, { damping: 16, stiffness: 180 });
  }, [state.index, step]);

  const bumpStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: bumpX.value }],
  }));

  const routes = useMemo(() => state.routes, [state.routes]);

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      <View style={styles.bar}>
        {/* Active bump circle */}
        <Animated.View style={[styles.bump, bumpStyle]} />

        {routes.map((route, index) => (
          <TabItem
            key={route.key}
            route={route}
            index={index}
            activeIndex={state.index}
            onPress={() => navigation.navigate(route.name)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
  },

  bar: {
    width: BAR_WIDTH,
    height: BAR_HEIGHT,
    backgroundColor: BLACK,
    borderRadius: BAR_RADIUS,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },

  tab: {
    flex: 1,
    height: BAR_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2, // ✅ icon above bump
  },

  bump: {
    position: "absolute",
    // ✅ slightly higher so icon can lift above nicely
    top: -BUMP_SIZE / 2 + 16,
    width: BUMP_SIZE,
    height: BUMP_SIZE,
    borderRadius: BUMP_SIZE / 2,
    backgroundColor: ORANGE,
    zIndex: 1,

    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 12,
  },
});
