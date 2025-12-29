import { Tabs } from "expo-router";
import TechnicianTabBar from "@/shared/TechnicianTabBar";

export default function TechnicianLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TechnicianTabBar {...props} />}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="tasks" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
