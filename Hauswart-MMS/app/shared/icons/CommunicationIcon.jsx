import Svg, { Rect, Path } from "react-native-svg";
import { colors } from "../../constants/colors";

export default function CommunicationIcon({ size = 120 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <Rect width="120" height="120" rx="24" fill={colors.backgroundSoft} />
      <Path
        d="M36 44H84V68C84 72 80 76 76 76H54L44 86V76H44C40 76 36 72 36 68V44Z"
        fill={colors.primary}
      />
      <Path
        d="M48 56H72"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </Svg>
  );
}
