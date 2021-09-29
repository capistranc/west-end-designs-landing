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
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FlexPricingCard,
  PricingCard,
} from "../../components/Cards/PricingCard";

function loadPrices() {
  const priceCards = [
    {
      title: "WEB STANDARD",
      subText: "",
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
      price: `??`,
      listData: [
        "Complete Custom Website",
        "Full Stack Application",
        "Software Business Solutions",
        "API Integrations",
      ],
    },
    // {
    //   title: "ONE-TIME CONTRACT",
    //   unit: "page",
    //   price: `200`,
    //   listData: [
    //     "No Monthly Fee",
    //     "$150/hr for updates",
    //     "You pay for hosting",
    //     "You own the code",
    //   ],
    // },
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

export const section4 = () => {
  return (
    <Box w="100%" m="0 auto" align="center">
      <Flex justify="center">
        <Heading as="h1" my="1.25em" variant="banner-with-border-md">
          Prices
        </Heading>
      </Flex>

      {loadPrices()}
    </Box>
  );
};
