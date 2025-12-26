import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const STATUS_STYLES = {
  open: {
    bg: "#FFF4E5",
    text: colors.primary,
    label: "Open",
  },
  inProgress: {
    bg: "#EAF2FF",
    text: "#2563EB",
    label: "In Progress",
  },
  onHold: {
    bg: "#FEF3C7",
    text: "#92400E",
    label: "On Hold",
  },
  completed: {
    bg: "#ECFDF5",
    text: "#047857",
    label: "Completed",
  },
  closed: {
    bg: "#F3F4F6",
    text: "#374151",
    label: "Closed",
  },
};

export default function TicketStatusBadge({ status }) {
  const config = STATUS_STYLES[status] || STATUS_STYLES.open;

  return (
    <View style={[styles.badge, { backgroundColor: config.bg }]}>
      <Text style={[styles.text, { color: config.text }]}>
        {config.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
});
