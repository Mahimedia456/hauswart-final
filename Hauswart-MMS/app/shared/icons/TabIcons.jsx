import Svg, { Path } from "react-native-svg";

const Icon = ({ children, color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {children(color)}
  </Svg>
);

export const HomeIcon = ({ color }) => (
  <Icon color={color}>
    {(c) => (
      <Path
        d="M3 10.5L12 3l9 7.5V21h-6v-6H9v6H3z"
        stroke={c}
        strokeWidth={2}
      />
    )}
  </Icon>
);

export const TicketIcon = ({ color }) => (
  <Icon color={color}>
    {(c) => (
      <Path
        d="M4 4h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4z"
        stroke={c}
        strokeWidth={2}
      />
    )}
  </Icon>
);

export const ChatIcon = ({ color }) => (
  <Icon color={color}>
    {(c) => (
      <Path
        d="M21 12a8 8 0 1 1-3.3-6.5L21 4v8z"
        stroke={c}
        strokeWidth={2}
      />
    )}
  </Icon>
);

export const BellIcon = ({ color }) => (
  <Icon color={color}>
    {(c) => (
      <>
        <Path
          d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7z"
          stroke={c}
          strokeWidth={2}
        />
        <Path
          d="M13.7 21a2 2 0 0 1-3.4 0"
          stroke={c}
          strokeWidth={2}
        />
      </>
    )}
  </Icon>
);

export const UserIcon = ({ color }) => (
  <Icon color={color}>
    {(c) => (
      <>
        <Path
          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
          stroke={c}
          strokeWidth={2}
        />
        <Path
          d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
          stroke={c}
          strokeWidth={2}
        />
      </>
    )}
  </Icon>
);
