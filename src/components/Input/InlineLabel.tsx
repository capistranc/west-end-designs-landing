import { Box, Input, InputGroup } from "@chakra-ui/react";

export const InlineLabel = ({ label, placeHolder, ...props }) => {
  return (
    <InputGroup {...props}>
      <Box
        display="inline"
        ml="0.5em"
        px="4px"
        position="absolute"
        bg="#1E1E1E"
        zIndex="2"
        fontWeight="bold"
        {...props}
      >
        {label}
      </Box>

      <Input
        borderColor="gray.500"
        variant="outline"
        mt=".75em"
        p="1.25em"
        placeHolder={placeHolder}
        {...props}
      />
    </InputGroup>
  );
};
