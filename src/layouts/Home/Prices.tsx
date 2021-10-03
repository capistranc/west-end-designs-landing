import {
  Flex,
  Button,
  Heading,
  Spacer,
  BoxProps,
  Box,
  Image,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "../../components/Cards/PricingCard";
import { DashedLine } from "../../components/svg/DashedLine";
function loadPrices() {
  const priceCards = [
    {
      title: "WEB STANDARD",

      price: `150`,
      listData: [
        "5 Page Website",
        "Unlimited Edits",
        "Hosting Included",
        "Lifetime Updates",
      ],
    },
    {
      title: "STANDARD + BLOGGING",
      price: `300`,
      listData: [
        "1000+ word post",
        "1 Blog Post a Month",
        "Written by SEO specialist",
        "$150 per extra post",
      ],
    },

    {
      title: "FULL STACK CONSULT",
      unit: "project",
      price: `ask`,
      listData: [
        "Complete Custom Website",
        "Full Stack Application",
        "Software Business Solutions",
        "API Integrations",
      ],
    },
    {
      title: "ONE-TIME CONTRACT",
      unit: "page",
      price: `200`,
      listData: [
        "No Monthly Fee",
        "$150/hr for updates",
        "You pay for hosting",
        "You own the code",
      ],
    },
  ];

  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      justify="center"
      // align="stretch"
    >
      <PricingCard p="8" m="4" {...priceCards[0]} />
      <PricingCard p="8" m="4" {...priceCards[1]} />
      <PricingCard p="8" m="4" {...priceCards[2]} />
    </Flex>
  );
}

export const Prices = () => {
  return (
    <Box
      w="100%"
      m="0 auto"
      align="center"
      bg={useColorModeValue("blue.50", "teal.900")}
      color={useColorModeValue("gray.700", "gray.100")}
    >
      <DashedLine />
      <DashedLine />
      <Flex justify="center">
        <Heading
          as="h1"
          mb="1.25em"
          variant="banner-with-border-md"
          borderWidth="4px"
          borderColor={useColorModeValue("teal.500", "white")}
        >
          Pricing
        </Heading>
      </Flex>

      {loadPrices()}
      <DashedLine />
    </Box>
  );
};
