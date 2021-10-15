import { Box, useColorMode, Icon, Flex } from "@chakra-ui/react";
import { theme } from "../../theme";

export const BorderedIconOffset = ({
  icon,
  innerBoxSize = "8rem",
  iconSize = "6em",
  ...props
}) => {
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
      <Flex
        border="4px solid"
        borderRadius="full"
        bg={props.bg || theme.border2[colorMode]}
        color={props.color || theme.fg2[colorMode]}
        borderColor={props.bg || theme.border2[colorMode]}
        boxSize={innerBoxSize}
        align="center"
        justifyContent="center"
      >
        <Icon as={icon} boxSize={iconSize} />
      </Flex>
    </Box>
  );
};
