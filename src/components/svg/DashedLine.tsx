import { useColorModeValue, Box } from "@chakra-ui/react";
import { colors, theme } from "../../theme";
export const DashedLine = ({
  horizontal = false,
  strokeColor = null,
  ...props
}) => {
  const defaultStroke = useColorModeValue(
    colors["teal"][400],
    "rgba(255,255,255,0.8",
  );
  return (
    <Box position="relative" zIndex="10" {...props}>
      <svg
        viewBox="0 0 100 100"
        height="5rem"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          strokeDasharray="12,5"
          strokeWidth="6"
          stroke={strokeColor || defaultStroke}
          d={horizontal ? `M0 50 h 100` : `M50 0 v 100`}
        />
      </svg>
    </Box>
  );
};
