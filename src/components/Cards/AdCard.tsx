import { Box, Image, Text, Heading } from "@chakra-ui/react";
import NextImage from "next/image";

export const AdCard = ({ caption, imageSource, subText, ...props }) => {
  return (
    <Box
      align="center"
      border="2px solid rgba(255,255,255,0.2)"
      bg="rgba(0, 0, 0, 0.6)"
      borderRadius="16"
      {...props}
    >
      <Image
        my="4"
        alignSelf="center"
        src="/images/profile.jpg"
        minHeight="10em"
        minWidth="12em"
      />
      <Heading mb="4">{caption}</Heading>
      <Text textStyle="subText" maxWidth="30em">
        {subText}
      </Text>
    </Box>
  );
};
