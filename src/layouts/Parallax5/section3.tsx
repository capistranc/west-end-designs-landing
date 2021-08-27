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
import React, { useState, useEffect } from "react";

const ContactCard = ({
  name,
  location,
  imageSource,
  description,
  ...props
}) => {
  return (
    <Flex direction="column" align="flex-start" {...props}>
      <Heading>{name}</Heading>
      <Text textStyle="subText"> {location}</Text>
      <Image
        my="4"
        alignSelf="center"
        src={imageSource}
        minHeight="10em"
        minWidth="12em"
      />
      <Text marginBottom="4em" maxWidth="22rem">
        {description}
      </Text>
      <Button alignSelf="center" width="80%">
        Visit
      </Button>
    </Flex>
  );
};

function loadContactCards() {
  const companies = [
    {
      name: "G&J Flower Distributors",
      location: "Los Angeles, CA",
      imageSource: `url('/images/catalinaLight.jpg')`,
      description: `G&J Flower Distributors is the largest privately held construction
    supply company in Seattle, WA for over 35 years`,
    },
    {
      name: "G&J Flower Distributors",
      location: "Los Angeles, CA",
      imageSource: `url('/images/catalinaLight.jpg')`,
      description: `G&J Flower Distributors is the largest privately held construction
    supply company in Seattle, WA for over 35 years`,
    },
    {
      name: "G&J Flower Distributors",
      location: "Los Angeles, CA",
      imageSource: `url('/images/catalinaLight.jpg')`,
      description: `G&J Flower Distributors is the largest privately held construction
    supply company in Seattle, WA for over 35 years`,
    },
  ];

  return (
    <Flex
      width="100%"
      height="100%"
      flexDirection={["column", "column", "row", "row"]}
      justify="center"
      align="center"
    >
      <ContactCard p="8" {...companies[0]} />
      <ContactCard p="8" {...companies[1]} />
      <ContactCard p="8" {...companies[2]} />
    </Flex>
  );
}

export const section3 = () => {
  return (
    <Flex
      minHeight="100vh"
      minWidth="100vw"
      h="100%"
      w="100%"
      flexDir="column"
      color="white"
    >
      <Flex direction="column" justify="center" align="center" width="100%">
        <Heading as="h1" my="1.25em" variant="banner-with-border-md">
          Our Clients
        </Heading>

        {loadContactCards()}
      </Flex>
    </Flex>
  );
};
