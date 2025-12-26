import Svg, { Rect, Path } from "react-native-svg";

export default function HauswartLogoSvg({ size = 36, color = "#FFFFFF" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Shield background */}
      <Rect width="48" height="48" rx="12" fill={color} />

      {/* Shield icon (simplified – replace path with final one if needed) */}
      <Path
        d="M24 12L14 16V22C14 28.5 18.5 33.8 24 36C29.5 33.8 34 28.5 34 22V16L24 12Z"
        fill="#F38B14"
      />
    </Svg>
  );
}
