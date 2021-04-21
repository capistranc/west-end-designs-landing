import React from "react";
import { Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo(props) {
  return (
    <Box {...props}>
      <NextLink href="/">
        <Text fontSize="lg" fontWeight="bold">
          West End Designs
        </Text>
      </NextLink>
    </Box>
  );
}
