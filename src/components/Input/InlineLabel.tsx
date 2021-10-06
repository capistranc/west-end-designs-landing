import { FormLabel } from "@chakra-ui/form-control";

import { useColorMode } from "@chakra-ui/react";

import { theme } from "../../theme/colors";

export const InLineLabel = ({ children, ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <FormLabel
      display="inline"
      ml="0.5em"
      px="0.25em"
      mb="1em"
      left="0"
      position="absolute"
      zIndex="10"
      borderRadius="full"
      fontWeight="bold"
      top="-0.75em"
      bgColor={theme.bg4[colorMode]}
      {...props}
    >
      {children}
    </FormLabel>
  );
};
