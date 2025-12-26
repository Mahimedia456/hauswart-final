import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IconTest() {
  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Icon test below:
      </Text>

      <MaterialCommunityIcons
        name="home"
        size={48}
        color="red"
      />
    </View>
  );
}
