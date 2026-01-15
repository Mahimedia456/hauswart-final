import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { radius } from "../constants/radius";
import { spacing } from "../constants/spacing";
import { typography } from "../constants/typography";

export default function PrimaryButton({ title, onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.active,
        disabled && styles.disabled,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: "center",
  },
  active: {
    backgroundColor: colors.primaryActive,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: colors.white,
    fontWeight: typography.button.fontWeight,
  },
});
