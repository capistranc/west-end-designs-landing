import {
  Flex,
  Box,
  Heading,
  useColorModeValue,
  useColorMode,
  Text,
  Stack,
  VStack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { theme } from "../../theme/";

export const HeadingAndBulletPoints = ({
  headingText,
  bulletPointOne,
  bulletPointTwo,
  bulletPointThree,
  bulletPointFour,
}) => {
  const Heading = headingText;
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        display={{ lg: "inline" }}
        maxWidth={{ base: "100%", md: "50%" }}
        height={{ base: "50%", md: "100%" }}
        // bg="blue"
        pl={4}
        pr={4}
      >
        <Box pt={{ base: 4, md: 0 }}>
          <Text
            fontWeight="bold"
            fontSize="4xl"
            letterSpacing="wide"
            pr={4}
            pl={4}
          >
            {Heading}
          </Text>
          <List spacing={3} pt={10} m={0} pl={20}>
            <ListItem fontSize="l">
              <ListIcon as={MdCheckCircle} />
              {bulletPointOne}
            </ListItem>
            <ListItem fontSize="l">
              <ListIcon as={MdCheckCircle} />
              {bulletPointTwo}
            </ListItem>
            <ListItem fontSize="l">
              <ListIcon as={MdCheckCircle} />
              {bulletPointThree}
            </ListItem>
            <ListItem fontSize="l">
              <ListIcon as={MdCheckCircle} />
              {bulletPointFour}
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};
