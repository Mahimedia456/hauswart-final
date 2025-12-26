import Svg, { Rect, Path } from "react-native-svg";
import { colors } from "../../constants/colors";

export default function IssueReportIcon({ size = 120 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <Rect width="120" height="120" rx="24" fill={colors.backgroundSoft} />
      <Path
        d="M60 28L36 38V54C36 70 46 83 60 88C74 83 84 70 84 54V38L60 28Z"
        fill={colors.primary}
      />
      <Path
        d="M60 44V62"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M60 70H60.01"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </Svg>
  );
}
