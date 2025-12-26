import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export default function ScreenWrapper({ children }) {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
