import { Box, useColorMode, Icon } from "@chakra-ui/react";
import { theme } from "../../theme";

export const BorderedIconOffset = ({ icon, ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      boxSize="9rem"
      borderRadius="full"
      border="4px solid"
      align="center"
      borderColor={theme.border2[colorMode]}
      {...props}
    >
      <Icon
        as={icon}
        boxSize="8rem"
        // bg="blue"
        border="4px solid"
        p="4"
        borderRadius="full"
        bg={props.bg || theme.border2[colorMode]}
        color={props.color || theme.fg2[colorMode]}
        borderColor={props.bg || theme.border2[colorMode]}
      />
    </Box>
  );
};
