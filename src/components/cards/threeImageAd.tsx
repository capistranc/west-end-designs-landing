import React from "react";
import NextLink from "next/link";
import { useColorMode, Heading, Text, Flex, Box, Link } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";

export interface Card {
  uri: String;
  text: String;
  href?: String;
  title?: String;
  subtext?: String;
}

const card = (card: Card) => {
  return <Flex></Flex>;
};

const ThreeImageCard = (cards: Card[], { ...props }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return <></>;
};

export default ThreeImageCard;
