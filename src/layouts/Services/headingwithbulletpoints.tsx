import { Flex, Box, Heading, Text, Stack, VStack } from "@chakra-ui/react";

// export const CreateBulletPoints = ({bulletpointss}) => {
// return (
// for(var i=0; i < bulletpointss.length; i++){

// }
// )
// };

export const HeadingAndBulletPoints = ({
  headingText,
  bulletPointOne,
  bulletPointTwo,
  bulletPointThree,
  bulletPointFour,
}) => {
  const Heading = headingText;

  return (
    <>
      <Box
        display={{ lg: "inline" }}
        w={{ base: "100%", md: "50%" }}
        height={{ base: "50%", md: "100%" }}
        // bg="blue"
        pl={4}
        pr={4}
      >
        <Box mt={{ base: 4, md: 0 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="2xl"
            letterSpacing="wide"
          >
            {Heading}
          </Text>
          <Text mt={2}>{bulletPointOne}</Text>
          <Text mt={2}>{bulletPointTwo}</Text>
          <Text mt={2}>{bulletPointThree}</Text>
          <Text mt={2}>{bulletPointFour}</Text>
        </Box>
      </Box>
    </>
  );
};
