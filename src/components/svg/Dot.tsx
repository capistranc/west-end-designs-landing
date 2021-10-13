import { theme } from "../../theme";
import { useColorModeValue, Box } from "@chakra-ui/react";

export const Dot = ({ ...props }) => {
  const defaultFill = useColorModeValue(theme.toHex("teal.600"), "white");

  return (
    <Box {...props}>
      <svg viewBox="0 0 100 100" height="20px" width="20px" {...props}>
        <circle cx="50" fill={props.fill || defaultFill} cy="50" r="50" />{" "}
      </svg>
    </Box>
  );
};
