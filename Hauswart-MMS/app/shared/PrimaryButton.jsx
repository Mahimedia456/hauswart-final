import { Pressable, Text, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export default function PrimaryButton({ title, onPress, loading }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={({ pressed }) => [
        styles.btn,
        pressed && { opacity: 0.9 },
        loading && { opacity: 0.7 },
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 52,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },
});
