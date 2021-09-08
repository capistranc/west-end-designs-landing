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
import { motion, AnimatePresence } from "framer-motion";
import { ClientCard } from "../../components/Cards/ClientCard";

const MotionFlex = motion<FlexProps>(Box);
import { slideFrom } from "../../lib/motion/slideVariants";

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

const AnimateCard = ({ slideFrom, children, ...props }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <Flex
      ref={ref}
      // justifySelf="stretch"
      // alignSelf="stretch"
      minHeight="32rem"
      m="1"
      {...props}
    >
      {/* <AnimatePresence> */}
      {isVisible && (
        <MotionFlex
          display="block"
          transition={{ duration: 0.5, stiffness: 500 }}
          {...slideFrom}
          // exit={{ x: "-100vw", transition: { delay: 1 } }}
        >
          {children}
        </MotionFlex>
      )}
      {/* </AnimatePresence> */}
    </Flex>
  );
};

const ContactCards = () => {
  const slideFrom1 = slideFrom("left");
  const slideFrom2 = slideFrom("bottom");
  const slideFrom3 = slideFrom("left");

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
      <AnimateCard slideFrom={slideFrom1}>
        <ClientCard {...companies[0]} />
      </AnimateCard>

      <AnimateCard slideFrom={slideFrom2}>
        <ClientCard {...companies[1]} />
      </AnimateCard>

      <AnimateCard slideFrom={slideFrom3}>
        <ClientCard {...companies[2]} />
      </AnimateCard>
    </Flex>
  );
};

export const section3 = () => {
  return (
    <Flex
      // minHeight={["150vh", "150vh", "100vh", "100vh"]}
      minHeight="100vh"
      minWidth="100vw"
      h="100%"
      w="100%"
      flexDir="column"
      color="white"
    >
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

        {ContactCards()}
      </Flex>
    </Flex>
  );
};
