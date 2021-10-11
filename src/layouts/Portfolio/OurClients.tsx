import {
  Flex,
  Button,
  Heading,
  Spacer,
  FlexProps,
  Box,
  Image,
  Text,
  Stack,
  Slide,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { SlideIn } from "../../components/Motion/SlideIn";
import { ClientCard } from "../../components/Cards/ClientCard";

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

export const section3 = () => {
  function renderCompanyCards() {
    return (
      <Flex
        height="100%"
        maxWidth="100vw"
        flexDirection={["column", "column", "row", "row"]}
        justify="spaced-evenly"
        align="spaced-evenly"
        p="4"
        m="4"
      >
        {companies.map((companyData, i) => {
          return (
            <SlideIn key={i} delay={i}>
              <ClientCard {...companyData}> </ClientCard>
            </SlideIn>
          );
        })}
      </Flex>
    );
  }
  return (
    <Flex h="100%" w="100%" flexDir="column" color="white">
      <Flex
        direction="row"
        justify="flex-start"
        align="flex-start"
        className="stickyHeader"
      >
        <Heading variant="h2" fontWeight="light" color="white">
          Who we work with
        </Heading>
      </Flex>
      <Flex direction="column" justify="center" align="center" width="100%">
        <Heading as="h1" my="1.25em" variant="banner-with-border-md">
          Our Clients
        </Heading>

        {renderCompanyCards()}
      </Flex>
    </Flex>
  );
};
