import {
  Flex,
  Button,
  Heading,
  Spacer,
  FlexProps,
  Box,
  Image,
  Text,
  Avatar,
  Stack,
  Slide,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { SlideIn } from "../../components/Motion/SlideIn";
import { ClientCard } from "../../components/Cards/ClientCard";
import { getBoxShadow } from "@chakra-ui/popper/dist/types/utils";
import { SearchIcon } from "@chakra-ui/icons";

const companies = [
  {
    name: "G&J Flower Distributors",
    location: "Los Angeles, CA",
    imageSource: `/images/profile.jpg`,
    description: `G&J Flower Distributors is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
  {
    name: "New Veganings",
    location: "Los Angeles, CA",
    imageSource: `/images/profile.jpg`,
    description: `New Vegnaings is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
  {
    name: "Jupiter Yoga",
    location: "Aliso Viejo, CA",
    imageSource: `/images/profile.jpg`,
    description: `Jupiter Yoga is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
];

import { TitledAvatar } from "../../components/Cards/TitledAvatar";

export const section3 = () => {
  return (
    <Box
      h="100%"
      w="100vw"
      position="relative"
      color="white"
      // bg="linear-gradient(45deg, #6303B1, #ff0099)"
      // transform="skewY(-11deg)"
      _before={
        {
          // position: "absolute",
          // top: 0,
          // right: 0,
          // left: 0,
          // bottom: 0,
          // zIndex: 0,
          // bg: "linear-gradient(10deg, rgba(0.4,0.4,0.4,0.7), rgba(0,0,0,0.2))",
          // transform: "skewY(8deg)",
          // content: `" "`,
        }
      }
    >
      <Heading>"</Heading>
      <Heading>"</Heading>
      <Stack
        w="100%"
        justify="center"
        spacing="4"
        direction={["column", "column", "row", "row"]}
      >
        <TitledAvatar
          name="Chris Capistran"
          title="Lead Developer/Co-founder"
          src=""
        />

        <TitledAvatar
          name="Michael Esfahani"
          title="Lead Developer/Co-founder"
          src=""
        />
      </Stack>
    </Box>
  );
};
