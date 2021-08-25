import {
  Flex,
  Button,
  Heading,
  Spacer,
  BoxProps,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export const section3 = (
  <Flex
    minHeight="100vh"
    h="100%"
    w="100%"
    flexDir="column"
    align="center"
    justify="flex-start"
    color="white"
  >
    <Heading as="h1" mt="32" variant="banner-with-border-md">
      Our Clients
    </Heading>

    <Flex flexDirection={["column", "column", "row", "row"]}>
      <Button
        px="4"
        borderRadius="0px"
        variant="solid"
        bg="black"
        color="white"
      >
        LEARN MORE
      </Button>
      <Spacer px="4" />
      <Button
        px="4"
        borderRadius="0px"
        variant="solid"
        bg="white"
        color="black"
      >
        CONNECT WITH US
      </Button>
    </Flex>
  </Flex>
);
