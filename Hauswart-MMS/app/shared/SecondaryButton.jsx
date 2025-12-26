import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { radius } from "../constants/radius";
import { spacing } from "../constants/spacing";

export default function SecondaryButton({ title, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.backgroundSoft,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: "center",
  },
  text: {
    color: colors.textPrimary,
    fontWeight: "500",
  },
});
