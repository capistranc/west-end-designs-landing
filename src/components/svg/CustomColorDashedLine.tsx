import { useColorModeValue, Box } from "@chakra-ui/react";
import { colors, theme } from "../../theme";
export const CustomColorDashedLine = ({
  horizontal = false,
  strokeColors = null,
  ...props
}) => {
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
          stroke={(strokeColors = "#D6C3BC")}
          d={horizontal ? `M0 50 h 100` : `M50 0 v 100`}
        />
      </svg>
    </Box>
  );
};
