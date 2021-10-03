import { MotionBox } from "..";
import { Icon, Box, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { toHex } from "../../../theme/colors";
import React, { useState } from "react";
import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const ExpandColorIcon = ({ title, text, icon, link, ...props }) => {
  const [isFocused, setFocus] = useState(false);
  console.log("expandColor", props.color);
  const containerVariant = {
    rest: {
      color: props.color,
    },
    hover: {
      color: "rgba(255,255,255,1)",
      backgroundColor: useColorModeValue(toHex("blue.500"), toHex("teal.800")),
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
    rest: { x: 0, y: 0, color: props.color },
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
        // as="button"
        // overflow="hidden"
        variants={containerVariant}
        initial="rest"
        // animate={isFocused ? "hover" : "rest"}
        whileHover="hover"
        _hover={{ animate: "hover" }}
        onFocus={() => setFocus(true)}
        onHoverStart={() => setFocus(true)}
        onHoverEnd={() => setFocus(false)}
        onBlur={() => setFocus(false)}
        p="4"
        width="100%"
        {...props}
      >
        <Box p="4" position="relative" align="left">
          <MotionBox
            position="absolute"
            variants={iconVariant}
            mb="1.5rem"
            mr="1.5rem"
          >
            <Icon as={icon} boxSize="6rem" />
          </MotionBox>
          <Icon as={icon} boxSize="6rem" color={props.color} />

          <MotionBox variants={textVariant} py="1rem" color={props.color}>
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
