import { useColorModeValue } from "@chakra-ui/color-mode";
import { theme } from "../../theme";

export const PercentCircle1 = ({ percent, ...props }) => {
  const increment = 2.89026;

  return (
    <svg viewBox="0 0 100 100" height="12rem" width="12rem">
      <path
        fill="none"
        d="M50,4
              a46,46 0 1,1 0,92
              a46,46 0 1,1 -0,-92"
        stroke={useColorModeValue(
          theme.toHex("blue.500"),
          theme.toHex("teal.900"),
        )}
        strokeWidth="9px"
        strokeDasharray={`${percent * increment},2000`}
      />
    </svg>
  );
};
