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
import { useOnScreen } from "../../lib/hooks";
import { motion } from "framer-motion";
import { ClientCard } from "../../components/Cards/ClientCard";

const MotionFlex = motion<FlexProps>(Flex);

const companies = [
  {
    name: "G&J Flower Distributors",
    location: "Los Angeles, CA",
    imageSource: `url('/images/catalinaLight.jpg')`,
    description: `G&J Flower Distributors is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
  {
    name: "New Veganings",
    location: "Los Angeles, CA",
    imageSource: `url('/images/catalinaLight.jpg')`,
    description: `New Vegnaings is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
  {
    name: "Jupiter Yoga",
    location: "Aliso Viejo, CA",
    imageSource: `url('/images/catalinaLight.jpg')`,
    description: `Jupiter Yoga is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
];

const TransitionCard = ({ slideFrom, children }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  let direction = slideFrom;

  if (typeof slideFrom === "object") {
    direction = useBreakpointValue(slideFrom);
  }

  return (
    // <Flex ref={ref} alignSelf="stretch" justifySelf="stretch" maxWidth="100vw">
    <Slide
      ref={ref}
      direction={direction}
      style={{
        flex: "1",
        maxWidth: "100vw",
        width: "100%",
        position: "relative",
        display: "flex",
        alignSelf: "stretch",
        justifySelf: "stretch",
      }}
      in={isVisible}
    >
      {children}
    </Slide>
    // </Flex>
  );
};

const ContactCards = () => {
  const slideFrom2 = {
    base: "right",
    md: "bottom",
  };

  const transitionVariant = useBreakpointValue(slideFrom2);

  return (
    <Flex
      // width="100%"
      // height="100%"
      maxWidth="100vw"
      flexDirection={["column", "column", "row", "row"]}
      justify="center"
      align="center"
      p="4"
      m="4"
    >
      <Flex justifySelf="stretch" alignSelf="stretch">
        <MotionFlex
          initial={{ x: "-100vw" }}
          transition={{ duration: 0.5, stiffness: 500 }}
          animate={{ x: "0" }}
        >
          <ClientCard {...companies[0]} />
        </MotionFlex>
      </Flex>

      <Flex justifySelf="stretch" alignSelf="stretch">
        <MotionFlex
          justifySelf="stretch"
          alignSelf="stretch"
          initial={{ y: "-100vh" }}
          transition={{ duration: 0.5, stiffness: 500 }}
          animate={{ y: "0" }}
        >
          <ClientCard {...companies[1]} />
        </MotionFlex>
      </Flex>

      <Flex justifySelf="stretch" alignSelf="stretch">
        <MotionFlex
          initial={{ x: "100vw" }}
          transition={{ duration: 0.5, stiffness: 500 }}
          animate={{ x: "0" }}
        >
          <ClientCard {...companies[2]} />
        </MotionFlex>
      </Flex>
    </Flex>
  );
};

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
      <Flex
        p="4"
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

        {ContactCards()}
      </Flex>
    </Flex>
  );
};
