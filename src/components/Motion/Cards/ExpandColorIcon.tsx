import { MotionBox } from "..";
import { Icon, Box, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { toHex } from "../../../theme/colors";
import React, { useState } from "react";
import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const ExpandColorIcon = ({ title, text, icon, link, ...props }) => {
  const [isFocused, setFocus] = useState(false);
  const containerVariant = {
    rest: {
      color: useColorModeValue(toHex("gray.700"), toHex("gray.300")),
    },
    hover: {
      color: "rgba(255,255,255,1)",
      backgroundColor: toHex("teal.800"),
    },
  };

  const iconVariant = {
    rest: { x: 0, y: 0, opacity: 0, scale: 1 },
    hover: {
      right: 0,
      bottom: 0,
      opacity: 0.2,
      scale: 2,
      duration: 0.5,
    },
  };

  const textVariant = {
    rest: { x: 0, y: 0 },
    hover: {
      fontWeight: "600",
      y: -20,
    },
  };
  const arrowVariant = {
    rest: { opacity: 0, x: 0, scale: 1 },
    hover: {
      x: 40,
      opacity: 1,
      scale: 1.1,
      transition: {
        type: "spring",
        duration: 1,
        mass: 10,
        damping: 0,
      },
    },
  };
  return (
    <>
      <MotionBox
        as="button"
        overflow="hidden"
        variants={containerVariant}
        initial="rest"
        animate={isFocused ? "hover" : "rest"}
        onFocus={() => setFocus(true)}
        onHoverStart={() => setFocus(true)}
        onHoverEnd={() => setFocus(false)}
        onBlur={() => setFocus(false)}
        p="4"
        {...props}
      >
        <Box p="4" position="relative" align="left" minWidth="20rem">
          <MotionBox
            position="absolute"
            variants={iconVariant}
            mb="1.5rem"
            mr="1.5rem"
          >
            <Icon as={icon} boxSize="6rem" />
          </MotionBox>
          <Icon as={icon} boxSize="6rem" />

          <MotionBox variants={textVariant} py="1rem">
            <Text fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            <Text>{text}</Text>

            <Box h="1.5rem" w="100%">
              {isFocused && (
                <NextLink href={link}>
                  <MotionBox variants={arrowVariant}>
                    <Icon as={FaArrowRight} boxSize="1.5rem" />
                  </MotionBox>
                </NextLink>
              )}
            </Box>
          </MotionBox>
        </Box>
      </MotionBox>
    </>
  );
};
