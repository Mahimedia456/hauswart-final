import { Tabs } from "expo-router";
import TenantTabBar from "../../shared/TenantTabBar";

export default function TenantLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TenantTabBar {...props} />}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="tickets" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="alerts" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
