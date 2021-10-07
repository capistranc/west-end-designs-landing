import {
  Flex,
  Box,
  Center,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";

export const SvgComp = ({ img, altText }) => {
  return (
    <>
      <Flex
        w={{ base: "100%", md: "50%" }}
        display={{ lg: "inline" }}
        height={{ base: "50%", md: "100%" }}
        align="center"
        position="relative"
      >
        <Image
          width={{ base: "20rem", sm: "25rem", md: "30rem" }}
          src={img}
          alt={altText}
          position="relative"
          top="50%"
          transform="translateY(-50%)"
          margin="auto"
        />
      </Flex>
    </>
  );
};
