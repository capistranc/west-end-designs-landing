import { useColorModeValue } from "@chakra-ui/react";
import { colors, theme } from "../../theme";

export const DashedLine = ({
  horizontal = false,
  strokeColors = null,
  ...props
}) => {
  return (
    <svg viewBox="0 0 100 100" height="5rem" {...props}>
      <path
        width="100%"
        height="100%"
        strokeDasharray="12,5"
        strokeWidth="6"
        stroke={
          strokeColors ||
          useColorModeValue(colors["teal"][400], "rgba(255,255,255,0.8")
        }
        d={horizontal ? `M0 50 h 100` : `M50 0 v 100`}
      />
    </svg>
  );
};
