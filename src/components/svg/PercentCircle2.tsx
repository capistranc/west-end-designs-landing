import { useColorModeValue } from "@chakra-ui/color-mode";
import { theme } from "../../theme";

const PercentCircle2 = (percent: number) => {
  return (
    <svg viewBox="0 0 36 36" height="12rem" width="12rem">
      <path
        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke={useColorModeValue(
          theme.toHex("blue.500"),
          theme.toHex("teal.900"),
        )}
        strokeWidth="3px"
        strokeDasharray={`${percent},2000`}
      />
    </svg>
  );
};
