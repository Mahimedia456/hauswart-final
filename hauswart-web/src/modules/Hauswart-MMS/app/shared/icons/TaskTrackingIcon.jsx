import Svg, { Rect, Path } from "react-native-svg";
import { colors } from "../../constants/colors";

export default function TaskTrackingIcon({ size = 120 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <Rect width="120" height="120" rx="24" fill={colors.backgroundSoft} />
      <Path
        d="M36 42H84M36 60H84M36 78H66"
        stroke={colors.primary}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <Path
        d="M48 42L52 46L60 38"
        stroke={colors.primary}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </Svg>
  );
}
