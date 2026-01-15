import { View, Text, StyleSheet } from "react-native";
import TicketStatusBadge from "./TicketStatusBadge";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

export default function TicketCard({ ticket }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={2}>
          {ticket.title}
        </Text>
        <TicketStatusBadge status={ticket.status} />
      </View>

      <View style={styles.meta}>
        <Text style={styles.category}>{ticket.category}</Text>
        <Text style={styles.date}>{ticket.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    gap: spacing.sm,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },
  category: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  date: {
    fontSize: 13,
    color: colors.textMuted,
  },
});
