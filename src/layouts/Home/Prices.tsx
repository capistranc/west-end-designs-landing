import {
  Flex,
  Button,
  Heading,
  Spacer,
  BoxProps,
  Box,
  Image,
  Text,
  Circle,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "../../components/Cards/PricingCard";
import { DashedLine } from "../../components/svg/DashedLine";
import { Shake } from "../../components/Motion/Shake";
import { SlideIn } from "../../components/Motion/SlideIn";
import { theme } from "../../theme";
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
    <Flex flexDirection={["column", "column", "row", "row"]} justify="center">
      <PricingCard p={{ md: "8" }} m={{ md: "4" }} {...priceCards[0]} />
      <PricingCard p={{ md: "8" }} m={{ md: "4" }} {...priceCards[1]} />
      <PricingCard p={{ md: "8" }} m={{ md: "4" }} {...priceCards[2]} />
    </Flex>
  );
}

import { DiagonalDecorator } from "../../components/Decorators/Diagonal";
export const Prices = () => {
  return (
    <Box
      w="100%"
      m="0 auto"
      align="center"
      bg={useColorModeValue("blue.50", "teal.900")}
      color={useColorModeValue("gray.700", "gray.100")}
      position="relative"
    >
      <DiagonalDecorator
        backgroundColor={useColorModeValue("blue.400", "teal.800")}
      />

      <DashedLine />
      <svg viewBox="0 0 100 100" height="20px" width="20px">
        <circle
          cx="50"
          fill={useColorModeValue(theme.toHex("teal.600"), "white")}
          cy="50"
          r="50"
        />{" "}
      </svg>

      <DashedLine />

      <Shake>
        <Flex justify="center">
          <Heading
            as="h1"
            mb="1.25em"
            variant="banner-with-border-md"
            borderWidth="4px"
            color={useColorModeValue("teal.600", "white")}
            borderColor={useColorModeValue("teal.600", "white")}
          >
            PRICING
          </Heading>
        </Flex>
      </Shake>

      {loadPrices()}
      <DashedLine />
      <DashedLine />
      <DashedLine />
    </Box>
  );
};
