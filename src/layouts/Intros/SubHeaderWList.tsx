import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";
import { BannerSectionAbout } from "../layouts/About/bannersectionabout";

import React, { useRef, useEffect, useState } from "react";

import {
  Flex,
  Box,
  Text,
  Stack,
  Center,
  List,
  ListIcon,
  ListItem,
  Link,
  SimpleGrid,
  Image,
  Icon,
  Heading,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { serviceData } from "../../pages";
import { CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";
import { theme } from "../../theme";

export const SubHeaderWList = ({ ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <Box maxWidth="50em">
      <Heading variant="h2" as="div" display="inline">
        <Text d="inline" color={theme.heading2[colorMode]}>
          Why{" "}
        </Text>
        we do what we do
      </Heading>
      <Text fontWeight="bold" color={theme.heading2[colorMode]}>
        - Our mission -
      </Text>
      <Text position="relative" margin="auto" mt="1em" as="div">
        After years of working for large companies in the tech industry, we
        decided that we could use all that we have learned to help local
        businesses around the world compete in the world of technology. With the
        goal of working as we travel and traveling as we work, we aim to bring
        the style of the{" "}
        <Link color={theme.heading[colorMode]} fontWeight="600">
          West End
        </Link>{" "}
        every where we go.
      </Text>

      <Box maxWidth="32em" my="1em" align="cener">
        <Text>Our skillsets include but are not limited to:</Text>
        <Flex justify="center">
          <List align="left" spacing="2" mt="1em">
            <SimpleGrid columns={[1, 2, 2, 2]} spacing="2" alignItems="center">
              {serviceData.map(({ title }, i) => {
                return (
                  <ListItem key={i}>
                    <ListIcon as={CheckIcon} color={theme.icon[colorMode]} />
                    {title}
                  </ListItem>
                );
              })}
            </SimpleGrid>
          </List>
        </Flex>
      </Box>
    </Box>
  );
};
